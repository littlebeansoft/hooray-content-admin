import { StatusType } from 'graphql/interface'
import { YesNoType } from './types'
import { OrgProductionOrderAPIPayload } from './useGetOrgProductionOrder/interface'
import { OrgProductRelocationAPIPayload } from './useGetOrgProductRelocation/interface'
import { LocationListType } from './useUpdateProductRelocation/interface'

export type ProductPropertyType = 'UNIT' | 'TYPE' | 'CATEGORY' | 'LOCATION'
export type ProductType = 'RAW_MATERIAL' | 'FINISH_GOODS' | 'MACHINE' | 'SCRAP'
export type LocaleType = 'MASTER_DATA'
export type DeclarationType = 'IN_BOUND' | 'OUT_BOUND'
export type DeclarationStatus = 'FINISHED' | 'CHECKED' | 'NOT_FINISHED' | 'CANCEL'
export type DeclarationDetailStatus = 'REVIEW' | 'VERIFIED'
export type ProductRelocationType =
  | 'IN_BOUND'
  | 'OUT_BOUND'
  | 'TRANSFER_IN'
  | 'TRANSFER_OUT'
  | 'IN_PDO'
  | 'OUT_PDO'
  | 'TRANSFER_LOCATION'
  | 'SCRAP'
  | 'LOST'
export type ProductLocationType = 'DECLARATION' | 'NOT_DECLARATION'





export interface MasterData {
  dataKey: string
  value: {
    dataKey: string
    locale: string
    text: string
  }
}

interface DeclarationInput {
  type?: DeclarationType
  status?: DeclarationStatus
  step?: number
}

export interface DeclarationAPIPayload {
  _id: string
  date: Date
  type: DeclarationType
  declarationControl: DeclarationControlAPIPayload
  declarationInvoice: DeclarationInvoiceAPIPayload
  step: number
  contact: ContactAPIPayload
  status: DeclarationStatus
}

