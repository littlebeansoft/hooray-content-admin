import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T
export type InputMaybe<T> = T
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Date: any
  JSON: any
  JSONObject: any
  Number: any
  /** The `Upload` scalar type represents a file upload. */
  Upload: any
}

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
}

export enum EnumAppStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}

export enum EnumBomStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}

export enum EnumCctvToolkitStatus {
  Active = 'ACTIVE',
  InActive = 'IN_ACTIVE',
  PreRegister = 'PRE_REGISTER',
}

export enum EnumCctvToolkitStatusUpdate {
  Active = 'ACTIVE',
  InActive = 'IN_ACTIVE',
}

export enum EnumDataSecurity {
  None = 'NONE',
  Organization = 'ORGANIZATION',
  ParentChild = 'PARENT_CHILD',
  System = 'SYSTEM',
  User = 'USER',
}

export enum EnumDataType {
  Locale = 'LOCALE',
  MasterData = 'MASTER_DATA',
  Tag = 'TAG',
}

export enum EnumDeclarationDetailStatus {
  Review = 'REVIEW',
  Verified = 'VERIFIED',
}

export enum EnumDeclarationReceptionStatus {
  Review = 'REVIEW',
  Verified = 'VERIFIED',
}

export enum EnumDeclarationStatus {
  Cancel = 'CANCEL',
  Checked = 'CHECKED',
  Finished = 'FINISHED',
  NotFinished = 'NOT_FINISHED',
}

export enum EnumDeclarationType {
  InBound = 'IN_BOUND',
  OutBound = 'OUT_BOUND',
}

export enum EnumIs {
  No = 'NO',
  Yes = 'YES',
}

export enum EnumLocationType {
  FinishGoods = 'FINISH_GOODS',
  Machine = 'MACHINE',
  RawMaterial = 'RAW_MATERIAL',
  Scrap = 'SCRAP',
  Wip = 'WIP',
}

export enum EnumLrleType {
  ResourceAdmin = 'RESOURCE_ADMIN',
  ResourceOwner = 'RESOURCE_OWNER',
  SystemAdmin = 'SYSTEM_ADMIN',
}

export enum EnumNotificationChannel {
  Email = 'EMAIL',
  MobileNotification = 'MOBILE_NOTIFICATION',
  Sms = 'SMS',
}

export enum EnumNotificationIsRequired {
  No = 'NO',
  Yes = 'YES',
}

export enum EnumOrganizationStatus {
  Approved = 'APPROVED',
  Blocked = 'BLOCKED',
  Closed = 'CLOSED',
  Declined = 'DECLINED',
  Reviewing = 'REVIEWING',
}

export enum EnumProductionOrderStatus {
  Cancel = 'CANCEL',
  Checked = 'CHECKED',
  Finished = 'FINISHED',
  InProgress = 'IN_PROGRESS',
  InWip = 'IN_WIP',
  NotFinished = 'NOT_FINISHED',
}

export enum EnumProductAvailable {
  All = 'ALL',
  Available = 'AVAILABLE',
  Scrap = 'SCRAP',
}

export enum EnumProductLocationType {
  Declaration = 'DECLARATION',
  Lost = 'LOST',
  ProductionOrder = 'PRODUCTION_ORDER',
  Scrap = 'SCRAP',
}

export enum EnumProductPropertyType {
  Category = 'CATEGORY',
  Type = 'TYPE',
  Unit = 'UNIT',
}

export enum EnumProductRelocationLocationType {
  Declaration = 'DECLARATION',
  None = 'NONE',
  ProductionOrder = 'PRODUCTION_ORDER',
}

export enum EnumProductRelocationStatus {
  Review = 'REVIEW',
  Verified = 'VERIFIED',
}

export enum EnumProductRelocationType {
  InBound = 'IN_BOUND',
  InPdo = 'IN_PDO',
  Lost = 'LOST',
  OutBound = 'OUT_BOUND',
  OutPdo = 'OUT_PDO',
  Scrap = 'SCRAP',
  TransferIn = 'TRANSFER_IN',
  TransferLocation = 'TRANSFER_LOCATION',
  TransferOut = 'TRANSFER_OUT',
}

export enum EnumProductType {
  FinishGoods = 'FINISH_GOODS',
  Machine = 'MACHINE',
  RawMaterial = 'RAW_MATERIAL',
  Scrap = 'SCRAP',
}

export enum EnumReportFileType {
  /**  EXCEL  */
  Excel = 'EXCEL',
  /**  PDF  */
  Pdf = 'PDF',
}

export enum EnumReportProductType {
  /**  สินค้าสำเร็จรูป  */
  FinishGoods = 'FINISH_GOODS',
  /**  เครื่องจักร  */
  Machine = 'MACHINE',
  /**  วัตถุดิบ  */
  RawMaterial = 'RAW_MATERIAL',
}

export enum EnumReportSelect {
  All = 'ALL',
  Select = 'SELECT',
}

export enum EnumReportStatus {
  /**  ยกเลิก  */
  Canceled = 'CANCELED',
  /**  หมดอายุ  */
  Expired = 'EXPIRED',
  /**  ล้มแหลว  */
  Failed = 'FAILED',
  /**  กำลังประมวลผล  */
  Processing = 'PROCESSING',
  /**  อยู่ในคิว  */
  Queued = 'QUEUED',
  /**  พร้อมดาวน์โหลด  */
  ReadyToDownload = 'READY_TO_DOWNLOAD',
}

export enum EnumReportType {
  /**  รายงานสินค้าคงเหลือ  */
  ReportBalance = 'REPORT_BALANCE',
  /**  รายงานสินค้านำออก  */
  ReportExportList = 'REPORT_EXPORT_LIST',
  /**  รายงานสินค้านำเข้า  */
  ReportImportList = 'REPORT_IMPORT_LIST',
  /**  รายงานวัตถุดิบในกระบวนการผลิต  */
  ReportInProgressRawMaterials = 'REPORT_IN_PROGRESS_RAW_MATERIALS',
  /**  รายงานปริมาณการสูญเสีย  */
  ReportLostVolume = 'REPORT_LOST_VOLUME',
  /**  รายงานสินค้าเคลื่อนไหว  */
  ReportMovement = 'REPORT_MOVEMENT',
}

export enum EnumRunningNumber {
  X = 'X',
  Xx = 'XX',
  Xxx = 'XXX',
  Xxxx = 'XXXX',
  Xxxxx = 'XXXXX',
}

export enum EnumRunningNumberDateformat {
  Yymm = 'YYMM',
  Yyyymm = 'YYYYMM',
  Yyyymmdd = 'YYYYMMDD',
  YyyymmdDhhmmss = 'YYYYMMDDhhmmss',
}

export enum EnumServiceEndpoinType {
  Gql = 'GQL',
  Rest = 'REST',
}

export enum EnumShowInList {
  No = 'NO',
  Yes = 'YES',
}

export enum EnumSyncService {
  Failed = 'FAILED',
  Success = 'SUCCESS',
}

export enum EnumTransferProductType {
  FinishGoods = 'FINISH_GOODS',
  Machine = 'MACHINE',
  RawMaterial = 'RAW_MATERIAL',
  Scrap = 'SCRAP',
}

export enum EnumTransferStatus {
  Finished = 'FINISHED',
  NotFinished = 'NOT_FINISHED',
}

export enum EnumTransferType {
  TransferIn = 'TRANSFER_IN',
  TransferLocation = 'TRANSFER_LOCATION',
  TransferOut = 'TRANSFER_OUT',
}

export enum EnumVehicle {
  Car = 'CAR',
  Motorcycle = 'MOTORCYCLE',
  Truck = 'TRUCK',
}

export type HoorayServerServiceInfo = {
  featureKeys: Maybe<Array<Maybe<HoorayServerServiceInfoFeature>>>
  graphqlEndpointAdmin: Maybe<Scalars['String']>
  graphqlEndpointClient: Maybe<Scalars['String']>
  graphqlEndpointSuperAdmin: Maybe<Scalars['String']>
  logo: Maybe<Scalars['String']>
  methodUpdate: Maybe<Scalars['String']>
  name: Maybe<Scalars['String']>
  permissions: Maybe<Array<Maybe<HoorayServerServiceInfoPermission>>>
  restEndpointAdmin: Maybe<Scalars['String']>
  restEndpointClient: Maybe<Scalars['String']>
  restEndpointSuperAdmin: Maybe<Scalars['String']>
  serviceKey: Maybe<Scalars['String']>
}

export type HoorayServerServiceInfoFeature = {
  description: Maybe<Scalars['String']>
  enable: Maybe<Scalars['Boolean']>
  key: Maybe<Scalars['String']>
}

export type HoorayServerServiceInfoPermission = {
  code: Maybe<Array<Maybe<Scalars['String']>>>
  defaultCode: Maybe<Scalars['String']>
  description: Maybe<Scalars['String']>
  permissionName: Maybe<Scalars['String']>
}

export type InputActive = {
  isActive: Scalars['Boolean']
}

export type InputAdditinalInformation = {
  attachmentList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  note?: InputMaybe<Scalars['String']>
}

export type InputAppForm = {
  appKey: Scalars['String']
  attribute?: InputMaybe<Scalars['JSON']>
  name: Scalars['String']
  status?: InputMaybe<EnumAppStatus>
}

export type InputAttribute = {
  key?: InputMaybe<Scalars['String']>
  value?: InputMaybe<Scalars['String']>
}

export type InputBillOfMaterial = {
  TimeSpent?: InputMaybe<Scalars['Number']>
  materialList?: InputMaybe<Array<InputMaybe<InputBomMaterial>>>
  name?: InputMaybe<Scalars['String']>
  netWeight?: InputMaybe<Scalars['Number']>
  netWeightUnit?: InputMaybe<Scalars['ID']>
  orgKey?: InputMaybe<Scalars['String']>
  productFinishGood?: InputMaybe<Scalars['ID']>
  quantity?: InputMaybe<Scalars['Number']>
  quantityUnit?: InputMaybe<Scalars['ID']>
  status?: InputMaybe<EnumBomStatus>
  totalPrice?: InputMaybe<Scalars['Number']>
  unitPrice?: InputMaybe<Scalars['Number']>
}

export type InputBomMaterial = {
  productMaterial?: InputMaybe<Scalars['ID']>
  quantity?: InputMaybe<Scalars['Number']>
}

export type InputCctv = {
  cameraName?: InputMaybe<Scalars['String']>
  licensePlateDetection?: InputMaybe<InputCctvVehicleOption>
  localRTSP?: InputMaybe<Scalars['String']>
  mediaServiceEndpoint?: InputMaybe<Scalars['String']>
  motionDetection?: InputMaybe<Scalars['Boolean']>
  remoteRTSP?: InputMaybe<Scalars['String']>
  serialNumber?: InputMaybe<Scalars['String']>
  vehicleDeteion?: InputMaybe<InputCctvVehicleOption>
}

export type InputCctvFromLocation = {
  cctvIdList?: InputMaybe<Array<Scalars['String']>>
  locationId: Scalars['String']
}

export type InputCctvSync = {
  cameraDetailCount: Scalars['Number']
  cameraDetailList?: InputMaybe<Array<InputMaybe<InputCctvSyncCameraSchema>>>
  partitionNumber: Scalars['Number']
  tkSerialNumber: Scalars['Number']
}

export type InputCctvSyncCameraSchema = {
  cameraSerialNumber?: InputMaybe<Scalars['String']>
  fullSnapshotFileKey?: InputMaybe<Scalars['String']>
  licensePlateFileKey?: InputMaybe<Scalars['String']>
  licensePlateText?: InputMaybe<Scalars['String']>
  timestamp?: InputMaybe<Scalars['Date']>
  vehicleType?: InputMaybe<EnumVehicle>
}

export type InputCctvToLocation = {
  cctvIdList?: InputMaybe<Array<Scalars['String']>>
  locationId: Scalars['String']
}

export type InputCctvVehicleOption = {
  car?: InputMaybe<Scalars['Boolean']>
  motorcycle?: InputMaybe<Scalars['Boolean']>
  truck?: InputMaybe<Scalars['Boolean']>
}

export type InputContact = {
  accountNo?: InputMaybe<Scalars['String']>
  address?: InputMaybe<Scalars['String']>
  attachmentList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  attn?: InputMaybe<Scalars['String']>
  branch?: InputMaybe<Scalars['String']>
  code?: InputMaybe<Scalars['String']>
  contactType?: InputMaybe<Scalars['String']>
  country?: InputMaybe<Scalars['String']>
  emailInformation?: InputMaybe<Scalars['String']>
  emailPerson?: InputMaybe<Scalars['String']>
  globalName?: InputMaybe<Scalars['String']>
  incoterms?: InputMaybe<Scalars['String']>
  localName?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  note?: InputMaybe<Scalars['String']>
  officeFaxNo?: InputMaybe<Scalars['String']>
  officePhoneNo?: InputMaybe<Scalars['String']>
  phone?: InputMaybe<Scalars['String']>
  postcode?: InputMaybe<Scalars['String']>
  shippingAddress?: InputMaybe<Scalars['String']>
  shippingCountry?: InputMaybe<Scalars['String']>
  shippingPostcode?: InputMaybe<Scalars['String']>
  taxId?: InputMaybe<Scalars['String']>
  vatId?: InputMaybe<Scalars['String']>
  website?: InputMaybe<Scalars['String']>
}

export type InputContactInformation = {
  OfficePhoneNo?: InputMaybe<Scalars['String']>
  accountNo?: InputMaybe<Scalars['String']>
  address?: InputMaybe<Scalars['String']>
  attn?: InputMaybe<Scalars['String']>
  branch?: InputMaybe<Scalars['String']>
  code?: InputMaybe<Scalars['String']>
  contactType?: InputMaybe<Scalars['String']>
  country?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  globalName?: InputMaybe<Scalars['String']>
  incoterms?: InputMaybe<Scalars['String']>
  localName?: InputMaybe<Scalars['String']>
  officeFaxNo?: InputMaybe<Scalars['String']>
  postcode?: InputMaybe<Scalars['String']>
  shippingCountry?: InputMaybe<Scalars['String']>
  shippingPostcode?: InputMaybe<Scalars['String']>
  taxId?: InputMaybe<Scalars['String']>
  vatId?: InputMaybe<Scalars['String']>
  website?: InputMaybe<Scalars['String']>
}

export type InputContactPerson = {
  email?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  phone?: InputMaybe<Scalars['String']>
}

export type InputCreateService = {
  endpointType: EnumServiceEndpoinType
  serviceKey: Scalars['String']
  systemEndpoint: Scalars['String']
}

export type InputDataSecurityForm = {
  assign: EnumDataSecurity
  assignToParent: EnumIs
  create: EnumDataSecurity
  delete: EnumDataSecurity
  name: Scalars['String']
  read: EnumDataSecurity
  securityKey: Scalars['String']
  write: EnumDataSecurity
}

export type InputDate = {
  endDate: Scalars['Date']
  startDate: Scalars['Date']
}

export type InputDeclaration = {
  contactId?: InputMaybe<Scalars['ID']>
  date?: InputMaybe<Scalars['Date']>
  declarationControlObj?: InputMaybe<InputDeclarationControl>
  declarationDetailList?: InputMaybe<Array<InputMaybe<InputDeclarationDetail>>>
  declarationInvoiceObj?: InputMaybe<InputDeclarationInvoice>
  status?: InputMaybe<EnumDeclarationStatus>
  step?: InputMaybe<Scalars['Number']>
  type?: InputMaybe<EnumDeclarationType>
}

export type InputDeclarationControl = {
  approvalNo?: InputMaybe<Scalars['String']>
  approvalPort?: InputMaybe<Scalars['String']>
  arrivalDate?: InputMaybe<Scalars['String']>
  assessmentRequestCode?: InputMaybe<Scalars['String']>
  bankBranchCode?: InputMaybe<Scalars['String']>
  bankCode?: InputMaybe<Scalars['String']>
  brokerBranch?: InputMaybe<Scalars['String']>
  cargoPackingType?: InputMaybe<Scalars['String']>
  consignmentCountry?: InputMaybe<Scalars['String']>
  currencyCode?: InputMaybe<Scalars['String']>
  customsBankCode?: InputMaybe<Scalars['String']>
  customsClearanceCard?: InputMaybe<Scalars['String']>
  customsClearanceName?: InputMaybe<Scalars['String']>
  date?: InputMaybe<Scalars['Date']>
  dateTransmit?: InputMaybe<Scalars['Date']>
  declarationControlId?: InputMaybe<Scalars['ID']>
  declarationNo?: InputMaybe<Scalars['String']>
  departureDate?: InputMaybe<Scalars['Date']>
  dischargePort?: InputMaybe<Scalars['String']>
  docType?: InputMaybe<Scalars['String']>
  drokerTaxNo?: InputMaybe<Scalars['String']>
  establishNo?: InputMaybe<Scalars['String']>
  exchangeRate?: InputMaybe<Scalars['String']>
  factoryNo?: InputMaybe<Scalars['String']>
  grossWeightUnit?: InputMaybe<Scalars['ID']>
  houseBillLading?: InputMaybe<Scalars['String']>
  inspectionRequestCode?: InputMaybe<Scalars['String']>
  managerName?: InputMaybe<Scalars['String']>
  managerNo?: InputMaybe<Scalars['String']>
  masterBillLading?: InputMaybe<Scalars['String']>
  netWeightUnit?: InputMaybe<Scalars['ID']>
  originCountry?: InputMaybe<Scalars['String']>
  packageUnit?: InputMaybe<Scalars['ID']>
  paymentMethod?: InputMaybe<Scalars['String']>
  productType?: InputMaybe<EnumProductType>
  refNo?: InputMaybe<Scalars['String']>
  refNoCommonAccess?: InputMaybe<Scalars['String']>
  releasePort?: InputMaybe<Scalars['String']>
  rgsCode?: InputMaybe<Scalars['String']>
  shippingMark?: InputMaybe<Scalars['String']>
  timeTransmit?: InputMaybe<Scalars['Date']>
  totalDeposit?: InputMaybe<Scalars['String']>
  totalTax?: InputMaybe<Scalars['String']>
  transportMode?: InputMaybe<Scalars['String']>
  uidTransmit?: InputMaybe<Scalars['String']>
  vesselName?: InputMaybe<Scalars['String']>
}

