import {
  GetAppAuthUserQuery,
  GetContentPackListQuery,
  GetOrgAuthUserQuery,
} from './__generated/operations'

export type QR_GetOrgAccessTokenWithRefResult =
  GetOrgAuthUserQuery['getOrgAccessTokenWithRef']['payload']

export type QR_GetAppByCredentialResult =
  GetOrgAuthUserQuery['getAppByCredential']['payload']

export type QR_GetTokenAuthCodeResult =
  GetAppAuthUserQuery['getTokenAuthCode']['payload']

export type QR_GetContentPackListResult =
  GetContentPackListQuery['getContentPackList']['payload'][number]