export interface DeclarationControlInput {
  refNo?: string
  date?: Date
  docType?: string
  declarationNo?: string
  drokerTaxNo?: string
  brokerBranch?: string
  customsClearanceCard?: string
  managerNo?: string
  transportMode?: string
  vesselName?: string
  masterBillLading?: string
  establishNo?: string
  releasePort?: string
  originCountry?: string
  shippingMark?: string
  netWeightUnit?: string
  currencyCode?: string
  rgsCode?: string
  bankCode?: string
  paymentMethod?: string
  totalDeposit?: string
  assessmentRequestCode?: string
  departureDate?: Date
  approvalNo?: string
  dateTransmit?: Date
  customsClearanceName?: string
  managerName?: string
  cargoPackingType?: string
  arrivalDate?: Date
  houseBillLading?: string
  factoryNo?: string
  dischargePort?: string
  consignmentCountry?: string
  packageUnit?: string
  grossWeightUnit?: string
  exchangeRate?: string
  customsBankCode?: string
  bankBranchCode?: string
  totalTax?: string
  refNoCommonAccess?: string
  inspectionRequestCode?: string
  approvalPort?: string
  uidTransmit?: string
  timeTransmit?: string
}
export interface DeclarationControlAPIPayload {
  _id: string
  date: Date | undefined
  refNo: string
  docType: MasterData
  productType: string
  declarationNo: string
  drokerTaxNo: string
  brokerBranch: string
  customsClearanceCard: string
  managerNo: string
  transportMode: MasterData
  vesselName: string
  masterBillLading: string
  establishNo: string
  releasePort: string
  originCountry: MasterData
  shippingMark: string
  netWeightUnit: ProductPropertyAPIPayload
  currencyCode: MasterData
  rgsCode: string
  bankCode: string
  paymentMethod: MasterData
  totalDeposit: string
  assessmentRequestCode: string
  departureDate: Date
  approvalNo: string
  dateTransmit: Date
  customsClearanceName: string
  managerName: string
  cargoPackingType: MasterData
  arrivalDate: Date
  houseBillLading: string
  factoryNo: string
  dischargePort: string
  consignmentCountry: MasterData
  packageUnit: ProductPropertyAPIPayload
  grossWeightUnit: ProductPropertyAPIPayload
  exchangeRate: string
  customsBankCode: string
  bankBranchCode: string
  totalTax: string
  refNoCommonAccess: string
  inspectionRequestCode: string
  approvalPort: string
  uidTransmit: string
  timeTransmit: string
}
export interface DeclarationInvoiceInput {
  invoiceNo?: string
  invoiceDate?: Date
  purchaseOrderNumber?: string
  termPayment?: string
  term?: string
  consigneeStatus?: string
  invoiceCurrency?: string
  forwardingCF?: string
  freightAF?: string
  insuranceAF?: string
  packingCAF?: number
  foreignInlandFreightCAF?: number
  otherCAF?: number
  buyerStatus?: string
  commercialLevel?: string
  forwardingCC?: string
  freightCurrency?: string
  insuranceCurrency?: string
  packingCC?: string
  foreignInlandFreightCC?: string
  otherCC?: string
}
export interface DeclarationInvoiceAPIPayload {
  _id: string
  invoiceNo: string
  invoiceDate: Date
  purchaseOrderNumber: string
  termPayment: MasterData
  term: MasterData
  consigneeStatus: MasterData
  invoiceCurrency: MasterData
  forwardingCF: string
  freightAF: string
  insuranceAF: string
  packingCAF: number
  foreignInlandFreightCAF: number
  otherCAF: number
  buyerStatus: MasterData
  commercialLevel: MasterData
  forwardingCC: MasterData
  freightCurrency: MasterData
  insuranceCurrency: MasterData
  packingCC: MasterData
  foreignInlandFreightCC: MasterData
  otherCC: MasterData
}
export interface DeclarationDetailInput {
  product?: string
  itemNo?: number
  invoiceNo?: string
  invoiceItem?: number
  tariffCode?: string
  tariffSequence?: string
  statisticalCode?: string
  importTariff?: string
  privilegeCode?: string
  ahtnCode?: string
  depositReason?: string
  natureTransaction?: string
  undgNumber?: string
  productAttribute1?: string
  productAttribute2?: string
  productYear?: string
  remark?: string
  originCountry?: string
  netWeight?: number
  netWeightUnit?: string
  quantity?: number
  quantityUnit?: string
  currency?: string
  exchangeRate?: number
  unitPriceForeign?: number
  unitPriceLocal?: number
  invoiceQuantity?: number
  invoiceQuantityUnit?: string
  invoiceAmountForeign?: number
  invoiceAmountLocal?: number
  increasedPriceForeign?: number
  increasedPriceLocal?: number
  incotermsValueForeign?: number
  incotermsValueLocal?: number
  incotermsValueAssess?: number
  shippingMark?: string
  packageAmount?: number
  packageUnit?: string
  reImportationCertificate?: string
  boi?: string
  bond?: string
  bis19?: string
  reExport?: string
  freeZone?: string
  epz?: string
  serveral?: string
  exportDeclarationNo?: string
  exportDeclarationLineNo?: string
  assessQuantity?: number
  exemptIncotermsLocal?: number
  exciseNo?: string
  exciseQuantity?: number
  exciseQuantityUnit?: string
  assessExciseQuantity?: number
  lastEntry?: string
  status?: DeclarationDetailStatus
}
export interface DeclarationDetailAPIPayload {
  _id: string
  product: ProductAPIPayload
  itemNo: number
  invoiceNo: string
  invoiceItem: number
  tariffCode: string
  tariffSequence: string
  statisticalCode: string
  importTariff: string
  privilegeCode: string
  ahtnCode: string
  depositReason: string
  natureTransaction: string
  undgNumber: string
  productAttribute1: string
  productAttribute2: string
  productYear: string
  remark: string
  originCountry: MasterData | undefined
  netWeight: number
  netWeightUnit: ProductPropertyAPIPayload | undefined
  quantity: number
  quantityUnit: ProductPropertyAPIPayload | undefined
  currency: MasterData
  exchangeRate: number
  unitPriceForeign: number
  unitPriceLocal: number
  invoiceQuantity: number
  invoiceQuantityUnit: ProductPropertyAPIPayload
  invoiceAmountForeign: number
  invoiceAmountLocal: number
  increasedPriceForeign: number
  increasedPriceLocal: number
  incotermsValueForeign: number
  incotermsValueLocal: number
  incotermsValueAssess: number
  shippingMark: string
  packageAmount: number
  packageUnit: ProductPropertyAPIPayload
  reImportationCertificate: string
  boi: string
  bond: string
  bis19: string
  reExport: string
  freeZone: string
  epz: string
  serveral: string
  exportDeclarationNo: string
  exportDeclarationLineNo: string
  assessQuantity: number
  exemptIncotermsLocal: number
  exciseNo: string
  exciseQuantity: number
  exciseQuantityUnit: ProductPropertyAPIPayload
  assessExciseQuantity: number
  lastEntry: string
  status: DeclarationDetailStatus
  relocationRef: string
  productRelocation: any
  productUpload: any
}