export type InputDeclarationDetail = {
  ahtnCode?: InputMaybe<Scalars['String']>
  assessExciseQuantity?: InputMaybe<Scalars['Number']>
  assessQuantity?: InputMaybe<Scalars['Number']>
  bis19?: InputMaybe<Scalars['String']>
  boi?: InputMaybe<Scalars['String']>
  bond?: InputMaybe<Scalars['String']>
  currency?: InputMaybe<Scalars['String']>
  declarationDetailId?: InputMaybe<Scalars['ID']>
  declarationDetailOut?: InputMaybe<Scalars['ID']>
  declarationOut?: InputMaybe<Scalars['ID']>
  depositReason?: InputMaybe<Scalars['String']>
  epz?: InputMaybe<Scalars['String']>
  exchangeRate?: InputMaybe<Scalars['Number']>
  exciseNo?: InputMaybe<Scalars['String']>
  exciseQuantity?: InputMaybe<Scalars['Number']>
  exciseQuantityUnit?: InputMaybe<Scalars['ID']>
  exemptIncotermsLocal?: InputMaybe<Scalars['Number']>
  exportDeclarationLineNo?: InputMaybe<Scalars['String']>
  exportDeclarationNo?: InputMaybe<Scalars['String']>
  freeZone?: InputMaybe<Scalars['String']>
  importTariff?: InputMaybe<Scalars['String']>
  incotermsValueAssess?: InputMaybe<Scalars['Number']>
  incotermsValueForeign?: InputMaybe<Scalars['Number']>
  incotermsValueLocal?: InputMaybe<Scalars['Number']>
  increasedPriceForeign?: InputMaybe<Scalars['Number']>
  increasedPriceLocal?: InputMaybe<Scalars['Number']>
  invoiceAmountForeign?: InputMaybe<Scalars['Number']>
  invoiceAmountLocal?: InputMaybe<Scalars['Number']>
  invoiceItem?: InputMaybe<Scalars['Number']>
  invoiceNo?: InputMaybe<Scalars['String']>
  invoiceQuantity?: InputMaybe<Scalars['Number']>
  invoiceQuantityUnit?: InputMaybe<Scalars['ID']>
  itemNo?: InputMaybe<Scalars['Number']>
  lastEntry?: InputMaybe<Scalars['String']>
  natureTransaction?: InputMaybe<Scalars['String']>
  netWeight?: InputMaybe<Scalars['Number']>
  netWeightUnit?: InputMaybe<Scalars['ID']>
  originCountry?: InputMaybe<Scalars['String']>
  packageAmount?: InputMaybe<Scalars['Number']>
  packageUnit?: InputMaybe<Scalars['ID']>
  privilegeCode?: InputMaybe<Scalars['String']>
  product?: InputMaybe<Scalars['ID']>
  productAttribute1?: InputMaybe<Scalars['String']>
  productAttribute2?: InputMaybe<Scalars['String']>
  productYear?: InputMaybe<Scalars['String']>
  quantity?: InputMaybe<Scalars['Number']>
  quantityUnit?: InputMaybe<Scalars['ID']>
  reExport?: InputMaybe<Scalars['String']>
  reImportationCertificate?: InputMaybe<Scalars['String']>
  remark?: InputMaybe<Scalars['String']>
  serveral?: InputMaybe<Scalars['String']>
  shippingMark?: InputMaybe<Scalars['String']>
  statisticalCode?: InputMaybe<Scalars['String']>
  status?: InputMaybe<EnumDeclarationDetailStatus>
  tariffCode?: InputMaybe<Scalars['String']>
  tariffSequence?: InputMaybe<Scalars['String']>
  undgNumber?: InputMaybe<Scalars['String']>
  unitPriceForeign?: InputMaybe<Scalars['Number']>
  unitPriceLocal?: InputMaybe<Scalars['Number']>
}

export type InputDeclarationInvoice = {
  buyerStatus?: InputMaybe<Scalars['String']>
  commercialLevel?: InputMaybe<Scalars['String']>
  consigneeStatus?: InputMaybe<Scalars['String']>
  declarationInvoiceId?: InputMaybe<Scalars['ID']>
  foreignInlandFreightCAF?: InputMaybe<Scalars['Number']>
  foreignInlandFreightCC?: InputMaybe<Scalars['String']>
  forwardingCC?: InputMaybe<Scalars['String']>
  forwardingCF?: InputMaybe<Scalars['String']>
  freightAF?: InputMaybe<Scalars['String']>
  freightCurrency?: InputMaybe<Scalars['String']>
  insuranceAF?: InputMaybe<Scalars['String']>
  insuranceCurrency?: InputMaybe<Scalars['String']>
  invoiceCurrency?: InputMaybe<Scalars['String']>
  invoiceDate?: InputMaybe<Scalars['Date']>
  invoiceNo?: InputMaybe<Scalars['String']>
  otherCAF?: InputMaybe<Scalars['Number']>
  otherCC?: InputMaybe<Scalars['String']>
  packingCAF?: InputMaybe<Scalars['Number']>
  packingCC?: InputMaybe<Scalars['String']>
  purchaseOrderNumber?: InputMaybe<Scalars['String']>
  term?: InputMaybe<Scalars['String']>
  termPayment?: InputMaybe<Scalars['String']>
}

export type InputDeclarationReception = {
  attachmentList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  receptionDate?: InputMaybe<Scalars['Date']>
  receptionLocationList?: InputMaybe<InputReceptionLocation>
  receptionNo?: InputMaybe<Scalars['String']>
  status?: InputMaybe<EnumDeclarationReceptionStatus>
}

