import { CLEAR_TOKEN, SET_MODE, STORE_TOKEN_APP, STORE_TOKEN_ORG } from '../types/auth'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { API } from 'config/api'
import GET_ORGANIZATION from 'graphql/useGetOrganization/getOrgranization'
import { useSelector } from 'react-redux'

export const setMode = (payload: any) => async (dispatch: any) => {
  try {
    const { orgKey, token } = payload
    const client = new ApolloClient({
      cache: new InMemoryCache({
        addTypename: false,
      }),
      uri: API.CORE.GRAPHQL.ADMIN['1.0'],
    })
    const res = await client.query({
      query: GET_ORGANIZATION,
      variables: {
        input: {
          query: {
            orgKey,
          },
        },
      },
      context: {
        headers: {
          authorization: token,
        },
      },
    })
    dispatch({
      type: SET_MODE,
      payload: res.data.getOrganization.payload[0].attribute.mode,
    })
  } catch (error) {
    console.log(error)
  }
}
