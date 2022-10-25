/* eslint-disable */
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Date: any
  FileUpload: any
  JSON: any
  JSONObject: any
  Number: any
  /** The `Upload` scalar type represents a file upload. */
  Upload: any
}

/** สถานะการใช้งาน */
export enum ActiveStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
}

export type CategoryContentPackResponseList = {
  __typename?: 'CategoryContentPackResponseList'
  /** โค้ดของการตอบสนอง */
  code?: Maybe<Scalars['String']>
  /** ข้อความตอบสนอง */
  message?: Maybe<Scalars['String']>
  /** array data */
  payload?: Maybe<Array<Maybe<CategoryContentPackResult>>>
}

export type CategoryContentPackResult = {
  __typename?: 'CategoryContentPackResult'
  /** category' ID */
  categoryID: Scalars['String']
  /** content pack list group by category */
  contentPacks: Array<ContentPackResult>
}

export type ContentFindInput = {
  /** สำหรับกรณีที่ใช้เงื่อนไขการค้นหาเป็น and */
  filter?: InputMaybe<ContentFindSchemaInput>
  pagination?: InputMaybe<PaginatedFindType>
  /** สำหรับกรณีที่ใช้เงื่อนไขการค้นหาเป็น or และใช้ regex เป็นการค้นหาข้อมูลที่เป็น string */
  search?: InputMaybe<ContentFindSchemaInput>
  sort?: InputMaybe<ContentSortInput>
}

export type ContentFindSchemaInput = {
  /** Content' status use to check for show preview content */
  canBePreviewed?: InputMaybe<Scalars['Boolean']>
  /** Use for save content to section */
  sectionID?: InputMaybe<Scalars['String']>
  /** Content' status */
  status?: InputMaybe<ActiveStatus>
  /** Content's title */
  title?: InputMaybe<Scalars['String']>
}

export type ContentPackFindInput = {
  /** สำหรับกรณีที่ใช้เงื่อนไขการค้นหาเป็น and */
  filter?: InputMaybe<ContentPackFindSchemaInput>
  pagination?: InputMaybe<PaginatedFindType>
  /** สำหรับกรณีที่ใช้เงื่อนไขการค้นหาเป็น or และใช้ regex เป็นการค้นหาข้อมูลที่เป็น string */
  search?: InputMaybe<ContentPackFindSchemaInput>
  sort?: InputMaybe<ContentPackSortInput>
}

export type ContentPackFindSchemaInput = {
  /** categories' ID */
  categoryIDs?: InputMaybe<Array<Scalars['String']>>
  /** Content' Object for search */
  contentSearch?: InputMaybe<ContentSearchInput>
  /** Creators' ID */
  creatorIDs?: InputMaybe<Array<Scalars['String']>>
  /** Amount number purchase of ContentPack pack */
  purchaseAmount?: InputMaybe<Scalars['Float']>
  /** status for set content pack to recommened */
  recommend?: InputMaybe<Scalars['Boolean']>
  /** Section' Object for search */
  sectionSearch?: InputMaybe<SectionSearchInput>
  /** ContentPack' status */
  status?: InputMaybe<ActiveStatus>
  /** ContentPack's title */
  title?: InputMaybe<Scalars['String']>
}

export type ContentPackResponse = {
  __typename?: 'ContentPackResponse'
  /** โค้ดของการตอบสนอง */
  code?: Maybe<Scalars['String']>
  /** ข้อความตอบสนอง */
  message?: Maybe<Scalars['String']>
  /** data */
  payload?: Maybe<ContentPackResult>
}

export type ContentPackResponsePaginate = {
  __typename?: 'ContentPackResponsePaginate'
  /** โค้ดของการตอบสนอง */
  code?: Maybe<Scalars['String']>
  /** ข้อความตอบสนอง */
  message?: Maybe<Scalars['String']>
  /** pagination data */
  pagination?: Maybe<PaginatedType>
  /** array data */
  payload?: Maybe<Array<ContentPackResult>>
}

export type ContentPackResult = {
  __typename?: 'ContentPackResult'
  _id?: Maybe<Scalars['String']>
  /** categories' ID */
  categoryIDs: Array<Scalars['String']>
  /** ContentPack's cover (fileKey). ratio: 21/9 */
  cover?: Maybe<Scalars['String']>
  /** Creators' ID */
  creatorIDs: Array<Scalars['String']>
  /** ContentPack's description */
  description?: Maybe<Scalars['String']>
  /** content language in content pack */
  language?: Maybe<Scalars['String']>
  /** contentPack' video time length of (seconds). EX: 46979 */
  length?: Maybe<Scalars['Float']>
  /** contentPack' video time text. Ex: '13:02:59' */
  lengthText?: Maybe<Scalars['String']>
  /** number of all contents in content pack */
  numOfContent: Scalars['Float']
  /** number of all files in content pack */
  numOfFile: Scalars['Float']
  /** number of all sections in content pack */
  numOfSection: Scalars['Float']
  /** ContentPack's video url use to show preview content pack (fileKey) */
  previewUrl?: Maybe<Scalars['String']>
  /** Order for sort content when show contents */
  price: PriceResp
  /** Amount number purchase of ContentPack pack */
  purchaseAmount: Scalars['Float']
  /** status for set content pack to recommened */
  recommend: Scalars['Boolean']
  /** section data list */
  sections: Array<SectionResult>
  /** ContentPack' status */
  status: ActiveStatus
  /** ContentPack's thumbnail (fileKey). ratio: 16/9 */
  thumbnail?: Maybe<Scalars['String']>
  /** ContentPack's title */
  title?: Maybe<Scalars['String']>
}

export type ContentPackSortInput = {
  createdAt?: InputMaybe<Sort_Order>
}

export type ContentProperty = {
  __typename?: 'ContentProperty'
  checkPoint: Scalars['Float']
  contentID: Scalars['String']
}

export type ContentResponse = {
  __typename?: 'ContentResponse'
  /** โค้ดของการตอบสนอง */
  code?: Maybe<Scalars['String']>
  /** ข้อความตอบสนอง */
  message?: Maybe<Scalars['String']>
  /** data */
  payload?: Maybe<ContentResult>
}

export type ContentResponsePaginate = {
  __typename?: 'ContentResponsePaginate'
  /** โค้ดของการตอบสนอง */
  code?: Maybe<Scalars['String']>
  /** ข้อความตอบสนอง */
  message?: Maybe<Scalars['String']>
  /** pagination data */
  pagination?: Maybe<PaginatedType>
  /** array data */
  payload?: Maybe<Array<ContentResult>>
}

export type ContentResult = {
  __typename?: 'ContentResult'
  _id?: Maybe<Scalars['String']>
  /** Content' status use to check for show preview content */
  canBePreviewed: Scalars['Boolean']
  /** Content's video (fileKey) */
  contentUrl?: Maybe<Scalars['String']>
  /** Content's description */
  description?: Maybe<Scalars['String']>
  /** Content's files */
  documentFiles: Array<Maybe<DocumentFileResp>>
  /** content' video time length of (seconds). EX: 46979 */
  length?: Maybe<Scalars['Float']>
  /** content' video time text. Ex: '13:02:59' */
  lengthText?: Maybe<Scalars['String']>
  /** Content's video url use to show preview content (fileKey) */
  previewUrl?: Maybe<Scalars['String']>
  /** Use for save content to section */
  sectionID: Scalars['String']
  /** Order for sort content when show contents */
  sortOrder: Scalars['Float']
  /** Content' status */
  status: ActiveStatus
  /** Content's thumbnail (fileKey). ratio: 16/9 */
  thumbnail?: Maybe<Scalars['String']>
  /** Content's title */
  title?: Maybe<Scalars['String']>
}

export type ContentSearchInput = {
  /** Content' Object */
  content?: InputMaybe<ContentSearchProps>
  /** Content' ID */
  id?: InputMaybe<Scalars['String']>
}

export type ContentSearchProps = {
  /** Organization' Key */
  orgKey?: InputMaybe<Scalars['String']>
  /** Order for sort content when show contents */
  sortOrder?: InputMaybe<Scalars['Float']>
  /** Content' status */
  status?: InputMaybe<ActiveStatus>
  /** Content's title */
  title?: InputMaybe<Scalars['String']>
}

export type ContentSortInput = {
  createdAt?: InputMaybe<Sort_Order>
  sortOrder?: InputMaybe<Sort_Order>
}

export type CreateContentInput = {
  /** Content' status use to check for show preview content */
  canBePreviewed?: InputMaybe<Scalars['Boolean']>
  /** Content's video (fileKey) */
  contentUrl?: InputMaybe<Scalars['String']>
  /** Content's description */
  description?: InputMaybe<Scalars['String']>
  /** Content's files */
  documentFiles?: InputMaybe<Array<DocumentFile>>
  /** content' video time length of (seconds). EX: 46979 */
  length?: InputMaybe<Scalars['Float']>
  /** content' video time text. Ex: '13:02:59' */
  lengthText?: InputMaybe<Scalars['String']>
  /** Content's video url use to show preview content (fileKey) */
  previewUrl?: InputMaybe<Scalars['String']>
  /** Use for save content to section */
  sectionID?: InputMaybe<Scalars['String']>
  /** Order for sort content when show contents */
  sortOrder?: InputMaybe<Scalars['Float']>
  /** Content' status */
  status?: InputMaybe<ActiveStatus>
  /** Content's thumbnail (fileKey). ratio: 16/9 */
  thumbnail?: InputMaybe<Scalars['String']>
  /** Content's title */
  title?: InputMaybe<Scalars['String']>
}

export type CreateContentPackInput = {
  /** ContentPack's cover (fileKey). ratio: 21/9 */
  cover?: InputMaybe<Scalars['String']>
  /** ContentPack's description */
  description?: InputMaybe<Scalars['String']>
  /** content language in content pack */
  language?: InputMaybe<Scalars['String']>
  /** contentPack' video time length of (seconds). EX: 46979 */
  length?: InputMaybe<Scalars['Float']>
  /** contentPack' video time text. Ex: '13:02:59' */
  lengthText?: InputMaybe<Scalars['String']>
  /** ContentPack's video url use to show preview content pack (fileKey) */
  previewUrl?: InputMaybe<Scalars['String']>
  /** Order for sort content when show contents */
  price: Price
  /** status for set content pack to recommened */
  recommend?: InputMaybe<Scalars['Boolean']>
  /** ContentPack' status */
  status?: InputMaybe<ActiveStatus>
  /** ContentPack's thumbnail (fileKey). ratio: 16/9 */
  thumbnail?: InputMaybe<Scalars['String']>
  /** ContentPack's title */
  title?: InputMaybe<Scalars['String']>
}

export type CreateSectionInput = {
  /** Use for save section to contentPack */
  contentPackID?: InputMaybe<Scalars['String']>
  /** Section's description */
  description?: InputMaybe<Scalars['String']>
  /** All content' video time length of (seconds) in section. EX: 46979 */
  length?: InputMaybe<Scalars['Float']>
  /** All content' video time text in section. Ex: '13:02:59' */
  lengthText?: InputMaybe<Scalars['String']>
  /** Order for sort section when show sections */
  sortOrder?: InputMaybe<Scalars['Float']>
  /** Section' status */
  status?: InputMaybe<ActiveStatus>
  /** Section's title */
  title?: InputMaybe<Scalars['String']>
}

export type CreateUserContentPackInput = {
  /** Content Pack for add to list */
  contentPackID: Scalars['String']
  /** User' ID for add contentPack */
  userID: Scalars['String']
}

export type DocumentFile = {
  file: Scalars['String']
  name?: InputMaybe<Scalars['String']>
}

export type DocumentFileResp = {
  __typename?: 'DocumentFileResp'
  file: Scalars['String']
  name?: Maybe<Scalars['String']>
}

/** สถานะการใช้ของ APP */
export enum Enum_App_Status {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}

export enum Enum_Auth_Type {
  AuthCode = 'AUTH_CODE',
  AuthToken = 'AUTH_TOKEN',
}

export enum Enum_Category_Status {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}

export enum Enum_Config_Privacy {
  /** ไม่ระบุตัวตน */
  Anonymous = 'ANONYMOUS',
  /** ยืนยันตัวตน */
  AuthUser = 'AUTH_USER',
  /** ระบบ */
  System = 'SYSTEM',
}

export enum Enum_Credential_Type {
  ResourceAdmin = 'RESOURCE_ADMIN',
  ResourceOwner = 'RESOURCE_OWNER',
}

export enum Enum_Data_Security {
  None = 'NONE',
  Organization = 'ORGANIZATION',
  ParentChild = 'PARENT_CHILD',
  System = 'SYSTEM',
  User = 'USER',
}

export enum Enum_Gateway_Api_Type {
  Gql = 'GQL',
  Rest = 'REST',
}

export enum Enum_Gateway_Method {
  Delete = 'DELETE',
  Get = 'GET',
  Mutation = 'MUTATION',
  Post = 'POST',
  Put = 'PUT',
  Query = 'QUERY',
}

export enum Enum_Gateway_Res_Type {
  Json = 'JSON',
  String = 'STRING',
}

export enum Enum_Gateway_Status {
  Disable = 'DISABLE',
  Enabled = 'ENABLED',
}

export enum Enum_Gateway_User_Role {
  Aninymous = 'ANINYMOUS',
  ResourceAdmin = 'RESOURCE_ADMIN',
  ResourceOwner = 'RESOURCE_OWNER',
  SystemAdmin = 'SYSTEM_ADMIN',
}

export enum Enum_Generate_Key_Capitalization {
  Lowercase = 'LOWERCASE',
  Uppercase = 'UPPERCASE',
}

export enum Enum_Invite_Status {
  Active = 'ACTIVE',
  Deleted = 'DELETED',
  Inactive = 'INACTIVE',
}

/** สถานะ YES | NO */
export enum Enum_Is {
  No = 'NO',
  Yes = 'YES',
}

/** ประเภทของ user */
export enum Enum_Lrle_Type {
  ResourceAdmin = 'RESOURCE_ADMIN',
  ResourceOwner = 'RESOURCE_OWNER',
  SystemAdmin = 'SYSTEM_ADMIN',
}

export enum Enum_Notification_Channel {
  Email = 'EMAIL',
  MobileNotification = 'MOBILE_NOTIFICATION',
  Sms = 'SMS',
}

export enum Enum_Notification_Is_Required {
  No = 'NO',
  Yes = 'YES',
}

export enum Enum_Notification_Message_Channel_Condition {
  AllUser = 'ALL_USER',
  CustomApplication = 'CUSTOM_APPLICATION',
  CustomEmail = 'CUSTOM_EMAIL',
  CustomPhoneNumber = 'CUSTOM_PHONE_NUMBER',
  UserRole = 'USER_ROLE',
  UserSelected = 'USER_SELECTED',
}

export enum Enum_Notification_Message_Channel_Key {
  Application = 'APPLICATION',
  Email = 'EMAIL',
  Sms = 'SMS',
}

export enum Enum_Notification_Message_Sendtype {
  System = 'SYSTEM',
  User = 'USER',
}

export enum Enum_Notification_Message_Status {
  Cancelled = 'CANCELLED',
  Prepare = 'PREPARE',
  Sent = 'SENT',
}

export enum Enum_Notification_Read {
  No = 'NO',
  Yes = 'YES',
}

export enum Enum_Notification_User_Type {
  Admin = 'ADMIN',
  Client = 'CLIENT',
  System = 'SYSTEM',
}

export enum Enum_Organization_Approval_Status {
  Editable = 'EDITABLE',
  Locked = 'LOCKED',
}

export enum Enum_Organization_Label_Status {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}

export enum Enum_Organization_Status {
  Approved = 'APPROVED',
  Blocked = 'BLOCKED',
  Closed = 'CLOSED',
  Declined = 'DECLINED',
  NeedMoreInformation = 'NEED_MORE_INFORMATION',
  Preparing = 'PREPARING',
  Rejected = 'REJECTED',
  Reviewing = 'REVIEWING',
  Suspended = 'SUSPENDED',
}

export enum Enum_Organization_Type_Status {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}

export enum Enum_Role_Aproval_Attribute_Ststus {
  Editable = 'EDITABLE',
  Locked = 'LOCKED',
}

export enum Enum_Running_Number {
  X = 'X',
  Xx = 'XX',
  Xxx = 'XXX',
  Xxxx = 'XXXX',
  Xxxxx = 'XXXXX',
}

export enum Enum_Running_Number_Dateformat {
  Yymm = 'YYMM',
  Yyyymm = 'YYYYMM',
  Yyyymmdd = 'YYYYMMDD',
  YyyymmdDhhmmss = 'YYYYMMDDhhmmss',
}

export enum Enum_S3_Acl {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
}

export enum Enum_Service_Endpoin_Type {
  Gql = 'GQL',
  Rest = 'REST',
}

export enum Enum_Sync_Service {
  Failed = 'FAILED',
  Success = 'SUCCESS',
}

