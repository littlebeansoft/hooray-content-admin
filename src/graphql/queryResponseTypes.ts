import {
  GetAppAuthUserQuery,
  GetCategoryForSearchQuery,
  GetContentPackByIdQuery,
  GetContentPackListQuery,
  GetListCreatorsProfileQuery,
  GetOrgAuthUserQuery,
  GetListCategoriesQuery,
  GetSectionListQuery,
  GetGroupSectionWithContentListQuery,
  GetContentByIdQuery,
} from './__generated/operations'

export type QR_GetOrgAccessTokenWithRefResult =
  GetOrgAuthUserQuery['getOrgAccessTokenWithRef']['payload']

export type QR_GetAppByCredentialResult =
  GetOrgAuthUserQuery['getAppByCredential']['payload']

export type QR_GetTokenAuthCodeResult =
  GetAppAuthUserQuery['getTokenAuthCode']['payload']

export type QR_GetContentPackListResult =
  GetContentPackListQuery['getContentPackList']['payload'][number]

export type QR_GetContentPackByIDResult =
  GetContentPackByIdQuery['getContentPackByID']['payload']

export type QR_GetCategoryForSearchResult =
  GetCategoryForSearchQuery['getCategory']['payload']

export type QR_GetCreatorResult =
  GetListCreatorsProfileQuery['getResourceAdmin']['payload'][number]

export type QR_GetCategoryResult =
  GetListCategoriesQuery['getCategory']['payload'][number]

export type QR_GetSectionResult = GetSectionListQuery['getSectionList']

export type QR_ContentListResult =
  GetGroupSectionWithContentListQuery['getContentList']['payload']

export type QR_GetContentByIDResult =
  GetContentByIdQuery['getContentByID']['payload']