export type InputDeleteCctvMotion = {
  idList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

/**  can delete multiple report  */
export type InputDeleteReportList = {
  reportIds: Array<Scalars['ID']>
}

export type InputExpiration = {
  access?: InputMaybe<Scalars['String']>
  refresh?: InputMaybe<Scalars['String']>
}

export type InputFeatureForm = {
  config?: InputMaybe<Scalars['JSON']>
  featureKey: Scalars['String']
}

export type InputFileupload = {
  attribute?: InputMaybe<Scalars['JSON']>
  fileExtension?: InputMaybe<Scalars['String']>
  fileKey: Scalars['String']
  fileName: Scalars['String']
  fileType?: InputMaybe<Scalars['String']>
  refId: Scalars['String']
}

export type InputFilter = {
  key?: InputMaybe<Scalars['String']>
  value?: InputMaybe<Scalars['String']>
}

export type InputFilterDate = {
  endDate?: InputMaybe<Scalars['String']>
  startDate?: InputMaybe<Scalars['String']>
}

export type InputFindCctvSync = {
  camSerialNumber: Scalars['String']
}

export type InputFindData = {
  filter?: InputMaybe<Scalars['JSON']>
  findManyById?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  findOneById?: InputMaybe<Scalars['ID']>
  pagination?: InputMaybe<InputPagination>
  query?: InputMaybe<Scalars['JSON']>
  search?: InputMaybe<Scalars['JSON']>
  sort?: InputMaybe<Scalars['JSON']>
}

export type InputGenerateRunningNumber = {
  runningKey?: InputMaybe<Scalars['String']>
}

export type InputInvoice = {
  attachFileList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  companyStamp?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contactDetail?: InputMaybe<InputInvoiceContactDetail>
  customerId?: InputMaybe<Scalars['String']>
  customerName?: InputMaybe<Scalars['String']>
  invoiceNumber: Scalars['String']
  priceDetail?: InputMaybe<InputInvoicePriceDetail>
  productList?: InputMaybe<Array<InputMaybe<InputInvoiceProduct>>>
  remark?: InputMaybe<Scalars['String']>
  signature?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type InputInvoiceContactDetail = {
  address?: InputMaybe<Scalars['String']>
  branch?: InputMaybe<Scalars['String']>
  taxId?: InputMaybe<Scalars['String']>
  zipCode?: InputMaybe<Scalars['String']>
}

export type InputInvoicePriceDetail = {
  date?: InputMaybe<Scalars['Date']>
  discount?: InputMaybe<Scalars['Number']>
  dueDate?: InputMaybe<Scalars['Date']>
  grandTotal?: InputMaybe<Scalars['Number']>
  grandTotalForeign?: InputMaybe<Scalars['Number']>
  grandTotalLocal?: InputMaybe<Scalars['Number']>
  paymentAmount?: InputMaybe<Scalars['Number']>
  salesName?: InputMaybe<Scalars['String']>
  total?: InputMaybe<Scalars['Number']>
  totalAfterDiscount?: InputMaybe<Scalars['Number']>
  totalForeign?: InputMaybe<Scalars['Number']>
  totalLocal?: InputMaybe<Scalars['Number']>
  vat?: InputMaybe<Scalars['Number']>
  withHoldingTax?: InputMaybe<Scalars['Number']>
}

export type InputInvoiceProduct = {
  code?: InputMaybe<Scalars['String']>
  exchangeRate?: InputMaybe<Scalars['Number']>
  id?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
  quantity?: InputMaybe<Scalars['Number']>
  total?: InputMaybe<Scalars['Number']>
  totalForeign?: InputMaybe<Scalars['Number']>
  totalLocal?: InputMaybe<Scalars['Number']>
  unit?: InputMaybe<Scalars['String']>
  unitId?: InputMaybe<Scalars['ID']>
  unitPriceForeign?: InputMaybe<Scalars['Number']>
  unitPriceForeignCurrency?: InputMaybe<Scalars['String']>
  unitPriceLocal?: InputMaybe<Scalars['Number']>
  unitPriceLocalCurrency?: InputMaybe<Scalars['String']>
}

export type InputInvoiceUpdate = {
  attachFileList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  companyStamp?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contactDetail?: InputMaybe<InputInvoiceContactDetail>
  customerId?: InputMaybe<Scalars['String']>
  customerName?: InputMaybe<Scalars['String']>
  priceDetail?: InputMaybe<InputInvoicePriceDetail>
  productList?: InputMaybe<Array<InputMaybe<InputInvoiceProduct>>>
  remark?: InputMaybe<Scalars['String']>
  signature?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type InputLocaleMasterData = {
  locale?: InputMaybe<Scalars['String']>
  text?: InputMaybe<Scalars['String']>
}

export type InputLocaleTextForm = {
  attribute?: InputMaybe<Scalars['JSON']>
  dataKey: Scalars['String']
  locale: Scalars['String']
  orgKey?: InputMaybe<Scalars['String']>
  searchable?: InputMaybe<EnumIs>
  text: Scalars['String']
}

export type InputLocation = {
  attachmentList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  code?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  globalName?: InputMaybe<Scalars['String']>
  image?: InputMaybe<Scalars['String']>
  localName?: InputMaybe<Scalars['String']>
  parent?: InputMaybe<Scalars['ID']>
  productUsage?: InputMaybe<EnumIs>
  type?: InputMaybe<EnumLocationType>
}

export type InputMasterData = {
  attribute?: InputMaybe<Scalars['JSON']>
  dataKey?: InputMaybe<Scalars['String']>
  parentKey?: InputMaybe<Scalars['String']>
  searchable?: InputMaybe<EnumIs>
}

export type InputNumberAttribute = {
  key?: InputMaybe<Scalars['String']>
  value?: InputMaybe<Scalars['Number']>
}

export type InputPagination = {
  limit?: InputMaybe<Scalars['Int']>
  page?: InputMaybe<Scalars['Int']>
}

export type InputPermissionForm = {
  code?: InputMaybe<Array<Scalars['String']>>
  permissionKey: Scalars['String']
  scopeList?: InputMaybe<Array<Scalars['String']>>
}

export type InputPermissionRole = {
  code: Scalars['String']
  permissionName: Scalars['String']
  scpes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type InputProduct = {
  attachmentList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  brandName?: InputMaybe<Scalars['String']>
  canProduce?: InputMaybe<EnumIs>
  cctvId?: InputMaybe<Scalars['String']>
  code?: InputMaybe<Scalars['String']>
  currency?: InputMaybe<InputProductCurrency>
  customsCode?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  effectiveDate?: InputMaybe<Scalars['Date']>
  globalName?: InputMaybe<Scalars['String']>
  image?: InputMaybe<Scalars['String']>
  localName?: InputMaybe<Scalars['String']>
  productCategory?: InputMaybe<Scalars['ID']>
  productType?: InputMaybe<Scalars['ID']>
  productUnit?: InputMaybe<Scalars['ID']>
  productWeightUnit?: InputMaybe<Scalars['ID']>
  productYear?: InputMaybe<Scalars['String']>
  statisticCode?: InputMaybe<Scalars['String']>
  tariffCode?: InputMaybe<Scalars['String']>
  tariffRate?: InputMaybe<Scalars['Number']>
  tariffSequence?: InputMaybe<Scalars['String']>
  type?: InputMaybe<EnumProductType>
  unitPrice?: InputMaybe<Scalars['Number']>
  weight?: InputMaybe<Scalars['Number']>
}

export type InputProductionOrder = {
  attachmentList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  billOfMaterial?: InputMaybe<Scalars['ID']>
  date?: InputMaybe<Scalars['Date']>
  endDate?: InputMaybe<Scalars['Date']>
  endWipDate?: InputMaybe<Scalars['Date']>
  location?: InputMaybe<Scalars['ID']>
  no?: InputMaybe<Scalars['String']>
  product?: InputMaybe<Scalars['ID']>
  remark?: InputMaybe<Scalars['String']>
  startDate?: InputMaybe<Scalars['Date']>
  step?: InputMaybe<Scalars['Number']>
}

export type InputProductionOrderDetail = {
  currency?: InputMaybe<Scalars['String']>
  invoiceAmountLocal?: InputMaybe<Scalars['Number']>
  netWeight?: InputMaybe<Scalars['Number']>
  netWeightUnit?: InputMaybe<Scalars['ID']>
  product?: InputMaybe<Scalars['ID']>
  productRelocation?: InputMaybe<Scalars['ID']>
  productionOrder?: InputMaybe<Scalars['ID']>
  quantity?: InputMaybe<Scalars['Number']>
  quantityUnit?: InputMaybe<Scalars['ID']>
  relocationRef?: InputMaybe<Scalars['String']>
  remark?: InputMaybe<Scalars['String']>
  status?: InputMaybe<EnumDeclarationDetailStatus>
  unitPriceLocal?: InputMaybe<Scalars['Number']>
}

export type InputProductCurrency = {
  currency?: InputMaybe<Scalars['String']>
  value?: InputMaybe<Scalars['Number']>
}

export type InputProductProperty = {
  attachmentList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  code?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  globalName?: InputMaybe<Scalars['String']>
  localName?: InputMaybe<Scalars['String']>
  parent?: InputMaybe<Scalars['ID']>
  type?: InputMaybe<EnumProductPropertyType>
}

export type InputProductRelocation = {
  attachmentList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  date?: InputMaybe<Scalars['Date']>
  declarationDetail?: InputMaybe<Scalars['ID']>
  locationList?: InputMaybe<Array<InputMaybe<InputProductRelocationLocation>>>
  no?: InputMaybe<Scalars['String']>
  product?: InputMaybe<Scalars['ID']>
  productionOrder?: InputMaybe<Scalars['ID']>
  ref?: InputMaybe<Scalars['String']>
  reserve?: InputMaybe<EnumIs>
  status?: InputMaybe<EnumProductRelocationStatus>
  transfer?: InputMaybe<Scalars['ID']>
  type?: InputMaybe<EnumProductRelocationType>
}

export type InputProductRelocationLocation = {
  beforeProductNumber?: InputMaybe<Scalars['Number']>
  declaration?: InputMaybe<Scalars['ID']>
  declarationDetail?: InputMaybe<Scalars['ID']>
  fromLocation?: InputMaybe<Scalars['ID']>
  productionOrder?: InputMaybe<Scalars['ID']>
  quantity?: InputMaybe<Scalars['Number']>
  remark?: InputMaybe<Scalars['String']>
  toLocation?: InputMaybe<Scalars['ID']>
  toProduct?: InputMaybe<Scalars['ID']>
  type?: InputMaybe<EnumProductRelocationLocationType>
}

export type InputProperty = {
  address?: InputMaybe<Scalars['String']>
  branch?: InputMaybe<Scalars['String']>
  companyEmail?: InputMaybe<Scalars['String']>
  companyFax?: InputMaybe<Scalars['String']>
  companyLogo?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  companyPhone?: InputMaybe<Scalars['String']>
  companyStamp?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  currency?: InputMaybe<Scalars['String']>
  district?: InputMaybe<Scalars['String']>
  freezoneArea?: InputMaybe<Scalars['String']>
  globalName?: InputMaybe<Scalars['String']>
  lostPercent?: InputMaybe<Scalars['Number']>
  name?: InputMaybe<Scalars['String']>
  province?: InputMaybe<Scalars['String']>
  signature?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  subDistrict?: InputMaybe<Scalars['String']>
  taxNo?: InputMaybe<Scalars['String']>
  zipCode?: InputMaybe<Scalars['String']>
}

export type InputQuotation = {
  attachFileList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  companyStamp?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contactDetail?: InputMaybe<InputQuotationContactDetail>
  customerId?: InputMaybe<Scalars['String']>
  customerName?: InputMaybe<Scalars['String']>
  priceDetail?: InputMaybe<InputQuotationPriceDetail>
  productList?: InputMaybe<Array<InputMaybe<InputQuotationProduct>>>
  quotationNumber: Scalars['String']
  remark?: InputMaybe<Scalars['String']>
  signature?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type InputQuotationContactDetail = {
  address?: InputMaybe<Scalars['String']>
  branch?: InputMaybe<Scalars['String']>
  taxId?: InputMaybe<Scalars['String']>
  zipCode?: InputMaybe<Scalars['String']>
}

export type InputQuotationPriceDetail = {
  date?: InputMaybe<Scalars['Date']>
  discount?: InputMaybe<Scalars['Number']>
  dueDate?: InputMaybe<Scalars['Date']>
  grandTotal?: InputMaybe<Scalars['Number']>
  grandTotalForeign?: InputMaybe<Scalars['Number']>
  grandTotalLocal?: InputMaybe<Scalars['Number']>
  paymentAmount?: InputMaybe<Scalars['Number']>
  salesName?: InputMaybe<Scalars['String']>
  total?: InputMaybe<Scalars['Number']>
  totalAfterDiscount?: InputMaybe<Scalars['Number']>
  totalForeign?: InputMaybe<Scalars['Number']>
  totalLocal?: InputMaybe<Scalars['Number']>
  vat?: InputMaybe<Scalars['Number']>
  withHoldingTax?: InputMaybe<Scalars['Number']>
}

export type InputQuotationProduct = {
  code?: InputMaybe<Scalars['String']>
  exchangeRate?: InputMaybe<Scalars['Number']>
  id?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
  quantity?: InputMaybe<Scalars['Number']>
  total?: InputMaybe<Scalars['Number']>
  totalForeign?: InputMaybe<Scalars['Number']>
  totalLocal?: InputMaybe<Scalars['Number']>
  unit?: InputMaybe<Scalars['String']>
  unitId?: InputMaybe<Scalars['ID']>
  unitPrice?: InputMaybe<Scalars['Number']>
  unitPriceCurrency?: InputMaybe<Scalars['String']>
  unitPriceForeign?: InputMaybe<Scalars['Number']>
  unitPriceForeignCurrency?: InputMaybe<Scalars['String']>
  unitPriceLocal?: InputMaybe<Scalars['Number']>
  unitPriceLocalCurrency?: InputMaybe<Scalars['String']>
}

export type InputQuotationUpdate = {
  attachFileList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  companyStamp?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contactDetail?: InputMaybe<InputQuotationContactDetail>
  customerId?: InputMaybe<Scalars['String']>
  customerName?: InputMaybe<Scalars['String']>
  priceDetail?: InputMaybe<InputQuotationPriceDetail>
  productList?: InputMaybe<Array<InputMaybe<InputQuotationProduct>>>
  remark?: InputMaybe<Scalars['String']>
  signature?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type InputReceptionLocation = {
  location?: InputMaybe<Scalars['ID']>
  quantity?: InputMaybe<Scalars['Number']>
  remark?: InputMaybe<Scalars['String']>
}

/**  input for create new Report  */
export type InputReport = {
  docTypeList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  endDate?: InputMaybe<Scalars['Date']>
  /**  use value from getFileType Queries */
  fileTypeKey?: InputMaybe<EnumReportFileType>
  locationList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  locationType?: InputMaybe<EnumReportSelect>
  productAvailable?: InputMaybe<EnumProductAvailable>
  reportSubTypeKeyList?: InputMaybe<Array<InputMaybe<EnumReportProductType>>>
  /**  use value from getReportType Queries  */
  reportTypeKey?: InputMaybe<EnumReportType>
  selectDate?: InputMaybe<Scalars['Date']>
  selectDocType?: InputMaybe<EnumReportSelect>
  selectSubTypeKey?: InputMaybe<EnumReportSelect>
  startDate?: InputMaybe<Scalars['Date']>
}

export type InputRoleFrom = {
  isDefault?: InputMaybe<EnumIs>
  isReplaceable?: InputMaybe<EnumIs>
  name?: InputMaybe<Scalars['String']>
  needApproval?: InputMaybe<EnumIs>
  roleKey?: InputMaybe<Scalars['String']>
  roleType?: InputMaybe<EnumLrleType>
  status?: InputMaybe<EnumAppStatus>
}

export type InputRunningNumber = {
  attribute?: InputMaybe<Scalars['JSON']>
  formatDate?: InputMaybe<EnumRunningNumberDateformat>
  lastText?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  numberRunning?: InputMaybe<EnumRunningNumber>
  runningKey?: InputMaybe<Scalars['String']>
  text?: InputMaybe<Scalars['String']>
}

export type InputS3Config = {
  ACL: Scalars['String']
  accessKeyId: Scalars['String']
  bucket: Scalars['String']
  headers?: InputMaybe<Scalars['JSON']>
  publicEndpoint: Scalars['String']
  region: Scalars['String']
  s3ForcePathStyle: Scalars['Boolean']
  secretAccessKey: Scalars['String']
  serviceEndpoint: Scalars['String']
  signatureExpires: Scalars['Number']
  signatureVersion: Scalars['String']
  uniquePrefix: Scalars['Boolean']
}

export type InputSchemaCctvToolkit = {
  certID: Scalars['String']
  serialNumber: Scalars['String']
  status: EnumCctvToolkitStatus
  toolkitName: Scalars['String']
}

export type InputSchemaCctvToolkitConfig = {
  /**  default is 10 row  */
  maxRowSync?: InputMaybe<Scalars['Number']>
  s3?: InputMaybe<InputS3Config>
  /**  second -> default is 1 minute  */
  syncIterSec?: InputMaybe<Scalars['Number']>
  syncStatus: Scalars['Boolean']
}

export type InputSchemaCctvToolkitRegister = {
  certID?: InputMaybe<Scalars['String']>
  serialNumber?: InputMaybe<Scalars['String']>
  toolkitName?: InputMaybe<Scalars['String']>
}

export type InputSearch = {
  condition?: InputMaybe<Scalars['String']>
  searchAttribute?: InputMaybe<Array<InputMaybe<InputSearchAttribute>>>
}

export type InputSearchAttribute = {
  key?: InputMaybe<Scalars['String']>
  value?: InputMaybe<Scalars['String']>
}

export type InputTransfer = {
  attachmentList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  productType?: InputMaybe<EnumTransferProductType>
  relocationRef?: InputMaybe<Scalars['String']>
  remark?: InputMaybe<Scalars['String']>
  step?: InputMaybe<Scalars['Number']>
  transferDate?: InputMaybe<Scalars['Date']>
  transferInDate?: InputMaybe<Scalars['Date']>
  transferNo?: InputMaybe<Scalars['String']>
  transferOut?: InputMaybe<Scalars['ID']>
  transferOutDate?: InputMaybe<Scalars['Date']>
  type?: InputMaybe<EnumTransferType>
}

export type InputUpdateApp = {
  attribute?: InputMaybe<Scalars['JSON']>
  name: Scalars['String']
  status?: InputMaybe<EnumAppStatus>
}

export type InputUpdateReport = {
  docTypeList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  endDate?: InputMaybe<Scalars['Date']>
  /**  use value from getFileType Queries */
  fileTypeKey?: InputMaybe<EnumReportFileType>
  locationList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  locationType?: InputMaybe<EnumReportSelect>
  productAvailable?: InputMaybe<EnumProductAvailable>
  reportId: Scalars['ID']
  reportSubTypeKeyList?: InputMaybe<Array<InputMaybe<EnumReportProductType>>>
  /**  use value from getReportType Queries  */
  reportTypeKey?: InputMaybe<EnumReportType>
  selectDate?: InputMaybe<Scalars['Date']>
  selectDocType?: InputMaybe<EnumReportSelect>
  selectSubTypeKey?: InputMaybe<EnumReportSelect>
  startDate?: InputMaybe<Scalars['Date']>
  /**  use value from getReportStatus Queries  */
  statusKey?: InputMaybe<EnumReportStatus>
  url?: InputMaybe<Scalars['String']>
}

export type Mutation = {
  addCCTVToLocation: Maybe<TypeLocation>
  calReport: Maybe<TypeReportResponse>
  cancelDeclaration: Maybe<TypeDeclaration>
  cancelProductionOrder: Maybe<TypeProductionOrder>
  cleanDataDeclarationAndReport: Maybe<TypeDeclaration>
  cleanDeclarationByFileKey: Maybe<TypeDeclaration>
  confirmDeclaration: Maybe<TypeDeclaration>
  confirmTransfer: Maybe<TypeTransferResponse>
  createBillOfMaterial: Maybe<TypeBillOfMaterial>
  createCCTV: Maybe<TypeCctv>
  createContact: Maybe<TypeContact>
  createDeclaration: Maybe<TypeDeclaration>
  createDeclarationByInvoice: Maybe<TypeDeclaration>
  createDeclarationNotFlow: Maybe<TypeDeclaration>
  createFileUpload: Maybe<TypeFileupload>
  createInvoice: Maybe<TypeInvoice>
  createLocaleText: Maybe<TypeLocale>
  createLocaleTextList: Maybe<TypeLocaleList>
  createLocation: Maybe<TypeLocation>
  createMasterData: Maybe<TypeMasterData>
  createProduct: Maybe<TypeProduct>
  createProductProperty: Maybe<TypeProductProperty>
  createProductionOrder: Maybe<TypeProductionOrder>
  createQuotation: Maybe<TypeQuotation>
  createReport: Maybe<TypeReportResponse>
  createRunningNumber: Maybe<TypeRunningNumber>
  createTransfer: Maybe<TypeTransferResponse>
  deleteBillOfMaterial: Maybe<TypeBillOfMaterial>
  deleteCCTV: Maybe<TypeCctv>
  deleteCCTVMotionCapture: Maybe<TypeCctvMotioncaptureDelete>
  deleteCCTVToolkit: Maybe<TypeCctvToolkitPayload>
  deleteContact: Maybe<TypeContact>
  deleteDataSecurity: Maybe<TypeRoleDataSecurityList>
  deleteDeclaration: Maybe<TypeDeclaration>
  deleteDeclarationDetail: Maybe<TypeDeclarationDetail>
  deleteFileUpload: Maybe<TypeFileupload>
  deleteInvoice: Maybe<TypeInvoice>
  deleteLocaleText: Maybe<TypeLocale>
  deleteLocation: Maybe<TypeLocation>
  deleteMasterData: Maybe<TypeMasterData>
  deletePermission: Maybe<TypeRolePermissionList>
  deleteProduct: Maybe<TypeProduct>
  deleteProductProperty: Maybe<TypeProductProperty>
  deleteProductRelocation: Maybe<TypeProductRelocation>
  deleteProductRelocationByRef: Maybe<TypeProductRelocation>
  deleteProductionOrderDetail: Maybe<TypeProductionOrderDetail>
  deleteQuotation: Maybe<TypeQuotation>
  deleteReportList: Maybe<TypeReportResponse>
  deleteRunningNumber: Maybe<TypeRunningNumber>
  deleteTransfer: Maybe<TypeTransferResponse>
  genReoprt: Maybe<TypeReportResponse>
  generateRunningNumber: Maybe<TypeGenerateRunningNumber>
  importProduct: Maybe<TypeImportdataProduct>
  reCalReportExport: Maybe<TypeScript>
  registerCCTV: Maybe<TypeCctv>
  registerCCTVToolkit: Maybe<TypeCctvToolkitPayload>
  removeCCTVFromLocation: Maybe<TypeLocation>
  runScript: Maybe<TypeScript>
  syncCCTVData: Maybe<TypeCctvSync>
  updateBillOfMaterail: Maybe<TypeBillOfMaterial>
  updateCCTV: Maybe<TypeCctv>
  updateCCTVToolkitConfig: Maybe<TypeCctvToolkitConfig>
  updateContact: Maybe<TypeContact>
  updateDataSecurity: Maybe<TypeRoleDataSecurityList>
  updateDeclaration: Maybe<TypeDeclaration>
  updateDeclarationContact: Maybe<TypeDeclaration>
  updateDeclarationControl: Maybe<TypeDeclarationControl>
  updateDeclarationDetail: Maybe<TypeDeclarationDetail>
  updateDeclarationInvoice: Maybe<TypeDeclarationInvoice>
  updateDeclarationNotFlow: Maybe<TypeDeclaration>
  updateFileUpload: Maybe<TypeFileupload>
  updateInvoice: Maybe<TypeInvoice>
  updateLocaleText: Maybe<TypeLocale>
  updateLocaleTextList: Maybe<TypeLocaleList>
  updateLocation: Maybe<TypeLocation>
  updateMasterData: Maybe<TypeMasterData>
  updateOrgProperty: Maybe<TypeProperty>
  updatePermission: Maybe<TypeRolePermissionList>
  updateProduct: Maybe<TypeProduct>
  updateProductProperty: Maybe<TypeProductProperty>
  updateProductRelocation: Maybe<TypeProductRelocation>
  updateProductionOrder: Maybe<TypeProductionOrder>
  updateProductionOrderDetail: Maybe<TypeProductionOrderDetail>
  updateQuotation: Maybe<TypeQuotation>
  updateReport: Maybe<TypeReportResponse>
  updateStatusCCTVToolkit: Maybe<TypeCctvToolkitPayload>
  updateStatusProductionOrder: Maybe<TypeProductionOrder>
  updateTransfer: Maybe<TypeTransferResponse>
}

export type MutationAddCctvToLocationArgs = {
  input?: InputMaybe<InputCctvToLocation>
}

export type MutationCalReportArgs = {
  reportId: Scalars['String']
}

export type MutationCancelDeclarationArgs = {
  declarationId: Scalars['ID']
}

export type MutationCancelProductionOrderArgs = {
  productionOrderId: Scalars['ID']
}

export type MutationCleanDataDeclarationAndReportArgs = {
  declarationNoList: Array<Scalars['String']>
}

export type MutationCleanDeclarationByFileKeyArgs = {
  declarationNoList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  fileKey: Scalars['String']
}

export type MutationConfirmDeclarationArgs = {
  declarationId: Scalars['ID']
}

export type MutationConfirmTransferArgs = {
  transferId: Scalars['ID']
}

export type MutationCreateBillOfMaterialArgs = {
  input?: InputMaybe<InputBillOfMaterial>
}

export type MutationCreateCctvArgs = {
  input?: InputMaybe<InputCctv>
  tkSerialNumberList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type MutationCreateContactArgs = {
  input?: InputMaybe<InputContact>
}

export type MutationCreateDeclarationArgs = {
  input?: InputMaybe<InputDeclaration>
}

export type MutationCreateDeclarationByInvoiceArgs = {
  invoiceId: Scalars['ID']
}

export type MutationCreateDeclarationNotFlowArgs = {
  input?: InputMaybe<InputDeclaration>
}

export type MutationCreateFileUploadArgs = {
  input?: InputMaybe<InputFileupload>
}

export type MutationCreateInvoiceArgs = {
  input?: InputMaybe<InputInvoice>
}

export type MutationCreateLocaleTextArgs = {
  input?: InputMaybe<InputLocaleTextForm>
}

export type MutationCreateLocaleTextListArgs = {
  inputList: Array<InputLocaleTextForm>
}

export type MutationCreateLocationArgs = {
  input?: InputMaybe<InputLocation>
}

export type MutationCreateMasterDataArgs = {
  localeInputList?: InputMaybe<Array<InputMaybe<InputLocaleMasterData>>>
  masterDataInput?: InputMaybe<InputMasterData>
}

export type MutationCreateProductArgs = {
  input?: InputMaybe<InputProduct>
}

export type MutationCreateProductPropertyArgs = {
  input?: InputMaybe<InputProductProperty>
}

export type MutationCreateProductionOrderArgs = {
  input?: InputMaybe<InputProductionOrder>
}

export type MutationCreateQuotationArgs = {
  input?: InputMaybe<InputQuotation>
}

export type MutationCreateReportArgs = {
  input?: InputMaybe<InputReport>
}

export type MutationCreateRunningNumberArgs = {
  input?: InputMaybe<InputRunningNumber>
}

export type MutationCreateTransferArgs = {
  input?: InputMaybe<InputTransfer>
}

export type MutationDeleteBillOfMaterialArgs = {
  billOfMaterialId: Scalars['ID']
}

export type MutationDeleteCctvArgs = {
  IdList?: InputMaybe<Array<Scalars['ID']>>
}

export type MutationDeleteCctvMotionCaptureArgs = {
  input?: InputMaybe<InputDeleteCctvMotion>
}

export type MutationDeleteCctvToolkitArgs = {
  cctvToolkitID: Scalars['ID']
}

export type MutationDeleteContactArgs = {
  contactId: Scalars['ID']
}

export type MutationDeleteDataSecurityArgs = {
  roleKey: Scalars['String']
  securityKeyList?: InputMaybe<Array<Scalars['String']>>
}

export type MutationDeleteDeclarationArgs = {
  declarationId: Scalars['ID']
}

export type MutationDeleteDeclarationDetailArgs = {
  declarationDetailId: Scalars['ID']
  declarationId: Scalars['ID']
}

export type MutationDeleteFileUploadArgs = {
  fileKey: Scalars['String']
  refId: Scalars['String']
}

export type MutationDeleteInvoiceArgs = {
  invoiceId: Scalars['ID']
}

export type MutationDeleteLocaleTextArgs = {
  dataKey: Scalars['String']
  orgKey?: InputMaybe<Scalars['String']>
}

export type MutationDeleteLocationArgs = {
  productLocationId: Scalars['ID']
}

export type MutationDeleteMasterDataArgs = {
  dataKey: Scalars['String']
}

export type MutationDeletePermissionArgs = {
  permissionKeyList: Array<Scalars['String']>
  roleKey: Scalars['String']
}

export type MutationDeleteProductArgs = {
  productId: Scalars['ID']
}

export type MutationDeleteProductPropertyArgs = {
  productPropertyId: Scalars['ID']
}

export type MutationDeleteProductRelocationArgs = {
  productRelocationId: Scalars['ID']
}

export type MutationDeleteProductRelocationByRefArgs = {
  ref: Scalars['String']
}

export type MutationDeleteProductionOrderDetailArgs = {
  productionOrderDetailId: Scalars['ID']
  productionOrderId: Scalars['ID']
}

export type MutationDeleteQuotationArgs = {
  quotationId: Scalars['ID']
}

export type MutationDeleteReportListArgs = {
  input?: InputMaybe<InputDeleteReportList>
}

export type MutationDeleteRunningNumberArgs = {
  runningId?: InputMaybe<Array<Scalars['String']>>
}

export type MutationDeleteTransferArgs = {
  transferId?: InputMaybe<Scalars['ID']>
}

export type MutationGenReoprtArgs = {
  reportId: Scalars['String']
}

export type MutationGenerateRunningNumberArgs = {
  input?: InputMaybe<InputGenerateRunningNumber>
}

export type MutationImportProductArgs = {
  fileKey: Scalars['String']
}

export type MutationReCalReportExportArgs = {
  decNoArray?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  orgKey?: InputMaybe<Scalars['String']>
}

export type MutationRegisterCctvArgs = {
  input?: InputMaybe<InputCctv>
}

export type MutationRegisterCctvToolkitArgs = {
  input?: InputMaybe<InputSchemaCctvToolkitRegister>
}

export type MutationRemoveCctvFromLocationArgs = {
  input?: InputMaybe<InputCctvFromLocation>
}

export type MutationRunScriptArgs = {
  scriptKey?: InputMaybe<Scalars['String']>
}

export type MutationSyncCctvDataArgs = {
  input?: InputMaybe<InputCctvSync>
}

export type MutationUpdateBillOfMaterailArgs = {
  billOfMaterialId: Scalars['ID']
  input?: InputMaybe<InputBillOfMaterial>
}

export type MutationUpdateCctvArgs = {
  Id: Scalars['ID']
  input?: InputMaybe<InputCctv>
  tkSerialNumberList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type MutationUpdateCctvToolkitConfigArgs = {
  input?: InputMaybe<InputSchemaCctvToolkitConfig>
  tkSerialNumber: Scalars['String']
}

export type MutationUpdateContactArgs = {
  contactId: Scalars['ID']
  input?: InputMaybe<InputContact>
}

export type MutationUpdateDataSecurityArgs = {
  roleKey: Scalars['String']
  securityList?: InputMaybe<Array<InputMaybe<InputDataSecurityForm>>>
}

export type MutationUpdateDeclarationArgs = {
  declarationId: Scalars['ID']
  input?: InputMaybe<InputDeclaration>
}

export type MutationUpdateDeclarationContactArgs = {
  contactId: Scalars['ID']
  declarationId: Scalars['ID']
}

export type MutationUpdateDeclarationControlArgs = {
  declarationId: Scalars['ID']
  input?: InputMaybe<InputDeclarationControl>
}

export type MutationUpdateDeclarationDetailArgs = {
  declarationDetailId?: InputMaybe<Scalars['ID']>
  declarationId: Scalars['ID']
  input?: InputMaybe<InputDeclarationDetail>
}

export type MutationUpdateDeclarationInvoiceArgs = {
  declarationId: Scalars['ID']
  input?: InputMaybe<InputDeclarationInvoice>
}

export type MutationUpdateDeclarationNotFlowArgs = {
  declarationId: Scalars['ID']
  input?: InputMaybe<InputDeclaration>
}

export type MutationUpdateFileUploadArgs = {
  id: Scalars['ID']
  input?: InputMaybe<InputFileupload>
}

export type MutationUpdateInvoiceArgs = {
  input?: InputMaybe<InputInvoiceUpdate>
  invoiceId: Scalars['ID']
}

export type MutationUpdateLocaleTextArgs = {
  dataInput?: InputMaybe<InputLocaleTextForm>
  dataKey: Scalars['String']
  orgKey?: InputMaybe<Scalars['String']>
}

export type MutationUpdateLocaleTextListArgs = {
  inputList: Array<InputLocaleTextForm>
}

export type MutationUpdateLocationArgs = {
  input?: InputMaybe<InputLocation>
  productLocationId: Scalars['ID']
}

export type MutationUpdateMasterDataArgs = {
  dataKey: Scalars['String']
  localeInputList?: InputMaybe<Array<InputMaybe<InputLocaleMasterData>>>
  masterDataInput?: InputMaybe<InputMasterData>
}

export type MutationUpdateOrgPropertyArgs = {
  input?: InputMaybe<InputProperty>
}

export type MutationUpdatePermissionArgs = {
  permissionList?: InputMaybe<Array<InputMaybe<InputPermissionForm>>>
  roleKey: Scalars['String']
}

export type MutationUpdateProductArgs = {
  input?: InputMaybe<InputProduct>
  productId: Scalars['ID']
}

export type MutationUpdateProductPropertyArgs = {
  input?: InputMaybe<InputProductProperty>
  productPropertyId: Scalars['ID']
}

export type MutationUpdateProductRelocationArgs = {
  input?: InputMaybe<InputProductRelocation>
  productRelocationId?: InputMaybe<Scalars['String']>
}

export type MutationUpdateProductionOrderArgs = {
  input?: InputMaybe<InputProductionOrder>
  productionOrderId: Scalars['ID']
}

export type MutationUpdateProductionOrderDetailArgs = {
  input?: InputMaybe<InputProductionOrderDetail>
  productionOrderDetailId?: InputMaybe<Scalars['ID']>
  productionOrderId: Scalars['ID']
}

export type MutationUpdateQuotationArgs = {
  input?: InputMaybe<InputQuotationUpdate>
  quotationId: Scalars['ID']
}

export type MutationUpdateReportArgs = {
  input?: InputMaybe<InputUpdateReport>
}

export type MutationUpdateStatusCctvToolkitArgs = {
  cctvToolkitID: Scalars['ID']
  status: EnumCctvToolkitStatusUpdate
}

export type MutationUpdateStatusProductionOrderArgs = {
  productionOrderId: Scalars['ID']
  status: EnumProductionOrderStatus
}

export type MutationUpdateTransferArgs = {
  input?: InputMaybe<InputTransfer>
  transferId: Scalars['ID']
}

export type OrganizationList = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<TypePagination>
  payload: Maybe<Array<Maybe<TypeOrganizationResponse>>>
}

export type Query = {
  CCTVInLocation: Maybe<TypeCctvList>
  _dummy: Maybe<Scalars['String']>
  checkDataBillOfMaterial: Maybe<TypeProductOverloadList>
  checkLost: Maybe<TypePropertyOverMaxLost>
  generateLocationList: Maybe<TypeProductRelocationLocationList>
  getCCTV: Maybe<TypeCctvList>
  getCCTVConfigVersion: Maybe<TypeCctvTookitVersion>
  getCCTVForReport: Maybe<TypeCctvList>
  getCCTVMotionCapture: Maybe<TypeCctvMotioncaptureList>
  getCCTVMotionCaptureReport: Maybe<TypeCctvMotioncaptureList>
  getCCTVRecording: Maybe<TypeCctvRecordingList>
  getCCTVRecordingReport: Maybe<TypeCctvRecordingList>
  getCCTVSync: Maybe<TypeCctvSyncData>
  getCCTVTookitConfig: Maybe<TypeCctvToolkitConfig>
  getCCTVToolkit: Maybe<TypeCctvToolkitPayloadList>
  getDataBillOfMaterial: Maybe<TypeBillOfMaterialList>
  getDataRunningNumber: Maybe<TypeRunningNumberList>
  getDataSecurityRole: Maybe<TypeDataSecurityList>
  getFileUpload: Maybe<TypeFileuploadList>
  getHello: Maybe<Scalars['String']>
  getInvoice: Maybe<TypeInvoiceList>
  getLocale: Maybe<TypeLocaleList>
  getLocaleText: Maybe<TypeLocaleTextList>
  getMasterData: Maybe<TypeMasterDataList>
  getMyPermission: Maybe<TypeRolePermissionUserList>
  getOrgContact: Maybe<TypeContactList>
  getOrgDeclaration: Maybe<TypeDeclarationList>
  getOrgDeclarationControl: Maybe<TypeDeclarationControlList>
  getOrgDeclarationDetail: Maybe<TypeDeclarationDetailList>
  getOrgDeclarationInvoice: Maybe<TypeDeclarationInvoiceList>
  getOrgKeyLocaleText: Maybe<TypeOrgKeyList>
  getOrgLocation: Maybe<TypeLocationList>
  getOrgProduct: Maybe<TypeProductList>
  getOrgProductLocation: Maybe<TypeProductLocationList>
  getOrgProductProperty: Maybe<TypeProductPropertyList>
  getOrgProductRelocation: Maybe<TypeProductRelocationList>
  getOrgProductionOrder: Maybe<TypeProductionOrderList>
  getOrgProductionOrderDetail: Maybe<TypeProductionOrderDetailList>
  getOrgProperty: Maybe<TypeProperty>
  getOrgTransfer: Maybe<TypeTransferListResponse>
  getPermissionRole: Maybe<TypePermissionList>
  getProductsByBOM: Maybe<TypeProductByBomList>
  getQuotation: Maybe<TypeQuotationList>
  getReportList: Maybe<TypeReportListResponse>
  getReportStatusList: Maybe<TypeReportConstantListResponse>
  getReportSubTypeList: Maybe<TypeReportConstantListResponse>
  getReportTypeList: Maybe<TypeReportConstantListResponse>
  getRole: Maybe<TypeAppRoleList>
  getServiceInfo: Maybe<TypeServiceInfo>
  healthCheckCCTVToolKit: Maybe<TypeCctvToolkitHealthCheckPayload>
  recalReport: Maybe<TypeWebhook>
  webhookReport: Maybe<TypeWebhook>
}

export type QueryCctvInLocationArgs = {
  input?: InputMaybe<InputFindData>
  locationId: Scalars['String']
}

export type QueryCheckDataBillOfMaterialArgs = {
  billOfMaterialId: Scalars['ID']
  dateCheck?: InputMaybe<Scalars['String']>
}

export type QueryCheckLostArgs = {
  lostValue: Scalars['Number']
  maxValue: Scalars['Number']
}

export type QueryGenerateLocationListArgs = {
  date: Scalars['Date']
  productId: Scalars['ID']
  quantity: Scalars['Number']
  type: Array<InputMaybe<EnumProductLocationType>>
}

export type QueryGetCctvArgs = {
  input?: InputMaybe<InputFindData>
}

export type QueryGetCctvConfigVersionArgs = {
  serialNumber?: InputMaybe<Scalars['String']>
}

export type QueryGetCctvForReportArgs = {
  input?: InputMaybe<InputFindData>
}

export type QueryGetCctvMotionCaptureArgs = {
  input?: InputMaybe<InputFindData>
}

export type QueryGetCctvMotionCaptureReportArgs = {
  input?: InputMaybe<InputFindData>
}

export type QueryGetCctvRecordingArgs = {
  input?: InputMaybe<InputFindData>
}

export type QueryGetCctvRecordingReportArgs = {
  input?: InputMaybe<InputFindData>
}

export type QueryGetCctvSyncArgs = {
  input?: InputMaybe<InputFindData>
}

export type QueryGetCctvTookitConfigArgs = {
  serialNumber: Scalars['String']
}

export type QueryGetCctvToolkitArgs = {
  input?: InputMaybe<InputFindData>
}

export type QueryGetDataBillOfMaterialArgs = {
  input?: InputMaybe<InputFindData>
}

export type QueryGetDataRunningNumberArgs = {
  input?: InputMaybe<InputFindData>
}

export type QueryGetDataSecurityRoleArgs = {
  roleKey: Scalars['String']
}

export type QueryGetFileUploadArgs = {
  input?: InputMaybe<InputFindData>
}

export type QueryGetInvoiceArgs = {
  input?: InputMaybe<InputFindData>
}

export type QueryGetLocaleArgs = {
  input?: InputMaybe<InputFindData>
}

export type QueryGetLocaleTextArgs = {
  input?: InputMaybe<InputFindData>
}

export type QueryGetMasterDataArgs = {
  input?: InputMaybe<InputFindData>
}

export type QueryGetMyPermissionArgs = {
  orgKey?: InputMaybe<Scalars['String']>
}

export type QueryGetOrgContactArgs = {
  input?: InputMaybe<InputFindData>
}

export type QueryGetOrgDeclarationArgs = {
  input?: InputMaybe<InputFindData>
}

export type QueryGetOrgDeclarationControlArgs = {
  declarationId: Scalars['ID']
  input?: InputMaybe<InputFindData>
}

export type QueryGetOrgDeclarationDetailArgs = {
  declarationId: Scalars['ID']
  input?: InputMaybe<InputFindData>
}

export type QueryGetOrgDeclarationInvoiceArgs = {
  declarationId: Scalars['ID']
  input?: InputMaybe<InputFindData>
}

export type QueryGetOrgKeyLocaleTextArgs = {
  text: Scalars['String']
}

export type QueryGetOrgLocationArgs = {
  input?: InputMaybe<InputFindData>
}

export type QueryGetOrgProductArgs = {
  input?: InputMaybe<InputFindData>
}

export type QueryGetOrgProductLocationArgs = {
  input?: InputMaybe<InputFindData>
}

export type QueryGetOrgProductPropertyArgs = {
  input?: InputMaybe<InputFindData>
}

export type QueryGetOrgProductRelocationArgs = {
  input?: InputMaybe<InputFindData>
}

export type QueryGetOrgProductionOrderArgs = {
  input?: InputMaybe<InputFindData>
}

export type QueryGetOrgProductionOrderDetailArgs = {
  input?: InputMaybe<InputFindData>
  productionOrderId: Scalars['ID']
}

export type QueryGetOrgTransferArgs = {
  input?: InputMaybe<InputFindData>
}

export type QueryGetPermissionRoleArgs = {
  roleKey: Scalars['String']
}

export type QueryGetProductsByBomArgs = {
  billOfMaterialId?: InputMaybe<Scalars['String']>
}

export type QueryGetQuotationArgs = {
  input?: InputMaybe<InputFindData>
}

export type QueryGetReportListArgs = {
  input?: InputMaybe<InputFindData>
}

export type QueryGetServiceInfoArgs = {
  serviceKey: Scalars['String']
}

export type QueryHealthCheckCctvToolKitArgs = {
  serialNumber?: InputMaybe<Scalars['String']>
}

export type QueryRecalReportArgs = {
  secretKey: Scalars['String']
}

export type QueryWebhookReportArgs = {
  secretKey: Scalars['String']
}

export type TypeApp = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<TypeAppSchema>
}

export type TypeAppFeatureKey = {
  _id: Maybe<Scalars['ID']>
  description: Maybe<Scalars['String']>
  enable: Maybe<Scalars['Boolean']>
  key: Maybe<Scalars['String']>
  serviceId: Maybe<Scalars['ID']>
}

export type TypeAppList = {
  pagination: Maybe<TypePagination>
  payload: Maybe<Array<Maybe<TypeAppSchema>>>
}

export type TypeAppRole = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<TypeAppRolePayload>
}

export type TypeAppRoleList = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<TypeAppRoleListPayload>
}

export type TypeAppRoleListPayload = {
  app: Maybe<TypeApp>
  roleList: Maybe<Array<Maybe<TypeRole>>>
}

export type TypeAppRolePayload = {
  app: Maybe<TypeAppSchema>
  roleList: Maybe<Array<Maybe<TypeRole>>>
  serviceList: Maybe<Array<Maybe<TypeServiceListPayload>>>
}

export type TypeAppSchema = {
  appKey: Maybe<Scalars['String']>
  attribute: Maybe<Scalars['JSON']>
  contactEmailList: Maybe<Array<Maybe<Scalars['String']>>>
  name: Maybe<Scalars['String']>
  status: Maybe<EnumAppStatus>
}

export type TypeAppService = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<TypeAppServicePayload>
}

export type TypeAppServicePayload = {
  app: Maybe<TypeAppSchema>
  service: Maybe<TypeService>
  syncStatus: Maybe<Scalars['String']>
}

export type TypeAttribute = {
  key: Maybe<Scalars['String']>
  value: Maybe<Scalars['String']>
}

export type TypeAws = {
  _id: Maybe<Scalars['ID']>
  accessKey: Maybe<Scalars['String']>
  bucketName: Maybe<Scalars['String']>
  cloudWatchEnable: Maybe<Scalars['Boolean']>
  endpoint: Maybe<Scalars['String']>
  secretKey: Maybe<Scalars['String']>
}

export type TypeBillOfMaterial = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<TypeBillOfMaterialSchema>
}

export type TypeBillOfMaterialList = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<TypePagination>
  payload: Maybe<Array<Maybe<TypeBillOfMaterialSchema>>>
}

export type TypeBillOfMaterialSchema = {
  TimeSpent: Maybe<Scalars['Number']>
  _id: Maybe<Scalars['ID']>
  appKey: Maybe<Scalars['String']>
  billOfMaterialDate: Maybe<Scalars['String']>
  billOfmaterialNo: Maybe<Scalars['String']>
  materialList: Maybe<Array<Maybe<TypeBomMaterial>>>
  name: Maybe<Scalars['String']>
  netWeight: Maybe<Scalars['Number']>
  netWeightUnit: Maybe<TypeProductPropertySchema>
  orgKey: Maybe<Scalars['String']>
  productFinishGood: Maybe<TypeProductSchema>
  quantity: Maybe<Scalars['Number']>
  quantityUnit: Maybe<TypeProductPropertySchema>
  status: Maybe<EnumBomStatus>
  totalPrice: Maybe<Scalars['Number']>
  unitPrice: Maybe<Scalars['Number']>
}

export type TypeBomMaterial = {
  productMaterial: Maybe<TypeProductSchema>
  quantity: Maybe<Scalars['Number']>
}

export type TypeCctv = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
}

