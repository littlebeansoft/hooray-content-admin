import { APIPayloadResponse } from 'graphql/graphQL-service-hook'

export interface OrgAccessTokenWithRefAPIPayload {
  token: {
    orgAccessToken: string
    orgRefreshToken: string
  }
}

export interface OrgAccessTokenWithRefData {
  getOrgAccessTokenWithRef: APIPayloadResponse<OrgAccessTokenWithRefAPIPayload>
}

export interface OrgAccessTokenWithRefVars {
  tokenRef: string
}