export interface DeclarationDetailAPIPayloadNotFlow {
  _id: string
  product: ProductAPIPayload
  itemNo: number
  invoiceNo: string
  invoiceItem: number
  tariffCode: string
  tariffSequence: string
  statisticalCode: string
  importTariff: string
  privilegeCode: string
  ahtnCode: string
  depositReason: string
  natureTransaction: string
  undgNumber: string
  productAttribute1: string
  productAttribute2: string
  productYear: string
  remark: string
  originCountry: string
  netWeight: number
  netWeightUnit: ProductPropertyAPIPayload
  quantity: number
  quantityUnit: ProductPropertyAPIPayload
  currency: string
  exchangeRate: number
  unitPriceForeign: number
  unitPriceLocal: number
  invoiceQuantity: number
  invoiceQuantityUnit: ProductPropertyAPIPayload
  invoiceAmountForeign: number
  invoiceAmountLocal: number
  increasedPriceForeign: number
  increasedPriceLocal: number
  incotermsValueForeign: number
  incotermsValueLocal: number
  incotermsValueAssess: number
  shippingMark: string
  packageAmount: number
  packageUnit: ProductPropertyAPIPayload
  reImportationCertificate: string
  boi: string
  bond: string
  bis19: string
  reExport: string
  freeZone: string
  epz: string
  serveral: string
  exportDeclarationNo: string
  exportDeclarationLineNo: string
  assessQuantity: number
  exemptIncotermsLocal: number
  exciseNo: string
  exciseQuantity: number
  exciseQuantityUnit: ProductPropertyAPIPayload
  assessExciseQuantity: number
  lastEntry: string
  status: DeclarationDetailStatus
  relocationRef: string
  productRelocation: any
  productUpload: any
}

interface ProductCurrency {
  value?: number
  currency?: string
}

export interface MasterDataInput {
  dataKey?: string
  parentKey?: string | null
}

export interface LocaleTextInput {
  text?: string
  locale?: string
}

export interface ProductInput {
  image?: string
  type?: ProductType
  customsCode?: string
  productYear?: string
  brandName?: string
  tariffSequence?: string
  globalName?: string
  localName?: string
  code?: string
  productUnit?: string
  productCategory?: string
  productType?: string
  weight?: number
  currency?: ProductCurrency
  tariffCode?: string
  statisticCode?: string
  tariffRate?: number
  effectiveDate?: Date
  description?: string
  attachmentList?: string[]
  cctvId?: string
}

export interface ProductPropertyInput {
  type?: ProductPropertyType
  globalName?: string
  localName?: string
  code?: string
  parent?: string
  description?: string
  attachmentList?: string[]
}

