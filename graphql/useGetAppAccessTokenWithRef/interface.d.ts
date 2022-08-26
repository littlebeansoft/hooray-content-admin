import { APIPayloadResponse } from 'graphql/graphQL-service-hook'

export interface AppAccessTokenWithRefAPIPayload {
  token: {
    accessToken: string
    refreshToken: string
  }
}

export interface AppAccessTokenWithRefData {
  getTokenAuthCode: APIPayloadResponse<AppAccessTokenWithRefAPIPayload>
}

export interface AppAccessTokenWithRefVars {
  code: string
}