export type TypeCctvList = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<TypePagination>
  payload: Maybe<Array<Maybe<TypeSchemaCctv>>>
}

export type TypeCctvMotioncapture = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<TypeSchemaCctvMotioncapture>
}

export type TypeCctvMotioncaptureDelete = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
}

export type TypeCctvMotioncaptureList = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<TypePagination>
  payload: Maybe<Array<Maybe<TypeSchemaCctvMotioncapture>>>
}

export type TypeCctvRecording = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<TypeSchemaCctvRecording>
}

export type TypeCctvRecordingList = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<TypePagination>
  payload: Maybe<Array<Maybe<TypeSchemaCctvRecording>>>
}

export type TypeCctvSync = {
  code: Maybe<Scalars['String']>
  lastPartitionNumber: Maybe<Scalars['Number']>
  message: Maybe<Scalars['String']>
}

export type TypeCctvSyncData = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<TypePagination>
  payload: Maybe<Array<Maybe<TypeCctvSyncDataSchema>>>
}

export type TypeCctvSyncDataSchema = {
  cameraSerialNumber: Maybe<Scalars['String']>
  createdAt: Maybe<Scalars['Date']>
  fullSnapshotFileKey: Maybe<Scalars['String']>
  licensePlateFileKey: Maybe<Scalars['String']>
  licensePlateText: Maybe<Scalars['String']>
  timestamp: Maybe<Scalars['Date']>
  vehicleType: Maybe<EnumVehicle>
}

export type TypeCctvTookitVersion = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  versionDate: Maybe<Scalars['Date']>
}

export type TypeCctvToolkitConfig = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<TypeCctvToolkitConfigSchema>
}

export type TypeCctvToolkitConfigSchema = {
  _id: Maybe<Scalars['String']>
  cctvList: Maybe<Array<Maybe<TypeSchemaCctv>>>
  maxRowSync: Maybe<Scalars['Number']>
  s3: Maybe<TypeS3Config>
  syncIterSec: Maybe<Scalars['Number']>
  syncStatus: Maybe<Scalars['Boolean']>
}

export type TypeCctvToolkitHealthCheckPayload = {
  code: Maybe<Scalars['String']>
  lastHealthCheckTimestamp: Maybe<Scalars['Date']>
  message: Maybe<Scalars['String']>
}

export type TypeCctvToolkitPayload = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<TypeSchemaCctvToolkit>
}

export type TypeCctvToolkitPayloadList = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<TypePagination>
  payload: Maybe<Array<Maybe<TypeSchemaCctvToolkit>>>
}

export type TypeCctvVehicleOption = {
  car: Maybe<Scalars['Boolean']>
  motorcycle: Maybe<Scalars['Boolean']>
  truck: Maybe<Scalars['Boolean']>
}

export type TypeCheckVerifyEmail = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  verifyStatus: Maybe<Scalars['String']>
}

export type TypeContact = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<TypeContactSchema>
}

export type TypeContactDeclarationImport = {
  code: Maybe<Scalars['String']>
  globalName: Maybe<Scalars['String']>
  localName: Maybe<Scalars['String']>
}

export type TypeContactList = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<TypePagination>
  payload: Maybe<Array<Maybe<TypeContactSchema>>>
}

export type TypeContactSchema = {
  _id: Maybe<Scalars['ID']>
  accountNo: Maybe<Scalars['String']>
  address: Maybe<Scalars['String']>
  attachmentList: Maybe<Array<Maybe<Scalars['String']>>>
  attn: Maybe<Scalars['String']>
  branch: Maybe<Scalars['String']>
  code: Maybe<Scalars['String']>
  contactType: Maybe<TypeMadterDataValue>
  country: Maybe<TypeMadterDataValue>
  emailInformation: Maybe<Scalars['String']>
  emailPerson: Maybe<Scalars['String']>
  globalName: Maybe<Scalars['String']>
  incoterms: Maybe<TypeMadterDataValue>
  localName: Maybe<Scalars['String']>
  name: Maybe<Scalars['String']>
  note: Maybe<Scalars['String']>
  officeFaxNo: Maybe<Scalars['String']>
  officePhoneNo: Maybe<Scalars['String']>
  phone: Maybe<Scalars['String']>
  postcode: Maybe<Scalars['String']>
  shippingAddress: Maybe<Scalars['String']>
  shippingCountry: Maybe<Scalars['String']>
  shippingPostcode: Maybe<Scalars['String']>
  taxId: Maybe<Scalars['String']>
  vatId: Maybe<Scalars['String']>
  website: Maybe<Scalars['String']>
}