export interface ContactInput {
  contactType?: string
  incoterms?: string
  code?: string
  globalName?: string
  localName?: string
  taxId?: string
  vatId?: string
  accountNo?: string
  attn?: string
  branch?: string
  address?: string
  postcode?: string
  country?: string
  shippingPostcode?: string
  shippingCountry?: string
  OfficePhoneNo?: string
  officeFaxNo?: string
  website?: string
  emailInformation?: string
  name?: string
  emailPerson?: string
  phone?: string
  note?: string
  attachmentList?: string[]
}
export interface MasterDataLocaleText {
  dataKey: string
  locale: string
  text: string
}

export interface MasterData {
  dataKey: string
  value?: MasterDataLocaleText
}
interface PhoneNumberPayload {
  code?: string
  value?: number
  verifyStatus?: VerifyStatus
}

export interface ProfileAttribute {
  namePrefix?: string
  firstName?: string
  lastName?: string
  profilePictureFileKey?: string | string[]
  nationalID?: string
  dateOfBirth?: string
  gender?: string
  phoneCode?: string
  phoneNumber?: string
  language?: string
  timezone?: string
}

export interface UserAPIPayload {
  _id: string
  email: EmailPayload[]
  phone: PhoneNumberPayload[]
  attribute: ProfileAttribute
}

export interface ResourceAdminAPIPayload {
  _id: string
  attribute: any
}

interface Form {
  _id: string
  title: string
  name: string
  description: string
  status: string
}

export interface ProductLocationInput {
  image?: string
  globalName?: string
  type?: 'FINISH_GOODS' | 'RAW_MATERIAL' | 'SCRAP' | 'MACHINE' | 'WIP'
  productUsage?: 'YES' | 'NO'
  localName?: string
  code?: string
  parent?: string
  description?: string
  attachmentList?: string[]
}

export interface ProductLocationAPIPayload {
  _id: string
  image: string
  globalName: string
  localName: string
  code: string
  type?: 'FINISH_GOODS' | 'RAW_MATERIAL' | 'SCRAP' | 'MACHINE' | 'WIP' | null
  productUsage?: 'YES' | 'NO' | null
  parent: ProductLocationAPIPayload
  description: string
  attachmentList: string[]
}

export interface ProductPropertyAPIPayload {
  _id: string
  type: 'UNIT' | 'TYPE' | 'GATEGORY'
  globalName: string
  localName: string
  code: string
  parent: ProductPropertyAPIPayload
  description: string
  attachmentList: string[]
}

export interface CurrencyAPIPayload {
  dataKey?: string
  value: {
    dataKey?: string
    locale?: string
    text?: string
  }
}

export interface ProductAPIPayload {
  dataKey: any
  customsCode: string
  productYear: string
  brandName: string
  tariffSequence: string
  _id: string
  image: string
  type: ProductType
  globalName: string
  localName: string
  code: string
  productUnit: ProductPropertyAPIPayload
  productCategory: ProductPropertyAPIPayload
  productType: ProductPropertyAPIPayload
  weight: number
  productWeightUnit: ProductPropertyAPIPayload
  unitPrice: number
  tariffCode: string
  statisticCode: string
  tariffRate: number
  remaining: number
  effectiveDate: Date
  description: string
  attachmentList: string[]
  scrap: ProductAPIPayload
  remaining: number
  cctvId: string
  currency?: CurrencyAPIPayload
}

export interface ProductQRcodePayload {
  _id: string
  brandName: string
  unitPrice: number
  code: string
  globalName: string
  localName: string
  customsCode: string
  type: ProductType
  productUnit: ProductPropertyAPIPayload
  productCategory: ProductPropertyAPIPayload
  productType: ProductPropertyAPIPayload
  productLocationList: ProductLocationAPIPayload[]
}

export interface RegistCCTVAPIPayload {
  _id: string
  appKey: string
  orgKey: string
  customsCode: string
  cameraId: string
  cameraName: string
  secretKey: string
  serviceEndpoint: string
  createdAt: Date
  updatedAt: Date
  attribute: any
}