export enum Enum_Theme_Default_Status {
  No = 'NO',
  Yes = 'YES',
}

export enum Enum_Theme_Replaceable_Status {
  No = 'NO',
  Yes = 'YES',
}

export enum Enum_Theme_Status {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}

export enum Enum_Theme_Type {
  Admin = 'ADMIN',
  Client = 'CLIENT',
}

export enum Enum_Usability {
  Disable = 'DISABLE',
  Enabled = 'ENABLED',
}

export enum Enum_User_Role_Status {
  Approved = 'APPROVED',
  Blocked = 'BLOCKED',
  Declined = 'DECLINED',
  Preparing = 'PREPARING',
  Reviewing = 'REVIEWING',
}

export enum Enum_Verify_Status {
  NotVerify = 'NOT_VERIFY',
  Verified = 'VERIFIED',
}

export type File = {
  __typename?: 'File'
  encoding: Scalars['String']
  filename: Scalars['String']
  mimetype: Scalars['String']
}

export type Get_App_By_Email = {
  __typename?: 'GET_APP_BY_EMAIL'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Array<Maybe<Get_App_By_Email_Credential_Payload>>>
}

export type Get_App_By_Email_Credential_Payload = {
  __typename?: 'GET_APP_BY_EMAIL_CREDENTIAL_PAYLOAD'
  app?: Maybe<Type_App_Schema>
  credential?: Maybe<Get_App_By_Email_Credential_Schema>
}

export type Get_App_By_Email_Credential_Schema = {
  __typename?: 'GET_APP_BY_EMAIL_CREDENTIAL_SCHEMA'
  credentialKey?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  status?: Maybe<Enum_App_Status>
  type?: Maybe<Enum_Credential_Type>
}

export type Get_App_Credential_Expiration = {
  __typename?: 'GET_APP_CREDENTIAL_EXPIRATION'
  access?: Maybe<Scalars['String']>
  refresh?: Maybe<Scalars['String']>
}

export type Get_App_Credential_Host = {
  __typename?: 'GET_APP_CREDENTIAL_HOST'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Get_App_By_Email_Credential_Payload>
}