export type TypeDataSecurityList = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Array<Maybe<TypeRoleDataSecurity>>>
}

export type TypeDeclaration = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<TypeDeclarationSchema>
}

export type TypeDeclarationControl = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<TypeDeclarationControlSchema>
}

export type TypeDeclarationControlList = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<TypePagination>
  payload: Maybe<Array<Maybe<TypeDeclarationControlSchema>>>
}

export type TypeDeclarationControlSchema = {
  _id: Maybe<Scalars['ID']>
  approvalNo: Maybe<Scalars['String']>
  approvalPort: Maybe<Scalars['String']>
  arrivalDate: Maybe<Scalars['String']>
  assessmentRequestCode: Maybe<Scalars['String']>
  bankBranchCode: Maybe<Scalars['String']>
  bankCode: Maybe<Scalars['String']>
  brokerBranch: Maybe<Scalars['String']>
  cargoPackingType: Maybe<TypeMadterDataValue>
  consignmentCountry: Maybe<TypeMadterDataValue>
  currencyCode: Maybe<TypeMadterDataValue>
  customsBankCode: Maybe<Scalars['String']>
  customsClearanceCard: Maybe<Scalars['String']>
  customsClearanceName: Maybe<Scalars['String']>
  date: Maybe<Scalars['Date']>
  dateTransmit: Maybe<Scalars['Date']>
  declaration: Maybe<TypeDeclarationSchema>
  declarationNo: Maybe<Scalars['String']>
  departureDate: Maybe<Scalars['Date']>
  dischargePort: Maybe<Scalars['String']>
  docType: Maybe<TypeMadterDataValue>
  drokerTaxNo: Maybe<Scalars['String']>
  establishNo: Maybe<Scalars['String']>
  exchangeRate: Maybe<Scalars['String']>
  factoryNo: Maybe<Scalars['String']>
  grossWeightUnit: Maybe<TypeProductPropertySchema>
  houseBillLading: Maybe<Scalars['String']>
  inspectionRequestCode: Maybe<Scalars['String']>
  managerName: Maybe<Scalars['String']>
  managerNo: Maybe<Scalars['String']>
  masterBillLading: Maybe<Scalars['String']>
  netWeightUnit: Maybe<TypeProductPropertySchema>
  originCountry: Maybe<TypeMadterDataValue>
  packageUnit: Maybe<TypeProductPropertySchema>
  paymentMethod: Maybe<TypeMadterDataValue>
  productType: Maybe<EnumProductType>
  refNo: Maybe<Scalars['String']>
  refNoCommonAccess: Maybe<Scalars['String']>
  releasePort: Maybe<Scalars['String']>
  rgsCode: Maybe<Scalars['String']>
  shippingMark: Maybe<Scalars['String']>
  timeTransmit: Maybe<Scalars['Date']>
  totalDeposit: Maybe<Scalars['String']>
  totalTax: Maybe<Scalars['String']>
  transportMode: Maybe<TypeMadterDataValue>
  uidTransmit: Maybe<Scalars['String']>
  vesselName: Maybe<Scalars['String']>
}

export type TypeDeclarationDetail = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<TypeDeclarationDetailSchema>
}

export type TypeDeclarationDetailList = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<TypePagination>
  payload: Maybe<Array<Maybe<TypeDeclarationDetailSchema>>>
  verified: Maybe<Scalars['Number']>
}

export type TypeDeclarationDetailProductUpload = {
  code: Maybe<Scalars['String']>
  globalName: Maybe<Scalars['String']>
  localName: Maybe<Scalars['String']>
}

export type TypeDeclarationDetailSchema = {
  _id: Maybe<Scalars['ID']>
  ahtnCode: Maybe<Scalars['String']>
  assessExciseQuantity: Maybe<Scalars['Number']>
  assessQuantity: Maybe<Scalars['Number']>
  bis19: Maybe<Scalars['String']>
  boi: Maybe<Scalars['String']>
  bond: Maybe<Scalars['String']>
  currency: Maybe<TypeMadterDataValue>
  declaration: Maybe<TypeDeclarationSchema>
  declarationDetailOut: Maybe<Scalars['ID']>
  declarationOut: Maybe<Scalars['ID']>
  depositReason: Maybe<Scalars['String']>
  epz: Maybe<Scalars['String']>
  exchangeRate: Maybe<Scalars['Number']>
  exciseNo: Maybe<Scalars['String']>
  exciseQuantity: Maybe<Scalars['Number']>
  exciseQuantityUnit: Maybe<TypeProductPropertySchema>
  exemptIncotermsLocal: Maybe<Scalars['Number']>
  exportDeclarationLineNo: Maybe<Scalars['String']>
  exportDeclarationNo: Maybe<Scalars['String']>
  freeZone: Maybe<Scalars['String']>
  importTariff: Maybe<Scalars['String']>
  incotermsValueAssess: Maybe<Scalars['Number']>
  incotermsValueForeign: Maybe<Scalars['Number']>
  incotermsValueLocal: Maybe<Scalars['Number']>
  increasedPriceForeign: Maybe<Scalars['Number']>
  increasedPriceLocal: Maybe<Scalars['Number']>
  invoiceAmountForeign: Maybe<Scalars['Number']>
  invoiceAmountLocal: Maybe<Scalars['Number']>
  invoiceItem: Maybe<Scalars['Number']>
  invoiceNo: Maybe<Scalars['String']>
  invoiceQuantity: Maybe<Scalars['Number']>
  invoiceQuantityUnit: Maybe<TypeProductPropertySchema>
  itemNo: Maybe<Scalars['Number']>
  lastEntry: Maybe<Scalars['String']>
  natureTransaction: Maybe<Scalars['String']>
  netWeight: Maybe<Scalars['Number']>
  netWeightUnit: Maybe<TypeProductPropertySchema>
  originCountry: Maybe<TypeMadterDataValue>
  packageAmount: Maybe<Scalars['Number']>
  packageUnit: Maybe<TypeProductPropertySchema>
  privilegeCode: Maybe<Scalars['String']>
  product: Maybe<TypeProductSchema>
  productAttribute1: Maybe<Scalars['String']>
  productAttribute2: Maybe<Scalars['String']>
  productRelocation: Maybe<TypeProductRelocationSchema>
  productUpload: Maybe<TypeDeclarationDetailProductUpload>
  productYear: Maybe<Scalars['String']>
  quantity: Maybe<Scalars['Number']>
  quantityUnit: Maybe<TypeProductPropertySchema>
  reExport: Maybe<Scalars['String']>
  reImportationCertificate: Maybe<Scalars['String']>
  relocationRef: Maybe<Scalars['String']>
  remark: Maybe<Scalars['String']>
  serveral: Maybe<Scalars['String']>
  shippingMark: Maybe<Scalars['String']>
  statisticalCode: Maybe<Scalars['String']>
  status: Maybe<EnumDeclarationDetailStatus>
  tariffCode: Maybe<Scalars['String']>
  tariffSequence: Maybe<Scalars['String']>
  undgNumber: Maybe<Scalars['String']>
  unitPriceForeign: Maybe<Scalars['Number']>
  unitPriceLocal: Maybe<Scalars['Number']>
}

export type TypeDeclarationInvoice = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<TypeDeclarationInvoiceSchema>
}

export type TypeDeclarationInvoiceList = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<TypePagination>
  payload: Maybe<Array<Maybe<TypeDeclarationInvoiceSchema>>>
}

export type TypeDeclarationInvoiceSchema = {
  _id: Maybe<Scalars['ID']>
  buyerStatus: Maybe<TypeMadterDataValue>
  commercialLevel: Maybe<TypeMadterDataValue>
  consigneeStatus: Maybe<TypeMadterDataValue>
  declaration: Maybe<TypeDeclarationSchema>
  foreignInlandFreightCAF: Maybe<Scalars['Number']>
  foreignInlandFreightCC: Maybe<TypeMadterDataValue>
  forwardingCC: Maybe<TypeMadterDataValue>
  forwardingCF: Maybe<Scalars['String']>
  freightAF: Maybe<Scalars['String']>
  freightCurrency: Maybe<TypeMadterDataValue>
  insuranceAF: Maybe<Scalars['String']>
  insuranceCurrency: Maybe<TypeMadterDataValue>
  invoiceCurrency: Maybe<TypeMadterDataValue>
  invoiceDate: Maybe<Scalars['Date']>
  invoiceNo: Maybe<Scalars['String']>
  otherCAF: Maybe<Scalars['Number']>
  otherCC: Maybe<TypeMadterDataValue>
  packingCAF: Maybe<Scalars['Number']>
  packingCC: Maybe<TypeMadterDataValue>
  purchaseOrderNumber: Maybe<Scalars['String']>
  term: Maybe<TypeMadterDataValue>
  termPayment: Maybe<TypeMadterDataValue>
}

export type TypeDeclarationList = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<TypePagination>
  payload: Maybe<Array<Maybe<TypeDeclarationSchema>>>
}

export type TypeDeclarationReception = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<TypeDeclarationReceptionSchema>
}

export type TypeDeclarationReceptionList = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<TypePagination>
  payload: Maybe<Array<Maybe<TypeDeclarationReceptionSchema>>>
}

export type TypeDeclarationReceptionSchema = {
  _id: Maybe<Scalars['ID']>
  attachmentList: Maybe<Array<Maybe<Scalars['String']>>>
  receptionDate: Maybe<Scalars['Date']>
  receptionLocationList: Maybe<TypeReceptionLocation>
  receptionNo: Maybe<Scalars['String']>
  status: Maybe<EnumDeclarationReceptionStatus>
}

export type TypeDeclarationSchema = {
  _id: Maybe<Scalars['ID']>
  contact: Maybe<TypeContactSchema>
  contactUpload: Maybe<TypeContactDeclarationImport>
  date: Maybe<Scalars['Date']>
  declarationControl: Maybe<TypeDeclarationControlSchema>
  declarationDetailList: Maybe<Array<Maybe<TypeDeclarationDetailSchema>>>
  declarationInvoice: Maybe<TypeDeclarationInvoiceSchema>
  status: Maybe<EnumDeclarationStatus>
  step: Maybe<Scalars['Number']>
  type: Maybe<EnumDeclarationType>
}

export type TypeEndpoinService = {
  resourceAdmin: Maybe<Scalars['String']>
  resourceOwner: Maybe<Scalars['String']>
  system: Maybe<Scalars['String']>
}

export type TypeEndpoinServiceType = {
  gql: Maybe<TypeEndpoinService>
  rest: Maybe<TypeEndpoinService>
}

export type TypeFeatureKey = {
  _id: Maybe<Scalars['ID']>
  description: Maybe<Scalars['String']>
  enable: Maybe<Scalars['Boolean']>
  key: Maybe<Scalars['String']>
}

export type TypeFeatureList = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<TypeFeatureListPayload>
}

export type TypeFeatureListPayload = {
  app: Maybe<TypeAppSchema>
  featureList: Maybe<Array<Maybe<TypeFeatureSchema>>>
}

export type TypeFeatureSchema = {
  config: Maybe<Scalars['JSON']>
  enable: Maybe<Scalars['Boolean']>
  featureKey: Maybe<Scalars['String']>
  name: Maybe<Scalars['String']>
  requiredFeatureKeyList: Maybe<Array<Maybe<Scalars['String']>>>
}

export type TypeFileupload = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<TypeSchemaFileupload>
}

export type TypeFileuploadList = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<TypePagination>
  payload: Maybe<Array<Maybe<TypeSchemaFileupload>>>
}

export type TypeGenerateRunningNumber = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<TypeRunningNumberNo>
}

export type TypeHello = {
  message: Maybe<Scalars['String']>
}

export type TypeImportdataProduct = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
}

export type TypeInvoice = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<TypeSchemaInvoice>
}

export type TypeInvoiceContactDetail = {
  address: Maybe<Scalars['String']>
  branch: Maybe<Scalars['String']>
  taxId: Maybe<Scalars['String']>
  zipCode: Maybe<Scalars['String']>
}

export type TypeInvoiceList = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<TypePagination>
  payload: Maybe<Array<Maybe<TypeSchemaInvoice>>>
}

export type TypeInvoicePriceDetail = {
  date: Maybe<Scalars['Date']>
  discount: Maybe<Scalars['Number']>
  dueDate: Maybe<Scalars['Date']>
  grandTotal: Maybe<Scalars['Number']>
  grandTotalForeign: Maybe<Scalars['Number']>
  grandTotalLocal: Maybe<Scalars['Number']>
  paymentAmount: Maybe<Scalars['Number']>
  salesName: Maybe<Scalars['String']>
  total: Maybe<Scalars['Number']>
  totalAfterDiscount: Maybe<Scalars['Number']>
  totalForeign: Maybe<Scalars['Number']>
  totalLocal: Maybe<Scalars['Number']>
  vat: Maybe<Scalars['Number']>
  withHoldingTax: Maybe<Scalars['Number']>
}

export type TypeInvoiceProduct = {
  code: Maybe<Scalars['String']>
  exchangeRate: Maybe<Scalars['Number']>
  id: Maybe<Scalars['ID']>
  name: Maybe<Scalars['String']>
  quantity: Maybe<Scalars['Number']>
  total: Maybe<Scalars['Number']>
  totalForeign: Maybe<Scalars['Number']>
  totalLocal: Maybe<Scalars['Number']>
  unit: Maybe<Scalars['String']>
  unitId: Maybe<Scalars['ID']>
  unitPrice: Maybe<Scalars['Number']>
  unitPriceCurrency: Maybe<TypeMadterDataValue>
  unitPriceForeign: Maybe<Scalars['Number']>
  unitPriceForeignCurrency: Maybe<TypeMadterDataValue>
  unitPriceLocal: Maybe<Scalars['Number']>
  unitPriceLocalCurrency: Maybe<TypeMadterDataValue>
}

export type TypeKey = {
  _id: Maybe<Scalars['ID']>
  code: Maybe<Scalars['String']>
  description: Maybe<Scalars['String']>
  value: Maybe<Scalars['String']>
}

export type TypeLine = {
  login: Maybe<TypeLineLogin>
  notify: Maybe<TypeNotify>
}

export type TypeLineLogin = {
  _id: Maybe<Scalars['ID']>
  clientId: Maybe<Scalars['String']>
  clientSecret: Maybe<Scalars['String']>
  redirectUri: Maybe<Scalars['String']>
}

export type TypeLocale = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<TypeLocaleResponse>
}

export type TypeLocaleList = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<TypePagination>
  payload: Maybe<Array<Maybe<TypeLocaleResponse>>>
}

export type TypeLocaleResponse = {
  attribute: Maybe<Scalars['JSON']>
  dataKey: Maybe<Scalars['String']>
  dataType: Maybe<EnumDataType>
  locale: Maybe<Scalars['String']>
  orgKey: Maybe<Scalars['String']>
  searchable: Maybe<EnumIs>
  text: Maybe<Scalars['String']>
}

export type TypeLocaleText = {
  dataKey: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
  text: Maybe<Scalars['String']>
}

export type TypeLocaleTextList = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<TypePagination>
  payload: Maybe<Array<Maybe<TypeLocaleText>>>
}

export type TypeLocation = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<TypeLocationSchema>
}

export type TypeLocationList = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<TypePagination>
  payload: Maybe<Array<Maybe<TypeLocationSchema>>>
}

export type TypeLocationSchema = {
  _id: Maybe<Scalars['ID']>
  attachmentList: Maybe<Array<Maybe<Scalars['String']>>>
  cctvList: Maybe<Array<Maybe<Scalars['String']>>>
  code: Maybe<Scalars['String']>
  description: Maybe<Scalars['String']>
  globalName: Maybe<Scalars['String']>
  image: Maybe<Scalars['String']>
  localName: Maybe<Scalars['String']>
  parent: Maybe<TypeLocationSchema>
  productLocationList: Maybe<Array<Maybe<TypeProductLocationSchema>>>
  productUsage: Maybe<EnumIs>
  type: Maybe<EnumLocationType>
}

export type TypeLogsystem = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<TypeSchemaLogsystem>
}

export type TypeLogsystemList = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<TypePagination>
  payload: Maybe<Array<Maybe<TypeSchemaLogsystem>>>
}

export type TypeLogsystemUser = {
  email: Maybe<Scalars['String']>
  firstName: Maybe<Scalars['String']>
  fullName: Maybe<Scalars['String']>
  lastName: Maybe<Scalars['String']>
  telephone: Maybe<Scalars['String']>
  userId: Maybe<Scalars['String']>
}

export type TypeMadterDataValue = {
  dataKey: Maybe<Scalars['String']>
  value: Maybe<TypeLocaleText>
}

export type TypeMasterData = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<TypeMasterDataResponse>
}

export type TypeMasterDataList = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<TypePagination>
  payload: Maybe<Array<Maybe<TypeMasterDataResponse>>>
}

export type TypeMasterDataResponse = {
  attribute: Maybe<Scalars['JSON']>
  dataKey: Maybe<Scalars['String']>
  localeText: Maybe<TypeLocaleText>
  localeTextList: Maybe<Array<Maybe<TypeLocaleText>>>
  parentKey: Maybe<Scalars['String']>
  searchable: Maybe<EnumIs>
}

export type TypeMessage = {
  message: Maybe<Scalars['String']>
  success: Maybe<Scalars['Boolean']>
}

export type TypeName = {
  name: Maybe<Scalars['String']>
  name_en: Maybe<Scalars['String']>
}

export type TypeNotificationDataKey = {
  dataKey: Maybe<Scalars['String']>
  defaultValue: Maybe<Scalars['String']>
  isRequired: Maybe<EnumNotificationIsRequired>
}

export type TypeNotificationTemplate = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<TypeScmemaNotificationTemplate>
}

export type TypeNotificationTemplateList = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<TypePagination>
  payload: Maybe<Array<Maybe<TypeScmemaNotificationTemplate>>>
}

export type TypeNotify = {
  _id: Maybe<Scalars['ID']>
  isSendNotify: Maybe<Scalars['Boolean']>
  notificationDisabled: Maybe<Scalars['Boolean']>
  notifyToken: Maybe<Scalars['String']>
}

export type TypeNumberAttribute = {
  _id: Maybe<Scalars['ID']>
  key: Maybe<Scalars['String']>
  value: Maybe<Scalars['Number']>
}

export type TypeOk = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
}

export type TypeOrganization = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<TypeOrganizationResponse>
}

export type TypeOrganizationResponse = {
  attribute: Maybe<Scalars['JSON']>
  contactEmailList: Maybe<Array<Maybe<Scalars['String']>>>
  contactName: Maybe<Scalars['String']>
  name: Maybe<Scalars['String']>
  orgKey: Maybe<Scalars['String']>
  status: Maybe<EnumOrganizationStatus>
}

