import store from 'redux/store'
import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client'
import { API } from 'config/api'
import { REFRESH_TOKEN_ORG, REFRESH_TOKEN_APP } from 'redux/types/auth'
import JwtDecode from 'jwt-decode'
import withApollo from 'next-with-apollo'

export default withApollo(({ initialState, ctx }: any) => {
  const getClientURI = (type: string) => {
    switch (type) {
      default:
        return API.WMS.GRAPHQL.ADMIN['1.0']
      case 'CORE':
        return API.CORE.GRAPHQL.ADMIN['1.0']
    }
  }
  const link = createHttpLink({
    uri: (option): any => {
      const { clientType } = option.getContext()
      const uri = getClientURI(clientType)
      return uri
    },
    fetch: async (uri, options: any) => {
      const { accessToken, refreshToken } = store.getState().auth.appToken
      const { accessTokenOrg, refreshTokenOrg } = store.getState().auth.orgToken
      //RefreshToken
      if (accessToken) {
        const decoded: any = JwtDecode(accessToken)
        if (Date.now() >= decoded.exp * 1000) {
          console.log('Expire token from Crm Admin App')
          const client = new ApolloClient({
            link: createHttpLink({
              uri: API.CORE.GRAPHQL.ADMIN['1.0'],
            }),
            cache: new InMemoryCache({
              addTypename: false,
            }),
          })
          const res = await client.mutate({
            mutation: gql`
                        mutation {
                            refreshAccessToken(refreshToken: "${refreshToken}") {
                                message
                                code
                                payload {
                                        accessToken
                                        refreshToken
                                }
                            }
                        }
                    `,
          })
          const newToken = res.data.refreshAccessToken.payload
          store.dispatch({
            type: REFRESH_TOKEN_APP,
            payload: {
              accessToken: newToken.accessToken,
              refreshToken: newToken.refreshToken,
            },
          })
          options.headers.authorization = newToken.accessToken
        } else {
          options.headers.authorization = accessToken
        }
      }
      if (accessTokenOrg) {
        const decoded: any = JwtDecode(accessTokenOrg)
        if (Date.now() >= decoded.exp * 1000) {
          console.log('Expire token from Crm admin')
          const client = new ApolloClient({
            link: createHttpLink({
              uri: API.CORE.GRAPHQL.ADMIN['1.0'],
            }),
            cache: new InMemoryCache({
              addTypename: false,
            }),
          })
          const res = await client.mutate({
            mutation: gql`
                        mutation {
                            refreshOrgAccessToken(refreshOrgToken: "${refreshTokenOrg}") {
                                message
                                code
                                payload {
                                    token {
                                        orgAccessToken
                                        orgRefreshToken
                                    }
                                }
                            }
                        }
                    `,
          })
          const newToken = res.data.refreshOrgAccessToken.payload.token
          store.dispatch({
            type: REFRESH_TOKEN_ORG,
            payload: {
              accessTokenOrg: newToken.orgAccessToken,
              refreshTokenOrg: newToken.orgRefreshToken,
            },
          })
          options.headers.authorization = newToken.orgAccessToken
        } else {
          options.headers.authorization = accessTokenOrg
        }
      }
      // options.headers.authorization = process.env.TOKEN_DEV || accessToken;
      // options.headers.credentialkey = `${process.env.NEXT_PUBLIC_CREDENTIAL_KEY}`;
      return fetch(uri, options)
    },
  })

  return new ApolloClient({
    ssrMode: Boolean(ctx),
    link: link,
    cache: new InMemoryCache({ addTypename: false }).restore(initialState),
  })
})