export type Get_App_Credential_List = {
  __typename?: 'GET_APP_CREDENTIAL_LIST'
  credentialKey?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

export type Hooray_Server_Service_Info = {
  __typename?: 'HOORAY_SERVER_SERVICE_INFO'
  featureKeys?: Maybe<Array<Maybe<Hooray_Server_Service_Info_Feature>>>
  graphqlEndpointAdmin?: Maybe<Scalars['String']>
  graphqlEndpointClient?: Maybe<Scalars['String']>
  graphqlEndpointSuperAdmin?: Maybe<Scalars['String']>
  logo?: Maybe<Scalars['String']>
  methodUpdate?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  permissions?: Maybe<Array<Maybe<Hooray_Server_Service_Info_Permission>>>
  restEndpointAdmin?: Maybe<Scalars['String']>
  restEndpointClient?: Maybe<Scalars['String']>
  restEndpointSuperAdmin?: Maybe<Scalars['String']>
  serviceKey?: Maybe<Scalars['String']>
}

export type Hooray_Server_Service_Info_Feature = {
  __typename?: 'HOORAY_SERVER_SERVICE_INFO_FEATURE'
  description?: Maybe<Scalars['String']>
  enable?: Maybe<Scalars['Boolean']>
  key?: Maybe<Scalars['String']>
}

export type Hooray_Server_Service_Info_Permission = {
  __typename?: 'HOORAY_SERVER_SERVICE_INFO_PERMISSION'
  code?: Maybe<Array<Maybe<Scalars['String']>>>
  defaultCode?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  permissionName?: Maybe<Scalars['String']>
}

export type Input_Active = {
  isActive: Scalars['Boolean']
}

export type Input_Add_Email = {
  email?: InputMaybe<Scalars['String']>
}

export type Input_Admin = {
  attribute?: InputMaybe<Scalars['JSON']>
  email: Scalars['String']
}

export type Input_App_Form = {
  appKey: Scalars['String']
  attribute?: InputMaybe<Scalars['JSON']>
  name: Scalars['String']
  status?: InputMaybe<Enum_App_Status>
}

export type Input_Attribute = {
  _id?: InputMaybe<Scalars['ID']>
  key?: InputMaybe<Scalars['String']>
  value?: InputMaybe<Scalars['String']>
}

export type Input_Category = {
  name?: InputMaybe<Scalars['String']>
  status?: InputMaybe<Enum_Category_Status>
}

export type Input_Config_Form = {
  configKey?: InputMaybe<Scalars['String']>
  configName?: InputMaybe<Scalars['String']>
  isGlobal?: InputMaybe<Scalars['Boolean']>
  privacy?: InputMaybe<Enum_Config_Privacy>
  relatedConfig?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  value?: InputMaybe<Scalars['JSON']>
}

export type Input_Create_Service = {
  endpointType: Enum_Service_Endpoin_Type
  serviceKey: Scalars['String']
  systemEndpoint: Scalars['String']
}

export type Input_Credential_Form = {
  credentialKey?: InputMaybe<Scalars['String']>
  expiration?: InputMaybe<Input_Expiration>
  hostList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  isAdminCredential?: InputMaybe<Enum_Is>
  name?: InputMaybe<Scalars['String']>
  secretKey?: InputMaybe<Scalars['String']>
  status?: InputMaybe<Enum_App_Status>
  type?: InputMaybe<Enum_Credential_Type>
}

export type Input_Credential_Form_Update = {
  expiration?: InputMaybe<Input_Expiration>
  hostList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name?: InputMaybe<Scalars['String']>
  status?: InputMaybe<Enum_App_Status>
  type?: InputMaybe<Enum_Credential_Type>
}

export type Input_Data_Security_Form = {
  assign: Enum_Data_Security
  assignToParent: Enum_Is
  create: Enum_Data_Security
  delete: Enum_Data_Security
  name: Scalars['String']
  read: Enum_Data_Security
  securityKey: Scalars['String']
  write: Enum_Data_Security
}

export type Input_Email_Register_Input = {
  attribute?: InputMaybe<Scalars['JSON']>
  confirmPassword: Scalars['String']
  email: Scalars['String']
  inviteCode?: InputMaybe<Scalars['String']>
  password: Scalars['String']
  roleKey?: InputMaybe<Scalars['String']>
}

export type Input_Expiration = {
  access?: InputMaybe<Scalars['String']>
  refresh?: InputMaybe<Scalars['String']>
}

export type Input_Feature_Form = {
  config?: InputMaybe<Scalars['JSON']>
  featureKey: Scalars['String']
}

export type Input_Filter = {
  key?: InputMaybe<Scalars['String']>
  value?: InputMaybe<Scalars['String']>
}

export type Input_Filter_Date = {
  endDate?: InputMaybe<Scalars['String']>
  startDate?: InputMaybe<Scalars['String']>
}

export type Input_Find_Data = {
  filter?: InputMaybe<Scalars['JSON']>
  findManyById?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  findOneById?: InputMaybe<Scalars['ID']>
  pagination?: InputMaybe<Input_Pagination>
  query?: InputMaybe<Scalars['JSON']>
  search?: InputMaybe<Scalars['JSON']>
  sort?: InputMaybe<Scalars['JSON']>
}

export type Input_Gateway = {
  apiType?: InputMaybe<Enum_Gateway_Api_Type>
  destination?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  endpont?: InputMaybe<Scalars['String']>
  header?: InputMaybe<Scalars['JSON']>
  key?: InputMaybe<Scalars['String']>
  method?: InputMaybe<Enum_Gateway_Method>
  name?: InputMaybe<Scalars['String']>
  queryString?: InputMaybe<Scalars['JSON']>
  resType?: InputMaybe<Enum_Gateway_Res_Type>
  schema?: InputMaybe<Scalars['JSON']>
  source?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  status?: InputMaybe<Enum_Gateway_Status>
  userRole?: InputMaybe<Enum_Gateway_User_Role>
  variable?: InputMaybe<Scalars['JSON']>
}

export type Input_Generate_Running_Number = {
  runningKey?: InputMaybe<Scalars['String']>
}

export type Input_Invite_Email_List = {
  email?: InputMaybe<Scalars['String']>
  roleKey?: InputMaybe<Scalars['String']>
}

export type Input_Locale_Text_Form = {
  attributes?: InputMaybe<Scalars['JSON']>
  dataKey: Scalars['String']
  locale: Scalars['String']
  orgKey?: InputMaybe<Scalars['String']>
  text: Scalars['String']
}

export type Input_Login_Auth_Code = {
  email: Scalars['String']
  password: Scalars['String']
  redirectUrl: Scalars['String']
}

export type Input_Master_Data = {
  attributes?: InputMaybe<Scalars['JSON']>
  dataKey: Scalars['String']
  locale: Scalars['String']
  parent?: InputMaybe<Scalars['String']>
  text: Scalars['String']
}

export type Input_Notification = {
  attribute?: InputMaybe<Scalars['JSON']>
  content?: InputMaybe<Scalars['String']>
  icon?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
  type?: InputMaybe<Enum_Notification_User_Type>
}

export type Input_Notification_Data_Key = {
  dataKey?: InputMaybe<Scalars['String']>
  defaultValue?: InputMaybe<Scalars['String']>
  isRequired?: InputMaybe<Enum_Notification_Is_Required>
}

export type Input_Notification_Message = {
  content?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
}

export type Input_Notification_Message_Channel = {
  condition: Enum_Notification_Message_Channel_Condition
  key: Enum_Notification_Message_Channel_Key
}

export type Input_Number_Attribute = {
  _id?: InputMaybe<Scalars['ID']>
  key?: InputMaybe<Scalars['String']>
  value?: InputMaybe<Scalars['Number']>
}

export type Input_Organization_Approval_Form = {
  approvalAttribute?: InputMaybe<Scalars['JSON']>
  orgKey: Scalars['String']
}

export type Input_Organization_Form = {
  address?: InputMaybe<Scalars['JSON']>
  attribute?: InputMaybe<Scalars['JSON']>
  categoryList?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  contactEmailList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contactName?: InputMaybe<Scalars['String']>
  location?: InputMaybe<Input_Organization_Location>
  name?: InputMaybe<Scalars['String']>
  orgKey?: InputMaybe<Scalars['String']>
  organizationLabelList?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  organizationType?: InputMaybe<Scalars['ID']>
  parentOrgKey?: InputMaybe<Scalars['String']>
}

export type Input_Organization_Local_List = {
  dataKey?: InputMaybe<Scalars['String']>
  masterKey?: InputMaybe<Scalars['String']>
}

export type Input_Organization_Location = {
  coordinates?: InputMaybe<Array<InputMaybe<Scalars['Number']>>>
}

export type Input_Organization_Master_Detail_List = {
  dataKey?: InputMaybe<Scalars['String']>
  masterKey?: InputMaybe<Scalars['String']>
}

export type Input_Organization_Tag_List = {
  masterKey?: InputMaybe<Scalars['String']>
  tagKey?: InputMaybe<Scalars['String']>
}

export type Input_Organization_Update = {
  address?: InputMaybe<Scalars['JSON']>
  attribute?: InputMaybe<Scalars['JSON']>
  categoryList?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  contactEmailList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contactName?: InputMaybe<Scalars['String']>
  location?: InputMaybe<Input_Organization_Location>
  name?: InputMaybe<Scalars['String']>
  orgKey?: InputMaybe<Scalars['String']>
  organizationLabelList?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  organizationType?: InputMaybe<Scalars['ID']>
  parentOrgKey?: InputMaybe<Scalars['String']>
}

export type Input_Organiztion_Label = {
  orgLabelDescription?: InputMaybe<Scalars['String']>
  orgLabelIcon?: InputMaybe<Scalars['String']>
  orgLabelName?: InputMaybe<Scalars['String']>
  orgLabelStatus?: InputMaybe<Enum_Organization_Label_Status>
  orgLabelTitle?: InputMaybe<Scalars['String']>
}

export type Input_Organiztion_Type = {
  needApprove?: InputMaybe<Enum_Is>
  orgFieldList?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  orgTypeKey?: InputMaybe<Scalars['String']>
  orgTypeName?: InputMaybe<Scalars['String']>
  orgTypeStatus?: InputMaybe<Enum_Organization_Type_Status>
}

export type Input_Org_Admin_Register_Input = {
  attribute?: InputMaybe<Scalars['JSON']>
  confirmPassword: Scalars['String']
  email: Scalars['String']
  password: Scalars['String']
  verifyToken?: InputMaybe<Scalars['String']>
}

export type Input_Org_Approval_Attribute_Status = {
  note?: InputMaybe<Scalars['String']>
  orgKey: Scalars['String']
  status: Enum_Organization_Approval_Status
}

export type Input_Org_Status = {
  note?: InputMaybe<Scalars['String']>
  orgKey: Scalars['String']
  status: Enum_Organization_Status
}

export type Input_O_Auth_Form = {
  loginStatus?: InputMaybe<Enum_Usability>
  reauthentication?: InputMaybe<Enum_Usability>
  redirectUrlList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type Input_Pagination = {
  limit?: InputMaybe<Scalars['Int']>
  page?: InputMaybe<Scalars['Int']>
}

export type Input_Permission_Form = {
  code?: InputMaybe<Array<Scalars['String']>>
  permissionKey: Scalars['String']
  scopeList?: InputMaybe<Array<Scalars['String']>>
}

export type Input_Permission_Role = {
  code: Scalars['String']
  permissionName: Scalars['String']
  scpes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type Input_Phone_Number_Register_Input = {
  attribute?: InputMaybe<Scalars['JSON']>
  inviteCode?: InputMaybe<Scalars['String']>
  phoneNumber: Scalars['String']
  roleKey?: InputMaybe<Scalars['String']>
}

export type Input_Request_Otp = {
  countryCode: Scalars['String']
  phoneNumber: Scalars['Number']
}

export type Input_Role_Approval_Attribute_Status = {
  note?: InputMaybe<Scalars['String']>
  roleKey: Scalars['String']
  status?: InputMaybe<Enum_Role_Aproval_Attribute_Ststus>
  userId: Scalars['String']
}

export type Input_Role_From = {
  attribute?: InputMaybe<Scalars['JSON']>
  isDefault?: InputMaybe<Enum_Is>
  isInvite?: InputMaybe<Enum_Is>
  isReplaceable?: InputMaybe<Enum_Is>
  name?: InputMaybe<Scalars['String']>
  needApproval?: InputMaybe<Enum_Is>
  regisable?: InputMaybe<Enum_Is>
  roleKey?: InputMaybe<Scalars['String']>
  roleType?: InputMaybe<Enum_Lrle_Type>
  status?: InputMaybe<Enum_App_Status>
  userField?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
}

export type Input_Running_Number = {
  attribute?: InputMaybe<Scalars['JSON']>
  formatDate?: InputMaybe<Enum_Running_Number_Dateformat>
  lastText?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  numberRunning?: InputMaybe<Enum_Running_Number>
  runningKey?: InputMaybe<Scalars['String']>
  text?: InputMaybe<Scalars['String']>
}

export type Input_S3_Put_Object_Signed_Url = {
  acl?: InputMaybe<Enum_S3_Acl>
  contentType?: InputMaybe<Scalars['String']>
  objectName?: InputMaybe<Scalars['String']>
  path?: InputMaybe<Scalars['String']>
}

export type Input_Schema_Custom_Menu = {
  actionColor?: InputMaybe<Scalars['String']>
  icon?: InputMaybe<Scalars['String']>
  menuKey?: InputMaybe<Scalars['String']>
  permissionList?: InputMaybe<Array<InputMaybe<Input_Schema_Custom_Menu_Permission_List>>>
  status?: InputMaybe<Enum_Usability>
  target?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['JSON']>
  url?: InputMaybe<Scalars['String']>
}

export type Input_Schema_Custom_Menu_Permission_List = {
  code?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  permissionKey?: InputMaybe<Scalars['String']>
}

export type Input_Scmema_Notification_Template = {
  channel?: InputMaybe<Enum_Notification_Channel>
  dataKeyList?: InputMaybe<Array<InputMaybe<Input_Notification_Data_Key>>>
  locale?: InputMaybe<Scalars['String']>
  templateKey: Scalars['String']
  templateValue: Scalars['String']
  title?: InputMaybe<Scalars['String']>
}

export type Input_Search = {
  condition?: InputMaybe<Scalars['String']>
  searchAttribute?: InputMaybe<Array<InputMaybe<Input_Search_Attribute>>>
}

export type Input_Search_Attribute = {
  key?: InputMaybe<Scalars['String']>
  value?: InputMaybe<Scalars['String']>
}

export type Input_Sender_List = {
  email?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
}

export type Input_Send_Mail_Form = {
  email?: InputMaybe<Array<Scalars['String']>>
  name?: InputMaybe<Scalars['String']>
  subject?: InputMaybe<Scalars['String']>
  text: Scalars['String']
}

export type Input_Smtp_Form = {
  host?: InputMaybe<Scalars['String']>
  password?: InputMaybe<Scalars['String']>
  port?: InputMaybe<Scalars['Number']>
  securedConnection?: InputMaybe<Scalars['Boolean']>
  senderEmail?: InputMaybe<Scalars['String']>
  senderName?: InputMaybe<Scalars['String']>
  username?: InputMaybe<Scalars['String']>
}

export type Input_Theme_Form = {
  color?: InputMaybe<Scalars['JSON']>
  credentialKey?: InputMaybe<Scalars['String']>
  custom?: InputMaybe<Scalars['JSON']>
  image?: InputMaybe<Scalars['JSON']>
  isDefault?: InputMaybe<Enum_Theme_Default_Status>
  isReplaceable?: InputMaybe<Enum_Theme_Replaceable_Status>
  name: Scalars['String']
  status: Enum_Theme_Status
  text?: InputMaybe<Scalars['JSON']>
  themeKey: Scalars['String']
  themeType?: InputMaybe<Enum_Theme_Type>
}

export type Input_Theme_Form_Color = {
  navAuthBg?: InputMaybe<Scalars['String']>
  navAuthText?: InputMaybe<Scalars['String']>
  navBg?: InputMaybe<Scalars['String']>
  navText?: InputMaybe<Scalars['String']>
  primary?: InputMaybe<Scalars['String']>
  secondary?: InputMaybe<Scalars['String']>
  titleText?: InputMaybe<Scalars['String']>
}

export type Input_Theme_Form_Image = {
  favIcon?: InputMaybe<Scalars['String']>
  navAuthCollapsedLogo?: InputMaybe<Scalars['String']>
  navAuthLogo?: InputMaybe<Scalars['String']>
  navLogo?: InputMaybe<Scalars['String']>
  webLogo?: InputMaybe<Scalars['String']>
}

export type Input_Theme_Form_Text = {
  description?: InputMaybe<Scalars['String']>
  navTitle?: InputMaybe<Scalars['String']>
  webTitle?: InputMaybe<Scalars['String']>
}

export type Input_Update_App = {
  attribute?: InputMaybe<Scalars['JSON']>
  name: Scalars['String']
  status?: InputMaybe<Enum_App_Status>
}

export type Input_Update_Profile = {
  attribute?: InputMaybe<Scalars['JSON']>
  roleList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  setting?: InputMaybe<Scalars['JSON']>
}

export type Input_Username_Register = {
  attribute?: InputMaybe<Scalars['JSON']>
  confirmPassword: Scalars['String']
  password: Scalars['String']
  roleKey?: InputMaybe<Scalars['String']>
  username: Scalars['String']
}

export type Input_User_Role_Status = {
  note?: InputMaybe<Scalars['String']>
  roleKey: Scalars['String']
  status?: InputMaybe<Enum_User_Role_Status>
  userId?: InputMaybe<Scalars['ID']>
}

export type Input_Verify_Email = {
  email: Scalars['String']
  verifyToken: Scalars['String']
}

export type Input_Verify_Password_Email = {
  confirmPassword: Scalars['String']
  email: Scalars['String']
  newPassword: Scalars['String']
  verifyToken: Scalars['String']
}

export type Input_Verify_Password_Otp = {
  confirmPassword: Scalars['String']
  countryCode: Scalars['String']
  newPassword: Scalars['String']
  otp: Scalars['Number']
  phoneNumber: Scalars['Number']
  ref: Scalars['String']
}

export type Input_Verify_Password_System_Admin_Email = {
  attribute?: InputMaybe<Scalars['JSON']>
  confirmPassword: Scalars['String']
  email: Scalars['String']
  password: Scalars['String']
  verifyToken: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  /** add contentPacks to user */
  addContentPackToMyList: UserContentPackResponseList
  addEmailGlobal?: Maybe<Type_Ok>
  addGateway?: Maybe<Type_Gateway_List>
  addOrgAdmin?: Maybe<Type_Profile>
  addServiceToApp?: Maybe<Type_App_Service>
  cancelNotificationMessage?: Maybe<Type_Notification_Message>
  changeOrgApprovalAttributeStatus?: Maybe<Type_Organization_Approval_Response>
  changeOrgStatus?: Maybe<Type_Organization>
  changePassword?: Maybe<Type_Profile>
  changeResourceAdminRoleApprovalAttributeStatus?: Maybe<Type_Role_Aproval_Attribute>
  changeResourceAdminRoleStatus?: Maybe<Type_Role_Aproval_Attribute>
  changeResourceOwnerRoleApprovalAttributeStatus?: Maybe<Type_Role_Aproval_Attribute>
  changeResourceOwnerRoleStatus?: Maybe<Type_Role_Aproval_Attribute>
  checkVerifyEmailOrg?: Maybe<Type_Check_Verify_Email>
  confirmOrgAdmin?: Maybe<Type_Profile>
  confirmPhoneNumberUser?: Maybe<Type_Json>
  /** create content.(If you want fast api, please send default sort number.) */
  createContent: ContentResponse
  /** create contentPack */
  createContentPack: ContentPackResponse
  createCredential?: Maybe<Type_Credential>
  createCustomMenu?: Maybe<Type_Custom_Menu>
  createLocaleText?: Maybe<Type_Locale_Text>
  createLocaleTextList?: Maybe<Type_Locale_Text_List>
  createNotification?: Maybe<Type_Notification_List>
  createNotificationMessage?: Maybe<Type_Notification_Message_Count_Payload>
  createNotificationMessageForService?: Maybe<Type_Notification_Message_Count_Payload>
  createNotificationTemplate?: Maybe<Type_Notification_Template>
  createOrganization?: Maybe<Type_Organization>
  createOrganizationLabel?: Maybe<Type_Organization_Label>
  createOrganizationType?: Maybe<Type_Organization_Type>
  createRole?: Maybe<Type_App_Role>
  createRunningNumber?: Maybe<Type_Running_Number>
  /** create section */
  createSection: SectionResponse
  /** create contentPack to user */
  createUserContentPack: UserContentPackResponseList
  /** delete content */
  deleteContent: ContentResponse
  /** delete contentPack */
  deleteContentPack: ContentPackResponse
  deleteCredential?: Maybe<Type_Credential>
  deleteCustomMenu?: Maybe<Type_Custom_Menu_List>
  deleteDataSecurity?: Maybe<Type_Role_Data_Security_List>
  deleteEmailContact?: Maybe<Type_Organization>
  deleteGateway?: Maybe<Type_Gateway_List>
  deleteInvite?: Maybe<Type_Invite>
  deleteLocaleText?: Maybe<Type_Locale_Text>
  deleteMasterData?: Maybe<Type_Master_Data>
  deleteMyUser?: Maybe<Type_Profile>
  deleteNotificationTemplate?: Maybe<Type_Notification_Template>
  deleteOrgAdmin?: Maybe<Type_Profile>
  deleteOrganization?: Maybe<Type_Organization>
  deleteOrganizationLabel?: Maybe<Type_Organization_Label>
  deleteOrganizationType?: Maybe<Type_Organization_Type>
  deletePermission?: Maybe<Type_Role_Permission_List>
  deleteResourceAdmin?: Maybe<Type_Profile>
  deleteResourceAdminPermission?: Maybe<Type_Role_Permission_List>
  deleteResourceOwnerPermission?: Maybe<Type_Role_Permission_List>
  deleteRole?: Maybe<Type_App_Role>
  deleteRunningNumber?: Maybe<Type_Running_Number>
  /** delete section */
  deleteSection: SectionResponse
  deleteTheme?: Maybe<Type_Theme_Response>
  /** delete user contentPack */
  deleteUserContentPack: UserContentPackResponse
  deleteUserOrganization?: Maybe<Type_Invite>
  deleteUserOrganizationByUserId?: Maybe<Type_Invite>
  deleteVersionControl?: Maybe<Type_Version_Control>
  disableServiceFeature?: Maybe<Type_Feature_List>
  enableServiceFeature?: Maybe<Type_Feature_List>
  generateAuthCode?: Maybe<Type_Login>
  generateRunningNumber?: Maybe<Type_Generate_Running_Number>
  getOrgAccessToken?: Maybe<Type_Org_Accees_Token>
  getS3GetObjectSignedUrl?: Maybe<Type_S3_Signed_Url>
  getS3PutObjectSignedUrl?: Maybe<Type_S3_Signed_Url>
  getTokenAuthCode?: Maybe<Type_Login>
  inviteOrganizationCode?: Maybe<Type_Organization>
  inviteUserOrganization?: Maybe<Type_Invite>
  logOutUser?: Maybe<Type_Logout>
  loginApple?: Maybe<Type_Login>
  loginEmail?: Maybe<Type_Login>
  loginFacebook?: Maybe<Type_Login>
  loginGoogle?: Maybe<Type_Login>
  loginLine?: Maybe<Type_Login>
  loginPhoneNumber?: Maybe<Type_Otp_Token_Payload>
  loginPhoneNumberConfirm?: Maybe<Type_Login>
  loginPhoneNumberConfirmOrg?: Maybe<Type_Login>
  loginUsername?: Maybe<Type_Login>
  loginWithAuthCode?: Maybe<Type_Auth_Code>
  pinConfirm?: Maybe<Type_Ok>
  readAllNotification?: Maybe<Type_Notification_List>
  readNotification?: Maybe<Type_Notification_List>
  refreshAccessToken?: Maybe<Type_Refresh_Access_Token>
  refreshOrgAccessToken?: Maybe<Type_Org_Accees_Token>
  registerEmail?: Maybe<Type_Email_Register>
  registerOrgAdmin?: Maybe<Type_Email_Register>
  registerPhoneNumber?: Maybe<Type_Email_Register>
  registerUsername?: Maybe<Type_Username_Register>
  removeConfig?: Maybe<Type_Remove_Config>
  requestOtp?: Maybe<Type_Json>
  resendRegisterEmail?: Maybe<Type_Email_Register>
  resetPasswordEmail?: Maybe<Type_Reset_Password_Email>
  resetPasswordOtp?: Maybe<Type_Reset_Password_Email>
  s3UploadFile?: Maybe<Type_S3_Signed_Url>
  sendContactMail?: Maybe<Type_Ok>
  sendToVerifyEmailOrg?: Maybe<Type_Ok>
  singleUpload: File
  syncApp?: Maybe<Type_App_Service>
  syncOrganization?: Maybe<Type_Sync_Organization>
  updateAppAttribute?: Maybe<Type_App>
  updateConfig?: Maybe<Type_Config>
  /** update content.(If you want fast api, please send default sort number. */
  updateContent: ContentResponse
  /** update contentPack */
  updateContentPack: ContentPackResponse
  updateCredential?: Maybe<Type_Credential>
  updateCredentialKey?: Maybe<Type_Credential>
  updateCustomMenu?: Maybe<Type_Custom_Menu>
  updateDataSecurity?: Maybe<Type_Role_Data_Security_List>
  updateGateway?: Maybe<Type_Gateway_List>
  updateLocaleText?: Maybe<Type_Locale_Text>
  updateMyProfile?: Maybe<Type_Profile>
  updateMyRoleApprovalAttribute?: Maybe<Type_Role_Aproval_Attribute>
  updateNotificationTemplate?: Maybe<Type_Notification_Template>
  updateOAuth?: Maybe<Type_O_Auth>
  updateOrgAdminRole?: Maybe<Type_Profile>
  updateOrgApprovalAttribute?: Maybe<Type_Organization_Approval_Response>
  updateOrgKey?: Maybe<Type_Organization>
  updateOrgStatus?: Maybe<Type_Organization>
  updateOrganization?: Maybe<Type_Organization>
  updateOrganizationLabel?: Maybe<Type_Organization_Label>
  updateOrganizationType?: Maybe<Type_Organization_Type>
  updatePermission?: Maybe<Type_Role_Permission_List>
  updateResourceAdmin?: Maybe<Type_Profile>
  updateResourceAdminPermission?: Maybe<Type_Role_Permission_List>
  updateResourceOwnerPermission?: Maybe<Type_Role_Permission_List>
  updateResourceOwnerProfile?: Maybe<Type_Profile>
  updateRole?: Maybe<Type_App_Role>
  updateSecretKey?: Maybe<Type_Credential>
  /** update section */
  updateSection: SectionResponse
  updateTheme?: Maybe<Type_Theme_Response>
  /** update user contentPack */
  updateUserContentPack: UserContentPackResponse
  updateVersionControl?: Maybe<Type_Version_Control>
  verifyEmail?: Maybe<Type_Email_Register>
  verifyEmailGlobal?: Maybe<Type_Ok>
  verifyEmailOrganization?: Maybe<Type_Organization>
  verifyInviteOrganization?: Maybe<Type_Invite>
  verifyOtp?: Maybe<Type_Json>
  verifyPasswordEmail?: Maybe<Type_Reset_Password_Email>
  verifyPhoneNumberUser?: Maybe<Type_Json>
}

export type MutationAddContentPackToMyListArgs = {
  inputs: Array<CreateUserContentPackInput>
}

export type MutationAddEmailGlobalArgs = {
  input?: InputMaybe<Input_Add_Email>
}

export type MutationAddGatewayArgs = {
  input: Input_Gateway
}

export type MutationAddOrgAdminArgs = {
  email: Scalars['String']
  orgKey: Scalars['String']
  roleList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type MutationAddServiceToAppArgs = {
  serviceKey: Scalars['String']
}

export type MutationCancelNotificationMessageArgs = {
  notificationMessageIds: Array<Scalars['ID']>
}

export type MutationChangeOrgApprovalAttributeStatusArgs = {
  input?: InputMaybe<Input_Org_Approval_Attribute_Status>
}

export type MutationChangeOrgStatusArgs = {
  input: Input_Org_Status
}

export type MutationChangePasswordArgs = {
  confirmPassword: Scalars['String']
  newPassword: Scalars['String']
  password: Scalars['String']
}

export type MutationChangeResourceAdminRoleApprovalAttributeStatusArgs = {
  input?: InputMaybe<Input_Role_Approval_Attribute_Status>
}

export type MutationChangeResourceAdminRoleStatusArgs = {
  input?: InputMaybe<Input_User_Role_Status>
}

export type MutationChangeResourceOwnerRoleApprovalAttributeStatusArgs = {
  input?: InputMaybe<Input_Role_Approval_Attribute_Status>
}

export type MutationChangeResourceOwnerRoleStatusArgs = {
  input?: InputMaybe<Input_User_Role_Status>
}

export type MutationCheckVerifyEmailOrgArgs = {
  email: Scalars['String']
}

export type MutationConfirmOrgAdminArgs = {
  email: Scalars['String']
  verifyToken?: InputMaybe<Scalars['String']>
}

export type MutationConfirmPhoneNumberUserArgs = {
  otpCode: Scalars['String']
  phoneNumber: Scalars['String']
}

export type MutationCreateContentArgs = {
  input: CreateContentInput
}

export type MutationCreateContentPackArgs = {
  input: CreateContentPackInput
}

export type MutationCreateCredentialArgs = {
  credentialInput?: InputMaybe<Input_Credential_Form>
}

export type MutationCreateCustomMenuArgs = {
  input?: InputMaybe<Input_Schema_Custom_Menu>
}

export type MutationCreateLocaleTextArgs = {
  input?: InputMaybe<Input_Locale_Text_Form>
}

export type MutationCreateLocaleTextListArgs = {
  inputList: Array<Input_Locale_Text_Form>
}

export type MutationCreateNotificationArgs = {
  from: Scalars['String']
  input: Input_Notification
  to: Array<Scalars['String']>
}

export type MutationCreateNotificationMessageArgs = {
  channel?: InputMaybe<Input_Notification_Message_Channel>
  input?: InputMaybe<Input_Notification_Message>
  sendAt: Scalars['Date']
  serviceKey: Scalars['String']
  to: Array<Scalars['String']>
}

export type MutationCreateNotificationMessageForServiceArgs = {
  appKey: Scalars['String']
  channel?: InputMaybe<Input_Notification_Message_Channel>
  input?: InputMaybe<Input_Notification_Message>
  sendAt: Scalars['Date']
  serviceKey: Scalars['String']
  to: Array<Scalars['String']>
}

export type MutationCreateNotificationTemplateArgs = {
  input?: InputMaybe<Input_Scmema_Notification_Template>
}

export type MutationCreateOrganizationArgs = {
  input?: InputMaybe<Input_Organization_Form>
}

export type MutationCreateOrganizationLabelArgs = {
  input?: InputMaybe<Input_Organiztion_Label>
}

export type MutationCreateOrganizationTypeArgs = {
  input?: InputMaybe<Input_Organiztion_Type>
}

export type MutationCreateRoleArgs = {
  roleInput?: InputMaybe<Input_Role_From>
}

export type MutationCreateRunningNumberArgs = {
  input?: InputMaybe<Input_Running_Number>
}

export type MutationCreateSectionArgs = {
  input: CreateSectionInput
}

export type MutationCreateUserContentPackArgs = {
  inputs: Array<CreateUserContentPackInput>
}

export type MutationDeleteContentArgs = {
  id: Scalars['String']
}

export type MutationDeleteContentPackArgs = {
  id: Scalars['String']
}

export type MutationDeleteCredentialArgs = {
  credentialKey: Scalars['String']
}

export type MutationDeleteCustomMenuArgs = {
  customMenuIdList: Array<InputMaybe<Scalars['ID']>>
}

export type MutationDeleteDataSecurityArgs = {
  roleKey: Scalars['String']
  securityKeyList?: InputMaybe<Array<Scalars['String']>>
}

export type MutationDeleteEmailContactArgs = {
  email: Scalars['String']
  orgKey: Scalars['String']
}

export type MutationDeleteGatewayArgs = {
  gatewayId: Scalars['ID']
}

export type MutationDeleteInviteArgs = {
  inviteId: Scalars['ID']
  orgKey: Scalars['String']
}

export type MutationDeleteLocaleTextArgs = {
  dataKey: Scalars['String']
  orgKey?: InputMaybe<Scalars['String']>
}

export type MutationDeleteMasterDataArgs = {
  changeTo?: InputMaybe<Scalars['String']>
  dataKey: Scalars['String']
}

export type MutationDeleteNotificationTemplateArgs = {
  templateKey: Scalars['String']
}

export type MutationDeleteOrgAdminArgs = {
  orgKey: Scalars['String']
  userId: Scalars['ID']
}

export type MutationDeleteOrganizationArgs = {
  orgKey: Scalars['String']
}

export type MutationDeleteOrganizationLabelArgs = {
  orgLabelId: Scalars['ID']
}

export type MutationDeleteOrganizationTypeArgs = {
  orgTypeId: Scalars['ID']
}

export type MutationDeletePermissionArgs = {
  permissionKeyList: Array<Scalars['String']>
  roleKey: Scalars['String']
}

export type MutationDeleteResourceAdminArgs = {
  userId: Scalars['ID']
}

export type MutationDeleteResourceAdminPermissionArgs = {
  appKey: Scalars['String']
  permissionKeyList?: InputMaybe<Array<Scalars['String']>>
  roleKey: Scalars['String']
}

export type MutationDeleteResourceOwnerPermissionArgs = {
  appKey: Scalars['String']
  permissionKeyList?: InputMaybe<Array<Scalars['String']>>
  roleKey: Scalars['String']
}

export type MutationDeleteRoleArgs = {
  roleKeyToDelete: Scalars['String']
  roleKeyToMove: Scalars['String']
}

export type MutationDeleteRunningNumberArgs = {
  runningId?: InputMaybe<Array<Scalars['String']>>
}

export type MutationDeleteSectionArgs = {
  id: Scalars['String']
}

export type MutationDeleteThemeArgs = {
  themeKey: Scalars['String']
}

export type MutationDeleteUserContentPackArgs = {
  id: Scalars['String']
}

export type MutationDeleteUserOrganizationArgs = {
  inviteId: Scalars['ID']
  orgKey: Scalars['String']
}

export type MutationDeleteUserOrganizationByUserIdArgs = {
  orgKey: Scalars['String']
  userId: Scalars['ID']
}

export type MutationDeleteVersionControlArgs = {
  versionKey?: InputMaybe<Scalars['String']>
}

export type MutationDisableServiceFeatureArgs = {
  featureKeyList?: InputMaybe<Array<Scalars['String']>>
}

export type MutationEnableServiceFeatureArgs = {
  featureKeyList?: InputMaybe<Array<Scalars['String']>>
}

export type MutationGenerateRunningNumberArgs = {
  input?: InputMaybe<Input_Generate_Running_Number>
}

export type MutationGetOrgAccessTokenArgs = {
  accessToken: Scalars['String']
  orgKey: Scalars['String']
}

export type MutationGetS3GetObjectSignedUrlArgs = {
  fileKeys?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type MutationGetS3PutObjectSignedUrlArgs = {
  inputs?: InputMaybe<Array<InputMaybe<Input_S3_Put_Object_Signed_Url>>>
  userId?: InputMaybe<Scalars['ID']>
}

export type MutationGetTokenAuthCodeArgs = {
  code: Scalars['String']
}

export type MutationInviteOrganizationCodeArgs = {
  inviteCode: Scalars['String']
}

export type MutationInviteUserOrganizationArgs = {
  emailList?: InputMaybe<Array<InputMaybe<Input_Invite_Email_List>>>
  orgKey: Scalars['String']
}

export type MutationLogOutUserArgs = {
  userId: Scalars['String']
}

export type MutationLoginAppleArgs = {
  appleToken: Scalars['String']
  userId: Scalars['String']
}

export type MutationLoginEmailArgs = {
  authType: Enum_Auth_Type
  email: Scalars['String']
  password: Scalars['String']
  redirectUrl?: InputMaybe<Scalars['String']>
}

export type MutationLoginFacebookArgs = {
  authType: Enum_Auth_Type
  facebookToken: Scalars['String']
  redirectUrl?: InputMaybe<Scalars['String']>
}

export type MutationLoginGoogleArgs = {
  authType: Enum_Auth_Type
  googleToken: Scalars['String']
  redirectUrl?: InputMaybe<Scalars['String']>
}

export type MutationLoginLineArgs = {
  authType: Enum_Auth_Type
  lineToken: Scalars['String']
  redirectUrl?: InputMaybe<Scalars['String']>
}

export type MutationLoginPhoneNumberArgs = {
  phoneNumber: Scalars['String']
  redirectUrl?: InputMaybe<Scalars['String']>
}

export type MutationLoginPhoneNumberConfirmArgs = {
  otpCode: Scalars['String']
  phoneNumber: Scalars['String']
  redirectUrl?: InputMaybe<Scalars['String']>
}

export type MutationLoginPhoneNumberConfirmOrgArgs = {
  otpCode: Scalars['String']
  phoneNumber: Scalars['String']
  redirectUrl?: InputMaybe<Scalars['String']>
}

export type MutationLoginUsernameArgs = {
  password: Scalars['String']
  username: Scalars['String']
}

export type MutationLoginWithAuthCodeArgs = {
  input: Input_Login_Auth_Code
}

export type MutationPinConfirmArgs = {
  pin: Scalars['String']
}

export type MutationReadNotificationArgs = {
  notificationIdList: Array<Scalars['String']>
}

export type MutationRefreshAccessTokenArgs = {
  refreshToken: Scalars['String']
}

export type MutationRefreshOrgAccessTokenArgs = {
  refreshOrgToken: Scalars['String']
}

export type MutationRegisterEmailArgs = {
  input?: InputMaybe<Input_Email_Register_Input>
}

export type MutationRegisterOrgAdminArgs = {
  input?: InputMaybe<Input_Org_Admin_Register_Input>
}

export type MutationRegisterPhoneNumberArgs = {
  input?: InputMaybe<Input_Phone_Number_Register_Input>
}

export type MutationRegisterUsernameArgs = {
  input?: InputMaybe<Input_Username_Register>
}

export type MutationRemoveConfigArgs = {
  configKey: Scalars['String']
}

export type MutationRequestOtpArgs = {
  phoneNumber: Scalars['String']
}

export type MutationResendRegisterEmailArgs = {
  email: Scalars['String']
}

export type MutationResetPasswordEmailArgs = {
  email: Scalars['String']
}

export type MutationResetPasswordOtpArgs = {
  input?: InputMaybe<Input_Request_Otp>
}

export type MutationS3UploadFileArgs = {
  file?: InputMaybe<Scalars['FileUpload']>
  userId?: InputMaybe<Scalars['ID']>
}

export type MutationSendContactMailArgs = {
  input?: InputMaybe<Input_Send_Mail_Form>
}

export type MutationSendToVerifyEmailOrgArgs = {
  email: Scalars['String']
}

export type MutationSingleUploadArgs = {
  file: Scalars['FileUpload']
}

export type MutationSyncAppArgs = {
  appKey: Scalars['String']
  serviceKey?: InputMaybe<Scalars['String']>
}

export type MutationSyncOrganizationArgs = {
  orgKeyList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type MutationUpdateAppAttributeArgs = {
  attributeInput: Scalars['JSON']
}

export type MutationUpdateConfigArgs = {
  input?: InputMaybe<Input_Config_Form>
}

export type MutationUpdateContentArgs = {
  id: Scalars['String']
  input: UpdateContentInput
}

export type MutationUpdateContentPackArgs = {
  id: Scalars['String']
  input: CreateContentPackInput
}

export type MutationUpdateCredentialArgs = {
  credentialInput?: InputMaybe<Input_Credential_Form_Update>
  credentialKey: Scalars['String']
}

export type MutationUpdateCredentialKeyArgs = {
  credentialKey: Scalars['String']
  newCredentialKey: Scalars['String']
}

export type MutationUpdateCustomMenuArgs = {
  customMenuId: Scalars['ID']
  input?: InputMaybe<Input_Schema_Custom_Menu>
}

export type MutationUpdateDataSecurityArgs = {
  roleKey: Scalars['String']
  securityList?: InputMaybe<Array<InputMaybe<Input_Data_Security_Form>>>
}

export type MutationUpdateGatewayArgs = {
  gatewayId: Scalars['ID']
  input: Input_Gateway
}

export type MutationUpdateLocaleTextArgs = {
  dataInput?: InputMaybe<Input_Locale_Text_Form>
  dataKey: Scalars['String']
  orgKey?: InputMaybe<Scalars['String']>
}

export type MutationUpdateMyProfileArgs = {
  input?: InputMaybe<Input_Update_Profile>
}

export type MutationUpdateMyRoleApprovalAttributeArgs = {
  roleKey: Scalars['String']
  secureAttibute?: InputMaybe<Scalars['JSON']>
}

export type MutationUpdateNotificationTemplateArgs = {
  templateInput?: InputMaybe<Input_Scmema_Notification_Template>
  templateKey: Scalars['String']
}

export type MutationUpdateOAuthArgs = {
  input?: InputMaybe<Input_O_Auth_Form>
}

export type MutationUpdateOrgAdminRoleArgs = {
  orgKey: Scalars['String']
  roleList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  userId: Scalars['ID']
}

export type MutationUpdateOrgApprovalAttributeArgs = {
  input?: InputMaybe<Input_Organization_Approval_Form>
}

export type MutationUpdateOrgKeyArgs = {
  newOrgKey: Scalars['String']
  orgKey: Scalars['String']
}

export type MutationUpdateOrgStatusArgs = {
  note?: InputMaybe<Scalars['String']>
  orgKey: Scalars['String']
  status?: InputMaybe<Enum_Organization_Status>
}

export type MutationUpdateOrganizationArgs = {
  input?: InputMaybe<Input_Organization_Update>
  orgKey: Scalars['String']
  parentOrgKey?: InputMaybe<Scalars['String']>
}

export type MutationUpdateOrganizationLabelArgs = {
  input?: InputMaybe<Input_Organiztion_Label>
  orgLabelId: Scalars['ID']
}

export type MutationUpdateOrganizationTypeArgs = {
  input?: InputMaybe<Input_Organiztion_Type>
  orgTypeId: Scalars['ID']
}

export type MutationUpdatePermissionArgs = {
  permissionList?: InputMaybe<Array<InputMaybe<Input_Permission_Form>>>
  roleKey: Scalars['String']
}

export type MutationUpdateResourceAdminArgs = {
  adminInput?: InputMaybe<Input_Update_Profile>
  userId: Scalars['ID']
}

export type MutationUpdateResourceAdminPermissionArgs = {
  appKey: Scalars['String']
  permissionList?: InputMaybe<Array<InputMaybe<Input_Permission_Form>>>
  roleKey: Scalars['String']
}

export type MutationUpdateResourceOwnerPermissionArgs = {
  appKey: Scalars['String']
  permissionList?: InputMaybe<Array<InputMaybe<Input_Permission_Form>>>
  roleKey: Scalars['String']
}

export type MutationUpdateResourceOwnerProfileArgs = {
  input?: InputMaybe<Input_Update_Profile>
  resourceOwnerId: Scalars['ID']
}

export type MutationUpdateRoleArgs = {
  roleInput?: InputMaybe<Input_Role_From>
  roleKey: Scalars['String']
}

export type MutationUpdateSecretKeyArgs = {
  credentialKey: Scalars['String']
  newSecretKey: Scalars['String']
}

export type MutationUpdateSectionArgs = {
  id: Scalars['String']
  input: UpdateSectionInput
}

export type MutationUpdateThemeArgs = {
  input?: InputMaybe<Input_Theme_Form>
}

export type MutationUpdateUserContentPackArgs = {
  id: Scalars['String']
  input: CreateUserContentPackInput
}

export type MutationUpdateVersionControlArgs = {
  attribute?: InputMaybe<Scalars['JSON']>
  versionKey?: InputMaybe<Scalars['String']>
}

export type MutationVerifyEmailArgs = {
  input?: InputMaybe<Input_Verify_Email>
}

export type MutationVerifyEmailGlobalArgs = {
  input?: InputMaybe<Input_Verify_Email>
}

export type MutationVerifyEmailOrganizationArgs = {
  email: Scalars['String']
  verifyToken?: InputMaybe<Scalars['String']>
}

export type MutationVerifyInviteOrganizationArgs = {
  code: Scalars['String']
}

export type MutationVerifyOtpArgs = {
  otpCode: Scalars['String']
  phoneNumber: Scalars['String']
}

export type MutationVerifyPasswordEmailArgs = {
  input?: InputMaybe<Input_Verify_Password_Email>
}

export type MutationVerifyPhoneNumberUserArgs = {
  phoneNumber: Scalars['String']
}

export type Organization_List = {
  __typename?: 'ORGANIZATION_LIST'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  pagination?: Maybe<Type_Pagination>
  payload?: Maybe<Array<Maybe<Type_Organization_Response>>>
}

export type PaginatedFindType = {
  /** จำนวนสูงสุดที่ดึงใน 1 หน้า */
  limit?: InputMaybe<Scalars['Int']>
  /** หน้าที่เลือก */
  page?: InputMaybe<Scalars['Int']>
}

export type PaginatedType = {
  __typename?: 'PaginatedType'
  /** จำนวนสูงสุดที่ดึงใน 1 หน้า */
  limit: Scalars['Int']
  /** หมายเลขหน้า */
  page: Scalars['Int']
  /** จำนวน item ทั้งหมด */
  totalItems: Scalars['Int']
  /** จำนวนหน้าทั้งหมด */
  totalPages: Scalars['Int']
}

export type Price = {
  /** Price */
  basePrice?: InputMaybe<Scalars['Float']>
  /** Discount */
  discount?: InputMaybe<Scalars['Float']>
  /** Price */
  price?: InputMaybe<Scalars['Float']>
  /** Vat (%) */
  vatPercent?: InputMaybe<Scalars['Float']>
}

export type PriceResp = {
  __typename?: 'PriceResp'
  /** Price */
  basePrice: Scalars['Float']
  /** Discount */
  discount: Scalars['Float']
  /**
   * Price
   * @deprecated Change to use basePrice
   */
  price: Scalars['Float']
  /** Total price */
  totalPrice: Scalars['Float']
  /** Vat (%) */
  vatPercent: Scalars['Float']
  /** Vat (calculate price and vatPercent) */
  vatPrice: Scalars['Float']
}

export type Query = {
  __typename?: 'Query'
  _dummy?: Maybe<Scalars['String']>
  exportUser?: Maybe<Type_Type_Role_Permission_User_List>
  generateKey?: Maybe<Type_Generate_Key_Response>
  generateOrgTokenRef?: Maybe<Type_Org_Token_Ref>
  getAllOrganization?: Maybe<Organization_List>
  getAppByCredential?: Maybe<Get_App_Credential_Host>
  getAppByEmail?: Maybe<Get_App_By_Email>
  getAppService?: Maybe<Type_App_Service_List>
  getAppTheme?: Maybe<Type_Theme_Response_List>
  getConfig?: Maybe<Type_Config_List>
  /** view content data */
  getContentByID: ContentResponse
  /** view content's data list */
  getContentList: ContentResponsePaginate
  /** view contentPack data */
  getContentPackByID: ContentPackResponse
  /** view contentPack's data list */
  getContentPackList: ContentPackResponsePaginate
  getCredential?: Maybe<Type_Credential_List>
  getCredentialByHost?: Maybe<Get_App_Credential_Host>
  /** view content data by contentPackID */
  getCurrentContentByContentPackID: ContentResponse
  getCustomMenu?: Maybe<Type_Custom_Menu_List>
  getDataRunningNumber?: Maybe<Type_Running_Number_List>
  getDataSecurityRole?: Maybe<Type_Data_Security_List>
  getGateway?: Maybe<Type_Gateway>
  /** view contentPack's data list follow by categories */
  getGroupContentPack: CategoryContentPackResponseList
  getInviteOrgRole?: Maybe<Type_App_Role_List>
  getInviteRole?: Maybe<Type_App_Role_List>
  getInviteUserOrganization?: Maybe<Type_Invite_List>
  getLocaleText?: Maybe<Type_Locale_Text_List>
  getLog?: Maybe<Type_Log_List>
  getMasterData?: Maybe<Type_Master_Data_List>
  getMemberOrganization?: Maybe<Type_Profile_List>
  getMyAppRole?: Maybe<Type_My_Org_Role>
  /** view user contentPack's data list */
  getMyContentPackList: UserContentPackResponsePaginate
  getMyNotification?: Maybe<Type_Notification_List>
  getMyOrgRole?: Maybe<Type_My_Org_Role>
  getMyOrganization?: Maybe<Type_Organization>
  /** getMyPermission */
  getMyPermission?: Maybe<Type_Type_Role_Permission_User_List>
  getMyProfile?: Maybe<Type_Profile>
  getMyRoleApprovalAttribute?: Maybe<Type_Role_Aproval_Attribute>
  getNotificationMessage?: Maybe<Type_Notification_Message_List>
  getNotificationTemplate?: Maybe<Type_Notification_Template_List>
  getOAuth?: Maybe<Type_O_Auth>
  getOrgAccessTokenWithRef?: Maybe<Type_Org_Accees_Token>
  getOrgAdmin?: Maybe<Type_Profile_List>
  getOrgAndUser?: Maybe<Type_Profile_Org>
  getOrgApprovalAttribute?: Maybe<Type_Organization_Approval_List>
  getOrgByPhoneNumber?: Maybe<Type_Profile_Org>
  getOrgChildren?: Maybe<Type_Org_Children>
  getOrganization?: Maybe<Organization_List>
  getOrganizationApproval?: Maybe<Organization_List>
  getOrganizationByCoordinates?: Maybe<Organization_List>
  getOrganizationByName?: Maybe<Organization_List>
  getOrganizationLabel?: Maybe<Type_Organization_Label_List>
  getOrganizationType?: Maybe<Type_Organization_Type_List>
  getPermissionRole?: Maybe<Type_Permission_List>
  getProfile?: Maybe<Type_Profile_List>
  getPublicAppConfig?: Maybe<Type_Config_List>
  getPublicProfile?: Maybe<Type_Profile_List>
  /** view recommend contentPack's data list */
  getRecommendContentPack: ContentPackResponsePaginate
  getResourceAdmin?: Maybe<Type_Profile_List>
  getResourceAdminPermission?: Maybe<Type_Type_Role_Permission_User_List>
  getResourceAdminRoleApprovalAttribute?: Maybe<Type_Role_Aproval_Attribute_List>
  getResourceOwnerPermission?: Maybe<Type_Type_Role_Permission_User_List>
  getResourceOwnerProfile?: Maybe<Type_Profile_List>
  getResourceOwnerRoleApprovalAttribute?: Maybe<Type_Role_Aproval_Attribute_List>
  getRole?: Maybe<Type_App_Role_List>
  getRoleRegisable?: Maybe<Type_App_Role_List>
  getS3GetObjectSignedUrl?: Maybe<Type_S3_Signed_Url>
  getS3PutObjectSignedUrl?: Maybe<Type_S3_Signed_Url>
  getSecretAppConfig?: Maybe<Type_Config_List>
  /** view section data */
  getSectionByID: SectionResponse
  /** view section's data list */
  getSectionList: SectionResponsePaginate
  getService?: Maybe<Type_Service_List>
  getServiceFeature?: Maybe<Type_Feature_List>
  getServiceInfo?: Maybe<Type_Service_Info>
  getTokenAuthCode?: Maybe<Type_Login>
  /** view user contentPack data */
  getUserContentPackByID: UserContentPackResponse
  /** view user contentPack's data list */
  getUserContentPackList: UserContentPackResponsePaginate
  getVersionControl?: Maybe<Type_Version_Control_List>
  otherFields: Scalars['Boolean']
  webhookRunTaskAppNotification?: Maybe<Type_Webhook>
  webhookRunTaskEmail?: Maybe<Type_Webhook>
}

export type QueryGenerateKeyArgs = {
  capitalization?: InputMaybe<Enum_Generate_Key_Capitalization>
  charset?: InputMaybe<Scalars['String']>
  length?: InputMaybe<Scalars['Int']>
  readable?: InputMaybe<Scalars['Boolean']>
}

export type QueryGenerateOrgTokenRefArgs = {
  orgKey: Scalars['String']
}

export type QueryGetAllOrganizationArgs = {
  input?: InputMaybe<Input_Find_Data>
}

export type QueryGetAppByCredentialArgs = {
  credentialKey: Scalars['String']
}

export type QueryGetAppByEmailArgs = {
  email: Scalars['String']
}

export type QueryGetAppThemeArgs = {
  find?: InputMaybe<Input_Find_Data>
}

export type QueryGetConfigArgs = {
  input?: InputMaybe<Input_Find_Data>
}

export type QueryGetContentByIdArgs = {
  id: Scalars['String']
}

export type QueryGetContentListArgs = {
  input?: InputMaybe<ContentFindInput>
}

export type QueryGetContentPackByIdArgs = {
  id: Scalars['String']
}

export type QueryGetContentPackListArgs = {
  input?: InputMaybe<ContentPackFindInput>
}

export type QueryGetCredentialByHostArgs = {
  host: Scalars['String']
}

export type QueryGetCurrentContentByContentPackIdArgs = {
  id: Scalars['String']
}

export type QueryGetCustomMenuArgs = {
  input?: InputMaybe<Input_Find_Data>
}

export type QueryGetDataRunningNumberArgs = {
  input?: InputMaybe<Input_Find_Data>
}

export type QueryGetDataSecurityRoleArgs = {
  roleKey: Scalars['String']
}

export type QueryGetGatewayArgs = {
  input?: InputMaybe<Input_Find_Data>
}

export type QueryGetGroupContentPackArgs = {
  categoriesLimit?: InputMaybe<Scalars['Float']>
  contentPacksLimit?: InputMaybe<Scalars['Float']>
}

export type QueryGetInviteRoleArgs = {
  orgKey: Scalars['String']
}

export type QueryGetInviteUserOrganizationArgs = {
  input?: InputMaybe<Input_Find_Data>
  orgKey: Scalars['String']
}

export type QueryGetLocaleTextArgs = {
  input?: InputMaybe<Input_Find_Data>
}

export type QueryGetLogArgs = {
  input?: InputMaybe<Input_Find_Data>
}

export type QueryGetMasterDataArgs = {
  input?: InputMaybe<Input_Find_Data>
}

export type QueryGetMemberOrganizationArgs = {
  input?: InputMaybe<Input_Find_Data>
  orgKey: Scalars['String']
}

export type QueryGetMyContentPackListArgs = {
  input?: InputMaybe<UserContentPackFindInput>
}

export type QueryGetMyNotificationArgs = {
  find?: InputMaybe<Input_Find_Data>
}

export type QueryGetMyOrgRoleArgs = {
  orgKey: Scalars['String']
}

export type QueryGetMyPermissionArgs = {
  orgKey?: InputMaybe<Scalars['String']>
}

export type QueryGetNotificationMessageArgs = {
  find?: InputMaybe<Input_Find_Data>
}

export type QueryGetNotificationTemplateArgs = {
  find?: InputMaybe<Input_Find_Data>
}

export type QueryGetOrgAccessTokenWithRefArgs = {
  tokenRef: Scalars['String']
}

export type QueryGetOrgAdminArgs = {
  find?: InputMaybe<Input_Find_Data>
}

export type QueryGetOrgAndUserArgs = {
  orgKey: Scalars['String']
}

export type QueryGetOrgApprovalAttributeArgs = {
  input?: InputMaybe<Input_Find_Data>
}

export type QueryGetOrgByPhoneNumberArgs = {
  phoneNumber: Scalars['String']
}

export type QueryGetOrgChildrenArgs = {
  orgKey?: InputMaybe<Scalars['String']>
}

export type QueryGetOrganizationArgs = {
  input?: InputMaybe<Input_Find_Data>
}

export type QueryGetOrganizationApprovalArgs = {
  input?: InputMaybe<Input_Find_Data>
}

export type QueryGetOrganizationByCoordinatesArgs = {
  coordinates: Array<InputMaybe<Scalars['Number']>>
  distance: Scalars['Number']
  limit?: InputMaybe<Scalars['Number']>
}

export type QueryGetOrganizationByNameArgs = {
  input?: InputMaybe<Input_Find_Data>
  name?: InputMaybe<Scalars['String']>
}

export type QueryGetOrganizationLabelArgs = {
  find?: InputMaybe<Input_Find_Data>
}

export type QueryGetOrganizationTypeArgs = {
  find?: InputMaybe<Input_Find_Data>
}

export type QueryGetPermissionRoleArgs = {
  roleKey: Scalars['String']
}

export type QueryGetProfileArgs = {
  userIdList: Array<Scalars['ID']>
}

export type QueryGetPublicAppConfigArgs = {
  configKeyList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryGetPublicProfileArgs = {
  find?: InputMaybe<Input_Find_Data>
  userIdList: Array<InputMaybe<Scalars['ID']>>
}

export type QueryGetRecommendContentPackArgs = {
  input?: InputMaybe<ContentPackFindInput>
}

export type QueryGetResourceAdminArgs = {
  find?: InputMaybe<Input_Find_Data>
}

export type QueryGetResourceAdminPermissionArgs = {
  roleKeyList?: InputMaybe<Array<Scalars['String']>>
}

export type QueryGetResourceAdminRoleApprovalAttributeArgs = {
  input?: InputMaybe<Input_Find_Data>
}

export type QueryGetResourceOwnerPermissionArgs = {
  roleKeyList?: InputMaybe<Array<Scalars['String']>>
}

export type QueryGetResourceOwnerProfileArgs = {
  find?: InputMaybe<Input_Find_Data>
}

export type QueryGetResourceOwnerRoleApprovalAttributeArgs = {
  input?: InputMaybe<Input_Find_Data>
}

export type QueryGetRoleRegisableArgs = {
  roleKey?: InputMaybe<Scalars['String']>
}

export type QueryGetS3GetObjectSignedUrlArgs = {
  fileKeys?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryGetS3PutObjectSignedUrlArgs = {
  inputs?: InputMaybe<Array<InputMaybe<Input_S3_Put_Object_Signed_Url>>>
  userId?: InputMaybe<Scalars['ID']>
}

export type QueryGetSecretAppConfigArgs = {
  configKeyList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryGetSectionByIdArgs = {
  id: Scalars['String']
}

export type QueryGetSectionListArgs = {
  input?: InputMaybe<SectionFindInput>
}

export type QueryGetServiceArgs = {
  input?: InputMaybe<Input_Find_Data>
}

export type QueryGetServiceInfoArgs = {
  serviceKey: Scalars['String']
}

export type QueryGetTokenAuthCodeArgs = {
  code: Scalars['String']
}

export type QueryGetUserContentPackByIdArgs = {
  id: Scalars['String']
}

export type QueryGetUserContentPackListArgs = {
  input?: InputMaybe<UserContentPackFindInput>
}

export type QueryGetVersionControlArgs = {
  find?: InputMaybe<Input_Find_Data>
}

export type QueryWebhookRunTaskAppNotificationArgs = {
  secretKey: Scalars['String']
}

export type QueryWebhookRunTaskEmailArgs = {
  secretKey: Scalars['String']
}

export enum Sort_Order {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type SectionFindInput = {
  /** สำหรับกรณีที่ใช้เงื่อนไขการค้นหาเป็น and */
  filter?: InputMaybe<SectionFindSchemaInput>
  pagination?: InputMaybe<PaginatedFindType>
  /** สำหรับกรณีที่ใช้เงื่อนไขการค้นหาเป็น or และใช้ regex เป็นการค้นหาข้อมูลที่เป็น string */
  search?: InputMaybe<SectionFindSchemaInput>
  sort?: InputMaybe<SectionSortInput>
}

export type SectionFindSchemaInput = {
  /** Use for save section to contentPack */
  contentPackID?: InputMaybe<Scalars['String']>
  /** Section' status */
  status?: InputMaybe<ActiveStatus>
  /** Section's title */
  title?: InputMaybe<Scalars['String']>
}

export type SectionResponse = {
  __typename?: 'SectionResponse'
  /** โค้ดของการตอบสนอง */
  code?: Maybe<Scalars['String']>
  /** ข้อความตอบสนอง */
  message?: Maybe<Scalars['String']>
  /** data */
  payload?: Maybe<SectionResult>
}

export type SectionResponsePaginate = {
  __typename?: 'SectionResponsePaginate'
  /** โค้ดของการตอบสนอง */
  code?: Maybe<Scalars['String']>
  /** ข้อความตอบสนอง */
  message?: Maybe<Scalars['String']>
  /** pagination data */
  pagination?: Maybe<PaginatedType>
  /** array data */
  payload?: Maybe<Array<SectionResult>>
}

export type SectionResult = {
  __typename?: 'SectionResult'
  _id?: Maybe<Scalars['String']>
  /** Use for save section to contentPack */
  contentPackID: Scalars['String']
  /** content data list */
  contents: Array<ContentResult>
  /** Section's description */
  description?: Maybe<Scalars['String']>
  /** All content' video time length of (seconds) in section. EX: 46979 */
  length?: Maybe<Scalars['Float']>
  /** All content' video time text in section. Ex: '13:02:59' */
  lengthText?: Maybe<Scalars['String']>
  /** number of contents in section */
  numOfContent: Scalars['Float']
  /** Order for sort section when show sections */
  sortOrder: Scalars['Float']
  /** Section' status */
  status: ActiveStatus
  /** Section's title */
  title?: Maybe<Scalars['String']>
}

export type SectionSearchInput = {
  /** Section' Object */
  section?: InputMaybe<SectionSearchProps>
  /** Section' ID */
  sectionID?: InputMaybe<Scalars['String']>
}

export type SectionSearchProps = {
  /** number of contents in section */
  numOfContent?: InputMaybe<Scalars['Float']>
  /** Organization' Key */
  orgKey?: InputMaybe<Scalars['String']>
  /** Order for sort section when show sections */
  sortOrder?: InputMaybe<Scalars['Float']>
  /** Section' status */
  status?: InputMaybe<ActiveStatus>
  /** Section's title */
  title?: InputMaybe<Scalars['String']>
}

export type SectionSortInput = {
  createdAt?: InputMaybe<Sort_Order>
  sortOrder?: InputMaybe<Sort_Order>
}

export type Subscription = {
  __typename?: 'Subscription'
  _dummy?: Maybe<Scalars['String']>
  getMyNotification?: Maybe<Type_Notification_List>
}

export type SubscriptionGetMyNotificationArgs = {
  find?: InputMaybe<Input_Find_Data>
}

export type Type_App = {
  __typename?: 'TYPE_APP'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_App_Schema>
}

export type Type_App_Accees_Token = {
  __typename?: 'TYPE_APP_ACCEES_TOKEN'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_App_Accees_Token_Payload>
}

export type Type_App_Accees_Token_Payload = {
  __typename?: 'TYPE_APP_ACCEES_TOKEN_PAYLOAD'
  app?: Maybe<Type_Organization_Response>
  profile?: Maybe<Type_User_Profile>
  token?: Maybe<Type_App_Accees_Token_Payload_Token>
}

export type Type_App_Accees_Token_Payload_Token = {
  __typename?: 'TYPE_APP_ACCEES_TOKEN_PAYLOAD_TOKEN'
  appAccessToken?: Maybe<Scalars['String']>
  appRefreshToken?: Maybe<Scalars['String']>
}

export type Type_App_Credential = {
  __typename?: 'TYPE_APP_CREDENTIAL'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Array<Maybe<Type_App_Credential_Payload>>>
}

export type Type_App_Credential_Payload = {
  __typename?: 'TYPE_APP_CREDENTIAL_PAYLOAD'
  app?: Maybe<Type_App_Schema>
  credential?: Maybe<Type_Credential_Schema>
}

export type Type_App_Feature_Key = {
  __typename?: 'TYPE_APP_FEATURE_KEY'
  _id?: Maybe<Scalars['ID']>
  description?: Maybe<Scalars['String']>
  enable?: Maybe<Scalars['Boolean']>
  key?: Maybe<Scalars['String']>
  serviceId?: Maybe<Scalars['ID']>
}

export type Type_App_List = {
  __typename?: 'TYPE_APP_LIST'
  pagination?: Maybe<Type_Pagination>
  payload?: Maybe<Array<Maybe<Type_App_Schema>>>
}

export type Type_App_Role = {
  __typename?: 'TYPE_APP_ROLE'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_App_Role_Payload>
}

export type Type_App_Role_List = {
  __typename?: 'TYPE_APP_ROLE_LIST'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_App_Role_List_Payload>
}

export type Type_App_Role_List_Payload = {
  __typename?: 'TYPE_APP_ROLE_LIST_PAYLOAD'
  app?: Maybe<Type_App_Schema>
  roleList?: Maybe<Array<Maybe<Type_Role>>>
}

export type Type_App_Role_Payload = {
  __typename?: 'TYPE_APP_ROLE_PAYLOAD'
  app?: Maybe<Type_App_Schema>
  roleList?: Maybe<Array<Maybe<Type_Role>>>
  serviceList?: Maybe<Array<Maybe<Type_Service_List_Payload>>>
}

export type Type_App_Schema = {
  __typename?: 'TYPE_APP_SCHEMA'
  appKey?: Maybe<Scalars['String']>
  attribute?: Maybe<Scalars['JSON']>
  configurationList?: Maybe<Array<Maybe<Type_Config_Global>>>
  contactEmailList?: Maybe<Array<Maybe<Scalars['String']>>>
  featureList?: Maybe<Array<Maybe<Type_Feature_Schema>>>
  name?: Maybe<Scalars['String']>
  orgFieldList?: Maybe<Array<Maybe<Scalars['JSON']>>>
  roleList?: Maybe<Array<Maybe<Scalars['JSON']>>>
  status?: Maybe<Enum_App_Status>
}

export type Type_App_Service = {
  __typename?: 'TYPE_APP_SERVICE'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_App_Service_Payload>
}

export type Type_App_Service_List = {
  __typename?: 'TYPE_APP_SERVICE_LIST'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_App_Service_List_Payload>
}

export type Type_App_Service_List_Payload = {
  __typename?: 'TYPE_APP_SERVICE_LIST_PAYLOAD'
  app?: Maybe<Type_App_Schema>
  serviceList?: Maybe<Array<Maybe<Type_Service>>>
}

export type Type_App_Service_Payload = {
  __typename?: 'TYPE_APP_SERVICE_PAYLOAD'
  app?: Maybe<Type_App_Schema>
  service?: Maybe<Type_Service>
  syncStatus?: Maybe<Scalars['String']>
}

export type Type_Attribute = {
  __typename?: 'TYPE_ATTRIBUTE'
  _id?: Maybe<Scalars['ID']>
  key?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export type Type_Auth_Code = {
  __typename?: 'TYPE_AUTH_CODE'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_Auth_Code_Payload>
}

export type Type_Auth_Code_Payload = {
  __typename?: 'TYPE_AUTH_CODE_PAYLOAD'
  authType?: Maybe<Scalars['String']>
  code?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  redirectUrl?: Maybe<Scalars['String']>
}

export type Type_Aws = {
  __typename?: 'TYPE_AWS'
  _id?: Maybe<Scalars['ID']>
  accessKey?: Maybe<Scalars['String']>
  bucketName?: Maybe<Scalars['String']>
  cloudWatchEnable?: Maybe<Scalars['Boolean']>
  endpoint?: Maybe<Scalars['String']>
  secretKey?: Maybe<Scalars['String']>
}

export type Type_Category = {
  __typename?: 'TYPE_CATEGORY'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_Category_Schema>
}

export type Type_Category_List = {
  __typename?: 'TYPE_CATEGORY_LIST'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  pagination?: Maybe<Type_Pagination>
  payload?: Maybe<Array<Maybe<Type_Category_Schema>>>
}

export type Type_Category_Schema = {
  __typename?: 'TYPE_CATEGORY_SCHEMA'
  _id?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['Date']>
  createdBy?: Maybe<Type_User_Profile>
  name?: Maybe<Scalars['String']>
  status?: Maybe<Enum_Category_Status>
  updatedAt?: Maybe<Scalars['Date']>
  updatedBy?: Maybe<Type_User_Profile>
}

export type Type_Check_Verify_Email = {
  __typename?: 'TYPE_CHECK_VERIFY_EMAIL'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  verifyStatus?: Maybe<Scalars['String']>
}

export type Type_Config = {
  __typename?: 'TYPE_CONFIG'
  configKey?: Maybe<Scalars['String']>
  configName?: Maybe<Scalars['String']>
  isGlobal?: Maybe<Scalars['Boolean']>
  privacy?: Maybe<Enum_Config_Privacy>
  relatedConfig?: Maybe<Array<Maybe<Scalars['String']>>>
  value?: Maybe<Scalars['JSON']>
}

export type Type_Config_Global = {
  __typename?: 'TYPE_CONFIG_GLOBAL'
  configKey?: Maybe<Scalars['String']>
  configName?: Maybe<Scalars['String']>
  isGlobal?: Maybe<Scalars['Boolean']>
  relatedConfig?: Maybe<Array<Maybe<Scalars['String']>>>
  value?: Maybe<Type_Value_Config_Global>
}

export type Type_Config_List = {
  __typename?: 'TYPE_CONFIG_LIST'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  pagination?: Maybe<Type_Pagination>
  payload?: Maybe<Array<Maybe<Type_Config>>>
}

export type Type_Credential = {
  __typename?: 'TYPE_CREDENTIAL'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_Credential_Payload>
}

export type Type_Credential_List = {
  __typename?: 'TYPE_CREDENTIAL_LIST'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_Credential_List_Payload>
}

export type Type_Credential_List_Payload = {
  __typename?: 'TYPE_CREDENTIAL_LIST_PAYLOAD'
  app?: Maybe<Type_App_Schema>
  credentialList?: Maybe<Array<Maybe<Type_Credential_Schema>>>
}

export type Type_Credential_Payload = {
  __typename?: 'TYPE_CREDENTIAL_PAYLOAD'
  credential?: Maybe<Type_Credential_Schema>
  serviceList?: Maybe<Array<Maybe<Type_Service_List_Payload>>>
}

export type Type_Credential_Schema = {
  __typename?: 'TYPE_CREDENTIAL_SCHEMA'
  credentialKey?: Maybe<Scalars['String']>
  expiration?: Maybe<Type_Expiration>
  hostList?: Maybe<Array<Maybe<Scalars['String']>>>
  isAdminCredential?: Maybe<Enum_Is>
  name?: Maybe<Scalars['String']>
  secretKey?: Maybe<Scalars['String']>
  status?: Maybe<Enum_App_Status>
  type?: Maybe<Enum_Credential_Type>
}

export type Type_Custom_Menu = {
  __typename?: 'TYPE_CUSTOM_MENU'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_Schema_Custom_Menu>
}

export type Type_Custom_Menu_List = {
  __typename?: 'TYPE_CUSTOM_MENU_LIST'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  pagination?: Maybe<Type_Pagination>
  payload?: Maybe<Array<Maybe<Type_Schema_Custom_Menu>>>
}

export type Type_Data_Security_List = {
  __typename?: 'TYPE_DATA_SECURITY_LIST'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Array<Maybe<Type_Role_Data_Security>>>
}

export type Type_Email = {
  __typename?: 'TYPE_EMAIL'
  value?: Maybe<Scalars['String']>
  verifyStatus?: Maybe<Enum_Verify_Status>
}

export type Type_Email_Register = {
  __typename?: 'TYPE_EMAIL_REGISTER'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_User_Profile>
}

export type Type_Endpoin_Service = {
  __typename?: 'TYPE_ENDPOIN_SERVICE'
  resourceAdmin?: Maybe<Scalars['String']>
  resourceOwner?: Maybe<Scalars['String']>
  system?: Maybe<Scalars['String']>
}

export type Type_Endpoin_Service_Type = {
  __typename?: 'TYPE_ENDPOIN_SERVICE_TYPE'
  gql?: Maybe<Type_Endpoin_Service>
  rest?: Maybe<Type_Endpoin_Service>
}

export type Type_Expiration = {
  __typename?: 'TYPE_EXPIRATION'
  access?: Maybe<Scalars['String']>
  refresh?: Maybe<Scalars['String']>
}

export type Type_Feature_Key = {
  __typename?: 'TYPE_FEATURE_KEY'
  _id?: Maybe<Scalars['ID']>
  description?: Maybe<Scalars['String']>
  enable?: Maybe<Scalars['Boolean']>
  key?: Maybe<Scalars['String']>
}

export type Type_Feature_List = {
  __typename?: 'TYPE_FEATURE_LIST'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_Feature_List_Payload>
}

export type Type_Feature_List_Payload = {
  __typename?: 'TYPE_FEATURE_LIST_PAYLOAD'
  app?: Maybe<Type_App_Schema>
  featureList?: Maybe<Array<Maybe<Type_Feature_Schema>>>
}

export type Type_Feature_Schema = {
  __typename?: 'TYPE_FEATURE_SCHEMA'
  config?: Maybe<Scalars['JSON']>
  enable?: Maybe<Scalars['Boolean']>
  featureKey?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  requiredFeatureKeyList?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type Type_Gateway = {
  __typename?: 'TYPE_GATEWAY'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  pagination?: Maybe<Type_Pagination>
  payload?: Maybe<Array<Maybe<Type_Schema_Gateway>>>
}

export type Type_Gateway_List = {
  __typename?: 'TYPE_GATEWAY_LIST'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_Schema_Gateway>
}

export type Type_Generate_Key = {
  __typename?: 'TYPE_GENERATE_KEY'
  key?: Maybe<Scalars['String']>
}

export type Type_Generate_Key_Response = {
  __typename?: 'TYPE_GENERATE_KEY_RESPONSE'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_Generate_Key>
}

export type Type_Generate_Running_Number = {
  __typename?: 'TYPE_GENERATE_RUNNING_NUMBER'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_Running_Number_No>
}

export type Type_Hello = {
  __typename?: 'TYPE_HELLO'
  message?: Maybe<Scalars['String']>
}

export type Type_Invite = {
  __typename?: 'TYPE_INVITE'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_Schema_Invite>
}

export type Type_Invite_List = {
  __typename?: 'TYPE_INVITE_LIST'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  pagination?: Maybe<Type_Pagination>
  payload?: Maybe<Array<Maybe<Type_Schema_Invite>>>
}

export type Type_Json = {
  __typename?: 'TYPE_JSON'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Scalars['JSON']>
}

export type Type_Key = {
  __typename?: 'TYPE_KEY'
  _id?: Maybe<Scalars['ID']>
  code?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export type Type_Line = {
  __typename?: 'TYPE_LINE'
  login?: Maybe<Type_Line_Login>
  notify?: Maybe<Type_Notify>
}

export type Type_Line_Login = {
  __typename?: 'TYPE_LINE_LOGIN'
  _id?: Maybe<Scalars['ID']>
  clientId?: Maybe<Scalars['String']>
  clientSecret?: Maybe<Scalars['String']>
  redirectUri?: Maybe<Scalars['String']>
}

export type Type_Locale_Text = {
  __typename?: 'TYPE_LOCALE_TEXT'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_Locale_Text_Response>
}

export type Type_Locale_Text_List = {
  __typename?: 'TYPE_LOCALE_TEXT_LIST'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  pagination?: Maybe<Type_Pagination>
  payload?: Maybe<Array<Maybe<Type_Locale_Text_Response>>>
}

export type Type_Locale_Text_Response = {
  __typename?: 'TYPE_LOCALE_TEXT_RESPONSE'
  attribute?: Maybe<Scalars['JSON']>
  dataKey?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
  orgKey?: Maybe<Scalars['String']>
  text?: Maybe<Scalars['String']>
}

export type Type_Login = {
  __typename?: 'TYPE_LOGIN'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_Login_Payload>
}

export type Type_Login_Payload = {
  __typename?: 'TYPE_LOGIN_PAYLOAD'
  authType?: Maybe<Enum_Auth_Type>
  code?: Maybe<Scalars['String']>
  credentialKey?: Maybe<Scalars['String']>
  isFirstLogin?: Maybe<Scalars['Boolean']>
  organization?: Maybe<Type_Organization_Response>
  profile?: Maybe<Type_User_Profile>
  redirectUrl?: Maybe<Scalars['String']>
  token?: Maybe<Type_Token>
}

export type Type_Logout = {
  __typename?: 'TYPE_LOGOUT'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_User_Profile>
}

export type Type_Log_List = {
  __typename?: 'TYPE_LOG_LIST'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  pagination?: Maybe<Type_Pagination>
  payload?: Maybe<Array<Maybe<Type_Log_Schema>>>
}

export type Type_Log_Schema = {
  __typename?: 'TYPE_LOG_SCHEMA'
  action?: Maybe<Scalars['String']>
  actor?: Maybe<Scalars['JSON']>
  createdAt?: Maybe<Scalars['Date']>
  eventKey?: Maybe<Scalars['String']>
  eventName?: Maybe<Scalars['String']>
  ipAddress?: Maybe<Scalars['String']>
  isSystemLog?: Maybe<Scalars['Boolean']>
  message?: Maybe<Scalars['String']>
  nextData?: Maybe<Scalars['JSON']>
  prevData?: Maybe<Scalars['JSON']>
  service?: Maybe<Scalars['JSON']>
  updatedAt?: Maybe<Scalars['Date']>
  userAgent?: Maybe<Scalars['String']>
}

export type Type_Master_Data = {
  __typename?: 'TYPE_MASTER_DATA'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_Master_Data_Response>
}

export type Type_Master_Data_List = {
  __typename?: 'TYPE_MASTER_DATA_LIST'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  pagination?: Maybe<Type_Pagination>
  payload?: Maybe<Array<Maybe<Type_Master_Data_Response>>>
}

export type Type_Master_Data_Response = {
  __typename?: 'TYPE_MASTER_DATA_RESPONSE'
  attribute?: Maybe<Scalars['JSON']>
  dataKey?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
  parentKey?: Maybe<Scalars['String']>
  searchable?: Maybe<Enum_Is>
  text?: Maybe<Scalars['String']>
}

export type Type_Message = {
  __typename?: 'TYPE_MESSAGE'
  message?: Maybe<Scalars['String']>
  success?: Maybe<Scalars['Boolean']>
}

export type Type_My_Org_Role = {
  __typename?: 'TYPE_MY_ORG_ROLE'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Array<Maybe<Type_Role>>>
}

export type Type_Name = {
  __typename?: 'TYPE_NAME'
  name?: Maybe<Scalars['String']>
  name_en?: Maybe<Scalars['String']>
}

export type Type_Notification = {
  __typename?: 'TYPE_NOTIFICATION'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_Notification_Schema>
}

export type Type_Notification_Data_Key = {
  __typename?: 'TYPE_NOTIFICATION_DATA_KEY'
  dataKey?: Maybe<Scalars['String']>
  defaultValue?: Maybe<Scalars['String']>
  isRequired?: Maybe<Enum_Notification_Is_Required>
}

export type Type_Notification_List = {
  __typename?: 'TYPE_NOTIFICATION_LIST'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  pagination?: Maybe<Type_Pagination>
  payload?: Maybe<Array<Maybe<Type_Notification_Schema>>>
  unread?: Maybe<Scalars['Number']>
}

export type Type_Notification_Message = {
  __typename?: 'TYPE_NOTIFICATION_MESSAGE'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_Notification_Message_Schema>
}

export type Type_Notification_Message_Count = {
  __typename?: 'TYPE_NOTIFICATION_MESSAGE_COUNT'
  totalSuccess?: Maybe<Scalars['Number']>
}

export type Type_Notification_Message_Count_Payload = {
  __typename?: 'TYPE_NOTIFICATION_MESSAGE_COUNT_PAYLOAD'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_Notification_Message_Count>
}

export type Type_Notification_Message_List = {
  __typename?: 'TYPE_NOTIFICATION_MESSAGE_LIST'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  pagination?: Maybe<Type_Pagination>
  payload?: Maybe<Array<Maybe<Type_Notification_Message_Schema>>>
}

export type Type_Notification_Message_Schema = {
  __typename?: 'TYPE_NOTIFICATION_MESSAGE_SCHEMA'
  _id?: Maybe<Scalars['ID']>
  channel?: Maybe<Type_Notification_Message_Schema_Channel>
  content?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Date']>
  displayTo?: Maybe<Scalars['String']>
  from?: Maybe<Scalars['String']>
  orgKey?: Maybe<Scalars['String']>
  sendAt?: Maybe<Scalars['Date']>
  sendType?: Maybe<Enum_Notification_Message_Sendtype>
  status?: Maybe<Enum_Notification_Message_Status>
  title?: Maybe<Scalars['String']>
  to?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['Date']>
}

export type Type_Notification_Message_Schema_Channel = {
  __typename?: 'TYPE_NOTIFICATION_MESSAGE_SCHEMA_CHANNEL'
  condition?: Maybe<Enum_Notification_Message_Channel_Condition>
  key?: Maybe<Enum_Notification_Message_Channel_Key>
}

export type Type_Notification_Schema = {
  __typename?: 'TYPE_NOTIFICATION_SCHEMA'
  _id?: Maybe<Scalars['ID']>
  attribute?: Maybe<Scalars['JSON']>
  content?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Date']>
  from?: Maybe<Scalars['String']>
  icon?: Maybe<Scalars['String']>
  read?: Maybe<Enum_Notification_Read>
  sendAt?: Maybe<Scalars['Date']>
  title?: Maybe<Scalars['String']>
  to?: Maybe<Scalars['String']>
  type?: Maybe<Enum_Notification_User_Type>
  updatedAt?: Maybe<Scalars['Date']>
}

export type Type_Notification_Template = {
  __typename?: 'TYPE_NOTIFICATION_TEMPLATE'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_Scmema_Notification_Template>
}

export type Type_Notification_Template_List = {
  __typename?: 'TYPE_NOTIFICATION_TEMPLATE_LIST'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  pagination?: Maybe<Type_Pagination>
  payload?: Maybe<Array<Maybe<Type_Scmema_Notification_Template>>>
}

export type Type_Notify = {
  __typename?: 'TYPE_NOTIFY'
  _id?: Maybe<Scalars['ID']>
  isSendNotify?: Maybe<Scalars['Boolean']>
  notificationDisabled?: Maybe<Scalars['Boolean']>
  notifyToken?: Maybe<Scalars['String']>
}

export type Type_Number_Attribute = {
  __typename?: 'TYPE_NUMBER_ATTRIBUTE'
  _id?: Maybe<Scalars['ID']>
  key?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['Number']>
}

export type Type_Ok = {
  __typename?: 'TYPE_OK'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
}

export type Type_Organization = {
  __typename?: 'TYPE_ORGANIZATION'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_Organization_Response>
}

export type Type_Organization_Approval = {
  __typename?: 'TYPE_ORGANIZATION_APPROVAL'
  approvalAttribute?: Maybe<Scalars['JSON']>
  note?: Maybe<Scalars['String']>
  organization?: Maybe<Type_Organization_Response>
  status?: Maybe<Enum_Organization_Approval_Status>
}

export type Type_Organization_Approval_List = {
  __typename?: 'TYPE_ORGANIZATION_APPROVAL_LIST'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  pagination?: Maybe<Type_Pagination>
  payload?: Maybe<Array<Maybe<Type_Organization_Approval>>>
}

export type Type_Organization_Approval_Response = {
  __typename?: 'TYPE_ORGANIZATION_APPROVAL_RESPONSE'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_Organization_Approval>
}

export type Type_Organization_Contact_Email = {
  __typename?: 'TYPE_ORGANIZATION_CONTACT_EMAIL'
  value?: Maybe<Scalars['String']>
  verifyStatus?: Maybe<Scalars['String']>
}

export type Type_Organization_Label = {
  __typename?: 'TYPE_ORGANIZATION_LABEL'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_Organization_Label_Schema>
}

export type Type_Organization_Label_List = {
  __typename?: 'TYPE_ORGANIZATION_LABEL_LIST'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  pagination?: Maybe<Type_Pagination>
  payload?: Maybe<Array<Maybe<Type_Organization_Label_Schema>>>
}

export type Type_Organization_Label_Schema = {
  __typename?: 'TYPE_ORGANIZATION_LABEL_SCHEMA'
  _id?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['Date']>
  createdBy?: Maybe<Type_User_Profile>
  orgLabelDescription?: Maybe<Scalars['String']>
  orgLabelIcon?: Maybe<Scalars['String']>
  orgLabelName?: Maybe<Scalars['String']>
  orgLabelStatus?: Maybe<Enum_Organization_Label_Status>
  orgLabelTitle?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['Date']>
  updatedBy?: Maybe<Type_User_Profile>
}

export type Type_Organization_Locale_List = {
  __typename?: 'TYPE_ORGANIZATION_LOCALE_LIST'
  dataKey?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['JSON']>
  masterKey?: Maybe<Scalars['String']>
}

export type Type_Organization_Location = {
  __typename?: 'TYPE_ORGANIZATION_LOCATION'
  coordinates?: Maybe<Array<Maybe<Scalars['Number']>>>
  type?: Maybe<Scalars['String']>
}

export type Type_Organization_Master_Detail_List = {
  __typename?: 'TYPE_ORGANIZATION_MASTER_DETAIL_LIST'
  dataKey?: Maybe<Scalars['String']>
  masterData?: Maybe<Scalars['JSON']>
  masterKey?: Maybe<Scalars['String']>
}

export type Type_Organization_Response = {
  __typename?: 'TYPE_ORGANIZATION_RESPONSE'
  address?: Maybe<Scalars['JSON']>
  attribute?: Maybe<Scalars['JSON']>
  categoryList?: Maybe<Array<Maybe<Type_Category_Schema>>>
  contactEmailList?: Maybe<Array<Maybe<Scalars['String']>>>
  contactName?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Date']>
  location?: Maybe<Type_Organization_Location>
  name?: Maybe<Scalars['String']>
  orgKey?: Maybe<Scalars['String']>
  organizationLabelList?: Maybe<Array<Maybe<Type_Organization_Label_Schema>>>
  organizationType?: Maybe<Type_Organization_Type_Schema>
  path?: Maybe<Scalars['String']>
  status?: Maybe<Enum_Organization_Status>
  updatedAt?: Maybe<Scalars['Date']>
}

export type Type_Organization_Tag_List = {
  __typename?: 'TYPE_ORGANIZATION_TAG_LIST'
  masterKey?: Maybe<Scalars['String']>
  tagKey?: Maybe<Scalars['String']>
}

export type Type_Organization_Type = {
  __typename?: 'TYPE_ORGANIZATION_TYPE'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_Organization_Type_Schema>
}

export type Type_Organization_Type_List = {
  __typename?: 'TYPE_ORGANIZATION_TYPE_LIST'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  pagination?: Maybe<Type_Pagination>
  payload?: Maybe<Array<Maybe<Type_Organization_Type_Schema>>>
}

export type Type_Organization_Type_Schema = {
  __typename?: 'TYPE_ORGANIZATION_TYPE_SCHEMA'
  _id?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['Date']>
  createdBy?: Maybe<Type_User_Profile>
  needApprove?: Maybe<Enum_Is>
  orgFieldList?: Maybe<Array<Maybe<Scalars['JSON']>>>
  orgTypeKey?: Maybe<Scalars['String']>
  orgTypeName?: Maybe<Scalars['String']>
  orgTypeStatus?: Maybe<Enum_Organization_Type_Status>
  updatedAt?: Maybe<Scalars['Date']>
  updatedBy?: Maybe<Type_User_Profile>
}

export type Type_Org_Accees_Token = {
  __typename?: 'TYPE_ORG_ACCEES_TOKEN'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_Org_Accees_Token_Payload>
}

export type Type_Org_Accees_Token_Payload = {
  __typename?: 'TYPE_ORG_ACCEES_TOKEN_PAYLOAD'
  organization?: Maybe<Type_Organization_Response>
  profile?: Maybe<Type_User_Profile>
  token?: Maybe<Type_Org_Accees_Token_Payload_Token>
}

export type Type_Org_Accees_Token_Payload_Token = {
  __typename?: 'TYPE_ORG_ACCEES_TOKEN_PAYLOAD_TOKEN'
  orgAccessToken?: Maybe<Scalars['String']>
  orgRefreshToken?: Maybe<Scalars['String']>
}

export type Type_Org_Children = {
  __typename?: 'TYPE_ORG_CHILDREN'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Array<Maybe<Type_Org_Children_Payload>>>
}

export type Type_Org_Children_Payload = {
  __typename?: 'TYPE_ORG_CHILDREN_PAYLOAD'
  children?: Maybe<Scalars['JSON']>
  key?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  orgKey?: Maybe<Scalars['String']>
  path?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export type Type_Org_Token_Ref = {
  __typename?: 'TYPE_ORG_TOKEN_REF'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_Org_Token_Ref_Payload>
}

export type Type_Org_Token_Ref_Payload = {
  __typename?: 'TYPE_ORG_TOKEN_REF_payload'
  organization?: Maybe<Type_Organization_Response>
  profile?: Maybe<Type_User_Profile>
  ref?: Maybe<Scalars['String']>
}

export type Type_Otp = {
  __typename?: 'TYPE_OTP'
  countryCode?: Maybe<Scalars['String']>
  expire?: Maybe<Scalars['String']>
  phoneNumber?: Maybe<Scalars['Number']>
  ref?: Maybe<Scalars['String']>
}

export type Type_Otp_Token = {
  __typename?: 'TYPE_OTP_TOKEN'
  expireDate?: Maybe<Scalars['Date']>
  otpToken?: Maybe<Scalars['String']>
  redirectUrl?: Maybe<Scalars['String']>
}

export type Type_Otp_Token_Payload = {
  __typename?: 'TYPE_OTP_TOKEN_PAYLOAD'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_Otp_Token>
}

export type Type_O_Auth = {
  __typename?: 'TYPE_O_AUTH'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_Schema_O_Auth>
}

export type Type_Pagination = {
  __typename?: 'TYPE_PAGINATION'
  limit?: Maybe<Scalars['Int']>
  page?: Maybe<Scalars['Int']>
  totalItems?: Maybe<Scalars['Int']>
  totalPages?: Maybe<Scalars['Int']>
}

export type Type_Password_Email = {
  __typename?: 'TYPE_PASSWORD_EMAIL'
  email?: Maybe<Scalars['String']>
}

export type Type_Password_Otp = {
  __typename?: 'TYPE_PASSWORD_OTP'
  countryCode: Scalars['String']
  phoneNumber: Scalars['Number']
}

export type Type_Permision_Option = {
  __typename?: 'TYPE_PERMISION_OPTION'
  _id?: Maybe<Scalars['ID']>
  code?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  level?: Maybe<Scalars['Number']>
}

export type Type_Permission_List = {
  __typename?: 'TYPE_PERMISSION_LIST'
  /** โค้ดของการตอบสนอง */
  code?: Maybe<Scalars['String']>
  /** ข้อความตอบสนอง */
  message?: Maybe<Scalars['String']>
  /** array data */
  payload?: Maybe<Array<Maybe<Type_Role_Permission>>>
}

export type Type_Phone = {
  __typename?: 'TYPE_PHONE'
  code?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
  verifyStatus?: Maybe<Enum_Verify_Status>
}

export type Type_Profile = {
  __typename?: 'TYPE_PROFILE'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_User_Profile>
}

export type Type_Profile_List = {
  __typename?: 'TYPE_PROFILE_LIST'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  pagination?: Maybe<Type_Pagination>
  payload?: Maybe<Array<Maybe<Type_User_Profile>>>
}

export type Type_Profile_Org = {
  __typename?: 'TYPE_PROFILE_ORG'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_Profile_Org_Payload>
}

export type Type_Profile_Org_Payload = {
  __typename?: 'TYPE_PROFILE_ORG_PAYLOAD'
  organization?: Maybe<Type_Organization_Response>
  profile?: Maybe<Type_User_Profile>
}

export type Type_Refresh_Access_Token = {
  __typename?: 'TYPE_REFRESH_ACCESS_TOKEN'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_Token>
}

export type Type_Remove_Config = {
  __typename?: 'TYPE_REMOVE_CONFIG'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
}

export type Type_Request_Otp = {
  __typename?: 'TYPE_REQUEST_OTP'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_Otp>
}

export type Type_Reset_Password_Email = {
  __typename?: 'TYPE_RESET_PASSWORD_EMAIL'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_Password_Email>
}

export type Type_Response = {
  __typename?: 'TYPE_RESPONSE'
  message?: Maybe<Scalars['String']>
  success?: Maybe<Scalars['Boolean']>
}

export type Type_Role = {
  __typename?: 'TYPE_ROLE'
  attribute?: Maybe<Scalars['JSON']>
  isDefault?: Maybe<Enum_Is>
  isInvite?: Maybe<Enum_Is>
  isReplaceable?: Maybe<Enum_Is>
  name?: Maybe<Scalars['String']>
  regisable?: Maybe<Enum_Is>
  roleKey?: Maybe<Scalars['String']>
  roleType?: Maybe<Enum_Lrle_Type>
  status?: Maybe<Enum_App_Status>
  userField?: Maybe<Array<Maybe<Scalars['JSON']>>>
}

export type Type_Role_Aproval_Attribute = {
  __typename?: 'TYPE_ROLE_APROVAL_ATTRIBUTE'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_Role_Aproval_Attribute_Schema>
}

export type Type_Role_Aproval_Attribute_List = {
  __typename?: 'TYPE_ROLE_APROVAL_ATTRIBUTE_LIST'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  pagination?: Maybe<Type_Pagination>
  payload?: Maybe<Array<Maybe<Type_Role_Aproval_Attribute_Schema>>>
}

export type Type_Role_Aproval_Attribute_Role = {
  __typename?: 'TYPE_ROLE_APROVAL_ATTRIBUTE_ROLE'
  _id?: Maybe<Scalars['String']>
  approval?: Maybe<Enum_Is>
  approvalAttribute?: Maybe<Scalars['JSON']>
  isDefault?: Maybe<Enum_Is>
  isReplaceable?: Maybe<Enum_Is>
  name?: Maybe<Scalars['String']>
  needApproval?: Maybe<Enum_Is>
  note?: Maybe<Scalars['String']>
  roleKey?: Maybe<Scalars['String']>
  roleType?: Maybe<Scalars['String']>
  status?: Maybe<Enum_Role_Aproval_Attribute_Ststus>
}

export type Type_Role_Aproval_Attribute_Schema = {
  __typename?: 'TYPE_ROLE_APROVAL_ATTRIBUTE_SCHEMA'
  profile?: Maybe<Type_User_Profile>
  roleList?: Maybe<Array<Maybe<Type_Role_Aproval_Attribute_Role>>>
}

export type Type_Role_Data_Security = {
  __typename?: 'TYPE_ROLE_DATA_SECURITY'
  assign?: Maybe<Enum_Data_Security>
  assignToParent?: Maybe<Enum_Is>
  create?: Maybe<Enum_Data_Security>
  delete?: Maybe<Enum_Data_Security>
  name?: Maybe<Scalars['String']>
  read?: Maybe<Enum_Data_Security>
  securityKey?: Maybe<Scalars['String']>
  write?: Maybe<Enum_Data_Security>
}

export type Type_Role_Data_Security_List = {
  __typename?: 'TYPE_ROLE_DATA_SECURITY_LIST'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_Role_Data_Security_Payload>
}

export type Type_Role_Data_Security_Payload = {
  __typename?: 'TYPE_ROLE_DATA_SECURITY_PAYLOAD'
  dataSecurityList?: Maybe<Array<Maybe<Type_Role_Data_Security>>>
  role?: Maybe<Type_Role>
}

export type Type_Role_Permission = {
  __typename?: 'TYPE_ROLE_PERMISSION'
  code?: Maybe<Array<Maybe<Scalars['String']>>>
  name?: Maybe<Scalars['String']>
  permissionKey?: Maybe<Scalars['String']>
  scopeList?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type Type_Role_Permission_List = {
  __typename?: 'TYPE_ROLE_PERMISSION_LIST'
  /** โค้ดของการตอบสนอง */
  code?: Maybe<Scalars['String']>
  /** ข้อความตอบสนอง */
  message?: Maybe<Scalars['String']>
  /** data */
  payload?: Maybe<Type_Role_Permission_Payload>
}

export type Type_Role_Permission_Payload = {
  __typename?: 'TYPE_ROLE_PERMISSION_PAYLOAD'
  permissionList?: Maybe<Array<Maybe<Type_Role_Permission>>>
  role?: Maybe<Type_Role>
}

export type Type_Role_Permission_Schema = {
  __typename?: 'TYPE_ROLE_PERMISSION_SCHEMA'
  code?: Maybe<Array<Scalars['String']>>
  permissionKey?: Maybe<Scalars['String']>
  scopeList?: Maybe<Array<Scalars['String']>>
}

export type Type_Running_Number = {
  __typename?: 'TYPE_RUNNING_NUMBER'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_Schema_Running_Number>
}

export type Type_Running_Number_List = {
  __typename?: 'TYPE_RUNNING_NUMBER_LIST'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Array<Maybe<Type_Schema_Running_Number>>>
}

export type Type_Running_Number_No = {
  __typename?: 'TYPE_RUNNING_NUMBER_NO'
  runningNo?: Maybe<Scalars['String']>
}

export type Type_S3_Signed_Url = {
  __typename?: 'TYPE_S3_SIGNED_URL'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Array<Maybe<Type_Schema_S3_Signed_Url>>>
}

export type Type_Schema_Custom_Menu = {
  __typename?: 'TYPE_SCHEMA_CUSTOM_MENU'
  _id?: Maybe<Scalars['String']>
  actionColor?: Maybe<Scalars['String']>
  appKey?: Maybe<Scalars['String']>
  icon?: Maybe<Scalars['String']>
  menuKey?: Maybe<Scalars['String']>
  permissionList?: Maybe<Array<Maybe<Type_Schema_Custom_Menu_Permission_List>>>
  status?: Maybe<Enum_Usability>
  target?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['JSON']>
  url?: Maybe<Scalars['String']>
}

export type Type_Schema_Custom_Menu_Permission_List = {
  __typename?: 'TYPE_SCHEMA_CUSTOM_MENU_PERMISSION_LIST'
  code?: Maybe<Array<Maybe<Scalars['String']>>>
  permissionKey?: Maybe<Scalars['String']>
}

export type Type_Schema_Gateway = {
  __typename?: 'TYPE_SCHEMA_GATEWAY'
  _id?: Maybe<Scalars['ID']>
  apiType?: Maybe<Scalars['String']>
  destination?: Maybe<Array<Maybe<Scalars['String']>>>
  endpont?: Maybe<Scalars['String']>
  header?: Maybe<Scalars['JSON']>
  key?: Maybe<Scalars['String']>
  method?: Maybe<Enum_Gateway_Method>
  name?: Maybe<Scalars['String']>
  queryString?: Maybe<Scalars['JSON']>
  resType?: Maybe<Enum_Gateway_Res_Type>
  schema?: Maybe<Scalars['JSON']>
  source?: Maybe<Array<Maybe<Scalars['String']>>>
  status?: Maybe<Enum_Gateway_Status>
  userRole?: Maybe<Enum_Gateway_User_Role>
  variable?: Maybe<Scalars['JSON']>
}

export type Type_Schema_Invite = {
  __typename?: 'TYPE_SCHEMA_INVITE'
  _id?: Maybe<Scalars['ID']>
  email?: Maybe<Scalars['String']>
  organization?: Maybe<Type_Organization_Response>
  registered?: Maybe<Enum_Is>
  roleKey?: Maybe<Scalars['String']>
  status?: Maybe<Enum_Invite_Status>
  userId?: Maybe<Scalars['String']>
}

export type Type_Schema_O_Auth = {
  __typename?: 'TYPE_SCHEMA_O_AUTH'
  appKey?: Maybe<Scalars['String']>
  loginStatus?: Maybe<Enum_Usability>
  reauthentication?: Maybe<Enum_Usability>
  redirectUrlList?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type Type_Schema_Running_Number = {
  __typename?: 'TYPE_SCHEMA_RUNNING_NUMBER'
  attribute?: Maybe<Scalars['JSON']>
  createdBy?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  runningKey?: Maybe<Scalars['String']>
  runningNumberFormat?: Maybe<Scalars['String']>
  updatedBy?: Maybe<Scalars['String']>
}

export type Type_Schema_S3_Signed_Url = {
  __typename?: 'TYPE_SCHEMA_S3_SIGNED_URL'
  createdAt?: Maybe<Scalars['Date']>
  fileKey?: Maybe<Scalars['String']>
  filename?: Maybe<Scalars['String']>
  publicUrl?: Maybe<Scalars['String']>
  signedUrl?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['Date']>
  user?: Maybe<Type_User_Profile>
}

export type Type_Schema_Webhook = {
  __typename?: 'TYPE_SCHEMA_WEBHOOK'
  count?: Maybe<Scalars['Int']>
  total?: Maybe<Scalars['Int']>
}

export type Type_Scmema_Notification_Template = {
  __typename?: 'TYPE_SCMEMA_NOTIFICATION_TEMPLATE'
  channel: Enum_Notification_Channel
  dataKeyList?: Maybe<Array<Maybe<Type_Notification_Data_Key>>>
  locale: Scalars['String']
  templateKey?: Maybe<Scalars['String']>
  templateValue?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export type Type_Service = {
  __typename?: 'TYPE_SERVICE'
  adminPanelEndpoint?: Maybe<Scalars['String']>
  adminPanelMetaDataUrl?: Maybe<Scalars['String']>
  adminWidgetMetaDataUrl?: Maybe<Scalars['String']>
  dockerImageTag?: Maybe<Scalars['String']>
  endpoint?: Maybe<Type_Endpoin_Service_Type>
  name?: Maybe<Scalars['String']>
  permissionList?: Maybe<Array<Maybe<Type_Service_Permission>>>
  serviceKey?: Maybe<Scalars['String']>
}

export type Type_Service_Info = {
  __typename?: 'TYPE_SERVICE_INFO'
  /** โค้ดของการตอบสนอง */
  code?: Maybe<Scalars['String']>
  /** ข้อความตอบสนอง */
  message?: Maybe<Scalars['String']>
  /** data */
  payload?: Maybe<Type_Service>
}

export type Type_Service_List = {
  __typename?: 'TYPE_SERVICE_LIST'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  pagination?: Maybe<Type_Pagination>
  payload?: Maybe<Array<Maybe<Type_Service>>>
}

export type Type_Service_List_Payload = {
  __typename?: 'TYPE_SERVICE_LIST_PAYLOAD'
  service?: Maybe<Type_Service>
  syncStatus?: Maybe<Scalars['String']>
}

export type Type_Service_Permission = {
  __typename?: 'TYPE_SERVICE_PERMISSION'
  defaultCode?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  permissionKey?: Maybe<Scalars['String']>
  scopeList?: Maybe<Array<Scalars['String']>>
  userType?: Maybe<Scalars['String']>
}

export type Type_Setting = {
  __typename?: 'TYPE_SETTING'
  _id?: Maybe<Scalars['ID']>
  description?: Maybe<Scalars['String']>
  key?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export type Type_Smtp = {
  __typename?: 'TYPE_SMTP'
  host?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  port?: Maybe<Scalars['Number']>
  securedConnection?: Maybe<Scalars['Boolean']>
  senderEmail?: Maybe<Scalars['String']>
  senderName?: Maybe<Scalars['String']>
  username?: Maybe<Scalars['String']>
}

export type Type_Sync_App = {
  __typename?: 'TYPE_SYNC_APP'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Array<Maybe<Type_Sync_App_Payload>>>
}

export type Type_Sync_App_Payload = {
  __typename?: 'TYPE_SYNC_APP_PAYLOAD'
  app?: Maybe<Type_App>
  serviceList?: Maybe<Array<Maybe<Type_Service_List_Payload>>>
}

export type Type_Sync_Organization = {
  __typename?: 'TYPE_SYNC_ORGANIZATION'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Array<Maybe<Type_Sync_Organization_Payload>>>
}

export type Type_Sync_Organization_Payload = {
  __typename?: 'TYPE_SYNC_ORGANIZATION_PAYLOAD'
  organization?: Maybe<Type_Organization_Response>
  syncStatus?: Maybe<Scalars['String']>
}

export type Type_Sync_Service_Info = {
  __typename?: 'TYPE_SYNC_SERVICE_INFO'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_Sync_Service_Info_Payload>
}

export type Type_Sync_Service_Info_Payload = {
  __typename?: 'TYPE_SYNC_SERVICE_INFO_PAYLOAD'
  serviceList?: Maybe<Array<Maybe<Type_Service_List_Payload>>>
}

export type Type_Template = {
  __typename?: 'TYPE_TEMPLATE'
  _id?: Maybe<Scalars['ID']>
  content?: Maybe<Scalars['String']>
  keys?: Maybe<Array<Maybe<Type_Key>>>
  name?: Maybe<Scalars['String']>
}

export type Type_Theme_Form = {
  __typename?: 'TYPE_THEME_FORM'
  appKey?: Maybe<Scalars['String']>
  color?: Maybe<Scalars['JSON']>
  credentialKey?: Maybe<Scalars['String']>
  custom?: Maybe<Scalars['JSON']>
  image?: Maybe<Scalars['JSON']>
  isDefault?: Maybe<Enum_Theme_Default_Status>
  isReplaceable?: Maybe<Enum_Theme_Replaceable_Status>
  name?: Maybe<Scalars['String']>
  status?: Maybe<Enum_Theme_Status>
  text?: Maybe<Scalars['JSON']>
  themeKey?: Maybe<Scalars['String']>
  themeType?: Maybe<Enum_Theme_Type>
}

export type Type_Theme_Form_Color = {
  __typename?: 'TYPE_THEME_FORM_COLOR'
  navAuthBg?: Maybe<Scalars['String']>
  navAuthText?: Maybe<Scalars['String']>
  navBg?: Maybe<Scalars['String']>
  navText?: Maybe<Scalars['String']>
  primary?: Maybe<Scalars['String']>
  secondary?: Maybe<Scalars['String']>
  titleText?: Maybe<Scalars['String']>
}

export type Type_Theme_Form_Image = {
  __typename?: 'TYPE_THEME_FORM_IMAGE'
  favIcon?: Maybe<Scalars['String']>
  navAuthCollapsedLogo?: Maybe<Scalars['String']>
  navAuthLogo?: Maybe<Scalars['String']>
  navLogo?: Maybe<Scalars['String']>
  webLogo?: Maybe<Scalars['String']>
}

export type Type_Theme_Form_Text = {
  __typename?: 'TYPE_THEME_FORM_TEXT'
  description?: Maybe<Scalars['String']>
  navTitle?: Maybe<Scalars['String']>
  webTitle?: Maybe<Scalars['String']>
}

export type Type_Theme_Response = {
  __typename?: 'TYPE_THEME_RESPONSE'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_Theme_Form>
}

export type Type_Theme_Response_List = {
  __typename?: 'TYPE_THEME_RESPONSE_LIST'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  pagination?: Maybe<Type_Pagination>
  payload?: Maybe<Array<Maybe<Type_Theme_Form>>>
}

export type Type_Token = {
  __typename?: 'TYPE_TOKEN'
  accessToken?: Maybe<Scalars['String']>
  refreshToken?: Maybe<Scalars['String']>
}

export type Type_Token_Expired = {
  __typename?: 'TYPE_TOKEN_EXPIRED'
  accessTokenExpired?: Maybe<Scalars['Number']>
  refreshTokenExpired?: Maybe<Scalars['Number']>
}

export type Type_Type_Role_Permission_User_List = {
  __typename?: 'TYPE_TYPE_ROLE_PERMISSION_USER_LIST'
  /** โค้ดของการตอบสนอง */
  code?: Maybe<Scalars['String']>
  /** ข้อความตอบสนอง */
  message?: Maybe<Scalars['String']>
  /** array data */
  payload?: Maybe<Array<Maybe<Type_Role_Permission_Schema>>>
}

export type Type_Update_Config = {
  __typename?: 'TYPE_UPDATE_CONFIG'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_Update_Config_Payload>
}

export type Type_Update_Config_Payload = {
  __typename?: 'TYPE_UPDATE_CONFIG_PAYLOAD'
  config?: Maybe<Type_Config>
  serviceList?: Maybe<Array<Maybe<Type_Service_List_Payload>>>
}

export type Type_Username_Register = {
  __typename?: 'TYPE_USERNAME_REGISTER'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_User_Profile>
}

export type Type_User_Permission = {
  __typename?: 'TYPE_USER_PERMISSION'
  defaultOption?: Maybe<Scalars['String']>
  permissionName?: Maybe<Scalars['String']>
  permissionOptions?: Maybe<Array<Maybe<Type_Permision_Option>>>
}

export type Type_User_Profile = {
  __typename?: 'TYPE_USER_PROFILE'
  _id?: Maybe<Scalars['ID']>
  appleId?: Maybe<Scalars['String']>
  attribute?: Maybe<Scalars['JSON']>
  email?: Maybe<Array<Maybe<Type_Email>>>
  facebookId?: Maybe<Scalars['String']>
  googleId?: Maybe<Scalars['String']>
  lineId?: Maybe<Scalars['String']>
  phone?: Maybe<Array<Maybe<Type_Phone>>>
  role?: Maybe<Type_Role>
  setting?: Maybe<Scalars['JSON']>
  username?: Maybe<Scalars['String']>
}

export type Type_Value_Config_Global = {
  __typename?: 'TYPE_VALUE_CONFIG_GLOBAL'
  apiKey?: Maybe<Scalars['String']>
  bucket?: Maybe<Scalars['String']>
  headers?: Maybe<Scalars['JSON']>
  publicEndpoint?: Maybe<Scalars['String']>
  serviceEndpoint?: Maybe<Scalars['String']>
}

export type Type_Verify_Email = {
  __typename?: 'TYPE_VERIFY_EMAIL'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  verifyId?: Maybe<Scalars['String']>
}

export type Type_Verify_Password_Otp = {
  __typename?: 'TYPE_VERIFY_PASSWORD_OTP'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_Password_Otp>
}

export type Type_Version_Control = {
  __typename?: 'TYPE_VERSION_CONTROL'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_Version_Control_Schema>
}

export type Type_Version_Control_List = {
  __typename?: 'TYPE_VERSION_CONTROL_LIST'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  pagination?: Maybe<Type_Pagination>
  payload?: Maybe<Array<Maybe<Type_Version_Control_Schema>>>
}

export type Type_Version_Control_Schema = {
  __typename?: 'TYPE_VERSION_CONTROL_SCHEMA'
  _id?: Maybe<Scalars['String']>
  attribute?: Maybe<Scalars['JSON']>
  versionKey?: Maybe<Scalars['String']>
}

export type Type_Webhook = {
  __typename?: 'TYPE_WEBHOOK'
  code?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Type_Schema_Webhook>
}

export type UpdateContentInput = {
  /** Content' status use to check for show preview content */
  canBePreviewed?: InputMaybe<Scalars['Boolean']>
  /** Content's video (fileKey) */
  contentUrl?: InputMaybe<Scalars['String']>
  /** Content's description */
  description?: InputMaybe<Scalars['String']>
  /** Content's files */
  documentFiles?: InputMaybe<Array<DocumentFile>>
  /** content' video time length of (seconds). EX: 46979 */
  length?: InputMaybe<Scalars['Float']>
  /** content' video time text. Ex: '13:02:59' */
  lengthText?: InputMaybe<Scalars['String']>
  /** Content's video url use to show preview content (fileKey) */
  previewUrl?: InputMaybe<Scalars['String']>
  /** Order for sort content when show contents */
  sortOrder?: InputMaybe<Scalars['Float']>
  /** Content' status */
  status?: InputMaybe<ActiveStatus>
  /** Content's thumbnail (fileKey). ratio: 16/9 */
  thumbnail?: InputMaybe<Scalars['String']>
  /** Content's title */
  title?: InputMaybe<Scalars['String']>
}

export type UpdateSectionInput = {
  /** Section's description */
  description?: InputMaybe<Scalars['String']>
  /** All content' video time length of (seconds) in section. EX: 46979 */
  length?: InputMaybe<Scalars['Float']>
  /** All content' video time text in section. Ex: '13:02:59' */
  lengthText?: InputMaybe<Scalars['String']>
  /** Order for sort section when show sections */
  sortOrder?: InputMaybe<Scalars['Float']>
  /** Section' status */
  status?: InputMaybe<ActiveStatus>
  /** Section's title */
  title?: InputMaybe<Scalars['String']>
}

export type UserContentPackFindInput = {
  /** สำหรับกรณีที่ใช้เงื่อนไขการค้นหาเป็น and */
  filter?: InputMaybe<UserContentPackFindSchemaInput>
  pagination?: InputMaybe<PaginatedFindType>
  /** สำหรับกรณีที่ใช้เงื่อนไขการค้นหาเป็น or และใช้ regex เป็นการค้นหาข้อมูลที่เป็น string */
  search?: InputMaybe<UserContentPackFindSchemaInput>
  sort?: InputMaybe<UserContentPackSortInput>
}

export type UserContentPackFindSchemaInput = {
  /** User' ID for add contentPack */
  userID: Scalars['String']
}

export type UserContentPackResponse = {
  __typename?: 'UserContentPackResponse'
  /** โค้ดของการตอบสนอง */
  code?: Maybe<Scalars['String']>
  /** ข้อความตอบสนอง */
  message?: Maybe<Scalars['String']>
  /** data */
  payload?: Maybe<UserContentPackResult>
}

export type UserContentPackResponseList = {
  __typename?: 'UserContentPackResponseList'
  /** โค้ดของการตอบสนอง */
  code?: Maybe<Scalars['String']>
  /** ข้อความตอบสนอง */
  message?: Maybe<Scalars['String']>
  /** array data */
  payload?: Maybe<Array<Maybe<UserContentPackResult>>>
}

export type UserContentPackResponsePaginate = {
  __typename?: 'UserContentPackResponsePaginate'
  /** โค้ดของการตอบสนอง */
  code?: Maybe<Scalars['String']>
  /** ข้อความตอบสนอง */
  message?: Maybe<Scalars['String']>
  /** pagination data */
  pagination?: Maybe<PaginatedType>
  /** array data */
  payload?: Maybe<Array<UserContentPackResult>>
}

export type UserContentPackResult = {
  __typename?: 'UserContentPackResult'
  _id?: Maybe<Scalars['String']>
  /** content pack data */
  contentPack?: Maybe<ContentPackResult>
  /** Content Pack for add to list */
  contentPackID: Scalars['String']
  /** property each content in user content pack */
  contentProperties: Array<Maybe<ContentProperty>>
  orgKey?: Maybe<Scalars['String']>
  /** User' ID for add contentPack */
  userID: Scalars['String']
}

export type UserContentPackSortInput = {
  createdAt?: InputMaybe<Sort_Order>
  sortOrder?: InputMaybe<Sort_Order>
}