export type TypeOrgField = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Array<Maybe<TypeOrgFieldPayload>>>
}

export type TypeOrgFieldPayload = {
  fieldList: Maybe<Array<Maybe<TypeOrgFieldPayloadFieldList>>>
  orgKey: Maybe<Scalars['String']>
}

export type TypeOrgFieldPayloadFieldList = {
  content: Maybe<Scalars['String']>
  description: Maybe<Scalars['String']>
  fieldKey: Maybe<Scalars['String']>
  order: Maybe<Scalars['Number']>
  showInList: Maybe<EnumShowInList>
  title: Maybe<Scalars['String']>
}

export type TypeOrgKeyList = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Array<Maybe<Scalars['String']>>>
}

export type TypePagination = {
  limit: Maybe<Scalars['Int']>
  page: Maybe<Scalars['Int']>
  totalItems: Maybe<Scalars['Int']>
  totalPages: Maybe<Scalars['Int']>
}

export type TypePermisionOption = {
  _id: Maybe<Scalars['ID']>
  code: Maybe<Scalars['String']>
  description: Maybe<Scalars['String']>
  level: Maybe<Scalars['Number']>
}

export type TypePermissionList = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Array<Maybe<TypeRolePermission>>>
}

export type TypeProduct = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<TypeProductSchema>
}

export type TypeProductionOrder = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<TypeProductionOrderSchema>
}

export type TypeProductionOrderDetail = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<TypeProductionOrderDetailSchema>
}

export type TypeProductionOrderDetailList = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<TypePagination>
  payload: Maybe<Array<Maybe<TypeProductionOrderDetailSchema>>>
}

export type TypeProductionOrderDetailSchema = {
  _id: Maybe<Scalars['ID']>
  currency: Maybe<TypeMadterDataValue>
  invoiceAmountLocal: Maybe<Scalars['Number']>
  netWeight: Maybe<Scalars['Number']>
  netWeightUnit: Maybe<TypeProductPropertySchema>
  product: Maybe<TypeProductSchema>
  productRelocation: Maybe<TypeProductRelocationSchema>
  productionOrder: Maybe<TypeProductionOrderSchema>
  quantity: Maybe<Scalars['Number']>
  quantityUnit: Maybe<TypeProductPropertySchema>
  relocationRef: Maybe<Scalars['String']>
  remark: Maybe<Scalars['String']>
  status: Maybe<EnumDeclarationDetailStatus>
  unitPriceLocal: Maybe<Scalars['Number']>
}

export type TypeProductionOrderList = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<TypePagination>
  payload: Maybe<Array<Maybe<TypeProductionOrderSchema>>>
}

export type TypeProductionOrderSchema = {
  _id: Maybe<Scalars['ID']>
  attachmentList: Maybe<Array<Maybe<Scalars['String']>>>
  billOfMaterial: Maybe<TypeBillOfMaterialSchema>
  createdAt: Maybe<Scalars['Date']>
  createdBy: Maybe<Scalars['String']>
  date: Maybe<Scalars['Date']>
  endDate: Maybe<Scalars['Date']>
  endWipDate: Maybe<Scalars['Date']>
  finishGoodsRelocationRef: Maybe<Scalars['String']>
  location: Maybe<TypeLocationSchema>
  lostRelocationRef: Maybe<Scalars['String']>
  materialRelocationRef: Maybe<Scalars['String']>
  no: Maybe<Scalars['String']>
  packageRelocationRef: Maybe<Scalars['String']>
  product: Maybe<TypeProductSchema>
  remark: Maybe<Scalars['String']>
  scrapRelocationRef: Maybe<Scalars['String']>
  startDate: Maybe<Scalars['Date']>
  startedBy: Maybe<Scalars['String']>
  status: Maybe<EnumProductionOrderStatus>
  step: Maybe<Scalars['Number']>
  updatedAt: Maybe<Scalars['Date']>
}

export type TypeProductByBom = {
  billOfMaterialId: Maybe<Scalars['String']>
  billOfMaterialName: Maybe<Scalars['String']>
  declarationDetailId: Maybe<Scalars['String']>
  declarationId: Maybe<Scalars['String']>
  declarationItem: Maybe<Scalars['Number']>
  locationId: Maybe<Scalars['String']>
  locationName: Maybe<Scalars['String']>
  productCode: Maybe<Scalars['String']>
  productId: Maybe<Scalars['String']>
  productName: Maybe<Scalars['String']>
  quantity: Maybe<Scalars['Number']>
}

export type TypeProductByBomList = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Array<Maybe<TypeProductByBom>>>
}

export type TypeProductCurrency = {
  currency: Maybe<Scalars['String']>
  value: Maybe<Scalars['Number']>
}

export type TypeProductList = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<TypePagination>
  payload: Maybe<Array<Maybe<TypeProductSchema>>>
}

export type TypeProductLocation = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<TypeProductLocationSchema>
}

export type TypeProductLocationList = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<TypePagination>
  payload: Maybe<Array<Maybe<TypeProductLocationSchema>>>
}

export type TypeProductLocationSchema = {
  _id: Maybe<Scalars['ID']>
  date: Maybe<Scalars['Date']>
  declaration: Maybe<TypeDeclarationSchema>
  declarationDetail: Maybe<TypeDeclarationDetailSchema>
  fromLocation: Maybe<TypeLocationSchema>
  location: Maybe<TypeLocationSchema>
  outStock: Maybe<EnumIs>
  product: Maybe<TypeProductSchema>
  productionOrder: Maybe<TypeProductionOrderSchema>
  remaining: Maybe<Scalars['Number']>
  reserveRemaining: Maybe<Scalars['Number']>
  type: Maybe<EnumProductLocationType>
}

export type TypeProductOverload = {
  productId: Maybe<Scalars['String']>
  productName: Maybe<Scalars['String']>
  quantity: Maybe<Scalars['Number']>
}

export type TypeProductOverloadList = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Array<Maybe<TypeProductOverload>>>
}

export type TypeProductProperty = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<TypeProductPropertySchema>
}

export type TypeProductPropertyList = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<TypePagination>
  payload: Maybe<Array<Maybe<TypeProductPropertySchema>>>
}

export type TypeProductPropertySchema = {
  _id: Maybe<Scalars['ID']>
  attachmentList: Maybe<Array<Maybe<Scalars['String']>>>
  code: Maybe<Scalars['String']>
  description: Maybe<Scalars['String']>
  globalName: Maybe<Scalars['String']>
  localName: Maybe<Scalars['String']>
  parent: Maybe<TypeProductPropertySchema>
  type: Maybe<EnumProductPropertyType>
}

export type TypeProductRelocation = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<TypeProductRelocationSchema>
}

export type TypeProductRelocationList = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<TypePagination>
  payload: Maybe<Array<Maybe<TypeProductRelocationSchema>>>
  verified: Maybe<Scalars['Number']>
}

export type TypeProductRelocationLocation = {
  beforeProductNumber: Maybe<Scalars['Number']>
  declaration: Maybe<TypeDeclarationSchema>
  declarationDetail: Maybe<TypeDeclarationDetailSchema>
  fromLocation: Maybe<TypeLocationSchema>
  productionOrder: Maybe<TypeProductionOrderSchema>
  quantity: Maybe<Scalars['Number']>
  remark: Maybe<Scalars['String']>
  toLocation: Maybe<TypeLocationSchema>
  type: Maybe<EnumProductRelocationLocationType>
}

export type TypeProductRelocationLocationList = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Array<Maybe<TypeProductRelocationLocation>>>
}

export type TypeProductRelocationSchema = {
  _id: Maybe<Scalars['ID']>
  attachmentList: Maybe<Array<Maybe<Scalars['String']>>>
  date: Maybe<Scalars['Date']>
  declaration: Maybe<Scalars['ID']>
  declarationDetail: Maybe<Scalars['ID']>
  locationList: Maybe<Array<Maybe<TypeProductRelocationLocation>>>
  no: Maybe<Scalars['String']>
  parent: Maybe<TypeProductRelocationSchema>
  product: Maybe<TypeProductSchema>
  productionOrder: Maybe<Scalars['ID']>
  ref: Maybe<Scalars['String']>
  reserve: Maybe<EnumIs>
  status: Maybe<EnumProductRelocationStatus>
  totalRawMaterialQuantity: Maybe<Scalars['Number']>
  transfer: Maybe<Scalars['ID']>
  type: Maybe<EnumProductRelocationType>
}

export type TypeProductSchema = {
  _id: Maybe<Scalars['ID']>
  attachmentList: Maybe<Array<Maybe<Scalars['String']>>>
  brandName: Maybe<Scalars['String']>
  canProduce: Maybe<EnumIs>
  cctvId: Maybe<Scalars['String']>
  code: Maybe<Scalars['String']>
  currency: Maybe<TypeMadterDataValue>
  customsCode: Maybe<Scalars['String']>
  description: Maybe<Scalars['String']>
  effectiveDate: Maybe<Scalars['Date']>
  globalName: Maybe<Scalars['String']>
  image: Maybe<Scalars['String']>
  localName: Maybe<Scalars['String']>
  productCategory: Maybe<TypeProductPropertySchema>
  productLocationList: Maybe<Array<Maybe<TypeProductLocationSchema>>>
  productType: Maybe<TypeProductPropertySchema>
  productUnit: Maybe<TypeProductPropertySchema>
  productWeightUnit: Maybe<TypeProductPropertySchema>
  productYear: Maybe<Scalars['String']>
  remaining: Maybe<Scalars['Number']>
  scrap: Maybe<TypeProductSchema>
  statisticCode: Maybe<Scalars['String']>
  tariffCode: Maybe<Scalars['String']>
  tariffRate: Maybe<Scalars['Number']>
  tariffSequence: Maybe<Scalars['String']>
  type: Maybe<EnumProductType>
  unitPrice: Maybe<Scalars['Number']>
  weight: Maybe<Scalars['Number']>
}

export type TypeProperty = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<TypePropertySchema>
}

export type TypePropertyOverMaxLost = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<TypePropertyOverMaxLostSchema>
}

export type TypePropertyOverMaxLostSchema = {
  lostMaxPercent: Maybe<Scalars['Number']>
  lostPercent: Maybe<Scalars['Number']>
  overMaxLost: Maybe<EnumIs>
}

export type TypePropertySchema = {
  address: Maybe<Scalars['String']>
  branch: Maybe<Scalars['String']>
  companyEmail: Maybe<Scalars['String']>
  companyFax: Maybe<Scalars['String']>
  companyLogo: Maybe<Array<Maybe<Scalars['String']>>>
  companyPhone: Maybe<Scalars['String']>
  companyStamp: Maybe<Array<Maybe<Scalars['String']>>>
  currency: Maybe<TypeMadterDataValue>
  district: Maybe<TypeMadterDataValue>
  freezoneArea: Maybe<Scalars['String']>
  globalName: Maybe<Scalars['String']>
  lostPercent: Maybe<Scalars['Number']>
  name: Maybe<Scalars['String']>
  province: Maybe<TypeMadterDataValue>
  signature: Maybe<Array<Maybe<Scalars['String']>>>
  subDistrict: Maybe<TypeMadterDataValue>
  taxNo: Maybe<Scalars['String']>
  zipCode: Maybe<Scalars['String']>
}

export type TypeQuotation = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<TypeSchemaQuotation>
}

export type TypeQuotationContactDetail = {
  address: Maybe<Scalars['String']>
  branch: Maybe<Scalars['String']>
  taxId: Maybe<Scalars['String']>
  zipCode: Maybe<Scalars['String']>
}

export type TypeQuotationList = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<TypePagination>
  payload: Maybe<Array<Maybe<TypeSchemaQuotation>>>
}

export type TypeQuotationPriceDetail = {
  date: Maybe<Scalars['Date']>
  discount: Maybe<Scalars['Number']>
  dueDate: Maybe<Scalars['Date']>
  grandTotal: Maybe<Scalars['Number']>
  grandTotalForeign: Maybe<Scalars['Number']>
  grandTotalLocal: Maybe<Scalars['Number']>
  paymentAmount: Maybe<Scalars['Number']>
  salesName: Maybe<Scalars['String']>
  total: Maybe<Scalars['Number']>
  totalAfterDiscount: Maybe<Scalars['Number']>
  totalForeign: Maybe<Scalars['Number']>
  totalLocal: Maybe<Scalars['Number']>
  vat: Maybe<Scalars['Number']>
  withHoldingTax: Maybe<Scalars['Number']>
}

export type TypeQuotationProduct = {
  code: Maybe<Scalars['String']>
  exchangeRate: Maybe<Scalars['Number']>
  id: Maybe<Scalars['ID']>
  name: Maybe<Scalars['String']>
  quantity: Maybe<Scalars['Number']>
  total: Maybe<Scalars['Number']>
  totalForeign: Maybe<Scalars['Number']>
  totalLocal: Maybe<Scalars['Number']>
  unit: Maybe<Scalars['String']>
  unitId: Maybe<Scalars['ID']>
  unitPrice: Maybe<Scalars['Number']>
  unitPriceCurrency: Maybe<TypeMadterDataValue>
  unitPriceForeign: Maybe<Scalars['Number']>
  unitPriceForeignCurrency: Maybe<TypeMadterDataValue>
  unitPriceLocal: Maybe<Scalars['Number']>
  unitPriceLocalCurrency: Maybe<TypeMadterDataValue>
}

export type TypeReceptionLocation = {
  location: Maybe<TypeProductLocationSchema>
  quantity: Maybe<Scalars['Number']>
  remark: Maybe<Scalars['String']>
}

export type TypeReport = {
  _id: Maybe<Scalars['ID']>
  createdAt: Maybe<Scalars['Date']>
  createdBy: Maybe<Scalars['String']>
  docTypeList: Maybe<Array<Maybe<Scalars['String']>>>
  endDate: Maybe<Scalars['Date']>
  expireDate: Maybe<Scalars['Date']>
  fileTypeKey: Maybe<EnumReportFileType>
  fileTypeTitle: Maybe<Scalars['String']>
  locationList: Maybe<Array<Maybe<TypeLocationSchema>>>
  locationType: Maybe<EnumReportSelect>
  reportSubTypeKeyList: Maybe<Array<Maybe<EnumReportProductType>>>
  reportTypeKey: Maybe<EnumReportType>
  reportTypeTitle: Maybe<Scalars['String']>
  selectDocType: Maybe<EnumReportSelect>
  selectSubTypeKey: Maybe<EnumReportSelect>
  startDate: Maybe<Scalars['Date']>
  statusKey: Maybe<EnumReportStatus>
  statusTitle: Maybe<Scalars['String']>
  taskReportAt: Maybe<Scalars['Date']>
  url: Maybe<Scalars['String']>
}

export type TypeReportConstantList = {
  description: Maybe<Scalars['String']>
  key: Maybe<Scalars['String']>
  title: Maybe<Scalars['String']>
}

export type TypeReportConstantListResponse = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Array<Maybe<TypeReportConstantList>>>
}

export type TypeReportListResponse = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<TypePagination>
  payload: Maybe<Array<Maybe<TypeReport>>>
}

export type TypeReportResponse = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<TypeReport>
}

export type TypeResponse = {
  message: Maybe<Scalars['String']>
  success: Maybe<Scalars['Boolean']>
}

export type TypeRole = {
  isDefault: Maybe<EnumIs>
  isReplaceable: Maybe<EnumIs>
  name: Maybe<Scalars['String']>
  roleKey: Maybe<Scalars['String']>
  roleType: Maybe<EnumLrleType>
  status: Maybe<EnumAppStatus>
}

export type TypeRoleDataSecurity = {
  assign: Maybe<EnumDataSecurity>
  assignToParent: Maybe<EnumIs>
  create: Maybe<EnumDataSecurity>
  delete: Maybe<EnumDataSecurity>
  name: Maybe<Scalars['String']>
  read: Maybe<EnumDataSecurity>
  securityKey: Maybe<Scalars['String']>
  write: Maybe<EnumDataSecurity>
}

export type TypeRoleDataSecurityList = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<TypeRoleDataSecurityPayload>
}

export type TypeRoleDataSecurityPayload = {
  dataSecurityList: Maybe<Array<Maybe<TypeRoleDataSecurity>>>
  role: Maybe<TypeRole>
}

export type TypeRolePermission = {
  code: Maybe<Array<Maybe<Scalars['String']>>>
  name: Maybe<Scalars['String']>
  permissionKey: Maybe<Scalars['String']>
  scopeList: Maybe<Array<Maybe<Scalars['String']>>>
}

export type TypeRolePermissionList = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<TypeRolePermissionPayload>
}

export type TypeRolePermissionPayload = {
  permissionList: Maybe<Array<Maybe<TypeRolePermission>>>
  role: Maybe<TypeRole>
}

export type TypeRolePermissionSchema = {
  code: Maybe<Array<Maybe<Scalars['String']>>>
  permissionKey: Maybe<Scalars['String']>
  scopeList: Maybe<Array<Maybe<Scalars['String']>>>
}

export type TypeRolePermissionUserList = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Array<Maybe<TypeRolePermissionSchema>>>
}

export type TypeRunningNumber = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<TypeSchemaRunningNumber>
}

export type TypeRunningNumberList = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Array<Maybe<TypeSchemaRunningNumber>>>
}

export type TypeRunningNumberNo = {
  runningNo: Maybe<Scalars['String']>
}

export type TypeS3Config = {
  ACL: Maybe<Scalars['String']>
  _id: Maybe<Scalars['String']>
  accessKeyId: Maybe<Scalars['String']>
  bucket: Maybe<Scalars['String']>
  headers: Maybe<Scalars['JSON']>
  publicEndpoint: Maybe<Scalars['String']>
  region: Maybe<Scalars['String']>
  s3ForcePathStyle: Maybe<Scalars['Boolean']>
  secretAccessKey: Maybe<Scalars['String']>
  serviceEndpoint: Maybe<Scalars['String']>
  signatureExpires: Maybe<Scalars['Number']>
  signatureVersion: Maybe<Scalars['String']>
  uniquePrefix: Maybe<Scalars['Boolean']>
}