export interface ContactAPIPayload {
  _id: string
  contactType: MasterData
  incoterms: MasterData
  code: string
  globalName: string
  localName: string
  taxId: string
  vatId: string
  accountNo: string
  attn: string
  branch: string
  address: string
  postcode: string
  country: MasterData
  shippingPostcode: string
  shippingCountry: string
  OfficePhoneNo: string
  officeFaxNo: string
  website: string
  emailInformation: string
  name: string
  emailPerson: string
  phone: string
  note: string
  attachmentList: string[]
}

export interface MasterDataAPIPayload {
  parentKey: string
  dataKey: string
  localeText: MasterDataLocaleText
  localeTextList: MasterDataLocaleText[]
}

export interface OrgPropertyAPIPayload {
  name: string
  taxNo: string
  branch: string
  address: string
  lostPercent: number
  currency: MasterData
  province: MasterData
  district: MasterData
  subDistrict: MasterData
  signature: string[]
  companyStamp: string[]
  companyPhone: string
  companyEmail: string
  companyFax: string
}

export interface OrgPropertyInput {
  name?: string
  taxNo?: string
  branch?: string
  address?: string
  lostPercent?: number
}

export interface ProductLocation {
  _id: number
  type: ProductLocationType
  declaration: DeclarationAPIPayload
  declarationDetail: DeclarationDetailAPIPayload
  product: ProductAPIPayload
  location: ProductLocationAPIPayload
  reserveRemaining: number
  remaining: number
  outStock: StatusType
}

export interface ProductRelocationLocationAPIPayload {
  type: LocationListType
  declaration: DeclarationAPIPayload
  declarationDetail: DeclarationDetailAPIPayload
  quantity: number
  fromLocation: ProductLocationAPIPayload
  toLocation: ProductLocationAPIPayload
  beforeProductNumber: number
  remark: string
}

export interface ProductionOrderInput {
  no?: string
  step?: number
  startDate?: string
  endDate?: string
  endWipDate?: string
  location?: string
  remark?: string
  product?: string
  attachmentList?: string[]
}

export interface AdminFinanceDocumentContactDetailType {
  address: string
  zipCode: string
  taxId: string
  branch: string
}

export interface AdminFinanceDocumentPriceDetailType {
  discount: number
  totalAfterDiscount: number
  vat: number
  withHoldingTax: number
  paymentAmount: number
  date: string
  totalForeign: number
  totalLocal: number
  grandTotalLocal: number
  grandTotalForeign: number
}

export interface AdminFinanceDocumentProduct {
  id?: string
  code?: string
  name?: string
  quantity?: number
  unit?: string
  unitId?: string
  unitPrice?: number
  total?: number
  unitPriceLocal?: number
  unitPriceForeign?: number
  unitPriceForeignCurrency?: MasterData | null
  unitPriceLocalCurrency?: MasterData | null
  exchangeRate?: number
  totalForeign?: number
  totalLocal?: number
}
export interface AdminFinanceDocumentProductForm extends AdminFinanceDocumentProduct {
  unitPriceForeignCurrency?: string | null
  unitPriceLocalCurrency?: string | null
}
export interface AdminFinanceDocumentAPIPayload {
  _id: string
  customerName: string
  customerId: string
  contactDetail: AdminFinanceDocumentContactDetailType
  priceDetail: AdminFinanceDocumentPriceDetailType
  productList: AdminFinanceDocumentProduct[]
  remark: string
  signature: string[]
  companyStamp: string[]
  attachFileList: string[]
  createdBy: string
  createdAt: string
  updatedAt: string
}

export interface InvoiceAPIPayload extends AdminFinanceDocumentAPIPayload {
  invoiceNumber: string
}

export interface QuotationAPIPayload extends AdminFinanceDocumentAPIPayload {
  quotationNumber: string
}

export interface AdminDocumentFinanceInput {
  customerName: string
  customerId: string
  contactDetail: Partial<AdminFinanceDocumentContactDetailType>
  priceDetail: Partial<AdminFinanceDocumentPriceDetailType>
  productList: Partial<AdminFinanceDocumentProduct[]>
  signature: string
  companyStamp: string
  remark: string
  attachFileList: string[]
}

