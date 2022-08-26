import { CLEAR_TOKEN, STORE_TOKEN_APP, STORE_TOKEN_ORG } from '../types/auth'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { GET_APP_BY_CREDENTIAL, GET_APP_TOKEN_REF, GET_ORG_TOKEN_REF } from 'graphql/queries'
import { API } from 'config/api'

export const setTokenAppRef = (payload: any) => async (dispatch: any) => {
  try {
    const { appToken: code, credentialKey } = payload
    const client = new ApolloClient({
      cache: new InMemoryCache({
        addTypename: false,
      }),
      uri: API.CORE.GRAPHQL.ADMIN['1.0'],
    })
    const res = await client.query({
      query: GET_APP_TOKEN_REF,
      variables: {
        code,
      },
      context: {
        headers: {
          credentialKey,
        },
      },
    })
    const resSetting = await client.query({
      query: GET_APP_BY_CREDENTIAL,
      variables: {
        credentialKey,
      },
    })
    dispatch({
      type: STORE_TOKEN_APP,
      payload: {
        credentialKey: credentialKey,
        accessToken: res.data.getTokenAuthCode.payload.token.accessToken,
        refreshToken: res.data.getTokenAuthCode.payload.token.refreshToken,
        appConfig: resSetting.data.getAppByCredential.payload.app.configurationList,
        appKey: resSetting.data.getAppByCredential.payload.app.appKey,
        loading: false,
      },
    })
  } catch (error) {
    dispatch({
      type: STORE_TOKEN_APP,
      payload: {
        error: true,
        loading: false,
      },
    })
  }
}

export const setTokenOrgRef = (payload: any) => async (dispatch: any) => {
  try {
    const { orgToken: tokenRef, credentialKey } = payload
    const client = new ApolloClient({
      cache: new InMemoryCache({
        addTypename: false,
      }),
      uri: API.CORE.GRAPHQL.ADMIN['1.0'],
    })
    const res = await client.query({
      query: GET_ORG_TOKEN_REF,
      variables: {
        tokenRef,
      },
    })
    const resSetting = await client.query({
      query: GET_APP_BY_CREDENTIAL,
      variables: {
        credentialKey,
      },
    })
    dispatch({
      type: STORE_TOKEN_ORG,
      payload: {
        credentialKey,
        accessTokenOrg: res.data.getOrgAccessTokenWithRef.payload.token.orgAccessToken,
        refreshTokenOrg: res.data.getOrgAccessTokenWithRef.payload.token.orgRefreshToken,
        appConfig: resSetting.data.getAppByCredential.payload.app.configurationList,
        appKey: resSetting.data.getAppByCredential.payload.app.appKey,
        loading: false,
      },
    })
  } catch (error) {
    dispatch({
      type: STORE_TOKEN_ORG,
      payload: {
        error: true,
        loading: false,
      },
    })
  }
}

export const clearToken = () => (dispatch: any) => {
  dispatch({
    type: CLEAR_TOKEN,
  })
}