export type TypeSchemaCctv = {
  _id: Maybe<Scalars['String']>
  appKey: Maybe<Scalars['String']>
  /** @deprecated attribute is deprecated. Use newField instead. */
  attribute: Maybe<Scalars['JSON']>
  /** @deprecated Field no longer supported */
  cameraId: Maybe<Scalars['String']>
  cameraName: Maybe<Scalars['String']>
  createdAt: Maybe<Scalars['Date']>
  licensePlateDetection: Maybe<TypeCctvVehicleOption>
  localRTSP: Maybe<Scalars['String']>
  locationId: Maybe<Scalars['String']>
  mediaServiceEndpoint: Maybe<Scalars['String']>
  motionDetection: Maybe<Scalars['Boolean']>
  orgKey: Maybe<Scalars['String']>
  remoteRTSP: Maybe<Scalars['String']>
  /** @deprecated Field no longer supported */
  secretKey: Maybe<Scalars['String']>
  serialNumber: Maybe<Scalars['String']>
  /** @deprecated Field no longer supported */
  serviceEndpoint: Maybe<Scalars['String']>
  /** @deprecated Field no longer supported */
  signUrlEndpoint: Maybe<Scalars['String']>
  toolkitList: Maybe<Array<Maybe<Scalars['String']>>>
  toolkitListFull: Maybe<Array<Maybe<TypeToolkitOption>>>
  updatedAt: Maybe<Scalars['Date']>
  vehicleDeteion: Maybe<TypeCctvVehicleOption>
}

export type TypeSchemaCctvMotioncapture = {
  _id: Maybe<Scalars['String']>
  appKey: Maybe<Scalars['String']>
  cameraId: Maybe<Scalars['String']>
  cameraName: Maybe<Scalars['String']>
  capture: Maybe<TypeSchemaCctvMotioncaptureS3>
  captureTime: Maybe<Scalars['Date']>
  motion: Maybe<TypeSchemaCctvMotioncaptureS3>
  orgKey: Maybe<Scalars['String']>
  reSize: Maybe<TypeSchemaCctvMotioncaptureS3>
  registerCCTV: Maybe<Scalars['String']>
}

export type TypeSchemaCctvMotioncaptureS3 = {
  s3Endpoint: Maybe<Scalars['String']>
  s3FileKey: Maybe<Scalars['String']>
  s3FileName: Maybe<Scalars['String']>
}

export type TypeSchemaCctvRecording = {
  _id: Maybe<Scalars['String']>
  appKey: Maybe<Scalars['String']>
  cameraId: Maybe<Scalars['String']>
  cameraName: Maybe<Scalars['String']>
  orgKey: Maybe<Scalars['String']>
  registerCCTV: Maybe<Scalars['String']>
  s3Endpoint: Maybe<Scalars['String']>
  s3FileKey: Maybe<Scalars['String']>
  s3FileName: Maybe<Scalars['String']>
  startTime: Maybe<Scalars['Date']>
  stopTime: Maybe<Scalars['Date']>
}

export type TypeSchemaCctvToolkit = {
  _id: Maybe<Scalars['String']>
  appKey: Maybe<Scalars['String']>
  certID: Maybe<Scalars['String']>
  createdAt: Maybe<Scalars['Date']>
  lastHealthCheckTimestamp: Maybe<Scalars['Date']>
  orgKey: Maybe<Scalars['String']>
  serialNumber: Maybe<Scalars['String']>
  status: Maybe<EnumCctvToolkitStatus>
  toolkitName: Maybe<Scalars['String']>
  updatedAt: Maybe<Scalars['Date']>
}

export type TypeSchemaFileupload = {
  _id: Maybe<Scalars['String']>
  attribute: Maybe<Scalars['JSON']>
  createBy: Maybe<Scalars['String']>
  createdAt: Maybe<Scalars['Date']>
  fileExtension: Maybe<Scalars['String']>
  fileKey: Maybe<Scalars['String']>
  fileName: Maybe<Scalars['String']>
  fileType: Maybe<Scalars['String']>
  refId: Maybe<Scalars['String']>
  updateBy: Maybe<Scalars['String']>
  updatedAt: Maybe<Scalars['Date']>
}

export type TypeSchemaInvoice = {
  _id: Maybe<Scalars['ID']>
  attachFileList: Maybe<Array<Maybe<Scalars['String']>>>
  companyStamp: Maybe<Array<Maybe<Scalars['String']>>>
  contactDetail: Maybe<TypeInvoiceContactDetail>
  createdAt: Maybe<Scalars['Date']>
  createdBy: Maybe<Scalars['String']>
  customerId: Maybe<Scalars['ID']>
  customerName: Maybe<Scalars['String']>
  invoiceNumber: Maybe<Scalars['String']>
  priceDetail: Maybe<TypeInvoicePriceDetail>
  productList: Maybe<Array<Maybe<TypeInvoiceProduct>>>
  remark: Maybe<Scalars['String']>
  signature: Maybe<Array<Maybe<Scalars['String']>>>
  updatedAt: Maybe<Scalars['Date']>
}

export type TypeSchemaLogsystem = {
  _id: Maybe<Scalars['String']>
  action: Maybe<Scalars['String']>
  createdAt: Maybe<Scalars['Date']>
  eventKey: Maybe<Scalars['String']>
  eventName: Maybe<Scalars['String']>
  logType: Maybe<Scalars['String']>
  nextData: Maybe<Scalars['JSON']>
  prevData: Maybe<Scalars['JSON']>
  refId: Maybe<Array<Maybe<Scalars['String']>>>
  updatedAt: Maybe<Scalars['Date']>
  user: Maybe<TypeLogsystemUser>
}

export type TypeSchemaQuotation = {
  _id: Maybe<Scalars['ID']>
  attachFileList: Maybe<Array<Maybe<Scalars['String']>>>
  companyStamp: Maybe<Array<Maybe<Scalars['String']>>>
  contactDetail: Maybe<TypeQuotationContactDetail>
  createdAt: Maybe<Scalars['Date']>
  createdBy: Maybe<Scalars['String']>
  customerId: Maybe<Scalars['String']>
  customerName: Maybe<Scalars['String']>
  priceDetail: Maybe<TypeQuotationPriceDetail>
  productList: Maybe<Array<Maybe<TypeQuotationProduct>>>
  quotationNumber: Maybe<Scalars['String']>
  remark: Maybe<Scalars['String']>
  signature: Maybe<Array<Maybe<Scalars['String']>>>
  updatedAt: Maybe<Scalars['Date']>
}

export type TypeSchemaRunningNumber = {
  attribute: Maybe<Scalars['JSON']>
  createdBy: Maybe<Scalars['String']>
  name: Maybe<Scalars['String']>
  runningKey: Maybe<Scalars['String']>
  runningNumberFormat: Maybe<Scalars['String']>
  updatedBy: Maybe<Scalars['String']>
}

export type TypeSchemaWebhook = {
  count: Maybe<Scalars['Int']>
  total: Maybe<Scalars['Int']>
}

export type TypeScmemaNotificationTemplate = {
  channel: EnumNotificationChannel
  dataKeyList: Maybe<Array<Maybe<TypeNotificationDataKey>>>
  locale: Scalars['String']
  templateKey: Maybe<Scalars['String']>
  templateValue: Maybe<Scalars['String']>
  title: Maybe<Scalars['String']>
}

export type TypeScript = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
}

export type TypeService = {
  adminPanelEndpoint: Maybe<Scalars['String']>
  adminPanelMetaDataUrl: Maybe<Scalars['String']>
  dockerImageTag: Maybe<Scalars['String']>
  endpoint: Maybe<TypeEndpoinServiceType>
  name: Maybe<Scalars['String']>
  permissionList: Maybe<Array<Maybe<TypeServicePermission>>>
  serviceKey: Maybe<Scalars['String']>
}

export type TypeServiceInfo = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<TypeService>
}

export type TypeServiceList = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<TypePagination>
  payload: Maybe<Array<Maybe<TypeService>>>
}

export type TypeServiceListPayload = {
  service: Maybe<TypeService>
  syncStatus: Maybe<Scalars['String']>
}

export type TypeServicePermission = {
  defaultCode: Maybe<Scalars['String']>
  name: Maybe<Scalars['String']>
  permissionKey: Maybe<Scalars['String']>
  scopeList: Maybe<Array<Maybe<Scalars['String']>>>
  userType: Maybe<Scalars['String']>
}

export type TypeSetting = {
  _id: Maybe<Scalars['ID']>
  description: Maybe<Scalars['String']>
  key: Maybe<Scalars['String']>
  value: Maybe<Scalars['String']>
}

export type TypeSyncApp = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Array<Maybe<TypeSyncAppPayload>>>
}

export type TypeSyncAppPayload = {
  app: Maybe<TypeApp>
  serviceList: Maybe<Array<Maybe<TypeServiceListPayload>>>
}

export type TypeSyncOrganization = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Array<Maybe<TypeSyncOrganizationPayload>>>
}

export type TypeSyncOrganizationPayload = {
  organization: Maybe<TypeOrganizationResponse>
  syncStatus: Maybe<Scalars['String']>
}

export type TypeSyncServiceInfo = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<TypeSyncServiceInfoPayload>
}

export type TypeSyncServiceInfoPayload = {
  serviceList: Maybe<Array<Maybe<TypeServiceListPayload>>>
}

export type TypeTemplate = {
  _id: Maybe<Scalars['ID']>
  content: Maybe<Scalars['String']>
  keys: Maybe<Array<Maybe<TypeKey>>>
  name: Maybe<Scalars['String']>
}

export type TypeTokenExpired = {
  accessTokenExpired: Maybe<Scalars['Number']>
  refreshTokenExpired: Maybe<Scalars['Number']>
}

export type TypeToolkitOption = {
  serialNumber: Maybe<Scalars['String']>
  toolkitName: Maybe<Scalars['String']>
}

export type TypeTransfer = {
  _id: Maybe<Scalars['ID']>
  attachmentList: Maybe<Array<Maybe<Scalars['String']>>>
  productRelocation: Maybe<TypeProductRelocationSchema>
  productType: Maybe<EnumTransferProductType>
  relocationRef: Maybe<Scalars['String']>
  remark: Maybe<Scalars['String']>
  status: Maybe<EnumTransferStatus>
  step: Maybe<Scalars['Number']>
  transferDate: Maybe<Scalars['Date']>
  transferInDate: Maybe<Scalars['Date']>
  transferNo: Maybe<Scalars['String']>
  transferOut: Maybe<TypeTransfer>
  transferOutDate: Maybe<Scalars['Date']>
  type: Maybe<EnumTransferType>
}

export type TypeTransferListResponse = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<TypePagination>
  payload: Maybe<Array<Maybe<TypeTransfer>>>
}

export type TypeTransferResponse = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<TypeTransfer>
}

export type TypeUserPermission = {
  defaultOption: Maybe<Scalars['String']>
  permissionName: Maybe<Scalars['String']>
  permissionOptions: Maybe<Array<Maybe<TypePermisionOption>>>
}

export type TypeVerifyEmail = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  verifyId: Maybe<Scalars['String']>
}

export type TypeWebhook = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<TypeSchemaWebhook>
}

export type CreateBillOfMaterialMutationVariables = Exact<{
  input?: InputMaybe<InputBillOfMaterial>
}>

export type CreateBillOfMaterialMutation = { createBillOfMaterial: { payload: { _id: string } } }

export type CreateCctvMutationVariables = Exact<{
  input?: InputMaybe<InputCctv>
  tkSerialNumberList?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>
}>

export type CreateCctvMutation = { createCCTV: { message: string; code: string } }

export type CreateProductionOrderMutationVariables = Exact<{
  input?: InputMaybe<InputProductionOrder>
}>

export type CreateProductionOrderMutation = {
  createProductionOrder: { payload: { _id: string; finishGoodsRelocationRef: string } }
}

export type DeleteCctvToolkitMutationVariables = Exact<{
  cctvToolkitId: Scalars['ID']
}>

export type DeleteCctvToolkitMutation = {
  deleteCCTVToolkit: {
    message: string
    code: string
    payload: {
      _id: string
      appKey: string
      orgKey: string
      toolkitName: string
      certID: string
      serialNumber: string
      status: EnumCctvToolkitStatus
      lastHealthCheckTimestamp: any
      createdAt: any
      updatedAt: any
    }
  }
}

export type GetCctvSyncQueryVariables = Exact<{
  input?: InputMaybe<InputFindData>
}>

export type GetCctvSyncQuery = {
  getCCTVSync: {
    message: string
    code: string
    payload: Array<{
      cameraSerialNumber: string
      fullSnapshotFileKey: string
      licensePlateFileKey: string
      licensePlateText: string
      vehicleType: EnumVehicle
      timestamp: any
      createdAt: any
    }>
    pagination: { limit: number; page: number; totalItems: number; totalPages: number }
  }
}

export type GetCctvToolkitQueryVariables = Exact<{
  input?: InputMaybe<InputFindData>
}>

export type GetCctvToolkitQuery = {
  getCCTVToolkit: {
    pagination: { limit: number; page: number; totalItems: number; totalPages: number }
    payload: Array<{
      _id: string
      appKey: string
      orgKey: string
      toolkitName: string
      certID: string
      serialNumber: string
      status: EnumCctvToolkitStatus
      lastHealthCheckTimestamp: any
      createdAt: any
      updatedAt: any
    }>
  }
}

export type GetCctvTookitConfigQueryVariables = Exact<{
  serialNumber: Scalars['String']
}>

export type GetCctvTookitConfigQuery = {
  getCCTVTookitConfig: {
    payload: {
      _id: string
      syncStatus: boolean
      maxRowSync: any
      syncIterSec: any
      s3: {
        _id: string
        accessKeyId: string
        secretAccessKey: string
        serviceEndpoint: string
        publicEndpoint: string
        s3ForcePathStyle: boolean
        bucket: string
        region: string
        signatureVersion: string
        signatureExpires: any
        headers: any
        ACL: string
        uniquePrefix: boolean
      }
    }
  }
}

export type GetDataBillOfMaterialQueryVariables = Exact<{
  input?: InputMaybe<InputFindData>
}>

export type GetDataBillOfMaterialQuery = {
  getDataBillOfMaterial: {
    payload: Array<{
      _id: string
      appKey: string
      orgKey: string
      billOfmaterialNo: string
      billOfMaterialDate: string
      name: string
      TimeSpent: any
      quantity: any
      netWeight: any
      unitPrice: any
      totalPrice: any
      status: EnumBomStatus
      productFinishGood: { _id: string; globalName: string }
      quantityUnit: { _id: string; globalName: string }
      netWeightUnit: { _id: string; globalName: string }
      materialList: Array<{ quantity: any; productMaterial: { _id: string; globalName: string } }>
    }>
  }
}

export type GetOrgProductPropertyQueryVariables = Exact<{
  input?: InputMaybe<InputFindData>
}>

export type GetOrgProductPropertyQuery = {
  getOrgProductProperty: { payload: Array<{ _id: string; globalName: string }> }
}

export type GetOrgProductionOrderDetailQueryVariables = Exact<{
  productionOrderId: Scalars['ID']
  input?: InputMaybe<InputFindData>
}>

export type GetOrgProductionOrderDetailQuery = {
  getOrgProductionOrderDetail: {
    payload: Array<{
      _id: string
      remark: string
      netWeight: any
      quantity: any
      unitPriceLocal: any
      invoiceAmountLocal: any
      status: EnumDeclarationDetailStatus
      relocationRef: string
      productionOrder: { _id: string }
      productRelocation: { _id: string }
      netWeightUnit: { _id: string; type: EnumProductPropertyType; globalName: string; localName: string }
      quantityUnit: { _id: string; type: EnumProductPropertyType; globalName: string; localName: string }
      currency: { dataKey: string; value: { dataKey: string; locale: string; text: string } }
      product: {
        _id: string
        weight: any
        productUnit: { _id: string; globalName: string; type: EnumProductPropertyType }
        productWeightUnit: { _id: string; globalName: string; type: EnumProductPropertyType }
      }
    }>
  }
}

export type UpdateBillOfMaterailMutationVariables = Exact<{
  billOfMaterialId: Scalars['ID']
  input?: InputMaybe<InputBillOfMaterial>
}>

export type UpdateBillOfMaterailMutation = { updateBillOfMaterail: { payload: { _id: string } } }

export type UpdateCctvToolkitConfigMutationVariables = Exact<{
  tkSerialNumber: Scalars['String']
  input?: InputMaybe<InputSchemaCctvToolkitConfig>
}>

export type UpdateCctvToolkitConfigMutation = { updateCCTVToolkitConfig: { payload: { _id: string } } }

export type UpdateStatusCctvToolkitMutationVariables = Exact<{
  cctvToolkitId: Scalars['ID']
  status: EnumCctvToolkitStatusUpdate
}>

export type UpdateStatusCctvToolkitMutation = {
  updateStatusCCTVToolkit: {
    message: string
    code: string
    payload: {
      _id: string
      appKey: string
      orgKey: string
      toolkitName: string
      certID: string
      serialNumber: string
      status: EnumCctvToolkitStatus
      lastHealthCheckTimestamp: any
      createdAt: any
      updatedAt: any
    }
  }
}

export declare const createBillOfMaterial: import('graphql').DocumentNode
export declare const CreateCCTV: import('graphql').DocumentNode
export declare const createProductionOrder: import('graphql').DocumentNode
export declare const deleteCCTVToolkit: import('graphql').DocumentNode
export declare const GetCCTVSync: import('graphql').DocumentNode
export declare const getCCTVToolkit: import('graphql').DocumentNode
export declare const getCCTVTookitConfig: import('graphql').DocumentNode
export declare const getDataBillOfMaterial: import('graphql').DocumentNode
export declare const getOrgProductProperty: import('graphql').DocumentNode
export declare const getOrgProductionOrderDetail: import('graphql').DocumentNode
export declare const updateBillOfMaterail: import('graphql').DocumentNode
export declare const updateCCTVToolkitConfig: import('graphql').DocumentNode
export declare const updateStatusCCTVToolkit: import('graphql').DocumentNode

export const CreateBillOfMaterialDocument = gql`
  mutation createBillOfMaterial($input: INPUT_BILL_OF_MATERIAL) {
    createBillOfMaterial(input: $input) {
      payload {
        _id
      }
    }
  }
`
export type CreateBillOfMaterialMutationFn = Apollo.MutationFunction<
  CreateBillOfMaterialMutation,
  CreateBillOfMaterialMutationVariables
>

/**
 * __useCreateBillOfMaterialMutation__
 *
 * To run a mutation, you first call `useCreateBillOfMaterialMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBillOfMaterialMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBillOfMaterialMutation, { data, loading, error }] = useCreateBillOfMaterialMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateBillOfMaterialMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateBillOfMaterialMutation, CreateBillOfMaterialMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateBillOfMaterialMutation, CreateBillOfMaterialMutationVariables>(
    CreateBillOfMaterialDocument,
    options
  )
}
export type CreateBillOfMaterialMutationHookResult = ReturnType<typeof useCreateBillOfMaterialMutation>
export type CreateBillOfMaterialMutationResult = Apollo.MutationResult<CreateBillOfMaterialMutation>
export type CreateBillOfMaterialMutationOptions = Apollo.BaseMutationOptions<
  CreateBillOfMaterialMutation,
  CreateBillOfMaterialMutationVariables
>
export const CreateCctvDocument = gql`
  mutation CreateCCTV($input: INPUT_CCTV, $tkSerialNumberList: [String]) {
    createCCTV(input: $input, tkSerialNumberList: $tkSerialNumberList) {
      message
      code
    }
  }
`
export type CreateCctvMutationFn = Apollo.MutationFunction<CreateCctvMutation, CreateCctvMutationVariables>

/**
 * __useCreateCctvMutation__
 *
 * To run a mutation, you first call `useCreateCctvMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCctvMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCctvMutation, { data, loading, error }] = useCreateCctvMutation({
 *   variables: {
 *      input: // value for 'input'
 *      tkSerialNumberList: // value for 'tkSerialNumberList'
 *   },
 * });
 */
