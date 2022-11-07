import {
  GetAppAuthUserQuery,
  GetOrgAuthUserQuery,
} from './__generated/operations'

export type QR_GetOrgAccessTokenWithRefResult =
  GetOrgAuthUserQuery['getOrgAccessTokenWithRef']['payload']

export type QR_GetAppByCredentialResult =
  GetOrgAuthUserQuery['getAppByCredential']['payload']

export type QR_GetTokenAuthCodeResult =
  GetAppAuthUserQuery['getTokenAuthCode']['payload']
