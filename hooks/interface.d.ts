import { Pagination } from 'graphql/graphQL-service-hook'
import { ContactAPIPayload, UserInfoInCourseAPIPayload } from 'graphql/interface'

interface AutoCompleteOptionParams {
  limit?: number
}
interface AutoCompleteOption {
  label: string
  value: string
}

export interface AutoComplete {
  loading: boolean
  options: AutoCompleteOption[]
  onSearch?: (value: string) => void
}

export interface ContactAutoComplete extends AutoComplete {
  contactList: ContactAPIPayload[]
}

export interface SetUserToCourse {
  userInfoCourseDataList: UserInfoInCourseAPIPayload[]
  loading: boolean
  pagination: Pagination
  onSearch: (value: string) => void
  onChangePage: (page: number, pageSize?: number | undefined) => void
}

export interface ServiceHook<TResponse> {
  (): TResponse
}

export interface ServiceHookWithOptions<TResponse, TOptions = any> {
  (options?: TOptions): TResponse
}

export interface SearchInfo {
  keyword: string
  length: number
}

export interface ServiceHookOptions<T = any> {
  searchLength?: number
  firstLoad?: boolean
  onQueryComplete?: (data: T) => void
}

export interface ServiceHookResponse<T = AutoCompleteOption[]> {
  fetching?: boolean
  options: T
  searchInfo: SearchInfo
  resetSearch: VoidFunction
  onSearch: (value: string) => void
}