export function useCreateCctvMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateCctvMutation, CreateCctvMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateCctvMutation, CreateCctvMutationVariables>(CreateCctvDocument, options)
}
export type CreateCctvMutationHookResult = ReturnType<typeof useCreateCctvMutation>
export type CreateCctvMutationResult = Apollo.MutationResult<CreateCctvMutation>
export type CreateCctvMutationOptions = Apollo.BaseMutationOptions<CreateCctvMutation, CreateCctvMutationVariables>
export const CreateProductionOrderDocument = gql`
  mutation createProductionOrder($input: INPUT_PRODUCTION_ORDER) {
    createProductionOrder(input: $input) {
      payload {
        _id
        finishGoodsRelocationRef
      }
    }
  }
`
export type CreateProductionOrderMutationFn = Apollo.MutationFunction<
  CreateProductionOrderMutation,
  CreateProductionOrderMutationVariables
>

/**
 * __useCreateProductionOrderMutation__
 *
 * To run a mutation, you first call `useCreateProductionOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductionOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductionOrderMutation, { data, loading, error }] = useCreateProductionOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProductionOrderMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateProductionOrderMutation, CreateProductionOrderMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateProductionOrderMutation, CreateProductionOrderMutationVariables>(
    CreateProductionOrderDocument,
    options
  )
}
export type CreateProductionOrderMutationHookResult = ReturnType<typeof useCreateProductionOrderMutation>
export type CreateProductionOrderMutationResult = Apollo.MutationResult<CreateProductionOrderMutation>
export type CreateProductionOrderMutationOptions = Apollo.BaseMutationOptions<
  CreateProductionOrderMutation,
  CreateProductionOrderMutationVariables
>
export const DeleteCctvToolkitDocument = gql`
  mutation deleteCCTVToolkit($cctvToolkitId: ID!) {
    deleteCCTVToolkit(cctvToolkitID: $cctvToolkitId) {
      message
      code
      payload {
        _id
        appKey
        orgKey
        toolkitName
        certID
        serialNumber
        status
        lastHealthCheckTimestamp
        createdAt
        updatedAt
      }
    }
  }
`
export type DeleteCctvToolkitMutationFn = Apollo.MutationFunction<
  DeleteCctvToolkitMutation,
  DeleteCctvToolkitMutationVariables
>

/**
 * __useDeleteCctvToolkitMutation__
 *
 * To run a mutation, you first call `useDeleteCctvToolkitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCctvToolkitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCctvToolkitMutation, { data, loading, error }] = useDeleteCctvToolkitMutation({
 *   variables: {
 *      cctvToolkitId: // value for 'cctvToolkitId'
 *   },
 * });
 */
export function useDeleteCctvToolkitMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteCctvToolkitMutation, DeleteCctvToolkitMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteCctvToolkitMutation, DeleteCctvToolkitMutationVariables>(
    DeleteCctvToolkitDocument,
    options
  )
}
export type DeleteCctvToolkitMutationHookResult = ReturnType<typeof useDeleteCctvToolkitMutation>
export type DeleteCctvToolkitMutationResult = Apollo.MutationResult<DeleteCctvToolkitMutation>
export type DeleteCctvToolkitMutationOptions = Apollo.BaseMutationOptions<
  DeleteCctvToolkitMutation,
  DeleteCctvToolkitMutationVariables
>
export const GetCctvSyncDocument = gql`
  query GetCCTVSync($input: INPUT_FIND_DATA) {
    getCCTVSync(input: $input) {
      message
      code
      payload {
        cameraSerialNumber
        fullSnapshotFileKey
        licensePlateFileKey
        licensePlateText
        vehicleType
        timestamp
        createdAt
      }
      pagination {
        limit
        page
        totalItems
        totalPages
      }
    }
  }
`

/**
 * __useGetCctvSyncQuery__
 *
 * To run a query within a React component, call `useGetCctvSyncQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCctvSyncQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCctvSyncQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetCctvSyncQuery(
  baseOptions?: Apollo.QueryHookOptions<GetCctvSyncQuery, GetCctvSyncQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetCctvSyncQuery, GetCctvSyncQueryVariables>(GetCctvSyncDocument, options)
}
export function useGetCctvSyncLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetCctvSyncQuery, GetCctvSyncQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetCctvSyncQuery, GetCctvSyncQueryVariables>(GetCctvSyncDocument, options)
}
export type GetCctvSyncQueryHookResult = ReturnType<typeof useGetCctvSyncQuery>
export type GetCctvSyncLazyQueryHookResult = ReturnType<typeof useGetCctvSyncLazyQuery>
export type GetCctvSyncQueryResult = Apollo.QueryResult<GetCctvSyncQuery, GetCctvSyncQueryVariables>
export const GetCctvToolkitDocument = gql`
  query getCCTVToolkit($input: INPUT_FIND_DATA) {
    getCCTVToolkit(input: $input) {
      pagination {
        limit
        page
        totalItems
        totalPages
      }
      payload {
        _id
        appKey
        orgKey
        toolkitName
        certID
        serialNumber
        status
        lastHealthCheckTimestamp
        createdAt
        updatedAt
      }
    }
  }
`

/**
 * __useGetCctvToolkitQuery__
 *
 * To run a query within a React component, call `useGetCctvToolkitQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCctvToolkitQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCctvToolkitQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetCctvToolkitQuery(
  baseOptions?: Apollo.QueryHookOptions<GetCctvToolkitQuery, GetCctvToolkitQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetCctvToolkitQuery, GetCctvToolkitQueryVariables>(GetCctvToolkitDocument, options)
}
export function useGetCctvToolkitLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetCctvToolkitQuery, GetCctvToolkitQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetCctvToolkitQuery, GetCctvToolkitQueryVariables>(GetCctvToolkitDocument, options)
}
export type GetCctvToolkitQueryHookResult = ReturnType<typeof useGetCctvToolkitQuery>
export type GetCctvToolkitLazyQueryHookResult = ReturnType<typeof useGetCctvToolkitLazyQuery>
export type GetCctvToolkitQueryResult = Apollo.QueryResult<GetCctvToolkitQuery, GetCctvToolkitQueryVariables>
export const GetCctvTookitConfigDocument = gql`
  query getCCTVTookitConfig($serialNumber: String!) {
    getCCTVTookitConfig(serialNumber: $serialNumber) {
      payload {
        _id
        s3 {
          _id
          accessKeyId
          secretAccessKey
          serviceEndpoint
          publicEndpoint
          s3ForcePathStyle
          bucket
          region
          signatureVersion
          signatureExpires
          headers
          ACL
          uniquePrefix
        }
        syncStatus
        maxRowSync
        syncIterSec
      }
    }
  }
`

/**
 * __useGetCctvTookitConfigQuery__
 *
 * To run a query within a React component, call `useGetCctvTookitConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCctvTookitConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCctvTookitConfigQuery({
 *   variables: {
 *      serialNumber: // value for 'serialNumber'
 *   },
 * });
 */
export function useGetCctvTookitConfigQuery(
  baseOptions: Apollo.QueryHookOptions<GetCctvTookitConfigQuery, GetCctvTookitConfigQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetCctvTookitConfigQuery, GetCctvTookitConfigQueryVariables>(
    GetCctvTookitConfigDocument,
    options
  )
}
export function useGetCctvTookitConfigLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetCctvTookitConfigQuery, GetCctvTookitConfigQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetCctvTookitConfigQuery, GetCctvTookitConfigQueryVariables>(
    GetCctvTookitConfigDocument,
    options
  )
}
export type GetCctvTookitConfigQueryHookResult = ReturnType<typeof useGetCctvTookitConfigQuery>
export type GetCctvTookitConfigLazyQueryHookResult = ReturnType<typeof useGetCctvTookitConfigLazyQuery>
export type GetCctvTookitConfigQueryResult = Apollo.QueryResult<
  GetCctvTookitConfigQuery,
  GetCctvTookitConfigQueryVariables
>
export const GetDataBillOfMaterialDocument = gql`
  query getDataBillOfMaterial($input: INPUT_FIND_DATA) {
    getDataBillOfMaterial(input: $input) {
      payload {
        _id
        appKey
        orgKey
        billOfmaterialNo
        billOfMaterialDate
        name
        TimeSpent
        productFinishGood {
          _id
          globalName
        }
        quantity
        quantityUnit {
          _id
          globalName
        }
        netWeight
        netWeightUnit {
          _id
          globalName
        }
        unitPrice
        totalPrice
        status
        materialList {
          productMaterial {
            _id
            globalName
          }
          quantity
        }
      }
    }
  }
`

/**
 * __useGetDataBillOfMaterialQuery__
 *
 * To run a query within a React component, call `useGetDataBillOfMaterialQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDataBillOfMaterialQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDataBillOfMaterialQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetDataBillOfMaterialQuery(
  baseOptions?: Apollo.QueryHookOptions<GetDataBillOfMaterialQuery, GetDataBillOfMaterialQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetDataBillOfMaterialQuery, GetDataBillOfMaterialQueryVariables>(
    GetDataBillOfMaterialDocument,
    options
  )
}
export function useGetDataBillOfMaterialLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetDataBillOfMaterialQuery, GetDataBillOfMaterialQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetDataBillOfMaterialQuery, GetDataBillOfMaterialQueryVariables>(
    GetDataBillOfMaterialDocument,
    options
  )
}
export type GetDataBillOfMaterialQueryHookResult = ReturnType<typeof useGetDataBillOfMaterialQuery>
export type GetDataBillOfMaterialLazyQueryHookResult = ReturnType<typeof useGetDataBillOfMaterialLazyQuery>
export type GetDataBillOfMaterialQueryResult = Apollo.QueryResult<
  GetDataBillOfMaterialQuery,
  GetDataBillOfMaterialQueryVariables
>
export const GetOrgProductPropertyDocument = gql`
  query getOrgProductProperty($input: INPUT_FIND_DATA) {
    getOrgProductProperty(input: $input) {
      payload {
        _id
        globalName
      }
    }
  }
`

/**
 * __useGetOrgProductPropertyQuery__
 *
 * To run a query within a React component, call `useGetOrgProductPropertyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrgProductPropertyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrgProductPropertyQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetOrgProductPropertyQuery(
  baseOptions?: Apollo.QueryHookOptions<GetOrgProductPropertyQuery, GetOrgProductPropertyQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetOrgProductPropertyQuery, GetOrgProductPropertyQueryVariables>(
    GetOrgProductPropertyDocument,
    options
  )
}
export function useGetOrgProductPropertyLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetOrgProductPropertyQuery, GetOrgProductPropertyQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetOrgProductPropertyQuery, GetOrgProductPropertyQueryVariables>(
    GetOrgProductPropertyDocument,
    options
  )
}
export type GetOrgProductPropertyQueryHookResult = ReturnType<typeof useGetOrgProductPropertyQuery>
export type GetOrgProductPropertyLazyQueryHookResult = ReturnType<typeof useGetOrgProductPropertyLazyQuery>
export type GetOrgProductPropertyQueryResult = Apollo.QueryResult<
  GetOrgProductPropertyQuery,
  GetOrgProductPropertyQueryVariables
>
export const GetOrgProductionOrderDetailDocument = gql`
  query getOrgProductionOrderDetail($productionOrderId: ID!, $input: INPUT_FIND_DATA) {
    getOrgProductionOrderDetail(productionOrderId: $productionOrderId, input: $input) {
      payload {
        _id
        productionOrder {
          _id
        }
        productRelocation {
          _id
        }
        remark
        netWeight
        netWeightUnit {
          _id
          type
          globalName
          localName
        }
        quantity
        quantityUnit {
          _id
          type
          globalName
          localName
        }
        unitPriceLocal
        invoiceAmountLocal
        currency {
          dataKey
          value {
            dataKey
            locale
            text
          }
        }
        product {
          _id
          weight
          productUnit {
            _id
            globalName
            type
          }
          productWeightUnit {
            _id
            globalName
            type
          }
        }
        status
        relocationRef
      }
    }
  }
`

/**
 * __useGetOrgProductionOrderDetailQuery__
 *
 * To run a query within a React component, call `useGetOrgProductionOrderDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrgProductionOrderDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrgProductionOrderDetailQuery({
 *   variables: {
 *      productionOrderId: // value for 'productionOrderId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetOrgProductionOrderDetailQuery(
  baseOptions: Apollo.QueryHookOptions<GetOrgProductionOrderDetailQuery, GetOrgProductionOrderDetailQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetOrgProductionOrderDetailQuery, GetOrgProductionOrderDetailQueryVariables>(
    GetOrgProductionOrderDetailDocument,
    options
  )
}
export function useGetOrgProductionOrderDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetOrgProductionOrderDetailQuery, GetOrgProductionOrderDetailQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetOrgProductionOrderDetailQuery, GetOrgProductionOrderDetailQueryVariables>(
    GetOrgProductionOrderDetailDocument,
    options
  )
}
export type GetOrgProductionOrderDetailQueryHookResult = ReturnType<typeof useGetOrgProductionOrderDetailQuery>
export type GetOrgProductionOrderDetailLazyQueryHookResult = ReturnType<typeof useGetOrgProductionOrderDetailLazyQuery>
export type GetOrgProductionOrderDetailQueryResult = Apollo.QueryResult<
  GetOrgProductionOrderDetailQuery,
  GetOrgProductionOrderDetailQueryVariables
>
export const UpdateBillOfMaterailDocument = gql`
  mutation updateBillOfMaterail($billOfMaterialId: ID!, $input: INPUT_BILL_OF_MATERIAL) {
    updateBillOfMaterail(billOfMaterialId: $billOfMaterialId, input: $input) {
      payload {
        _id
      }
    }
  }
`
export type UpdateBillOfMaterailMutationFn = Apollo.MutationFunction<
  UpdateBillOfMaterailMutation,
  UpdateBillOfMaterailMutationVariables
>

/**
 * __useUpdateBillOfMaterailMutation__
 *
 * To run a mutation, you first call `useUpdateBillOfMaterailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBillOfMaterailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBillOfMaterailMutation, { data, loading, error }] = useUpdateBillOfMaterailMutation({
 *   variables: {
 *      billOfMaterialId: // value for 'billOfMaterialId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateBillOfMaterailMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateBillOfMaterailMutation, UpdateBillOfMaterailMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateBillOfMaterailMutation, UpdateBillOfMaterailMutationVariables>(
    UpdateBillOfMaterailDocument,
    options
  )
}
export type UpdateBillOfMaterailMutationHookResult = ReturnType<typeof useUpdateBillOfMaterailMutation>
export type UpdateBillOfMaterailMutationResult = Apollo.MutationResult<UpdateBillOfMaterailMutation>
export type UpdateBillOfMaterailMutationOptions = Apollo.BaseMutationOptions<
  UpdateBillOfMaterailMutation,
  UpdateBillOfMaterailMutationVariables
>
export const UpdateCctvToolkitConfigDocument = gql`
  mutation updateCCTVToolkitConfig($tkSerialNumber: String!, $input: INPUT_SCHEMA_CCTV_TOOLKIT_CONFIG) {
    updateCCTVToolkitConfig(tkSerialNumber: $tkSerialNumber, input: $input) {
      payload {
        _id
      }
    }
  }
`
export type UpdateCctvToolkitConfigMutationFn = Apollo.MutationFunction<
  UpdateCctvToolkitConfigMutation,
  UpdateCctvToolkitConfigMutationVariables
>

/**
 * __useUpdateCctvToolkitConfigMutation__
 *
 * To run a mutation, you first call `useUpdateCctvToolkitConfigMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCctvToolkitConfigMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCctvToolkitConfigMutation, { data, loading, error }] = useUpdateCctvToolkitConfigMutation({
 *   variables: {
 *      tkSerialNumber: // value for 'tkSerialNumber'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCctvToolkitConfigMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateCctvToolkitConfigMutation, UpdateCctvToolkitConfigMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateCctvToolkitConfigMutation, UpdateCctvToolkitConfigMutationVariables>(
    UpdateCctvToolkitConfigDocument,
    options
  )
}
export type UpdateCctvToolkitConfigMutationHookResult = ReturnType<typeof useUpdateCctvToolkitConfigMutation>
export type UpdateCctvToolkitConfigMutationResult = Apollo.MutationResult<UpdateCctvToolkitConfigMutation>
export type UpdateCctvToolkitConfigMutationOptions = Apollo.BaseMutationOptions<
  UpdateCctvToolkitConfigMutation,
  UpdateCctvToolkitConfigMutationVariables
>
export const UpdateStatusCctvToolkitDocument = gql`
  mutation updateStatusCCTVToolkit($cctvToolkitId: ID!, $status: ENUM_CCTV_TOOLKIT_STATUS_UPDATE!) {
    updateStatusCCTVToolkit(cctvToolkitID: $cctvToolkitId, status: $status) {
      message
      code
      payload {
        _id
        appKey
        orgKey
        toolkitName
        certID
        serialNumber
        status
        lastHealthCheckTimestamp
        createdAt
        updatedAt
      }
    }
  }
`
export type UpdateStatusCctvToolkitMutationFn = Apollo.MutationFunction<
  UpdateStatusCctvToolkitMutation,
  UpdateStatusCctvToolkitMutationVariables
>

/**
 * __useUpdateStatusCctvToolkitMutation__
 *
 * To run a mutation, you first call `useUpdateStatusCctvToolkitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStatusCctvToolkitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStatusCctvToolkitMutation, { data, loading, error }] = useUpdateStatusCctvToolkitMutation({
 *   variables: {
 *      cctvToolkitId: // value for 'cctvToolkitId'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useUpdateStatusCctvToolkitMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateStatusCctvToolkitMutation, UpdateStatusCctvToolkitMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateStatusCctvToolkitMutation, UpdateStatusCctvToolkitMutationVariables>(
    UpdateStatusCctvToolkitDocument,
    options
  )
}
export type UpdateStatusCctvToolkitMutationHookResult = ReturnType<typeof useUpdateStatusCctvToolkitMutation>
export type UpdateStatusCctvToolkitMutationResult = Apollo.MutationResult<UpdateStatusCctvToolkitMutation>
export type UpdateStatusCctvToolkitMutationOptions = Apollo.BaseMutationOptions<
  UpdateStatusCctvToolkitMutation,
  UpdateStatusCctvToolkitMutationVariables
>
