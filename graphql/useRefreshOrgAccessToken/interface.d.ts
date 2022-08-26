export interface RefreshOrgAccessTokenAPIPayload {
  token: {
    orgAccessToken: string
    orgRefreshToken: string
  }
}