export interface CreateInvoiceInput extends AdminDocumentFinanceInput {
  invoiceNumber: string
}
export interface CreateQuotationInput extends AdminDocumentFinanceInput {
  quotationNumber: string
}

export interface CheckLostAPIPayload {
  lostPercent: number
  lostMaxPercent: number
  overMaxLost: YesNoType
}

export interface OrgProductionOrderDetailAPIPayload {
  _id: string
  productionOrder: OrgProductionOrderAPIPayload
  productRelocation: OrgProductRelocationAPIPayload
  remark: string
  netWeight: number
  netWeightUnit: ProductPropertyAPIPayload
  quantity: number
  quantityUnit: ProductPropertyAPIPayload
  unitPriceLocal: number
  invoiceAmountLocal: number
  currency: MasterData
  status: DeclarationDetailStatus
  relocationRef: string
}

export interface RegistCCTVInput {
  locationId?: string
  cameraName?: string
  motionDetection?: boolean
  remoteRTSP?: string
  localRTSP?: string
  mediaServiceEndpoint?: string
  serialNumber?: string
  vehicleDeteion?: VehicleOptionsInput
  licensePlateDetection?: VehicleOptionsInput

  // @deprecated field
  cameraId?: string
  serviceEndpoint?: string
  signUrlEndpoint?: string
  attribute?: any
  secretKey?: string
}

export interface VehicleOptionsInput {
  truck?: boolean
  car?: boolean
  motorcycle?: boolean
}



//---------------------------------- BANGBOW ---------------//


export type Phone = {
  value: string;
}

export type Email = {
  value: string;
}

export type RESOURCE_OWNER = "USER" | "OTHER"


export type CREAT_LEAD_STATUS = "NORMAL" | "QUALIFY" | "DISQUALIFY"

export type LEAD_TYPE_RESPONSE = "AGENT" | "FACTORY" | "RETAIL" | "ORGANIZATION" | "CUSTOMER" | "OTHER"

export type ADDRESS_TYPE = "ADDRESS_CURRENT" | "ADDRESS_CARD" | "ADDRESS_REGISTER" | "ADDRESS_DOCUMENT" | "ADDRESS_OFFICE" | "NONE"

export type ADDRESS_DEFAULT_SEND = "DEFAULT" | "NOT_DEFAULT"


export type ATRRIBUTE_TYPE = "CHECKBOX" | "RADIO" | "TEXT" | "NUMBER"


export type SelfProductCategory = {
  _id: string
  key: string
  parent: string
  name: string
  hasChildren: boolean
}

export interface ProductCategoryAPIPayload {
  _id: string
  name: string
  key: string
  parent: string
  tree: string[]
  treeFull: SelfProductCategory[]
  attributes: string[]
  hasChildren: boolean
}



export interface LeadDataAPIPayload {
  _id: string
  prefixKey: string
  prefixName: string
  firstName: string
  lastName: string
  leadTypeKey: string
  leadTypeName: string
  organizationKey: string
  organizationName: string
  status: string
  phone: Phone[]
  email: Email[]
  createdAt: number
  updatedAt: number
  createBy: string
  updateBy: string
}

export interface LeadTypeOption {
  label: string
  value: LEAD_TYPE_RESPONSE
  text: string
}

export interface LeadStatus {
  label: string
  value: CREAT_LEAD_STATUS
}

export interface LeadAddressRESP {
  _id?: string
  orgKey?: string
  refId?: string
  address?: String
  subDistrict?: String
  district?: String
  province?: String
  postcode?: String
  country?: String
  latitude?: String
  longitude?: String
  type?: ADDRESS_TYPE
  defaultSend?: ADDRESS_DEFAULT_SEND
}

export interface MasterDataLocationPayload {
  locale: string
  text: string
  searchable: string
  parentKey: string
  dataKey: string
  attribute: string
}
