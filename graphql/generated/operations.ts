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
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any
  FileUpload: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
  JSONObject: any
  Number: any
  /** The `Upload` scalar type represents a file upload. */
  Upload: any
}

export enum Atrribute_Type {
  Checkbox = 'CHECKBOX',
  Number = 'NUMBER',
  Radio = 'RADIO',
  Text = 'TEXT',
}

export type AccountEmail = {
  value?: InputMaybe<Scalars['String']>
}

export type AccountEmailResp = {
  value: Maybe<Scalars['String']>
}

export type AccountPaginateResponse = {
  /** โค้ดของการตอบสนอง */
  code: Maybe<Scalars['String']>
  /** ข้อความตอบสนอง */
  message: Maybe<Scalars['String']>
  pagination: Maybe<PaginatedType>
  payload: Maybe<Array<AccountResp>>
}

export type AccountPhone = {
  value?: InputMaybe<Scalars['String']>
}

export type AccountPhoneResp = {
  value: Scalars['String']
}

export type AccountResp = {
  _id: Maybe<Scalars['ID']>
  citizenId: Maybe<Scalars['String']>
  contactList: Maybe<Array<ContactInAccountResp>>
  /** วันที่ลงทะเบียน */
  createdAt: Scalars['DateTime']
  createdAtBy: Maybe<UserResp>
  dataSource: Maybe<Scalars['String']>
  email: Maybe<Array<AccountEmailResp>>
  image: Maybe<Scalars['String']>
  leadType: Maybe<Scalars['String']>
  name: Maybe<Scalars['String']>
  passport: Maybe<Scalars['String']>
  phone: Maybe<Array<AccountPhoneResp>>
  resourceOwner: Maybe<Scalars['String']>
  status: Maybe<Scalars['String']>
  /** วันที่อัพเดตข้อมูลล่าสุด */
  updatedAt: Scalars['DateTime']
  updatedAtBy: Maybe<UserResp>
}

export type AccountResponse = {
  /** โค้ดของการตอบสนอง */
  code: Maybe<Scalars['String']>
  /** ข้อความตอบสนอง */
  message: Maybe<Scalars['String']>
  payload: Maybe<AccountResp>
}

export type AddCategoryAttributeInput = {
  /** array id attribute ที่ใช้ในการเพิ่ม */
  attributeIdList?: InputMaybe<Array<Scalars['String']>>
  /** categoryId */
  categoryId: Scalars['String']
}

export type AddImagesToVaraintsInput = {
  fileKey: Scalars['String']
  variantId: Scalars['String']
}

export type AddressInputResponse = {
  /** โค้ดของการตอบสนอง */
  code: Maybe<Scalars['String']>
  /** ข้อความตอบสนอง */
  message: Maybe<Scalars['String']>
  /** data */
  payload: Maybe<RespCreate>
}

export type AddressPaginateResponse = {
  /** โค้ดของการตอบสนอง */
  code: Maybe<Scalars['String']>
  /** ข้อความตอบสนอง */
  message: Maybe<Scalars['String']>
  /** pagination data */
  pagination: Maybe<PaginatedType>
  /** array data */
  payload: Maybe<Array<AddressResp>>
}

export type AddressResp = {
  _id: Scalars['String']
  /** ที่อยู่ */
  address: Maybe<Scalars['String']>
  /** ประเทศ */
  country: Maybe<Scalars['String']>
  /** กำหนดที่อยู่ที่จะเป็นค่าตั้งต้น */
  defaultSend: Maybe<Enum_Address_Default_Send>
  /** อำเภอ */
  district: Maybe<Scalars['String']>
  /** latitude */
  latitude: Maybe<Scalars['String']>
  /** longitude */
  longitude: Maybe<Scalars['String']>
  orgKey: Maybe<Scalars['String']>
  /** รหัสไปรษณีย์ */
  postcode: Maybe<Scalars['String']>
  /** จังหวัด */
  province: Maybe<Scalars['String']>
  /** ไอดีของเจ้าของที่อยู่ */
  refId: Maybe<Scalars['String']>
  /** ตำบล */
  subDistrict: Maybe<Scalars['String']>
  /** ประเภทที่อยู่ */
  type: Maybe<Enum_Address_Type>
}

export type AgentGetProductInput = {
  pagination?: InputMaybe<Input_Pagination>
  search?: InputMaybe<AgentProductCriteria>
  sort?: InputMaybe<GetProductSortInput>
}

export type AgentProductCriteria = {
  categoryKey?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  /** คีย์ของโรงงาน */
  orgKey?: InputMaybe<Scalars['String']>
  priceRange?: InputMaybe<PriceRangeCriteria>
}

export type AttributeInPut = {
  /** id ของคุณลักษณะผลิตภัณฑ์ของหมวดหมู่ทีี่เลือก */
  productAttributeId: Scalars['String']
  /** ค่าของคุณลักษณะในกรณีืี่คุณลักษณะนั้นเป็นประเภท Text, Number */
  value?: InputMaybe<Scalars['String']>
  /** id ของคุณลักษณะที่เลือกในกรณีืที่คุณลักษณะนั้นเป็นประเภท Checkbox, Radio หรือ Select */
  valueIds?: InputMaybe<Array<Scalars['String']>>
}

export type AttributeOptions = {
  /** name ของ Options */
  name: Maybe<Scalars['String']>
  /** ลำดับ การเรียงใน Options */
  order: Maybe<Scalars['Int']>
  /** value ใน Options */
  value: Maybe<Scalars['String']>
}

export type AttributeOptionsInput = {
  /** name ของ Options */
  name?: InputMaybe<Scalars['String']>
  /** ลำดับ การเรียงใน Options */
  order?: InputMaybe<Scalars['Int']>
  /** value ใน Options */
  value?: InputMaybe<Scalars['String']>
}

export type AttributeOptionsResponse = {
  _id: Maybe<Scalars['String']>
  name: Maybe<Scalars['String']>
}

export enum AttributeType {
  Checkbox = 'CHECKBOX',
  Number = 'NUMBER',
  Radio = 'RADIO',
  Text = 'TEXT',
}

export type AttributeUpdate = {
  /** id ของคุณลักษณะผลิตภัณฑ์ของหมวดหมู่ทีี่เลือก */
  productAttributeId: Scalars['String']
  /** ค่าของคุณลักษณะในกรณีืี่คุณลักษณะนั้นเป็นประเภท Text, Number */
  value?: InputMaybe<Scalars['String']>
  /** id ของคุณลักษณะที่เลือกในกรณีืที่คุณลักษณะนั้นเป็นประเภท Checkbox, Radio หรือ Select */
  valueIds?: InputMaybe<Array<Scalars['String']>>
}

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
}

export type Category = {
  _id: Maybe<Scalars['String']>
  categoryKey: Maybe<Scalars['String']>
  /** เลิกใช้แล้ว */
  key: Maybe<Scalars['String']>
  name: Maybe<Scalars['String']>
}

export type CommonGetProductInput = {
  pagination?: InputMaybe<Input_Pagination>
  search?: InputMaybe<CommonProductCriteria>
  sort?: InputMaybe<GetProductSortInput>
}

export type CommonProductCriteria = {
  categoryKey?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  /** คีย์ของโรงงาน */
  orgKey?: InputMaybe<Scalars['String']>
  priceRange?: InputMaybe<PriceRangeCriteria>
}

export type ContactEmail = {
  value?: InputMaybe<Scalars['String']>
}

export type ContactEmailResp = {
  value: Maybe<Scalars['String']>
}

export type ContactInAccountInput = {
  /** ไอดีของลูกค้า */
  contactAtBy?: InputMaybe<Scalars['String']>
  /** กำหนดค่าว่าคนไหนคือคนหลักหรือต้องติดต่อเป็นหลัก */
  isMainContact?: InputMaybe<Scalars['Boolean']>
  /** ตำแหน่ง */
  position?: InputMaybe<Scalars['String']>
}

export type ContactInAccountResp = {
  contactAtBy: Maybe<ContactResp>
  isMainContact: Maybe<Scalars['Boolean']>
  position: Maybe<Scalars['String']>
}

export type ContactPaginateResponse = {
  /** โค้ดของการตอบสนอง */
  code: Maybe<Scalars['String']>
  /** ข้อความตอบสนอง */
  message: Maybe<Scalars['String']>
  pagination: Maybe<PaginatedType>
  payload: Maybe<Array<ContactResp>>
}

export type ContactPhone = {
  value?: InputMaybe<Scalars['String']>
}

export type ContactPhoneResp = {
  value: Scalars['String']
}

export type ContactResp = {
  _id: Maybe<Scalars['ID']>
  citizenId: Maybe<Scalars['String']>
  /** วันที่ลงทะเบียน */
  createdAt: Scalars['DateTime']
  createdAtBy: Maybe<UserResp>
  dataSource: Maybe<Scalars['String']>
  email: Maybe<Array<ContactEmailResp>>
  firstName: Maybe<Scalars['String']>
  image: Maybe<Scalars['String']>
  lastName: Maybe<Scalars['String']>
  leadType: Maybe<Scalars['String']>
  organizationName: Maybe<Scalars['String']>
  passport: Maybe<Scalars['String']>
  phone: Maybe<Array<ContactPhoneResp>>
  resourceOwner: Maybe<Scalars['String']>
  status: Maybe<Scalars['String']>
  /** วันที่อัพเดตข้อมูลล่าสุด */
  updatedAt: Scalars['DateTime']
  updatedAtBy: Maybe<UserResp>
}

export type ContactResponse = {
  /** โค้ดของการตอบสนอง */
  code: Maybe<Scalars['String']>
  /** ข้อความตอบสนอง */
  message: Maybe<Scalars['String']>
  payload: Maybe<ContactResp>
}

export type Create = {
  _id: Maybe<Scalars['String']>
}

export type CreateAccountInput = {
  /** ประเภทองค์กร */
  accountType?: InputMaybe<Enum_Customer_Type>
  /** บ้านเลขที่ */
  addressNo?: InputMaybe<Scalars['String']>
  /** ประเภทที่อยู่ */
  addressType?: InputMaybe<Enum_Address_Type>
  /** เว็บไซต์ขององค์กร */
  category?: InputMaybe<Scalars['String']>
  contactList?: InputMaybe<Array<ContactInAccountInput>>
  /** ประเทศ */
  country?: InputMaybe<Scalars['String']>
  /** แหล่งที่มา */
  dataSource?: InputMaybe<Scalars['String']>
  /** ที่อยู่จัดส่งตั้งต้น */
  defaultSend?: InputMaybe<Enum_Address_Default_Send>
  /** อำเภอ/เขต */
  district?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Array<AccountEmail>>
  /** รูปภาพโรงงาน */
  fileList?: InputMaybe<Array<Scalars['String']>>
  /** รูปภาพ */
  image?: InputMaybe<Scalars['String']>
  /** รูปภาพสินค้า */
  imageList?: InputMaybe<Array<Scalars['String']>>
  latitude?: InputMaybe<Scalars['String']>
  longitude?: InputMaybe<Scalars['String']>
  /** ชื่อองค์กร */
  name?: InputMaybe<Scalars['String']>
  /** บันทึกข้อมูลเพิ่มเติม */
  note?: InputMaybe<Scalars['String']>
  orgKey?: InputMaybe<Scalars['String']>
  phone?: InputMaybe<Array<AccountPhone>>
  /** รหัสไปรษณีย์ */
  postcode?: InputMaybe<Scalars['String']>
  /** จังหวัด */
  province?: InputMaybe<Scalars['String']>
  /** สถานะองค์กร */
  status?: InputMaybe<Enum_Organization_Status>
  /** ตำบล/แขวง */
  subDistrict?: InputMaybe<Scalars['String']>
  /** เว็บไซต์ขององค์กร */
  website?: InputMaybe<Scalars['String']>
}

export type CreateAddressInput = {
  /** ที่อยู่ */
  address?: InputMaybe<Scalars['String']>
  /** ประเทศ */
  country?: InputMaybe<Scalars['String']>
  /** กำหนดที่อยู่ที่จะเป็นค่าตั้งต้น */
  defaultSend?: InputMaybe<Enum_Address_Default_Send>
  /** อำเภอ */
  district?: InputMaybe<Scalars['String']>
  /** latitude */
  latitude?: InputMaybe<Scalars['String']>
  /** longitude */
  longitude?: InputMaybe<Scalars['String']>
  orgKey?: InputMaybe<Scalars['String']>
  /** รหัสไปรษณีย์ */
  postcode?: InputMaybe<Scalars['String']>
  /** จังหวัด */
  province?: InputMaybe<Scalars['String']>
  /** ไอดีของเจ้าของที่อยู่ */
  refId?: InputMaybe<Scalars['String']>
  /** ตำบล */
  subDistrict?: InputMaybe<Scalars['String']>
  /** ประเภทที่อยู่ */
  type?: InputMaybe<Enum_Address_Type>
}

export type CreateAttributeInput = {
  /** descriptions ของ Attribute */
  descriptions?: InputMaybe<Scalars['String']>
  /**  ชื่อ ของ Attribute */
  name?: InputMaybe<Scalars['String']>
  /** จะมีค่าเมื่อ type = CHECKBOX,RADIO */
  optionList?: InputMaybe<Array<AttributeOptionsInput>>
  /** ruleRegExpList ของ Attribute ไว้สำหรับการใช้ RegExp ในการจัดการ */
  ruleRegExpList?: InputMaybe<Array<Scalars['String']>>
  /** status ของ Attribute */
  status?: InputMaybe<EnabledStatus>
  /** ประเภท ของ Attribute ว่าเป็นตัวแปรประเภทใด */
  type?: InputMaybe<AttributeType>
}

export type CreateCategoryAttributeInput = {
  /** attributeId */
  attributeId?: InputMaybe<Scalars['String']>
  /** categoryId */
  categoryId?: InputMaybe<Scalars['String']>
  /** status การใช้งาน */
  status?: InputMaybe<EnabledStatus>
}

export type CreateCategoryInput = {
  /** descriptions ของ Category */
  descriptions?: InputMaybe<Scalars['String']>
  /**  ชื่อ ของ Category */
  name?: InputMaybe<Scalars['String']>
  /** ระบุ CategoryKey ของ Categoryที่เป็นแม่ตัวที่สร้าง ถ้าจะสร้างโดยที่มันไม่มีแม่ ให้ระบุ "NONE"  */
  parentCategoryKey?: InputMaybe<Scalars['String']>
  /** สถานะ ของ Category */
  status?: InputMaybe<EnabledStatus>
}

export type CreateContactInput = {
  /** บ้านเลขที่ */
  addressNo?: InputMaybe<Scalars['String']>
  /** ประเภทที่อยู่ */
  addressType?: InputMaybe<Enum_Address_Type>
  citizenId?: InputMaybe<Scalars['String']>
  /** ประเทศ */
  country?: InputMaybe<Scalars['String']>
  /** แหล่งที่มา */
  dataSource?: InputMaybe<Scalars['String']>
  dateOfBirth?: InputMaybe<Scalars['String']>
  /** ที่อยู่จัดส่งตั้งต้น */
  defaultSend?: InputMaybe<Enum_Address_Default_Send>
  /** อำเภอ/เขต */
  district?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Array<ContactEmail>>
  /** รูปภาพโรงงาน */
  factoryImages?: InputMaybe<Array<Scalars['String']>>
  firstName?: InputMaybe<Scalars['String']>
  /** รูปภาพ */
  image?: InputMaybe<Scalars['String']>
  lastName?: InputMaybe<Scalars['String']>
  latitude?: InputMaybe<Scalars['String']>
  /** ประเภท */
  leadType?: InputMaybe<Enum_Customer_Type>
  longitude?: InputMaybe<Scalars['String']>
  orgKey?: InputMaybe<Scalars['String']>
  passport?: InputMaybe<Scalars['String']>
  phone?: InputMaybe<Array<ContactPhone>>
  /** รหัสไปรษณีย์ */
  postcode?: InputMaybe<Scalars['String']>
  prefixKey?: InputMaybe<Scalars['String']>
  /** รูปภาพสินค้า */
  productImages?: InputMaybe<Array<Scalars['String']>>
  /** จังหวัด */
  province?: InputMaybe<Scalars['String']>
  resourceOwner?: InputMaybe<Enum_Resource_Owner>
  /** ตำบล/แขวง */
  subDistrict?: InputMaybe<Scalars['String']>
}

export type CreateLeadInput = {
  /** บ้านเลขที่ */
  addressNo?: InputMaybe<Scalars['String']>
  /** ประเภทที่อยู่ */
  addressType?: InputMaybe<Enum_Address_Type>
  citizenId?: InputMaybe<Scalars['String']>
  /** ประเทศ */
  country?: InputMaybe<Scalars['String']>
  /** แหล่งที่มา */
  dataSource?: InputMaybe<Scalars['String']>
  dateOfBirth?: InputMaybe<Scalars['String']>
  /** ที่อยู่จัดส่งตั้งต้น */
  defaultSend?: InputMaybe<Enum_Address_Default_Send>
  /** อำเภอ/เขต */
  district?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Array<Email>>
  /** รูปภาพโรงงาน */
  factoryImages?: InputMaybe<Array<Scalars['String']>>
  firstName?: InputMaybe<Scalars['String']>
  /** รูปภาพ */
  image?: InputMaybe<Scalars['String']>
  lastName?: InputMaybe<Scalars['String']>
  latitude?: InputMaybe<Scalars['String']>
  /** ประเภท */
  leadType?: InputMaybe<Enum_Customer_Type>
  longitude?: InputMaybe<Scalars['String']>
  /** ชื่อหน่วยงาน */
  organizationName?: InputMaybe<Scalars['String']>
  passport?: InputMaybe<Scalars['String']>
  phone?: InputMaybe<Array<Phone>>
  /** รหัสไปรษณีย์ */
  postcode?: InputMaybe<Scalars['String']>
  prefixKey?: InputMaybe<Scalars['String']>
  /** รูปภาพสินค้า */
  productImages?: InputMaybe<Array<Scalars['String']>>
  /** จังหวัด */
  province?: InputMaybe<Scalars['String']>
  resourceOwner?: InputMaybe<Enum_Resource_Owner>
  /** สถานะ */
  status?: InputMaybe<Enum_Creat_Lead_Status>
  /** ตำบล/แขวง */
  subDistrict?: InputMaybe<Scalars['String']>
}

export type CreateProductAttribute = {
  _id: Maybe<Scalars['String']>
  /** ชื่อคุณลักษณะสินค้า */
  name: Scalars['String']
  /** ตัวเลือกของคุณลักษณะสินค้าในกรณีที่ type เป็น CHECKBOX, RADIO */
  options: Maybe<Array<OptionsResponse>>
  /** regex string สำหรับตรวจสอบความถูกต้องของข้อมูล */
  rules: Maybe<Array<Scalars['String']>>
  /** ประเภทข้อมูลของคุณลักษณะสินค้า */
  type: Atrribute_Type
}

export type CreateProductAttributeInput = {
  /** ชื่อคุณลักษณะสินค้า */
  name: Scalars['String']
  /** ตัวเลือกของคุณลักษณะสินค้าในกรณีที่ type เป็น CHECKBOX, RADIO */
  options?: InputMaybe<Array<Options>>
  /** regex string สำหรับตรวจสอบความถูกต้องของข้อมูล */
  rules?: InputMaybe<Array<Scalars['String']>>
  /** ประเภทข้อมูลของคุณลักษณะสินค้า */
  type: Atrribute_Type
}

export type CreateProductAttributeResponse = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<CreateProductAttribute>
}

export type CreateProductAttributeResponseList = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Array<Maybe<ProductAttributeDto>>>
}

export type CreateProductCategoryInput = {
  /** ชื่อหมวดหมู่ผลิตภัณฑ์ */
  name: Scalars['String']
  /**
   *
   *       ชื่อหมวดหมู่ผลิตภัณฑ์ สามารถสร้างได้หลายภาษา เช่น :
   *       {
   *         "th" : "สุขภาพ",
   *         "en" : "Health"
   *       }
   *
   */
  names?: InputMaybe<Scalars['JSON']>
  /** คีย์ของหมวดหมู่หลัก ถ้าไม่ใส่หมวดหมู่ที่สร้างจะเป็น ROOT Level */
  parentKey?: InputMaybe<Scalars['String']>
}

export type CreateProductInput = {
  /** คุณลักษณะผลิตภัณฑ์ */
  attributes?: InputMaybe<Array<InputMaybe<AttributeInPut>>>
  /** คีย์ของหมวดหมู่ผลิตภัณฑ์ */
  categoryKey?: InputMaybe<Scalars['String']>
  /** จำนวนสต๊อก */
  changeQty: Scalars['Float']
  /** สถานะการเปิดใช้งานของรูปภาพอธิบายผลิตภัณฑ์ */
  descImageStatus: Toggle_Creat_Product_Status
  /** รูปภาพอธิบาย */
  descImages?: InputMaybe<Array<Image>>
  /**
   *
   *     คำอธิบายผลิตภัณฑ์ สามารถสร้างได้หลายภาษา เช่น :
   *     {
   *       "th" : "นุ่ม เบา ราคาถูก รองเท้าหัวโตผลไม้ พื้นสูง 7 ซม. พื้นนุ่ม",
   *       "en" : "Boots High Quality cheap price"
   *     }
   *     ความยาวสูงสุด 5000 ตัวอักษร, ต่ำสุด 23 ตัวอักษร
   *
   */
  descriptions: Scalars['JSON']
  /**
   *
   *     ชื่อผลิตภัณฑ์ สามารถสร้างได้หลายภาษา เช่น :
   *     {
   *       "th" : "รองเท้า BAOJI แท้💯% รองเท้าหัวโตผลไม้ พื้นสูง 7 ซม. พื้นนุ่ม",
   *       "en" : "BAOJI Boots High Quality"
   *     }
   *     ความยาวสูงสุด 120 ตัวอักษร, ต่ำสุด 19 ตัวอักษร
   *
   */
  names: Scalars['JSON']
  /** ราคาของผลิตภัณฑ์ */
  price: Price
  /** รูปภาพผลิตภัณฑ์ */
  productImages?: InputMaybe<Array<Image>>
  /** ตัวเลือกสินค้า */
  skus?: InputMaybe<Array<Sku>>
}

export type CreateResponse = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Create>
}

export type CreateVaraint = {
  _id: Maybe<Scalars['String']>
}

export type CreateVaraintOptionInput = {
  name: Scalars['String']
}

export type CreateVaraintResponse = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<CreateVaraint>
}

export type CreateVaraintV2Input = {
  name: Scalars['String']
  productId: Scalars['String']
}

export type CreatedSku = {
  propertyMemoMap: Maybe<Scalars['JSON']>
  skuMap: Maybe<Scalars['JSON']>
}

export type CreatedSkuResponse = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<CreatedSku>
}

export type Data_Migration_Input = {
  appKey: Scalars['String']
  dbUri: Scalars['String']
}

export type Data_Migration_Result = {
  appKey: Maybe<Scalars['String']>
  status: Maybe<Scalars['String']>
}

export type DeleteProductCategory = {
  _id: Maybe<Scalars['String']>
  /** หมวดหมู่สินค้าที่ลบไป */
  categoryKey: Maybe<Scalars['String']>
}

export type DeleteProductCategoryResponse = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<DeleteProductCategory>
}

export enum Enum_Address_Default_Send {
  Default = 'DEFAULT',
  NotDefault = 'NOT_DEFAULT',
}

export enum Enum_Address_Type {
  AddressCard = 'ADDRESS_CARD',
  AddressCurrent = 'ADDRESS_CURRENT',
  AddressDocument = 'ADDRESS_DOCUMENT',
  AddressOffice = 'ADDRESS_OFFICE',
  AddressRegister = 'ADDRESS_REGISTER',
  None = 'NONE',
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

export enum Enum_Creat_Lead_Status {
  Disqualify = 'DISQUALIFY',
  Normal = 'NORMAL',
  Qualify = 'QUALIFY',
}

export enum Enum_Credential_Type {
  ResourceAdmin = 'RESOURCE_ADMIN',
  ResourceOwner = 'RESOURCE_OWNER',
}

export enum Enum_Customer_Type {
  Agent = 'AGENT',
  Customer = 'CUSTOMER',
  Factory = 'FACTORY',
  Organization = 'ORGANIZATION',
  Other = 'OTHER',
  Retail = 'RETAIL',
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

export enum Enum_Resource_Owner {
  Other = 'OTHER',
  User = 'USER',
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

export type Email = {
  value?: InputMaybe<Scalars['String']>
}

export type EmailResp = {
  value: Maybe<Scalars['String']>
}

/** สถานะการเปิดใช้งาน */
export enum EnabledStatus {
  Disabled = 'DISABLED',
  Enabled = 'ENABLED',
}

export type File = {
  encoding: Scalars['String']
  filename: Scalars['String']
  mimetype: Scalars['String']
}

export type FindAccountInput = {
  filter?: InputMaybe<QueryAccountInput>
  pagination?: InputMaybe<PaginatedFindType>
  query?: InputMaybe<QueryAccountInput>
  search?: InputMaybe<QueryAccountInput>
}

export type FindAddressInput = {
  filter?: InputMaybe<QueryAddressInput>
  pagination?: InputMaybe<PaginatedFindType>
  query?: InputMaybe<QueryAddressInput>
  search?: InputMaybe<QueryAddressInput>
}

export type FindContactInput = {
  filter?: InputMaybe<QueryContactInput>
  pagination?: InputMaybe<PaginatedFindType>
  query?: InputMaybe<QueryContactInput>
  search?: InputMaybe<QueryContactInput>
}

export type FindLeadInput = {
  filter?: InputMaybe<QueryLeadInput>
  pagination?: InputMaybe<PaginatedFindType>
  query?: InputMaybe<QueryLeadInput>
  search?: InputMaybe<QueryLeadInput>
}

export type Get_App_By_Email = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Array<Maybe<Get_App_By_Email_Credential_Payload>>>
}

export type Get_App_By_Email_Credential_Payload = {
  app: Maybe<Type_App_Schema>
  credential: Maybe<Get_App_By_Email_Credential_Schema>
}

export type Get_App_By_Email_Credential_Schema = {
  credentialKey: Maybe<Scalars['String']>
  name: Maybe<Scalars['String']>
  status: Maybe<Enum_App_Status>
  type: Maybe<Enum_Credential_Type>
}

export type Get_App_Credential_Expiration = {
  access: Maybe<Scalars['String']>
  refresh: Maybe<Scalars['String']>
}

export type Get_App_Credential_Host = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Get_App_By_Email_Credential_Payload>
}

export type Get_App_Credential_List = {
  credentialKey: Maybe<Scalars['String']>
  name: Maybe<Scalars['String']>
  type: Maybe<Scalars['String']>
}

export enum Get_Product_Status {
  Checking = 'CHECKING',
  Draft = 'DRAFT',
  OutOfStock = 'OUT_OF_STOCK',
  Remove = 'REMOVE',
  Selling = 'SELLING',
  WaitingToFix = 'WAITING_TO_FIX',
}

export type GenerateSku = {
  varaintKeys: Array<Scalars['String']>
}

export type GetAttributeInPut = {
  pagination?: InputMaybe<PaginatedFindType>
  query?: InputMaybe<GetAttributeQuery>
  /**
   *
   *       ลำดับการเรียงข้อมูล โดยจะตามลำดับ และเลขคือประเภทการเรียง โดยที่1จะเป็นน้อยไปมาก และ-1เป็นมากไปน้อย เช่น :
   *       {
   *         "name" : "1",
   *         "createdBy" : "1",
   *         "updatedBy" : "-1"
   *       }
   *
   */
  sort?: InputMaybe<Scalars['JSON']>
}

export type GetAttributeQuery = {
  /** ค้นหาด้วย AttributeId */
  attributeId?: InputMaybe<Scalars['String']>
  /** ค้นหาด้วย AttributeKey */
  attributeKey?: InputMaybe<Scalars['String']>
  /** ค้นหาด้วย descriptions แบบ Regex */
  descriptions?: InputMaybe<Scalars['String']>
  /** ค้นหาด้วย name แบบ Regex */
  name?: InputMaybe<Scalars['String']>
  /** ค้นหาด้วย status ถ้าส่ง null จะแสดงทั้งหมด */
  status?: InputMaybe<EnabledStatus>
  /** ประเภท ของ Attribute ว่าเป็นตัวแปรประเภทใด */
  type?: InputMaybe<AttributeType>
}

export type GetAttributeResp = {
  /** id ของ Attribute */
  _id: Maybe<Scalars['String']>
  /** attributeKey ของ Attribute ซึ้งจะแสดงผล และค้นหา และจะไม่ซ้ำ */
  attributeKey: Maybe<Scalars['String']>
  /** สร้างเมื่อ  */
  createdAt: Maybe<Scalars['DateTime']>
  /** สร้างโดย userID */
  createdBy: Maybe<Scalars['String']>
  /** descriptions ของ Attribute */
  descriptions: Maybe<Scalars['String']>
  /** ชื่อ ของ Attribute */
  name: Maybe<Scalars['String']>
  /** จะมีค่าเมื่อ type = CHECKBOX,RADIO */
  optionList: Maybe<Array<AttributeOptions>>
  /** ruleRegExpList ของ Attribute ไว้สำหรับการใช้ RegExp ในการจัดการ */
  ruleRegExpList: Maybe<Array<Scalars['String']>>
  /** status ของ Attribute */
  status: Maybe<EnabledStatus>
  /** ประเภท ของ Attribute ว่าเป็นตัวแปรประเภทใด */
  type: Maybe<AttributeType>
  /** แก้ไขเมื่อ */
  updatedAt: Maybe<Scalars['DateTime']>
  /** แก้ไขโดย userID */
  updatedBy: Maybe<Scalars['String']>
}

export type GetAttributeRespon = {
  /** โค้ดของการตอบสนอง */
  code: Maybe<Scalars['String']>
  /** ข้อความตอบสนอง */
  message: Maybe<Scalars['String']>
  /** data */
  payload: Maybe<GetAttributeResp>
}

export type GetAttributeResponse = {
  /** โค้ดของการตอบสนอง */
  code: Maybe<Scalars['String']>
  /** ข้อความตอบสนอง */
  message: Maybe<Scalars['String']>
  /** pagination data */
  pagination: Maybe<PaginatedType>
  /** array data */
  payload: Maybe<Array<GetAttributeResp>>
}

export type GetCategoryAttributeInPut = {
  pagination?: InputMaybe<PaginatedFindType>
  query?: InputMaybe<GetCategoryAttributeQuery>
  /**
   *
   *       ลำดับการเรียงข้อมูล โดยจะตามลำดับ และเลขคือประเภทการเรียง โดยที่1จะเป็นน้อยไปมาก และ-1เป็นมากไปน้อย เช่น :
   *       {
   *         "name" : "1",
   *         "createdBy" : "1",
   *         "updatedBy" : "-1"
   *       }
   *
   */
  sort?: InputMaybe<Scalars['JSON']>
}

export type GetCategoryAttributeQuery = {
  /** ค้นหาด้วย AttributeId */
  attributeId?: InputMaybe<Scalars['String']>
  /** ค้นหาด้วย AttributeKey */
  attributeKey?: InputMaybe<Scalars['String']>
  /** ค้นหาด้วย CategoryAttribute ID */
  categoryAttributeId?: InputMaybe<Scalars['String']>
  /** ค้นหาด้วย categoryId */
  categoryId?: InputMaybe<Scalars['String']>
  /** ค้นหาด้วย categoryKey */
  categoryKey?: InputMaybe<Scalars['String']>
  /** ค้นหาด้วย status ถ้าส่ง null จะแสดงทั้งหมด */
  status?: InputMaybe<EnabledStatus>
}

export type GetCategoryAttributeResp = {
  /** id ของ Attribute */
  _id: Maybe<Scalars['String']>
  /** categoryKey */
  attribute: Maybe<GetAttributeResp>
  /** categoryKey */
  attributeKey: Maybe<Scalars['String']>
  /** categoryKey */
  category: Maybe<GetCategoryResp>
  /** categoryKey */
  categoryKey: Maybe<Scalars['String']>
  /** สร้างเมื่อ  */
  createdAt: Maybe<Scalars['DateTime']>
  /** สร้างโดย userID */
  createdBy: Maybe<Scalars['String']>
  /** status ของ Attribute */
  status: Maybe<EnabledStatus>
  /** แก้ไขเมื่อ */
  updatedAt: Maybe<Scalars['DateTime']>
  /** แก้ไขโดย userID */
  updatedBy: Maybe<Scalars['String']>
}

export type GetCategoryAttributeRespon = {
  /** โค้ดของการตอบสนอง */
  code: Maybe<Scalars['String']>
  /** ข้อความตอบสนอง */
  message: Maybe<Scalars['String']>
  /** data */
  payload: Maybe<GetCategoryAttributeResp>
}

export type GetCategoryAttributeResponse = {
  /** โค้ดของการตอบสนอง */
  code: Maybe<Scalars['String']>
  /** ข้อความตอบสนอง */
  message: Maybe<Scalars['String']>
  /** pagination data */
  pagination: Maybe<PaginatedType>
  /** array data */
  payload: Maybe<Array<GetCategoryAttributeResp>>
}

export type GetCategoryInPut = {
  pagination?: InputMaybe<PaginatedFindType>
  query?: InputMaybe<GetCategoryQuery>
  /**
   *
   *       ลำดับการเรียงข้อมูล โดยจะตามลำดับ และเลขคือประเภทการเรียง โดยที่1จะเป็นน้อยไปมาก และ-1เป็นมากไปน้อย เช่น :
   *       {
   *         "name" : "1",
   *         "createdBy" : "1",
   *         "updatedBy" : "-1"
   *       }
   *
   */
  sort?: InputMaybe<Scalars['JSON']>
}

export type GetCategoryQuery = {
  /** ค้นหาด้วย categoryId */
  categoryId?: InputMaybe<Scalars['String']>
  /** ค้นหาด้วย categoryKey */
  categoryKey?: InputMaybe<Scalars['String']>
  /** ค้นหาด้วย descriptions แบบ Regex */
  descriptions?: InputMaybe<Scalars['String']>
  /** ค้นหาด้วย name แบบ Regex */
  name?: InputMaybe<Scalars['String']>
  /** ค้นหาด้วย path ถ้าจะค้นหาตัวที่ไม่มีแม่ ให้ใส่ NONE */
  path?: InputMaybe<Scalars['String']>
  /**
   * ค้นหาด้วย path แบบ Regex ซึ้ง
   *     For queries from the root Books sub-tree (e.g. /^,Books,/ or /^,Books,Programming,/), an index on the path field improves the query performance significantly.
   */
  pathRegex?: InputMaybe<Scalars['String']>
  /** ค้นหาด้วย status ถ้าส่ง null จะแสดงทั้งหมด */
  status?: InputMaybe<EnabledStatus>
}

export type GetCategoryResp = {
  /** id ของ Category */
  _id: Maybe<Scalars['String']>
  /** categoryKey ของ Category ซึ้งจะแสดงผล และค้นหา และจะไม่ซ้ำ */
  categoryKey: Maybe<Scalars['String']>
  /** สร้างเมื่อ  */
  createdAt: Maybe<Scalars['DateTime']>
  /** สร้างโดย userID */
  createdBy: Maybe<Scalars['String']>
  /** descriptions ของ Category */
  descriptions: Maybe<Scalars['String']>
  /** ชื่อ ของ Category */
  name: Maybe<Scalars['String']>
  /** ต้นทางของ Category */
  parentCategory: Maybe<GetCategoryResp>
  /** path ซึ้งจะระบุต้นทางของ Category */
  path: Maybe<Scalars['String']>
  /** status ของ Category */
  status: Maybe<EnabledStatus>
  /** แก้ไขเมื่อ */
  updatedAt: Maybe<Scalars['DateTime']>
  /** แก้ไขโดย userID */
  updatedBy: Maybe<Scalars['String']>
}

export type GetCategoryRespon = {
  /** โค้ดของการตอบสนอง */
  code: Maybe<Scalars['String']>
  /** ข้อความตอบสนอง */
  message: Maybe<Scalars['String']>
  /** data */
  payload: Maybe<GetCategoryResp>
}

export type GetCategoryResponse = {
  /** โค้ดของการตอบสนอง */
  code: Maybe<Scalars['String']>
  /** ข้อความตอบสนอง */
  message: Maybe<Scalars['String']>
  /** pagination data */
  pagination: Maybe<PaginatedType>
  /** array data */
  payload: Maybe<Array<GetCategoryResp>>
}

export type GetInventory = {
  _id: Maybe<Scalars['String']>
  /** id ของสินค้า */
  productId: Maybe<Scalars['String']>
  /** จำนวนสต๊อก */
  quantity: Maybe<Scalars['Float']>
}

export type GetInventoryResponse = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<GetInventory>
}

export type GetProductAttribute = {
  name?: InputMaybe<MultilangInput>
  type?: InputMaybe<Array<Atrribute_Type>>
}

export type GetProductAttributeInput = {
  /** สำหรับกรณีที่ใช้เงื่อนไขการค้นหาเป็น and */
  filter?: InputMaybe<GetProductAttribute>
  pagination?: InputMaybe<Input_Pagination>
  search?: InputMaybe<GetProductAttribute>
  sort?: InputMaybe<GetProductAttributeSort>
}

export type GetProductAttributeSort = {
  createdAt?: InputMaybe<Sort_Order>
}

export type GetProductCategoryLevel = {
  /** คีย์ของภาษาที่ต้องการค้นหาเช่น en, th */
  keyLang: Scalars['String']
  /** ชื่อหมวดหมู่ที่ต้องการค้นหา โดยใช้ keyLang เป็นตัวระบุว่าจะค้นหาในภาษาไหน */
  name: Scalars['String']
}

export type GetProductCategoryLevelInput = {
  /** สำหรับกรณีที่ใช้เงื่อนไขการค้นหาเป็น and */
  filter?: InputMaybe<GetProductCategoryLevel>
  pagination?: InputMaybe<Input_Pagination>
  search?: InputMaybe<GetProductCategoryLevel>
  sort?: InputMaybe<GetProductCategoryLevelSortInput>
}

export type GetProductCategoryLevelSortInput = {
  createdAt?: InputMaybe<Sort_Order>
}

export type GetProductSortInput = {
  createdAt?: InputMaybe<Sort_Order>
  price?: InputMaybe<Sort_Order>
}

export type GetSku = {
  skuMap: Maybe<Scalars['JSON']>
  tierVariation: Maybe<Array<Maybe<TierVariation>>>
}

export type GetSkuById = {
  customerSellingPrice: Maybe<Scalars['Float']>
  factoryPrice: Maybe<Scalars['Float']>
  productId: Maybe<Scalars['String']>
  pvs: Maybe<Scalars['String']>
  qty: Maybe<Scalars['Float']>
  shopSellingPrice: Maybe<Scalars['Float']>
  skuVariants: Maybe<Array<Maybe<SkuVariant>>>
}

export type GetSkuByIdResponse = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<GetSkuById>
}

export type GetSkuResponse = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<GetSku>
}

export type Hooray_Server_Service_Info = {
  featureKeys: Maybe<Array<Maybe<Hooray_Server_Service_Info_Feature>>>
  graphqlEndpointAdmin: Maybe<Scalars['String']>
  graphqlEndpointClient: Maybe<Scalars['String']>
  graphqlEndpointSuperAdmin: Maybe<Scalars['String']>
  logo: Maybe<Scalars['String']>
  methodUpdate: Maybe<Scalars['String']>
  name: Maybe<Scalars['String']>
  permissions: Maybe<Array<Maybe<Hooray_Server_Service_Info_Permission>>>
  restEndpointAdmin: Maybe<Scalars['String']>
  restEndpointClient: Maybe<Scalars['String']>
  restEndpointSuperAdmin: Maybe<Scalars['String']>
  serviceKey: Maybe<Scalars['String']>
}

export type Hooray_Server_Service_Info_Feature = {
  description: Maybe<Scalars['String']>
  enable: Maybe<Scalars['Boolean']>
  key: Maybe<Scalars['String']>
}

export type Hooray_Server_Service_Info_Permission = {
  code: Maybe<Array<Maybe<Scalars['String']>>>
  defaultCode: Maybe<Scalars['String']>
  description: Maybe<Scalars['String']>
  permissionName: Maybe<Scalars['String']>
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

export type Image = {
  /** url ของรูปภาพ */
  fileKey: Scalars['String']
  /** ตำแหน่งการจัดเรียงรูปภาพ แนะนำให้เริ่มท่ี่ 1 */
  index: Scalars['Int']
}

export type ImageResp = {
  /** url รูป */
  fileKey: Maybe<Scalars['String']>
  /** ตำแหน่งการจัดวางภาพ */
  index: Maybe<Scalars['Int']>
}

export type ImageUpdate = {
  /** url ของรูปภาพ */
  fileKey: Scalars['String']
  /** ตำแหน่งการจัดเรียงรูปภาพ แนะนำให้เริ่มท่ี่ 1 */
  index: Scalars['Int']
}

export type LeadPaginateResponse = {
  /** โค้ดของการตอบสนอง */
  code: Maybe<Scalars['String']>
  /** ข้อความตอบสนอง */
  message: Maybe<Scalars['String']>
  pagination: Maybe<PaginatedType>
  payload: Maybe<Array<LeadResp>>
}

export type LeadResp = {
  _id: Maybe<Scalars['ID']>
  citizenId: Maybe<Scalars['String']>
  /** วันที่ลงทะเบียน */
  createdAt: Scalars['DateTime']
  createdAtBy: Maybe<UserResp>
  dataSource: Maybe<Scalars['String']>
  email: Maybe<Array<EmailResp>>
  firstName: Maybe<Scalars['String']>
  image: Maybe<Scalars['String']>
  lastName: Maybe<Scalars['String']>
  leadType: Maybe<Scalars['String']>
  organizationName: Maybe<Scalars['String']>
  passport: Maybe<Scalars['String']>
  phone: Maybe<Array<PhoneResp>>
  resourceOwner: Maybe<Scalars['String']>
  status: Maybe<Scalars['String']>
  /** วันที่อัพเดตข้อมูลล่าสุด */
  updatedAt: Scalars['DateTime']
  updatedAtBy: Maybe<UserResp>
}

export type LeadResponse = {
  /** โค้ดของการตอบสนอง */
  code: Maybe<Scalars['String']>
  /** ข้อความตอบสนอง */
  message: Maybe<Scalars['String']>
  payload: Maybe<LeadResp>
}

export enum Manage_Product_Action {
  CloseSales = 'CLOSE_SALES',
  OpenSales = 'OPEN_SALES',
}

export type ManageProductStatusInput = {
  /**
   *
   *         action ในการเปลี่ยนสถานะสินค้า
   *
   */
  action: Manage_Product_Action
  /** id ของสินค้าที่ต้องการจะอัพเดตสถานะ */
  productId: Scalars['String']
}

export type MultilangInput = {
  /** key of language ex: 'th', 'en'  */
  keyLang?: InputMaybe<Scalars['String']>
  value: Scalars['String']
}

export type Mutation = {
  _dummy: Maybe<Scalars['String']>
  addAppSystemAdmin: Maybe<Type_Profile>
  /** เพิ่ม attribute(property) ให้ category */
  addAttributeToProductCategory: ProductCategoryResponse
  addContactEmail: Maybe<Type_App>
  addEmailGlobal: Maybe<Type_Ok>
  addGateway: Maybe<Type_Gateway_List>
  /** addCategoryAttribute  */
  addLabelCategoryAttribute: GetCategoryAttributeResponse
  addOrgAdmin: Maybe<Type_Profile>
  addService: Maybe<Type_Service>
  addServiceToApp: Maybe<Type_App_Service>
  addSystemAdmin: Maybe<Type_Profile>
  cancelNotificationMessage: Maybe<Type_Notification_Message>
  changeOrgApprovalAttributeStatus: Maybe<Type_Organization_Approval_Response>
  changeOrgStatus: Maybe<Type_Organization>
  changePassword: Maybe<Type_Profile>
  changeResourceAdminRoleApprovalAttributeStatus: Maybe<Type_Role_Aproval_Attribute>
  changeResourceAdminRoleStatus: Maybe<Type_Role_Aproval_Attribute>
  changeResourceOwnerRoleApprovalAttributeStatus: Maybe<Type_Role_Aproval_Attribute>
  changeResourceOwnerRoleStatus: Maybe<Type_Role_Aproval_Attribute>
  changeSystemAdminRoleApprovalAttributeStatus: Maybe<Type_Role_Aproval_Attribute>
  changeSystemAdminRoleStatus: Maybe<Type_Role_Aproval_Attribute>
  checkVerifyEmailOrg: Maybe<Type_Check_Verify_Email>
  confirmOrgAdmin: Maybe<Type_Profile>
  confirmPhoneNumberUser: Maybe<Type_Json>
  confirmSystemAdmin: Maybe<Type_Reset_Password_Email>
  createAccount: AccountResponse
  /** สร้างที่อยู่แต่ละประเภท */
  createAddress: AddressInputResponse
  createApp: Maybe<Type_App>
  createCategory: Maybe<Type_Category>
  createContact: ContactResponse
  createCredential: Maybe<Type_Credential>
  createCustomMenu: Maybe<Type_Custom_Menu>
  /** สร้าง order  */
  createLabelAttribute: GetAttributeRespon
  /** สร้าง order  */
  createLabelCategory: GetCategoryRespon
  /** สร้าง CategoryAttribute  */
  createLabelCategoryAttribute: GetCategoryAttributeRespon
  createLead: LeadResponse
  createLeadNonAuthen: LeadResponse
  createLeadToUser: LeadResponse
  createLeadToUserNonAuthen: LeadResponse
  createLocaleText: Maybe<Type_Locale_Text>
  createLocaleTextList: Maybe<Type_Locale_Text_List>
  createMasterData: Maybe<Type_Master_Data>
  createNotification: Maybe<Type_Notification_List>
  createNotificationMessage: Maybe<Type_Notification_Message_Count_Payload>
  createNotificationMessageForService: Maybe<Type_Notification_Message_Count_Payload>
  createNotificationTemplate: Maybe<Type_Notification_Template>
  createOrganization: Maybe<Type_Organization>
  createOrganizationLabel: Maybe<Type_Organization_Label>
  createOrganizationType: Maybe<Type_Organization_Type>
  /** สร้างสินค้า */
  createProduct: CreateResponse
  /** สร้างคุณลักษณะสินค้า */
  createProductAttribute: CreateProductAttributeResponse
  /** สร้างหมวดหมู่สินค้า */
  createProductCategory: ProductCategoryResponse
  createRole: Maybe<Type_App_Role>
  createRunningNumber: Maybe<Type_Running_Number>
  createVaraint: CreateVaraintResponse
  createVaraintOptions: CreateVaraintResponse
  /** ลบที่อยู่แต่ละประเภท */
  deleteAddress: AddressInputResponse
  deleteApp: Maybe<Type_App>
  deleteCategory: Maybe<Type_Category>
  deleteContact: ContactResponse
  deleteContactEmail: Maybe<Type_App>
  deleteCredential: Maybe<Type_Credential>
  deleteCustomMenu: Maybe<Type_Custom_Menu_List>
  deleteDataSecurity: Maybe<Type_Role_Data_Security_List>
  deleteEmailContact: Maybe<Type_Organization>
  deleteGateway: Maybe<Type_Gateway_List>
  deleteInvite: Maybe<Type_Invite>
  /** สร้าง order  */
  deleteLabelAttribute: GetAttributeRespon
  /** สร้าง order  */
  deleteLabelCategory: GetCategoryRespon
  /** deleteAttribute  */
  deleteLabelCategoryAttribute: GetCategoryAttributeRespon
  deleteLead: LeadResponse
  deleteLocaleText: Maybe<Type_Locale_Text>
  deleteMasterData: Maybe<Type_Master_Data>
  deleteMyUser: Maybe<Type_Profile>
  deleteNotificationTemplate: Maybe<Type_Notification_Template>
  deleteOrgAdmin: Maybe<Type_Profile>
  deleteOrganization: Maybe<Type_Organization>
  deleteOrganizationLabel: Maybe<Type_Organization_Label>
  deleteOrganizationType: Maybe<Type_Organization_Type>
  deletePermission: Maybe<Type_Role_Permission_List>
  /** ลบสินค้า */
  deleteProduct: CreateResponse
  /** ลบคุณลักษณะสินค้า และลบออกจากหมวดสินค้าทั้งหมดที่มีคุณลักษณะนี้ */
  deleteProductAttribute: CreateProductAttributeResponse
  /** ลบหมวดหมู่สินค้า */
  deleteProductCategory: DeleteProductCategoryResponse
  deleteResourceAdmin: Maybe<Type_Profile>
  deleteResourceAdminPermission: Maybe<Type_Role_Permission_List>
  deleteResourceOwnerPermission: Maybe<Type_Role_Permission_List>
  deleteRole: Maybe<Type_App_Role>
  deleteRunningNumber: Maybe<Type_Running_Number>
  deleteService: Maybe<Type_Service>
  deleteSystemAdmin: Maybe<Type_Profile>
  deleteSystemAdminPermission: Maybe<Type_Role_Permission_List>
  deleteTheme: Maybe<Type_Theme_Response>
  deleteUserOrganization: Maybe<Type_Invite>
  deleteUserOrganizationByUserId: Maybe<Type_Invite>
  deleteVersionControl: Maybe<Type_Version_Control>
  disableServiceFeature: Maybe<Type_Feature_List>
  enableServiceFeature: Maybe<Type_Feature_List>
  generateAuthCode: Maybe<Type_Login>
  generateRunningNumber: Maybe<Type_Generate_Running_Number>
  generateSku: CreatedSkuResponse
  getAppAccessToken: Maybe<Type_App_Accees_Token>
  getOrgAccessToken: Maybe<Type_Org_Accees_Token>
  getS3GetObjectSignedUrl: Maybe<Type_S3_Signed_Url>
  getS3PutObjectSignedUrl: Maybe<Type_S3_Signed_Url>
  getTokenAuthCode: Maybe<Type_Login>
  inviteOrganizationCode: Maybe<Type_Organization>
  inviteUserOrganization: Maybe<Type_Invite>
  kafkaCreateTopics: Maybe<Type_Json>
  kafkaTopicsAddData: Maybe<Type_Json>
  logOutUser: Maybe<Type_Logout>
  loginApple: Maybe<Type_Login>
  loginEmail: Maybe<Type_Login>
  loginFacebook: Maybe<Type_Login>
  loginGoogle: Maybe<Type_Login>
  loginLine: Maybe<Type_Login>
  loginPhoneNumber: Maybe<Type_Otp_Token_Payload>
  loginPhoneNumberConfirm: Maybe<Type_Login>
  loginPhoneNumberConfirmOrg: Maybe<Type_Login>
  loginUsername: Maybe<Type_Login>
  loginWithAuthCode: Maybe<Type_Auth_Code>
  /** จัดการสถานะสินค้า ดราฟ, ลงขาย, แสดง-ไม่แสดง */
  manageProductStatus: CreateResponse
  pinConfirm: Maybe<Type_Ok>
  preCreateProduct: CreateResponse
  qualifyLead: LeadResponse
  readAllNotification: Maybe<Type_Notification_List>
  readNotification: Maybe<Type_Notification_List>
  refreshAccessToken: Maybe<Type_Refresh_Access_Token>
  refreshOrgAccessToken: Maybe<Type_Org_Accees_Token>
  registerEmail: Maybe<Type_Email_Register>
  registerOrgAdmin: Maybe<Type_Email_Register>
  registerPhoneNumber: Maybe<Type_Email_Register>
  registerUsername: Maybe<Type_Username_Register>
  /** ลบคุณลักษณะออกจากหมวดหมู่สินค้า */
  removeAttributeFromProductCategory: ProductCategoryResponse
  removeConfig: Maybe<Type_Remove_Config>
  /** addCategoryAttribute  */
  removeLabelCategoryAttribute: GetCategoryAttributeResponse
  removePermissionRole: Maybe<Type_Role_Permission_List>
  removeProductVariant: CreateVaraintResponse
  removeServiceFromApp: Maybe<Type_App_Service>
  requestOtp: Maybe<Type_Json>
  resendRegisterEmail: Maybe<Type_Email_Register>
  resetPasswordEmail: Maybe<Type_Reset_Password_Email>
  resetPasswordOtp: Maybe<Type_Reset_Password_Email>
  s3UploadFile: Maybe<Type_S3_Signed_Url>
  saveImageToVariant: VariantListResponse
  sendContactMail: Maybe<Type_Ok>
  sendToVerifyEmailOrg: Maybe<Type_Ok>
  singleUpload: File
  syncAllUserData: Maybe<Type_Login>
  syncApp: Maybe<Type_App_Service>
  syncAppToService: Maybe<Type_Sync_App>
  syncOrganization: Maybe<Type_Sync_Organization>
  syncService: Maybe<Type_Sync_Service_Info>
  updateAccount: AccountResponse
  /** แก้ไขที่อยู่แต่ละประเภท */
  updateAddress: AddressInputResponse
  updateApp: Maybe<Type_App>
  updateAppAttribute: Maybe<Type_App>
  /** updateAttribute */
  updateAttribute: GetAttributeRespon
  updateCategory: Maybe<Type_Category>
  updateConfig: Maybe<Type_Config>
  updateContact: ContactResponse
  updateCredential: Maybe<Type_Credential>
  updateCredentialKey: Maybe<Type_Credential>
  updateCustomMenu: Maybe<Type_Custom_Menu>
  updateDataSecurity: Maybe<Type_Role_Data_Security_List>
  updateGateway: Maybe<Type_Gateway_List>
  /** อัพเดต stock สินค้า, varaint และ สถานะของ varaint */
  updateInventory: UpdateInventoryResponse
  /** สร้าง order  */
  updateLabelCategory: GetCategoryRespon
  /** update CategoryAttribute  */
  updateLabelCategoryAttribute: GetCategoryAttributeRespon
  updateLead: LeadResponse
  updateLocaleText: Maybe<Type_Locale_Text>
  updateMasterData: Maybe<Type_Master_Data>
  updateMyProfile: Maybe<Type_Profile>
  updateMyRoleApprovalAttribute: Maybe<Type_Role_Aproval_Attribute>
  updateNotificationTemplate: Maybe<Type_Notification_Template>
  updateOAuth: Maybe<Type_O_Auth>
  updateOrgAdminRole: Maybe<Type_Profile>
  updateOrgApprovalAttribute: Maybe<Type_Organization_Approval_Response>
  updateOrgKey: Maybe<Type_Organization>
  updateOrgStatus: Maybe<Type_Organization>
  updateOrganization: Maybe<Type_Organization>
  updateOrganizationLabel: Maybe<Type_Organization_Label>
  updateOrganizationType: Maybe<Type_Organization_Type>
  updatePermission: Maybe<Type_Role_Permission_List>
  updatePermissionRole: Maybe<Type_Role_Permission_List>
  /** แก้ไข/อัปเดตข้อมูลสินค้า */
  updateProduct: UpdateResponse
  /** อัพเดทคุณลักษณะสินค้า */
  updateProductAttribute: CreateProductAttributeResponse
  /** สำหรับการเปลี่ยน relation ระหว่าง parent กับ child ของหมวดหมู่, อัพเดตชื่อหมวดหมู่ */
  updateProductCategory: ProductCategoryResponse
  updateProductVariant: CreateVaraintResponse
  updateResourceAdmin: Maybe<Type_Profile>
  updateResourceAdminPermission: Maybe<Type_Role_Permission_List>
  updateResourceOwnerPermission: Maybe<Type_Role_Permission_List>
  updateResourceOwnerProfile: Maybe<Type_Profile>
  updateRole: Maybe<Type_App_Role>
  updateSecretKey: Maybe<Type_Credential>
  updateSystemAdminPermission: Maybe<Type_Role_Permission_List>
  updateSystemAdminProfile: Maybe<Type_Profile>
  updateTheme: Maybe<Type_Theme_Response>
  updateVersionControl: Maybe<Type_Version_Control>
  verifyEmail: Maybe<Type_Email_Register>
  verifyEmailGlobal: Maybe<Type_Ok>
  verifyEmailOrganization: Maybe<Type_Organization>
  verifyInviteOrganization: Maybe<Type_Invite>
  verifyOtp: Maybe<Type_Json>
  verifyPasswordEmail: Maybe<Type_Reset_Password_Email>
  verifyPhoneNumberUser: Maybe<Type_Json>
}

export type MutationAddAppSystemAdminArgs = {
  appKey: Scalars['String']
  input?: InputMaybe<Input_Email_Register_Input>
}

export type MutationAddAttributeToProductCategoryArgs = {
  attributeIds: Array<Scalars['String']>
  categoryKey: Scalars['String']
}

export type MutationAddContactEmailArgs = {
  appKey: Scalars['String']
  emailList?: InputMaybe<Array<Scalars['String']>>
}

export type MutationAddEmailGlobalArgs = {
  input?: InputMaybe<Input_Add_Email>
}

export type MutationAddGatewayArgs = {
  input: Input_Gateway
}

export type MutationAddLabelCategoryAttributeArgs = {
  input: AddCategoryAttributeInput
}

export type MutationAddOrgAdminArgs = {
  email: Scalars['String']
  orgKey: Scalars['String']
  roleList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type MutationAddServiceArgs = {
  input?: InputMaybe<Input_Create_Service>
}

export type MutationAddServiceToAppArgs = {
  serviceKey: Scalars['String']
}

export type MutationAddSystemAdminArgs = {
  input?: InputMaybe<Input_Admin>
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

export type MutationChangeSystemAdminRoleApprovalAttributeStatusArgs = {
  input?: InputMaybe<Input_Role_Approval_Attribute_Status>
}

export type MutationChangeSystemAdminRoleStatusArgs = {
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

export type MutationConfirmSystemAdminArgs = {
  input?: InputMaybe<Input_Verify_Password_System_Admin_Email>
}

export type MutationCreateAccountArgs = {
  input: CreateAccountInput
}

export type MutationCreateAddressArgs = {
  input: CreateAddressInput
}

export type MutationCreateAppArgs = {
  input?: InputMaybe<Input_App_Form>
}

export type MutationCreateCategoryArgs = {
  input?: InputMaybe<Input_Category>
}

export type MutationCreateContactArgs = {
  input: CreateContactInput
}

export type MutationCreateCredentialArgs = {
  credentialInput?: InputMaybe<Input_Credential_Form>
}

export type MutationCreateCustomMenuArgs = {
  input?: InputMaybe<Input_Schema_Custom_Menu>
}

export type MutationCreateLabelAttributeArgs = {
  input: CreateAttributeInput
}

export type MutationCreateLabelCategoryArgs = {
  input: CreateCategoryInput
}

export type MutationCreateLabelCategoryAttributeArgs = {
  input: CreateCategoryAttributeInput
}

export type MutationCreateLeadArgs = {
  input: CreateLeadInput
}

export type MutationCreateLeadNonAuthenArgs = {
  input: CreateLeadInput
}

export type MutationCreateLeadToUserArgs = {
  input: CreateLeadInput
}

export type MutationCreateLeadToUserNonAuthenArgs = {
  input: CreateLeadInput
}

export type MutationCreateLocaleTextArgs = {
  input?: InputMaybe<Input_Locale_Text_Form>
}

export type MutationCreateLocaleTextListArgs = {
  inputList: Array<Input_Locale_Text_Form>
}

export type MutationCreateMasterDataArgs = {
  input?: InputMaybe<Input_Master_Data>
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

export type MutationCreateProductArgs = {
  input: CreateProductInput
  productId: Scalars['String']
}

export type MutationCreateProductAttributeArgs = {
  input: CreateProductAttributeInput
}

export type MutationCreateProductCategoryArgs = {
  input: CreateProductCategoryInput
}

export type MutationCreateRoleArgs = {
  roleInput?: InputMaybe<Input_Role_From>
}

export type MutationCreateRunningNumberArgs = {
  input?: InputMaybe<Input_Running_Number>
}

export type MutationCreateVaraintArgs = {
  input: CreateVaraintV2Input
}

export type MutationCreateVaraintOptionsArgs = {
  input: CreateVaraintOptionInput
  variantId: Scalars['String']
}

export type MutationDeleteAddressArgs = {
  addressId: Scalars['String']
}

export type MutationDeleteAppArgs = {
  appKey: Scalars['String']
}

export type MutationDeleteCategoryArgs = {
  categoryId: Scalars['String']
}

export type MutationDeleteContactArgs = {
  contactId: Scalars['String']
}

export type MutationDeleteContactEmailArgs = {
  appKey: Scalars['String']
  emailList?: InputMaybe<Array<Scalars['String']>>
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

export type MutationDeleteLabelAttributeArgs = {
  id: Scalars['String']
}

export type MutationDeleteLabelCategoryArgs = {
  id: Scalars['String']
}

export type MutationDeleteLabelCategoryAttributeArgs = {
  id: Scalars['String']
}

export type MutationDeleteLeadArgs = {
  leadId: Scalars['String']
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

export type MutationDeleteProductArgs = {
  productId: Scalars['String']
}

export type MutationDeleteProductAttributeArgs = {
  _id: Scalars['String']
}

export type MutationDeleteProductCategoryArgs = {
  categoryKey: Scalars['String']
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

export type MutationDeleteServiceArgs = {
  serviceKey: Scalars['String']
}

export type MutationDeleteSystemAdminArgs = {
  userId: Scalars['ID']
}

export type MutationDeleteSystemAdminPermissionArgs = {
  appKey: Scalars['String']
  permissionKeyList?: InputMaybe<Array<Scalars['String']>>
  roleKey: Scalars['String']
}

export type MutationDeleteThemeArgs = {
  themeKey: Scalars['String']
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

export type MutationGenerateSkuArgs = {
  input: Array<GenerateSku>
  productId: Scalars['String']
}

export type MutationGetAppAccessTokenArgs = {
  appKey: Scalars['String']
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

export type MutationKafkaCreateTopicsArgs = {
  numPartitions: Scalars['Number']
  replicationFactor: Scalars['Number']
  topicName: Scalars['String']
}

export type MutationKafkaTopicsAddDataArgs = {
  data?: InputMaybe<Scalars['JSON']>
  serviceList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  topicName: Scalars['String']
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

export type MutationManageProductStatusArgs = {
  input: ManageProductStatusInput
}

export type MutationPinConfirmArgs = {
  pin: Scalars['String']
}

export type MutationQualifyLeadArgs = {
  leadId: Scalars['String']
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

export type MutationRemoveAttributeFromProductCategoryArgs = {
  attributeIds: Array<Scalars['String']>
  categoryKey: Scalars['String']
}

export type MutationRemoveConfigArgs = {
  configKey: Scalars['String']
}

export type MutationRemoveLabelCategoryAttributeArgs = {
  input: RemoveCategoryAttributeInput
}

export type MutationRemovePermissionRoleArgs = {
  appKey: Scalars['String']
  permissionKeyList?: InputMaybe<Array<Scalars['String']>>
  roleKey: Scalars['String']
}

export type MutationRemoveProductVariantArgs = {
  variantId: Scalars['String']
}

export type MutationRemoveServiceFromAppArgs = {
  appKey: Scalars['String']
  serviceKey: Scalars['String']
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

export type MutationSaveImageToVariantArgs = {
  input: Array<AddImagesToVaraintsInput>
  productId: Scalars['String']
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

export type MutationSyncAppToServiceArgs = {
  appKeyList?: InputMaybe<Array<Scalars['String']>>
}

export type MutationSyncOrganizationArgs = {
  orgKeyList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type MutationSyncServiceArgs = {
  serviceKeyList?: InputMaybe<Array<Scalars['String']>>
}

export type MutationUpdateAccountArgs = {
  accountId: Scalars['String']
  input: CreateAccountInput
}

export type MutationUpdateAddressArgs = {
  addressId: Scalars['String']
  input: CreateAddressInput
}

export type MutationUpdateAppArgs = {
  appInput?: InputMaybe<Input_Update_App>
  appKey: Scalars['String']
}

export type MutationUpdateAppAttributeArgs = {
  attributeInput: Scalars['JSON']
}

export type MutationUpdateAttributeArgs = {
  id: Scalars['String']
  input: CreateAttributeInput
}

export type MutationUpdateCategoryArgs = {
  categoryId: Scalars['String']
  input?: InputMaybe<Input_Category>
}

export type MutationUpdateConfigArgs = {
  input?: InputMaybe<Input_Config_Form>
}

export type MutationUpdateContactArgs = {
  contactId: Scalars['String']
  input: CreateContactInput
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

export type MutationUpdateInventoryArgs = {
  inputs: Array<UpdateInventoryInput>
}

export type MutationUpdateLabelCategoryArgs = {
  id: Scalars['String']
  input: CreateCategoryInput
}

export type MutationUpdateLabelCategoryAttributeArgs = {
  id: Scalars['String']
  input: CreateCategoryAttributeInput
}

export type MutationUpdateLeadArgs = {
  input: CreateLeadInput
  leadId: Scalars['String']
}

export type MutationUpdateLocaleTextArgs = {
  dataInput?: InputMaybe<Input_Locale_Text_Form>
  dataKey: Scalars['String']
  orgKey?: InputMaybe<Scalars['String']>
}

export type MutationUpdateMasterDataArgs = {
  dataInput?: InputMaybe<Input_Master_Data>
  dataKey: Scalars['String']
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

export type MutationUpdatePermissionRoleArgs = {
  appKey: Scalars['String']
  permissionList?: InputMaybe<Array<Input_Permission_Form>>
  roleKey: Scalars['String']
}

export type MutationUpdateProductArgs = {
  input: UpdateProductInput
  productId: Scalars['String']
}

export type MutationUpdateProductAttributeArgs = {
  _id: Scalars['String']
  input: CreateProductAttributeInput
}

export type MutationUpdateProductCategoryArgs = {
  categoryKey: Scalars['String']
  input: UpdateProductCategory
}

export type MutationUpdateProductVariantArgs = {
  input: UpdateVaraintInput_
  variantId: Scalars['String']
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

export type MutationUpdateSystemAdminPermissionArgs = {
  appKey: Scalars['String']
  permissionList?: InputMaybe<Array<InputMaybe<Input_Permission_Form>>>
  roleKey: Scalars['String']
}

export type MutationUpdateSystemAdminProfileArgs = {
  input?: InputMaybe<Input_Update_Profile>
  systemAdminId: Scalars['ID']
}

export type MutationUpdateThemeArgs = {
  input?: InputMaybe<Input_Theme_Form>
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
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<Type_Pagination>
  payload: Maybe<Array<Maybe<Type_Organization_Response>>>
}

export type OmitObjectType = {
  _id: Maybe<Scalars['String']>
  /** คุณลักษณะสินค้า */
  attributes: Maybe<Array<ProductAtrribute>>
  category: Maybe<Category>
  /** สถานะการแสดงผล รูปภาพอธิบายสินค้า */
  descImageStatus: Maybe<Toggle_Creat_Product_Status>
  /** รูปภาพอธิบายสินค้า */
  descImages: Maybe<Array<ImageResp>>
  /** คำอธิบายสินค้า อิงภาษาตาม locale ใน header */
  description: Maybe<Scalars['String']>
  /** จะถูกอนุมัติจาก admin */
  isApprove: Maybe<Scalars['Boolean']>
  /** ชื่อสินค้า อิงภาษาตาม locale ใน header */
  name: Maybe<Scalars['String']>
  orgAgentKey: Maybe<Scalars['String']>
  orgKey: Maybe<Scalars['String']>
  /** ราคาสินค้า */
  price: Maybe<PriceResp>
  priceRange: Maybe<PriceRange>
  /** รูปภาพสินค้า */
  productImages: Maybe<Array<ImageResp>>
  /** สถานะสินค้า */
  status: Maybe<Get_Product_Status>
}

export type Options = {
  /** ชื่อตัวเลือกคุณลักษณะสินค้า */
  name: Scalars['String']
}

export type OptionsResponse = {
  _id: Maybe<Scalars['String']>
  /** ชื่อตัวเลือกคุณลักษณะสินค้า */
  name: Scalars['String']
}

export type PaginatedFindType = {
  /** จำนวนสูงสุดที่ดึงใน 1 หน้า */
  limit?: InputMaybe<Scalars['Int']>
  /** หน้าที่เลือก */
  page?: InputMaybe<Scalars['Int']>
}

export type PaginatedType = {
  /** จำนวนสูงสุดที่ดึงใน 1 หน้า */
  limit: Scalars['Int']
  /** หมายเลขหน้า */
  page: Scalars['Int']
  /** จำนวน item ทั้งหมด */
  totalItems: Scalars['Int']
  /** จำนวนหน้าทั้งหมด */
  totalPages: Scalars['Int']
}

export type Phone = {
  value?: InputMaybe<Scalars['String']>
}

export type PhoneResp = {
  value: Scalars['String']
}

export type Price = {
  /** ราคาขายลูกค้า */
  customerSellingPrice: Scalars['Float']
  /** ราคาโรงงาน */
  factoryPrice: Scalars['Float']
  /** ราคาขายร้านค้า */
  shopSellingPrice: Scalars['Float']
}

export type PriceRange = {
  max: Maybe<PriceResp>
  min: Maybe<PriceResp>
}

export type PriceRangeCriteria = {
  max?: InputMaybe<Scalars['Float']>
  min?: InputMaybe<Scalars['Float']>
}

export type PriceResp = {
  /** ราคาขายลูกค้า */
  customerSellingPrice: Maybe<Scalars['Float']>
  /** ราคาโรงงาน */
  factoryPrice: Maybe<Scalars['Float']>
  /** ราคาขายร้านค้า */
  shopSellingPrice: Maybe<Scalars['Float']>
}

export type PriceUpdate = {
  /** ราคาขายลูกค้า */
  customerSellingPrice?: InputMaybe<Scalars['Float']>
  /** ราคาโรงงาน */
  factoryPrice?: InputMaybe<Scalars['Float']>
  /** ราคาขายร้านค้า */
  shopSellingPrice?: InputMaybe<Scalars['Float']>
}

export type ProductAtrribute = {
  /** id ของ productAttribute */
  productAttributeId: Maybe<Scalars['String']>
  /** ค่าของคุณลักษณะในกรณีืี่คุณลักษณะนั้นเป็นประเภท Text, Number */
  value: Maybe<Scalars['String']>
  /** id ของคุณลักษณะที่เลือกในกรณีืที่คุณลักษณะนั้นเป็นประเภท Checkbox, Radio หรือ Select */
  valueIds: Maybe<Array<Scalars['String']>>
}

export type ProductAttribute = {
  _id: Maybe<Scalars['String']>
  name: Maybe<Scalars['String']>
  options: Maybe<Array<Maybe<AttributeOptionsResponse>>>
  rules: Maybe<Array<Maybe<Scalars['String']>>>
  type: Maybe<Atrribute_Type>
}

export type ProductAttributeDto = {
  _id: Maybe<Scalars['String']>
  name: Maybe<Scalars['String']>
  options: Maybe<Array<Maybe<OptionsResponse>>>
  /** prefer regex for check input */
  rules: Maybe<Array<Maybe<Scalars['String']>>>
  type: Maybe<Atrribute_Type>
}

export type ProductAttributeKeyPair = {
  name: Maybe<Scalars['String']>
  value: Maybe<Scalars['String']>
}

export type ProductAttributeKeyPairResponse = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Array<Maybe<ProductAttributeKeyPair>>>
}

export type ProductAttributeResponse = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<Type_Pagination>
  payload: Maybe<Array<Maybe<ProductAttribute>>>
}

export type ProductCategory = {
  _id: Maybe<Scalars['String']>
  /** รายการไอดีของคุณลักษณะที่มีในหมวดหมู่นี้ */
  attributes: Maybe<Array<Maybe<Scalars['String']>>>
  /** ใช้ระบุว่าหมวดหมู่นี้มีหมวดหมู่ย่อยหรือไม่ */
  hasChildren: Maybe<Scalars['Boolean']>
  /** รหัสของหมวดหมู่ */
  key: Maybe<Scalars['String']>
  /** ชื่อหมวดหมู่สินค้าในแต่ละภาษาที่สร้างไว้ */
  name: Maybe<Scalars['String']>
  /** รหัสของหมวดหมู่หลัก ของหมวดหมู่นี้ */
  parent: Maybe<Scalars['String']>
  /** ลำดับขั้นของรหัสหมวดหมู่หลักตั้งแต่ระดับ root ของหมวดหมู่นี้ เรียงตาม index ใน array */
  tree: Maybe<Array<Maybe<Scalars['String']>>>
  treeFull: Maybe<Array<Maybe<SelfProductCategory>>>
}

export type ProductCategoryLevel = {
  _id: Maybe<Scalars['String']>
  hasChildren: Maybe<Scalars['Boolean']>
  /** รหัสของหมวดหมู่ */
  key: Maybe<Scalars['String']>
  /** ชื่อของหมวดหมู่ อิงภาษาตาม locale ที่ส่งมาใน headers */
  name: Maybe<Scalars['String']>
  /** รหัสของหมวดหมู่หลัก ของหมวดหมู่นี้ */
  parent: Maybe<Scalars['String']>
  /** ลำดับขั้นของรหัสหมวดหมู่หลักตั้งแต่ระดับ root ของหมวดหมู่นี้ เรียงตาม index ใน array */
  tree: Maybe<Array<Maybe<Scalars['String']>>>
  treeFull: Maybe<Array<Maybe<SelfProductCategory>>>
}

export type ProductCategoryLevelResponse = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<Type_Pagination>
  payload: Maybe<Array<Maybe<ProductCategoryLevel>>>
}

export type ProductCategoryResponse = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<ResponseClass>
}

export type ProductResp = {
  _id: Maybe<Scalars['String']>
  /** คุณลักษณะสินค้า */
  attributes: Maybe<Array<ProductAtrribute>>
  category: Maybe<Category>
  /** สถานะการแสดงผล รูปภาพอธิบายสินค้า */
  descImageStatus: Maybe<Toggle_Creat_Product_Status>
  /** รูปภาพอธิบายสินค้า */
  descImages: Maybe<Array<ImageResp>>
  /** คำอธิบายสินค้า อิงภาษาตาม locale ใน header */
  description: Maybe<Scalars['String']>
  /** จะถูกอนุมัติจาก admin */
  isApprove: Maybe<Scalars['Boolean']>
  /** ชื่อสินค้า อิงภาษาตาม locale ใน header */
  name: Maybe<Scalars['String']>
  orgAgentKey: Maybe<Scalars['String']>
  orgKey: Maybe<Scalars['String']>
  /** ราคาสินค้า */
  price: Maybe<PriceResp>
  priceRange: Maybe<PriceRange>
  /** รูปภาพสินค้า */
  productImages: Maybe<Array<ImageResp>>
  sku: Maybe<GetSku>
  /** สถานะสินค้า */
  status: Maybe<Get_Product_Status>
}

export type ProductRespAgent = {
  _id: Maybe<Scalars['String']>
  /** คุณลักษณะสินค้า */
  attributes: Maybe<Array<ProductAtrribute>>
  category: Maybe<Category>
  /** สถานะการแสดงผล รูปภาพอธิบายสินค้า */
  descImageStatus: Maybe<Toggle_Creat_Product_Status>
  /** รูปภาพอธิบายสินค้า */
  descImages: Maybe<Array<ImageResp>>
  /** คำอธิบายสินค้า อิงภาษาตาม locale ใน header */
  description: Maybe<Scalars['String']>
  /** จะถูกอนุมัติจาก admin */
  isApprove: Maybe<Scalars['Boolean']>
  /** ชื่อสินค้า อิงภาษาตาม locale ใน header */
  name: Maybe<Scalars['String']>
  orgKey: Maybe<Scalars['String']>
  /** ราคาสินค้า */
  price: Maybe<PriceResp>
  priceRange: Maybe<PriceRange>
  /** รูปภาพสินค้า */
  productImages: Maybe<Array<ImageResp>>
  /** สถานะสินค้า */
  status: Maybe<Get_Product_Status>
}

export type ProductRespon = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<ProductResp>
}

export type ProductResponse = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<Type_Pagination>
  payload: Maybe<Array<Maybe<OmitObjectType>>>
}

export type ProductResponseAgent = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<Type_Pagination>
  payload: Maybe<Array<Maybe<ProductRespAgent>>>
}

export type ProductRetailResp = {
  _id: Maybe<Scalars['String']>
  /** คุณลักษณะสินค้า */
  attributes: Maybe<Array<ProductAtrribute>>
  category: Maybe<Category>
  /** สถานะการแสดงผล รูปภาพอธิบายสินค้า */
  descImageStatus: Maybe<Toggle_Creat_Product_Status>
  /** รูปภาพอธิบายสินค้า */
  descImages: Maybe<Array<ImageResp>>
  /** คำอธิบายสินค้า อิงภาษาตาม locale ใน header */
  description: Maybe<Scalars['String']>
  /** จะถูกอนุมัติจาก admin */
  isApprove: Maybe<Scalars['Boolean']>
  /** ชื่อสินค้า อิงภาษาตาม locale ใน header */
  name: Maybe<Scalars['String']>
  orgAgentKey: Maybe<Scalars['String']>
  orgKey: Maybe<Scalars['String']>
  /** ราคาสินค้า */
  price: Maybe<PriceResp>
  priceRange: Maybe<PriceRange>
  /** รูปภาพสินค้า */
  productImages: Maybe<Array<ImageResp>>
  /** สถานะสินค้า */
  status: Maybe<Get_Product_Status>
}

export type ProductRetailResponse = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<Type_Pagination>
  payload: Maybe<Array<Maybe<ProductRetailResp>>>
}

export type Query = {
  _dummy: Maybe<Scalars['String']>
  /** ดูข้อมูลสินค้าสำหรับ Agent */
  agentGetProductList: ProductResponseAgent
  exportUser: Maybe<Type_Type_Role_Permission_User_List>
  /** ดูข้อมูลสินค้าสำหรับ Factory */
  factoryGetProductList: ProductResponse
  generateKey: Maybe<Type_Generate_Key_Response>
  generateOrgTokenRef: Maybe<Type_Org_Token_Ref>
  getAllOrganization: Maybe<Organization_List>
  getApp: Maybe<Type_App_List>
  getAppByCredential: Maybe<Get_App_Credential_Host>
  getAppByEmail: Maybe<Get_App_By_Email>
  getAppService: Maybe<Type_App_Service_List>
  getAppTheme: Maybe<Type_Theme_Response_List>
  getCategory: Maybe<Type_Category_List>
  getConfig: Maybe<Type_Config_List>
  getCredential: Maybe<Type_Credential_List>
  getCredentialByHost: Maybe<Get_App_Credential_Host>
  getCustomMenu: Maybe<Type_Custom_Menu_List>
  getDataAccount: AccountPaginateResponse
  /** เรียกข้อมูลที่อยู่ */
  getDataAddress: AddressPaginateResponse
  getDataContact: ContactPaginateResponse
  getDataLead: LeadPaginateResponse
  getDataRunningNumber: Maybe<Type_Running_Number_List>
  getDataSecurityRole: Maybe<Type_Data_Security_List>
  getGateway: Maybe<Type_Gateway>
  getHello: Maybe<Type_Hello>
  getInviteOrgRole: Maybe<Type_App_Role_List>
  getInviteRole: Maybe<Type_App_Role_List>
  getInviteUserOrganization: Maybe<Type_Invite_List>
  /** ดึงข้อมูล Attribute  */
  getLabelAttribute: GetAttributeResponse
  /** ดึงข้อมูล Category  */
  getLabelCategory: GetCategoryResponse
  /** ดึงข้อมูล Attribute  */
  getLabelCategoryAttribute: GetCategoryAttributeResponse
  /** ดึงข้อมูล Category  */
  getLabelParentCategory: GetCategoryResponse
  getLocaleText: Maybe<Type_Locale_Text_List>
  getLog: Maybe<Type_Log_List>
  getMasterData: Maybe<Type_Master_Data_List>
  getMemberOrganization: Maybe<Type_Profile_List>
  getMyAppRole: Maybe<Type_My_Org_Role>
  getMyNotification: Maybe<Type_Notification_List>
  getMyOrgRole: Maybe<Type_My_Org_Role>
  getMyOrganization: Maybe<Type_Organization>
  getMyPermission: Maybe<Type_Type_Role_Permission_User_List>
  getMyProfile: Maybe<Type_Profile>
  getMyRoleApprovalAttribute: Maybe<Type_Role_Aproval_Attribute>
  getNotificationMessage: Maybe<Type_Notification_Message_List>
  getNotificationTemplate: Maybe<Type_Notification_Template_List>
  getOAuth: Maybe<Type_O_Auth>
  getOrgAccessTokenWithRef: Maybe<Type_Org_Accees_Token>
  getOrgAdmin: Maybe<Type_Profile_List>
  getOrgAndUser: Maybe<Type_Profile_Org>
  getOrgApprovalAttribute: Maybe<Type_Organization_Approval_List>
  getOrgByPhoneNumber: Maybe<Type_Profile_Org>
  getOrgChildren: Maybe<Type_Org_Children>
  getOrganization: Maybe<Organization_List>
  getOrganizationApproval: Maybe<Organization_List>
  getOrganizationByCoordinates: Maybe<Organization_List>
  getOrganizationByName: Maybe<Organization_List>
  getOrganizationLabel: Maybe<Type_Organization_Label_List>
  getOrganizationType: Maybe<Type_Organization_Type_List>
  getPermissionRole: Maybe<Type_Permission_List>
  getProductAttribute: ProductAttributeKeyPairResponse
  getProductAttributeList: ProductAttributeResponse
  getProductAttributeOfCategory: CreateProductAttributeResponseList
  /** ดูข้อมูลสินค้าby id */
  getProductById: ProductRespon
  getProductCategory: ProductCategory
  /** ใช้ดึงข้อมูลหมวดหมู่สินค้าทั้งหมด ในแต่ละขั้นจาก ROOT Level ลงไป */
  getProductCategoryLevel: Maybe<ProductCategoryLevelResponse>
  /** ดึงข้อมูลสต๊อกสินค้า */
  getProductInventory: GetInventoryResponse
  getProductListHoldByOrg: ProductResponse
  getProductVariantList: VariantListResponse
  getProfile: Maybe<Type_Profile_List>
  getPublicAppConfig: Maybe<Type_Config_List>
  getPublicProfile: Maybe<Type_Profile_List>
  getResourceAdmin: Maybe<Type_Profile_List>
  getResourceAdminPermission: Maybe<Type_Type_Role_Permission_User_List>
  getResourceAdminRoleApprovalAttribute: Maybe<Type_Role_Aproval_Attribute_List>
  getResourceOwnerPermission: Maybe<Type_Type_Role_Permission_User_List>
  getResourceOwnerProfile: Maybe<Type_Profile_List>
  getResourceOwnerRoleApprovalAttribute: Maybe<Type_Role_Aproval_Attribute_List>
  getRole: Maybe<Type_App_Role_List>
  getRoleRegisable: Maybe<Type_App_Role_List>
  getS3GetObjectSignedUrl: Maybe<Type_S3_Signed_Url>
  getS3PutObjectSignedUrl: Maybe<Type_S3_Signed_Url>
  getSecretAppConfig: Maybe<Type_Config_List>
  getService: Maybe<Type_Service_List>
  getServiceFeature: Maybe<Type_Feature_List>
  getServiceInfo: Maybe<Type_Service_Info>
  getSku: GetSkuResponse
  getSkuById: GetSkuByIdResponse
  getSystemAdminPermission: Maybe<Type_Type_Role_Permission_User_List>
  getSystemAdminProfile: Maybe<Type_Profile_List>
  getSystemAdminRoleApprovalAttribute: Maybe<Type_Role_Aproval_Attribute_List>
  getTheme: Maybe<Type_Theme_Response_List>
  getTokenAuthCode: Maybe<Type_Login>
  getVersionControl: Maybe<Type_Version_Control_List>
  kafkaListTopics: Maybe<Type_Json>
  migrateData: Maybe<Data_Migration_Result>
  otherFields: Scalars['Boolean']
  /** ดูข้อมูลสินค้าสำหรับ Retail */
  retailGetProductList: ProductRetailResponse
  webhookRunTaskAppNotification: Maybe<Type_Webhook>
  webhookRunTaskEmail: Maybe<Type_Webhook>
}

export type QueryAgentGetProductListArgs = {
  input?: InputMaybe<AgentGetProductInput>
  status?: InputMaybe<Get_Product_Status>
}

export type QueryFactoryGetProductListArgs = {
  input?: InputMaybe<CommonGetProductInput>
  status?: InputMaybe<Get_Product_Status>
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

export type QueryGetAppArgs = {
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

export type QueryGetCategoryArgs = {
  find?: InputMaybe<Input_Find_Data>
}

export type QueryGetConfigArgs = {
  input?: InputMaybe<Input_Find_Data>
}

export type QueryGetCredentialByHostArgs = {
  host: Scalars['String']
}

export type QueryGetCustomMenuArgs = {
  input?: InputMaybe<Input_Find_Data>
}

export type QueryGetDataAccountArgs = {
  input?: InputMaybe<FindAccountInput>
}

export type QueryGetDataAddressArgs = {
  input?: InputMaybe<FindAddressInput>
}

export type QueryGetDataContactArgs = {
  input?: InputMaybe<FindContactInput>
}

export type QueryGetDataLeadArgs = {
  input?: InputMaybe<FindLeadInput>
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

export type QueryGetInviteRoleArgs = {
  orgKey: Scalars['String']
}

export type QueryGetInviteUserOrganizationArgs = {
  input?: InputMaybe<Input_Find_Data>
  orgKey: Scalars['String']
}

export type QueryGetLabelAttributeArgs = {
  input: GetAttributeInPut
}

export type QueryGetLabelCategoryArgs = {
  input: GetCategoryInPut
}

export type QueryGetLabelCategoryAttributeArgs = {
  input: GetCategoryAttributeInPut
}

export type QueryGetLabelParentCategoryArgs = {
  id: Scalars['String']
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

export type QueryGetProductAttributeArgs = {
  productId: Scalars['String']
}

export type QueryGetProductAttributeListArgs = {
  input?: InputMaybe<GetProductAttributeInput>
}

export type QueryGetProductAttributeOfCategoryArgs = {
  categoryKey: Scalars['String']
}

export type QueryGetProductByIdArgs = {
  id: Scalars['String']
}

export type QueryGetProductCategoryArgs = {
  categoryKey: Scalars['String']
}

export type QueryGetProductCategoryLevelArgs = {
  input?: InputMaybe<GetProductCategoryLevelInput>
  isTail?: InputMaybe<Scalars['Boolean']>
  parentKey?: InputMaybe<Scalars['String']>
}

export type QueryGetProductInventoryArgs = {
  productId: Scalars['String']
}

export type QueryGetProductListHoldByOrgArgs = {
  input?: InputMaybe<CommonGetProductInput>
}

export type QueryGetProductVariantListArgs = {
  productId: Scalars['String']
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

export type QueryGetServiceArgs = {
  input?: InputMaybe<Input_Find_Data>
}

export type QueryGetServiceInfoArgs = {
  serviceKey: Scalars['String']
}

export type QueryGetSkuArgs = {
  productId: Scalars['String']
}

export type QueryGetSkuByIdArgs = {
  skuId: Scalars['String']
}

export type QueryGetSystemAdminPermissionArgs = {
  appKey: Scalars['String']
  roleKeyList?: InputMaybe<Array<Scalars['String']>>
}

export type QueryGetSystemAdminProfileArgs = {
  find?: InputMaybe<Input_Find_Data>
}

export type QueryGetSystemAdminRoleApprovalAttributeArgs = {
  input?: InputMaybe<Input_Find_Data>
}

export type QueryGetThemeArgs = {
  credentialKey?: InputMaybe<Scalars['String']>
  find?: InputMaybe<Input_Find_Data>
  host: Scalars['String']
}

export type QueryGetTokenAuthCodeArgs = {
  code: Scalars['String']
}

export type QueryGetVersionControlArgs = {
  find?: InputMaybe<Input_Find_Data>
}

export type QueryMigrateDataArgs = {
  appKey: Scalars['String']
  destinationDb: Scalars['String']
  destinationUri: Scalars['String']
  exceptList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  includeList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  limit: Scalars['Number']
  originDb: Scalars['String']
  originUri: Scalars['String']
  version: Scalars['String']
}

export type QueryRetailGetProductListArgs = {
  input?: InputMaybe<RetailGetProductInput>
}

export type QueryWebhookRunTaskAppNotificationArgs = {
  secretKey: Scalars['String']
}

export type QueryWebhookRunTaskEmailArgs = {
  secretKey: Scalars['String']
}

export type QueryAccountInput = {
  _id?: InputMaybe<Scalars['String']>
  category?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  status?: InputMaybe<Scalars['String']>
}

export type QueryAddressInput = {
  /** ที่อยู่ */
  address?: InputMaybe<Scalars['String']>
  /** ประเทศ */
  country?: InputMaybe<Scalars['String']>
  /** กำหนดที่อยู่ที่จะเป็นค่าตั้งต้น */
  defaultSend?: InputMaybe<Enum_Address_Default_Send>
  /** อำเภอ */
  district?: InputMaybe<Scalars['String']>
  /** latitude */
  latitude?: InputMaybe<Scalars['String']>
  /** longitude */
  longitude?: InputMaybe<Scalars['String']>
  /** รหัสไปรษณีย์ */
  postcode?: InputMaybe<Scalars['String']>
  /** จังหวัด */
  province?: InputMaybe<Scalars['String']>
  /** ไอดีของเจ้าของที่อยู่ */
  refId?: InputMaybe<Scalars['String']>
  /** ตำบล */
  subDistrict?: InputMaybe<Scalars['String']>
  /** ประเภทที่อยู่ */
  type?: InputMaybe<Enum_Address_Type>
}

export type QueryContactInput = {
  _id?: InputMaybe<Scalars['String']>
  citizenId?: InputMaybe<Scalars['String']>
  dataSource?: InputMaybe<Scalars['String']>
  firstName?: InputMaybe<Scalars['String']>
  lastName?: InputMaybe<Scalars['String']>
  passport?: InputMaybe<Scalars['String']>
  resourceOwner?: InputMaybe<Scalars['String']>
  status?: InputMaybe<Scalars['String']>
}

export type QueryLeadInput = {
  citizenId?: InputMaybe<Scalars['String']>
  dataSource?: InputMaybe<Scalars['String']>
  firstName?: InputMaybe<Scalars['String']>
  lastName?: InputMaybe<Scalars['String']>
  passport?: InputMaybe<Scalars['String']>
  resourceOwner?: InputMaybe<Scalars['String']>
  status?: InputMaybe<Scalars['String']>
}

export type QueryValue = {
  /** ไอดีของ inventory ที่ต้องการจะแก้ไข */
  inventoryId?: InputMaybe<Scalars['String']>
  inventoryType?: InputMaybe<Scalars['String']>
  productId?: InputMaybe<Scalars['String']>
  skuId?: InputMaybe<Scalars['String']>
}

export type RemoveCategoryAttributeInput = {
  /** array id attribute ที่ใช้ในการเพิ่ม */
  attributeIdList?: InputMaybe<Array<Scalars['String']>>
  /** categoryId */
  categoryId: Scalars['String']
}

export type RespCreate = {
  _id: Maybe<Scalars['String']>
}

export type ResponseClass = {
  _id: Maybe<Scalars['String']>
  /** รายการไอดีของคุณลักษณะที่มีในหมวดหมู่นี้ */
  attributes: Maybe<Array<Maybe<Scalars['String']>>>
  /** ใช้ระบุว่าหมวดหมู่นี้มีหมวดหมู่ย่อยหรือไม่ */
  hasChildren: Maybe<Scalars['Boolean']>
  /** รหัสของหมวดหมู่ */
  key: Maybe<Scalars['String']>
  /** ชื่อหมวดหมู่สินค้าในแต่ละภาษาที่สร้างไว้ */
  name: Maybe<Scalars['String']>
  /** รหัสของหมวดหมู่หลัก ของหมวดหมู่นี้ */
  parent: Maybe<Scalars['String']>
  /** ลำดับขั้นของรหัสหมวดหมู่หลักตั้งแต่ระดับ root ของหมวดหมู่นี้ เรียงตาม index ใน array */
  tree: Maybe<Array<Maybe<Scalars['String']>>>
  treeFull: Maybe<Array<Maybe<SelfProductCategory>>>
}

export type RetailGetProductInput = {
  pagination?: InputMaybe<Input_Pagination>
  search?: InputMaybe<RetailProductCriteria>
  sort?: InputMaybe<GetProductSortInput>
}

export type RetailProductCriteria = {
  categoryKey?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  priceRange?: InputMaybe<PriceRangeCriteria>
}

export type Sku = {
  /** จำนวนสต๊อก */
  changeQty: Scalars['Float']
  /** ราคาขายลูกค้า */
  customerSellingPrice?: InputMaybe<Scalars['Float']>
  /** ราคาโรงงาน */
  factoryPrice?: InputMaybe<Scalars['Float']>
  /** ราคาขายร้านค้า */
  shopSellingPrice?: InputMaybe<Scalars['Float']>
  skuId: Scalars['String']
  /** สถานะเปิด-ปิด */
  status?: InputMaybe<Toggle_Creat_Product_Status>
}

export type SkuUpdate = {
  /** จำนวนสต๊อก */
  changeQty?: InputMaybe<Scalars['Float']>
  /** ราคาขายลูกค้า */
  customerSellingPrice?: InputMaybe<Scalars['Float']>
  /** ราคาโรงงาน */
  factoryPrice?: InputMaybe<Scalars['Float']>
  /** ราคาขายร้านค้า */
  shopSellingPrice?: InputMaybe<Scalars['Float']>
  skuId: Scalars['String']
  /** สถานะเปิด-ปิด */
  status?: InputMaybe<Toggle_Creat_Product_Status>
}

export enum Sort_Order {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type SelfProductCategory = {
  _id: Maybe<Scalars['String']>
  hasChildren: Maybe<Scalars['Boolean']>
  key: Maybe<Scalars['String']>
  name: Maybe<Scalars['String']>
  parent: Maybe<Scalars['String']>
}

export type SkuVariant = {
  childName: Maybe<Scalars['String']>
  fileKey: Maybe<Scalars['String']>
  parentName: Maybe<Scalars['String']>
}

export type Subscription = {
  _dummy: Maybe<Scalars['String']>
  getHello: Maybe<Type_Hello>
  getMyNotification: Maybe<Type_Notification_List>
}

export type SubscriptionGetMyNotificationArgs = {
  find?: InputMaybe<Input_Find_Data>
}

export enum Toggle_Creat_Product_Status {
  Disabled = 'DISABLED',
  Enabled = 'ENABLED',
}

export type Type_App = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_App_Schema>
}

export type Type_App_Accees_Token = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_App_Accees_Token_Payload>
}

export type Type_App_Accees_Token_Payload = {
  app: Maybe<Type_Organization_Response>
  profile: Maybe<Type_User_Profile>
  token: Maybe<Type_App_Accees_Token_Payload_Token>
}

export type Type_App_Accees_Token_Payload_Token = {
  appAccessToken: Maybe<Scalars['String']>
  appRefreshToken: Maybe<Scalars['String']>
}

export type Type_App_Credential = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Array<Maybe<Type_App_Credential_Payload>>>
}

export type Type_App_Credential_Payload = {
  app: Maybe<Type_App_Schema>
  credential: Maybe<Type_Credential_Schema>
}

export type Type_App_Feature_Key = {
  _id: Maybe<Scalars['ID']>
  description: Maybe<Scalars['String']>
  enable: Maybe<Scalars['Boolean']>
  key: Maybe<Scalars['String']>
  serviceId: Maybe<Scalars['ID']>
}

export type Type_App_List = {
  pagination: Maybe<Type_Pagination>
  payload: Maybe<Array<Maybe<Type_App_Schema>>>
}

export type Type_App_Role = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_App_Role_Payload>
}

export type Type_App_Role_List = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_App_Role_List_Payload>
}

export type Type_App_Role_List_Payload = {
  app: Maybe<Type_App_Schema>
  roleList: Maybe<Array<Maybe<Type_Role>>>
}

export type Type_App_Role_Payload = {
  app: Maybe<Type_App_Schema>
  roleList: Maybe<Array<Maybe<Type_Role>>>
  serviceList: Maybe<Array<Maybe<Type_Service_List_Payload>>>
}

export type Type_App_Schema = {
  appKey: Maybe<Scalars['String']>
  attribute: Maybe<Scalars['JSON']>
  configurationList: Maybe<Array<Maybe<Type_Config_Global>>>
  contactEmailList: Maybe<Array<Maybe<Scalars['String']>>>
  featureList: Maybe<Array<Maybe<Type_Feature_Schema>>>
  name: Maybe<Scalars['String']>
  orgFieldList: Maybe<Array<Maybe<Scalars['JSON']>>>
  roleList: Maybe<Array<Maybe<Scalars['JSON']>>>
  status: Maybe<Enum_App_Status>
}

export type Type_App_Service = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_App_Service_Payload>
}

export type Type_App_Service_List = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_App_Service_List_Payload>
}

export type Type_App_Service_List_Payload = {
  app: Maybe<Type_App_Schema>
  serviceList: Maybe<Array<Maybe<Type_Service>>>
}

export type Type_App_Service_Payload = {
  app: Maybe<Type_App_Schema>
  service: Maybe<Type_Service>
  syncStatus: Maybe<Scalars['String']>
}

export type Type_Attribute = {
  _id: Maybe<Scalars['ID']>
  key: Maybe<Scalars['String']>
  value: Maybe<Scalars['String']>
}

export type Type_Auth_Code = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_Auth_Code_Payload>
}

export type Type_Auth_Code_Payload = {
  authType: Maybe<Scalars['String']>
  code: Maybe<Scalars['String']>
  email: Maybe<Scalars['String']>
  redirectUrl: Maybe<Scalars['String']>
}

export type Type_Aws = {
  _id: Maybe<Scalars['ID']>
  accessKey: Maybe<Scalars['String']>
  bucketName: Maybe<Scalars['String']>
  cloudWatchEnable: Maybe<Scalars['Boolean']>
  endpoint: Maybe<Scalars['String']>
  secretKey: Maybe<Scalars['String']>
}

export type Type_Category = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_Category_Schema>
}

export type Type_Category_List = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<Type_Pagination>
  payload: Maybe<Array<Maybe<Type_Category_Schema>>>
}

export type Type_Category_Schema = {
  _id: Maybe<Scalars['ID']>
  createdAt: Maybe<Scalars['Date']>
  createdBy: Maybe<Type_User_Profile>
  name: Maybe<Scalars['String']>
  status: Maybe<Enum_Category_Status>
  updatedAt: Maybe<Scalars['Date']>
  updatedBy: Maybe<Type_User_Profile>
}

export type Type_Check_Verify_Email = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  verifyStatus: Maybe<Scalars['String']>
}

export type Type_Config = {
  configKey: Maybe<Scalars['String']>
  configName: Maybe<Scalars['String']>
  isGlobal: Maybe<Scalars['Boolean']>
  privacy: Maybe<Enum_Config_Privacy>
  relatedConfig: Maybe<Array<Maybe<Scalars['String']>>>
  value: Maybe<Scalars['JSON']>
}

export type Type_Config_Global = {
  configKey: Maybe<Scalars['String']>
  configName: Maybe<Scalars['String']>
  isGlobal: Maybe<Scalars['Boolean']>
  relatedConfig: Maybe<Array<Maybe<Scalars['String']>>>
  value: Maybe<Type_Value_Config_Global>
}

export type Type_Config_List = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<Type_Pagination>
  payload: Maybe<Array<Maybe<Type_Config>>>
}

export type Type_Credential = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_Credential_Payload>
}

export type Type_Credential_List = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_Credential_List_Payload>
}

export type Type_Credential_List_Payload = {
  app: Maybe<Type_App_Schema>
  credentialList: Maybe<Array<Maybe<Type_Credential_Schema>>>
}

export type Type_Credential_Payload = {
  credential: Maybe<Type_Credential_Schema>
  serviceList: Maybe<Array<Maybe<Type_Service_List_Payload>>>
}

export type Type_Credential_Schema = {
  credentialKey: Maybe<Scalars['String']>
  expiration: Maybe<Type_Expiration>
  hostList: Maybe<Array<Maybe<Scalars['String']>>>
  isAdminCredential: Maybe<Enum_Is>
  name: Maybe<Scalars['String']>
  secretKey: Maybe<Scalars['String']>
  status: Maybe<Enum_App_Status>
  type: Maybe<Enum_Credential_Type>
}

export type Type_Custom_Menu = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_Schema_Custom_Menu>
}

export type Type_Custom_Menu_List = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<Type_Pagination>
  payload: Maybe<Array<Maybe<Type_Schema_Custom_Menu>>>
}

export type Type_Data_Security_List = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Array<Maybe<Type_Role_Data_Security>>>
}

export type Type_Email = {
  value: Maybe<Scalars['String']>
  verifyStatus: Maybe<Enum_Verify_Status>
}

export type Type_Email_Register = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_User_Profile>
}

export type Type_Endpoin_Service = {
  resourceAdmin: Maybe<Scalars['String']>
  resourceOwner: Maybe<Scalars['String']>
  system: Maybe<Scalars['String']>
}

export type Type_Endpoin_Service_Type = {
  gql: Maybe<Type_Endpoin_Service>
  rest: Maybe<Type_Endpoin_Service>
}

export type Type_Expiration = {
  access: Maybe<Scalars['String']>
  refresh: Maybe<Scalars['String']>
}

export type Type_Feature_Key = {
  _id: Maybe<Scalars['ID']>
  description: Maybe<Scalars['String']>
  enable: Maybe<Scalars['Boolean']>
  key: Maybe<Scalars['String']>
}

export type Type_Feature_List = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_Feature_List_Payload>
}

export type Type_Feature_List_Payload = {
  app: Maybe<Type_App_Schema>
  featureList: Maybe<Array<Maybe<Type_Feature_Schema>>>
}

export type Type_Feature_Schema = {
  config: Maybe<Scalars['JSON']>
  enable: Maybe<Scalars['Boolean']>
  featureKey: Maybe<Scalars['String']>
  name: Maybe<Scalars['String']>
  requiredFeatureKeyList: Maybe<Array<Maybe<Scalars['String']>>>
}

export type Type_Gateway = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<Type_Pagination>
  payload: Maybe<Array<Maybe<Type_Schema_Gateway>>>
}

export type Type_Gateway_List = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_Schema_Gateway>
}

export type Type_Generate_Key = {
  key: Maybe<Scalars['String']>
}

export type Type_Generate_Key_Response = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_Generate_Key>
}

export type Type_Generate_Running_Number = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_Running_Number_No>
}

export type Type_Hello = {
  message: Maybe<Scalars['String']>
}

export type Type_Invite = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_Schema_Invite>
}

export type Type_Invite_List = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<Type_Pagination>
  payload: Maybe<Array<Maybe<Type_Schema_Invite>>>
}

export type Type_Json = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Scalars['JSON']>
}

export type Type_Key = {
  _id: Maybe<Scalars['ID']>
  code: Maybe<Scalars['String']>
  description: Maybe<Scalars['String']>
  value: Maybe<Scalars['String']>
}

export type Type_Line = {
  login: Maybe<Type_Line_Login>
  notify: Maybe<Type_Notify>
}

export type Type_Line_Login = {
  _id: Maybe<Scalars['ID']>
  clientId: Maybe<Scalars['String']>
  clientSecret: Maybe<Scalars['String']>
  redirectUri: Maybe<Scalars['String']>
}

export type Type_Locale_Text = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_Locale_Text_Response>
}

export type Type_Locale_Text_List = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<Type_Pagination>
  payload: Maybe<Array<Maybe<Type_Locale_Text_Response>>>
}

export type Type_Locale_Text_Response = {
  attribute: Maybe<Scalars['JSON']>
  dataKey: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
  orgKey: Maybe<Scalars['String']>
  text: Maybe<Scalars['String']>
}

export type Type_Login = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_Login_Payload>
}

export type Type_Login_Payload = {
  authType: Maybe<Enum_Auth_Type>
  code: Maybe<Scalars['String']>
  credentialKey: Maybe<Scalars['String']>
  isFirstLogin: Maybe<Scalars['Boolean']>
  organization: Maybe<Type_Organization_Response>
  profile: Maybe<Type_User_Profile>
  redirectUrl: Maybe<Scalars['String']>
  token: Maybe<Type_Token>
}

export type Type_Logout = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_User_Profile>
}

export type Type_Log_List = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<Type_Pagination>
  payload: Maybe<Array<Maybe<Type_Log_Schema>>>
}

export type Type_Log_Schema = {
  action: Maybe<Scalars['String']>
  actor: Maybe<Scalars['JSON']>
  createdAt: Maybe<Scalars['Date']>
  eventKey: Maybe<Scalars['String']>
  eventName: Maybe<Scalars['String']>
  ipAddress: Maybe<Scalars['String']>
  isSystemLog: Maybe<Scalars['Boolean']>
  message: Maybe<Scalars['String']>
  nextData: Maybe<Scalars['JSON']>
  prevData: Maybe<Scalars['JSON']>
  service: Maybe<Scalars['JSON']>
  updatedAt: Maybe<Scalars['Date']>
  userAgent: Maybe<Scalars['String']>
}

export type Type_Master_Data = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_Master_Data_Response>
}

export type Type_Master_Data_List = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<Type_Pagination>
  payload: Maybe<Array<Maybe<Type_Master_Data_Response>>>
}

export type Type_Master_Data_Response = {
  attribute: Maybe<Scalars['JSON']>
  dataKey: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
  parentKey: Maybe<Scalars['String']>
  searchable: Maybe<Enum_Is>
  text: Maybe<Scalars['String']>
}

export type Type_Message = {
  message: Maybe<Scalars['String']>
  success: Maybe<Scalars['Boolean']>
}

export type Type_My_Org_Role = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Array<Maybe<Type_Role>>>
}

export type Type_Name = {
  name: Maybe<Scalars['String']>
  name_en: Maybe<Scalars['String']>
}

export type Type_Notification = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_Notification_Schema>
}

export type Type_Notification_Data_Key = {
  dataKey: Maybe<Scalars['String']>
  defaultValue: Maybe<Scalars['String']>
  isRequired: Maybe<Enum_Notification_Is_Required>
}

export type Type_Notification_List = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<Type_Pagination>
  payload: Maybe<Array<Maybe<Type_Notification_Schema>>>
  unread: Maybe<Scalars['Number']>
}

export type Type_Notification_Message = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_Notification_Message_Schema>
}

export type Type_Notification_Message_Count = {
  totalSuccess: Maybe<Scalars['Number']>
}

export type Type_Notification_Message_Count_Payload = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_Notification_Message_Count>
}

export type Type_Notification_Message_List = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<Type_Pagination>
  payload: Maybe<Array<Maybe<Type_Notification_Message_Schema>>>
}

export type Type_Notification_Message_Schema = {
  _id: Maybe<Scalars['ID']>
  channel: Maybe<Type_Notification_Message_Schema_Channel>
  content: Maybe<Scalars['String']>
  createdAt: Maybe<Scalars['Date']>
  displayTo: Maybe<Scalars['String']>
  from: Maybe<Scalars['String']>
  orgKey: Maybe<Scalars['String']>
  sendAt: Maybe<Scalars['Date']>
  sendType: Maybe<Enum_Notification_Message_Sendtype>
  status: Maybe<Enum_Notification_Message_Status>
  title: Maybe<Scalars['String']>
  to: Maybe<Scalars['String']>
  updatedAt: Maybe<Scalars['Date']>
}

export type Type_Notification_Message_Schema_Channel = {
  condition: Maybe<Enum_Notification_Message_Channel_Condition>
  key: Maybe<Enum_Notification_Message_Channel_Key>
}

export type Type_Notification_Schema = {
  _id: Maybe<Scalars['ID']>
  attribute: Maybe<Scalars['JSON']>
  content: Maybe<Scalars['String']>
  createdAt: Maybe<Scalars['Date']>
  from: Maybe<Scalars['String']>
  icon: Maybe<Scalars['String']>
  read: Maybe<Enum_Notification_Read>
  sendAt: Maybe<Scalars['Date']>
  title: Maybe<Scalars['String']>
  to: Maybe<Scalars['String']>
  type: Maybe<Enum_Notification_User_Type>
  updatedAt: Maybe<Scalars['Date']>
}

export type Type_Notification_Template = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_Scmema_Notification_Template>
}

export type Type_Notification_Template_List = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<Type_Pagination>
  payload: Maybe<Array<Maybe<Type_Scmema_Notification_Template>>>
}

export type Type_Notify = {
  _id: Maybe<Scalars['ID']>
  isSendNotify: Maybe<Scalars['Boolean']>
  notificationDisabled: Maybe<Scalars['Boolean']>
  notifyToken: Maybe<Scalars['String']>
}

export type Type_Number_Attribute = {
  _id: Maybe<Scalars['ID']>
  key: Maybe<Scalars['String']>
  value: Maybe<Scalars['Number']>
}

export type Type_Ok = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
}

export type Type_Organization = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_Organization_Response>
}

export type Type_Organization_Approval = {
  approvalAttribute: Maybe<Scalars['JSON']>
  note: Maybe<Scalars['String']>
  organization: Maybe<Type_Organization_Response>
  status: Maybe<Enum_Organization_Approval_Status>
}

export type Type_Organization_Approval_List = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<Type_Pagination>
  payload: Maybe<Array<Maybe<Type_Organization_Approval>>>
}

export type Type_Organization_Approval_Response = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_Organization_Approval>
}

export type Type_Organization_Contact_Email = {
  value: Maybe<Scalars['String']>
  verifyStatus: Maybe<Scalars['String']>
}

export type Type_Organization_Label = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_Organization_Label_Schema>
}

export type Type_Organization_Label_List = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<Type_Pagination>
  payload: Maybe<Array<Maybe<Type_Organization_Label_Schema>>>
}

export type Type_Organization_Label_Schema = {
  _id: Maybe<Scalars['ID']>
  createdAt: Maybe<Scalars['Date']>
  createdBy: Maybe<Type_User_Profile>
  orgLabelDescription: Maybe<Scalars['String']>
  orgLabelIcon: Maybe<Scalars['String']>
  orgLabelName: Maybe<Scalars['String']>
  orgLabelStatus: Maybe<Enum_Organization_Label_Status>
  orgLabelTitle: Maybe<Scalars['String']>
  updatedAt: Maybe<Scalars['Date']>
  updatedBy: Maybe<Type_User_Profile>
}

export type Type_Organization_Locale_List = {
  dataKey: Maybe<Scalars['String']>
  locale: Maybe<Scalars['JSON']>
  masterKey: Maybe<Scalars['String']>
}

export type Type_Organization_Location = {
  coordinates: Maybe<Array<Maybe<Scalars['Number']>>>
  type: Maybe<Scalars['String']>
}

export type Type_Organization_Master_Detail_List = {
  dataKey: Maybe<Scalars['String']>
  masterData: Maybe<Scalars['JSON']>
  masterKey: Maybe<Scalars['String']>
}

export type Type_Organization_Response = {
  address: Maybe<Scalars['JSON']>
  attribute: Maybe<Scalars['JSON']>
  categoryList: Maybe<Array<Maybe<Type_Category_Schema>>>
  contactEmailList: Maybe<Array<Maybe<Scalars['String']>>>
  contactName: Maybe<Scalars['String']>
  createdAt: Maybe<Scalars['Date']>
  location: Maybe<Type_Organization_Location>
  name: Maybe<Scalars['String']>
  orgKey: Maybe<Scalars['String']>
  organizationLabelList: Maybe<Array<Maybe<Type_Organization_Label_Schema>>>
  organizationType: Maybe<Type_Organization_Type_Schema>
  path: Maybe<Scalars['String']>
  status: Maybe<Enum_Organization_Status>
  updatedAt: Maybe<Scalars['Date']>
}

export type Type_Organization_Tag_List = {
  masterKey: Maybe<Scalars['String']>
  tagKey: Maybe<Scalars['String']>
}

export type Type_Organization_Type = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_Organization_Type_Schema>
}

export type Type_Organization_Type_List = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<Type_Pagination>
  payload: Maybe<Array<Maybe<Type_Organization_Type_Schema>>>
}

export type Type_Organization_Type_Schema = {
  _id: Maybe<Scalars['ID']>
  createdAt: Maybe<Scalars['Date']>
  createdBy: Maybe<Type_User_Profile>
  needApprove: Maybe<Enum_Is>
  orgFieldList: Maybe<Array<Maybe<Scalars['JSON']>>>
  orgTypeKey: Maybe<Scalars['String']>
  orgTypeName: Maybe<Scalars['String']>
  orgTypeStatus: Maybe<Enum_Organization_Type_Status>
  updatedAt: Maybe<Scalars['Date']>
  updatedBy: Maybe<Type_User_Profile>
}

export type Type_Org_Accees_Token = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_Org_Accees_Token_Payload>
}

export type Type_Org_Accees_Token_Payload = {
  organization: Maybe<Type_Organization_Response>
  profile: Maybe<Type_User_Profile>
  token: Maybe<Type_Org_Accees_Token_Payload_Token>
}

export type Type_Org_Accees_Token_Payload_Token = {
  orgAccessToken: Maybe<Scalars['String']>
  orgRefreshToken: Maybe<Scalars['String']>
}

export type Type_Org_Children = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Array<Maybe<Type_Org_Children_Payload>>>
}

export type Type_Org_Children_Payload = {
  children: Maybe<Scalars['JSON']>
  key: Maybe<Scalars['String']>
  name: Maybe<Scalars['String']>
  orgKey: Maybe<Scalars['String']>
  path: Maybe<Scalars['String']>
  title: Maybe<Scalars['String']>
}

export type Type_Org_Token_Ref = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_Org_Token_Ref_Payload>
}

export type Type_Org_Token_Ref_Payload = {
  organization: Maybe<Type_Organization_Response>
  profile: Maybe<Type_User_Profile>
  ref: Maybe<Scalars['String']>
}

export type Type_Otp = {
  countryCode: Maybe<Scalars['String']>
  expire: Maybe<Scalars['String']>
  phoneNumber: Maybe<Scalars['Number']>
  ref: Maybe<Scalars['String']>
}

export type Type_Otp_Token = {
  expireDate: Maybe<Scalars['Date']>
  otpToken: Maybe<Scalars['String']>
  redirectUrl: Maybe<Scalars['String']>
}

export type Type_Otp_Token_Payload = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_Otp_Token>
}

export type Type_O_Auth = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_Schema_O_Auth>
}

export type Type_Pagination = {
  /** จำนวนสูงสุดที่ดึงใน 1 หน้า */
  limit: Scalars['Int']
  /** หมายเลขหน้า */
  page: Scalars['Int']
  /** จำนวน item ทั้งหมด */
  totalItems: Scalars['Int']
  /** จำนวนหน้าทั้งหมด */
  totalPages: Scalars['Int']
}

export type Type_Password_Email = {
  email: Maybe<Scalars['String']>
}

export type Type_Password_Otp = {
  countryCode: Scalars['String']
  phoneNumber: Scalars['Number']
}

export type Type_Permision_Option = {
  _id: Maybe<Scalars['ID']>
  code: Maybe<Scalars['String']>
  description: Maybe<Scalars['String']>
  level: Maybe<Scalars['Number']>
}

export type Type_Permission_List = {
  /** โค้ดของการตอบสนอง */
  code: Maybe<Scalars['String']>
  /** ข้อความตอบสนอง */
  message: Maybe<Scalars['String']>
  /** array data */
  payload: Maybe<Array<Maybe<Type_Role_Permission>>>
}

export type Type_Phone = {
  code: Maybe<Scalars['String']>
  value: Maybe<Scalars['String']>
  verifyStatus: Maybe<Enum_Verify_Status>
}

export type Type_Profile = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_User_Profile>
}

export type Type_Profile_List = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<Type_Pagination>
  payload: Maybe<Array<Maybe<Type_User_Profile>>>
}

export type Type_Profile_Org = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_Profile_Org_Payload>
}

export type Type_Profile_Org_Payload = {
  organization: Maybe<Type_Organization_Response>
  profile: Maybe<Type_User_Profile>
}

export type Type_Refresh_Access_Token = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_Token>
}

export type Type_Remove_Config = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
}

export type Type_Request_Otp = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_Otp>
}

export type Type_Reset_Password_Email = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_Password_Email>
}

export type Type_Response = {
  message: Maybe<Scalars['String']>
  success: Maybe<Scalars['Boolean']>
}

export type Type_Role = {
  attribute: Maybe<Scalars['JSON']>
  isDefault: Maybe<Enum_Is>
  isInvite: Maybe<Enum_Is>
  isReplaceable: Maybe<Enum_Is>
  name: Maybe<Scalars['String']>
  regisable: Maybe<Enum_Is>
  roleKey: Maybe<Scalars['String']>
  roleType: Maybe<Enum_Lrle_Type>
  status: Maybe<Enum_App_Status>
  userField: Maybe<Array<Maybe<Scalars['JSON']>>>
}

export type Type_Role_Aproval_Attribute = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_Role_Aproval_Attribute_Schema>
}

export type Type_Role_Aproval_Attribute_List = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<Type_Pagination>
  payload: Maybe<Array<Maybe<Type_Role_Aproval_Attribute_Schema>>>
}

export type Type_Role_Aproval_Attribute_Role = {
  _id: Maybe<Scalars['String']>
  approval: Maybe<Enum_Is>
  approvalAttribute: Maybe<Scalars['JSON']>
  isDefault: Maybe<Enum_Is>
  isReplaceable: Maybe<Enum_Is>
  name: Maybe<Scalars['String']>
  needApproval: Maybe<Enum_Is>
  note: Maybe<Scalars['String']>
  roleKey: Maybe<Scalars['String']>
  roleType: Maybe<Scalars['String']>
  status: Maybe<Enum_Role_Aproval_Attribute_Ststus>
}

export type Type_Role_Aproval_Attribute_Schema = {
  profile: Maybe<Type_User_Profile>
  roleList: Maybe<Array<Maybe<Type_Role_Aproval_Attribute_Role>>>
}

export type Type_Role_Data_Security = {
  assign: Maybe<Enum_Data_Security>
  assignToParent: Maybe<Enum_Is>
  create: Maybe<Enum_Data_Security>
  delete: Maybe<Enum_Data_Security>
  name: Maybe<Scalars['String']>
  read: Maybe<Enum_Data_Security>
  securityKey: Maybe<Scalars['String']>
  write: Maybe<Enum_Data_Security>
}

export type Type_Role_Data_Security_List = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_Role_Data_Security_Payload>
}

export type Type_Role_Data_Security_Payload = {
  dataSecurityList: Maybe<Array<Maybe<Type_Role_Data_Security>>>
  role: Maybe<Type_Role>
}

export type Type_Role_Permission = {
  code: Maybe<Array<Maybe<Scalars['String']>>>
  name: Maybe<Scalars['String']>
  permissionKey: Maybe<Scalars['String']>
  scopeList: Maybe<Array<Maybe<Scalars['String']>>>
}

export type Type_Role_Permission_List = {
  /** โค้ดของการตอบสนอง */
  code: Maybe<Scalars['String']>
  /** ข้อความตอบสนอง */
  message: Maybe<Scalars['String']>
  /** data */
  payload: Maybe<Type_Role_Permission_Payload>
}

export type Type_Role_Permission_Payload = {
  permissionList: Maybe<Array<Maybe<Type_Role_Permission>>>
  role: Maybe<Type_Role>
}

export type Type_Role_Permission_Schema = {
  code: Maybe<Array<Maybe<Scalars['String']>>>
  permissionKey: Maybe<Scalars['String']>
  scopeList: Maybe<Array<Maybe<Scalars['String']>>>
}

export type Type_Running_Number = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_Schema_Running_Number>
}

export type Type_Running_Number_List = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Array<Maybe<Type_Schema_Running_Number>>>
}

export type Type_Running_Number_No = {
  runningNo: Maybe<Scalars['String']>
}

export type Type_S3_Signed_Url = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Array<Maybe<Type_Schema_S3_Signed_Url>>>
}

export type Type_Schema_Custom_Menu = {
  _id: Maybe<Scalars['String']>
  actionColor: Maybe<Scalars['String']>
  appKey: Maybe<Scalars['String']>
  icon: Maybe<Scalars['String']>
  menuKey: Maybe<Scalars['String']>
  permissionList: Maybe<Array<Maybe<Type_Schema_Custom_Menu_Permission_List>>>
  status: Maybe<Enum_Usability>
  target: Maybe<Scalars['String']>
  title: Maybe<Scalars['JSON']>
  url: Maybe<Scalars['String']>
}

export type Type_Schema_Custom_Menu_Permission_List = {
  code: Maybe<Array<Maybe<Scalars['String']>>>
  permissionKey: Maybe<Scalars['String']>
}

export type Type_Schema_Gateway = {
  _id: Maybe<Scalars['ID']>
  apiType: Maybe<Scalars['String']>
  destination: Maybe<Array<Maybe<Scalars['String']>>>
  endpont: Maybe<Scalars['String']>
  header: Maybe<Scalars['JSON']>
  key: Maybe<Scalars['String']>
  method: Maybe<Enum_Gateway_Method>
  name: Maybe<Scalars['String']>
  queryString: Maybe<Scalars['JSON']>
  resType: Maybe<Enum_Gateway_Res_Type>
  schema: Maybe<Scalars['JSON']>
  source: Maybe<Array<Maybe<Scalars['String']>>>
  status: Maybe<Enum_Gateway_Status>
  userRole: Maybe<Enum_Gateway_User_Role>
  variable: Maybe<Scalars['JSON']>
}

export type Type_Schema_Invite = {
  _id: Maybe<Scalars['ID']>
  email: Maybe<Scalars['String']>
  organization: Maybe<Type_Organization_Response>
  registered: Maybe<Enum_Is>
  roleKey: Maybe<Scalars['String']>
  status: Maybe<Enum_Invite_Status>
  userId: Maybe<Scalars['String']>
}

export type Type_Schema_O_Auth = {
  appKey: Maybe<Scalars['String']>
  loginStatus: Maybe<Enum_Usability>
  reauthentication: Maybe<Enum_Usability>
  redirectUrlList: Maybe<Array<Maybe<Scalars['String']>>>
}

export type Type_Schema_Running_Number = {
  attribute: Maybe<Scalars['JSON']>
  createdBy: Maybe<Scalars['String']>
  name: Maybe<Scalars['String']>
  runningKey: Maybe<Scalars['String']>
  runningNumberFormat: Maybe<Scalars['String']>
  updatedBy: Maybe<Scalars['String']>
}

export type Type_Schema_S3_Signed_Url = {
  createdAt: Maybe<Scalars['Date']>
  fileKey: Maybe<Scalars['String']>
  filename: Maybe<Scalars['String']>
  publicUrl: Maybe<Scalars['String']>
  signedUrl: Maybe<Scalars['String']>
  updatedAt: Maybe<Scalars['Date']>
  user: Maybe<Type_User_Profile>
}

export type Type_Schema_Webhook = {
  count: Maybe<Scalars['Int']>
  total: Maybe<Scalars['Int']>
}

export type Type_Scmema_Notification_Template = {
  channel: Enum_Notification_Channel
  dataKeyList: Maybe<Array<Maybe<Type_Notification_Data_Key>>>
  locale: Scalars['String']
  templateKey: Maybe<Scalars['String']>
  templateValue: Maybe<Scalars['String']>
  title: Maybe<Scalars['String']>
}

export type Type_Service = {
  adminPanelEndpoint: Maybe<Scalars['String']>
  adminPanelMetaDataUrl: Maybe<Scalars['String']>
  adminWidgetMetaDataUrl: Maybe<Scalars['String']>
  dockerImageTag: Maybe<Scalars['String']>
  endpoint: Maybe<Type_Endpoin_Service_Type>
  name: Maybe<Scalars['String']>
  permissionList: Maybe<Array<Maybe<Type_Service_Permission>>>
  serviceKey: Maybe<Scalars['String']>
}

export type Type_Service_Info = {
  /** โค้ดของการตอบสนอง */
  code: Maybe<Scalars['String']>
  /** ข้อความตอบสนอง */
  message: Maybe<Scalars['String']>
  /** data */
  payload: Maybe<Type_Service>
}

export type Type_Service_List = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<Type_Pagination>
  payload: Maybe<Array<Maybe<Type_Service>>>
}

export type Type_Service_List_Payload = {
  service: Maybe<Type_Service>
  syncStatus: Maybe<Scalars['String']>
}

export type Type_Service_Permission = {
  defaultCode: Maybe<Scalars['String']>
  name: Maybe<Scalars['String']>
  permissionKey: Maybe<Scalars['String']>
  scopeList: Maybe<Array<Maybe<Scalars['String']>>>
  userType: Maybe<Scalars['String']>
}

export type Type_Setting = {
  _id: Maybe<Scalars['ID']>
  description: Maybe<Scalars['String']>
  key: Maybe<Scalars['String']>
  value: Maybe<Scalars['String']>
}

export type Type_Smtp = {
  host: Maybe<Scalars['String']>
  password: Maybe<Scalars['String']>
  port: Maybe<Scalars['Number']>
  securedConnection: Maybe<Scalars['Boolean']>
  senderEmail: Maybe<Scalars['String']>
  senderName: Maybe<Scalars['String']>
  username: Maybe<Scalars['String']>
}

export type Type_Sync_App = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Array<Maybe<Type_Sync_App_Payload>>>
}

export type Type_Sync_App_Payload = {
  app: Maybe<Type_App>
  serviceList: Maybe<Array<Maybe<Type_Service_List_Payload>>>
}

export type Type_Sync_Organization = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Array<Maybe<Type_Sync_Organization_Payload>>>
}

export type Type_Sync_Organization_Payload = {
  organization: Maybe<Type_Organization_Response>
  syncStatus: Maybe<Scalars['String']>
}

export type Type_Sync_Service_Info = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_Sync_Service_Info_Payload>
}

export type Type_Sync_Service_Info_Payload = {
  serviceList: Maybe<Array<Maybe<Type_Service_List_Payload>>>
}

export type Type_Template = {
  _id: Maybe<Scalars['ID']>
  content: Maybe<Scalars['String']>
  keys: Maybe<Array<Maybe<Type_Key>>>
  name: Maybe<Scalars['String']>
}

export type Type_Theme_Form = {
  appKey: Maybe<Scalars['String']>
  color: Maybe<Scalars['JSON']>
  credentialKey: Maybe<Scalars['String']>
  custom: Maybe<Scalars['JSON']>
  image: Maybe<Scalars['JSON']>
  isDefault: Maybe<Enum_Theme_Default_Status>
  isReplaceable: Maybe<Enum_Theme_Replaceable_Status>
  name: Maybe<Scalars['String']>
  status: Maybe<Enum_Theme_Status>
  text: Maybe<Scalars['JSON']>
  themeKey: Maybe<Scalars['String']>
  themeType: Maybe<Enum_Theme_Type>
}

export type Type_Theme_Form_Color = {
  navAuthBg: Maybe<Scalars['String']>
  navAuthText: Maybe<Scalars['String']>
  navBg: Maybe<Scalars['String']>
  navText: Maybe<Scalars['String']>
  primary: Maybe<Scalars['String']>
  secondary: Maybe<Scalars['String']>
  titleText: Maybe<Scalars['String']>
}

export type Type_Theme_Form_Image = {
  favIcon: Maybe<Scalars['String']>
  navAuthCollapsedLogo: Maybe<Scalars['String']>
  navAuthLogo: Maybe<Scalars['String']>
  navLogo: Maybe<Scalars['String']>
  webLogo: Maybe<Scalars['String']>
}

export type Type_Theme_Form_Text = {
  description: Maybe<Scalars['String']>
  navTitle: Maybe<Scalars['String']>
  webTitle: Maybe<Scalars['String']>
}

export type Type_Theme_Response = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_Theme_Form>
}

export type Type_Theme_Response_List = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<Type_Pagination>
  payload: Maybe<Array<Maybe<Type_Theme_Form>>>
}

export type Type_Token = {
  accessToken: Maybe<Scalars['String']>
  refreshToken: Maybe<Scalars['String']>
}

export type Type_Token_Expired = {
  accessTokenExpired: Maybe<Scalars['Number']>
  refreshTokenExpired: Maybe<Scalars['Number']>
}

export type Type_Type_Role_Permission_User_List = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Array<Maybe<Type_Role_Permission_Schema>>>
}

export type Type_Update_Config = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_Update_Config_Payload>
}

export type Type_Update_Config_Payload = {
  config: Maybe<Type_Config>
  serviceList: Maybe<Array<Maybe<Type_Service_List_Payload>>>
}

export type Type_Username_Register = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_User_Profile>
}

export type Type_User_Permission = {
  defaultOption: Maybe<Scalars['String']>
  permissionName: Maybe<Scalars['String']>
  permissionOptions: Maybe<Array<Maybe<Type_Permision_Option>>>
}

export type Type_User_Profile = {
  _id: Maybe<Scalars['ID']>
  appleId: Maybe<Scalars['String']>
  attribute: Maybe<Scalars['JSON']>
  email: Maybe<Array<Maybe<Type_Email>>>
  facebookId: Maybe<Scalars['String']>
  googleId: Maybe<Scalars['String']>
  lineId: Maybe<Scalars['String']>
  phone: Maybe<Array<Maybe<Type_Phone>>>
  role: Maybe<Type_Role>
  setting: Maybe<Scalars['JSON']>
  username: Maybe<Scalars['String']>
}

export type Type_Value_Config_Global = {
  apiKey: Maybe<Scalars['String']>
  bucket: Maybe<Scalars['String']>
  headers: Maybe<Scalars['JSON']>
  publicEndpoint: Maybe<Scalars['String']>
  serviceEndpoint: Maybe<Scalars['String']>
}

export type Type_Verify_Email = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  verifyId: Maybe<Scalars['String']>
}

export type Type_Verify_Password_Otp = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_Password_Otp>
}

export type Type_Version_Control = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_Version_Control_Schema>
}

export type Type_Version_Control_List = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  pagination: Maybe<Type_Pagination>
  payload: Maybe<Array<Maybe<Type_Version_Control_Schema>>>
}

export type Type_Version_Control_Schema = {
  _id: Maybe<Scalars['String']>
  attribute: Maybe<Scalars['JSON']>
  versionKey: Maybe<Scalars['String']>
}

export type Type_Webhook = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Type_Schema_Webhook>
}

export type TierVariation = {
  name: Maybe<Scalars['String']>
  options: Maybe<Array<Maybe<TierVariationOptions>>>
}

export type TierVariationOptions = {
  fileKey: Maybe<Scalars['String']>
  key: Maybe<Scalars['String']>
  name: Maybe<Scalars['String']>
}

export type Update = {
  _id: Maybe<Scalars['String']>
}

export type UpdateInventory = {
  /** จำนวนรายการที่ไม่สำเร็จ */
  fail: Maybe<Scalars['Int']>
  /** จำนวนรายการที่สำเร็จ */
  success: Maybe<Scalars['Int']>
  /** จำนวนรายการทั้งหมด */
  total: Maybe<Scalars['Int']>
}

export type UpdateInventoryInput = {
  query: QueryValue
  updated: UpdateValue
}

export type UpdateInventoryResponse = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<UpdateInventory>
}

export type UpdateProductCategory = {
  name?: InputMaybe<Scalars['String']>
  /**
   *
   *   ชื่อหมวดหมู่สินค้าที่ต้องการอัพเดต เช่น :
   *   {
   *     "th" : "รองเท้า BAOJI แท้💯% รองเท้าหัวโตผลไม้ พื้นสูง 7 ซม. พื้นนุ่ม",
   *     "en" : "BAOJI Boots High Quality"
   * }
   *
   */
  names?: InputMaybe<Scalars['JSON']>
  /** รหัสหมวดหมู่สินค้าที่ต้องการให้เป็น parent, ROOT ถ้าต้องการให้เป็นหมวดหมู่ระดับ root */
  parrentKey?: InputMaybe<Scalars['String']>
}

export type UpdateProductInput = {
  /** คุณลักษณะผลิตภัณฑ์ */
  attributes?: InputMaybe<Array<AttributeUpdate>>
  /** คีย์ของหมวดหมู่ผลิตภัณฑ์ */
  categoryKey?: InputMaybe<Scalars['String']>
  /** จำนวนสต๊อก */
  changeQty?: InputMaybe<Scalars['Float']>
  /** สถานะการเปิดใช้งานของรูปภาพอธิบายผลิตภัณฑ์ */
  descImageStatus?: InputMaybe<Toggle_Creat_Product_Status>
  /** รูปภาพอธิบาย ถ้าอัพเดตส่งมาทุกรูปที่มี */
  descImages?: InputMaybe<Array<InputMaybe<ImageUpdate>>>
  /**
   *
   *     *** ส่งมาแค่ภาษาที่ต้องการจะอัพเดต
   *     คำอธิบายผลิตภัณฑ์ สามารถสร้างได้หลายภาษา เช่น :
   *     {
   *       "th" : "นุ่ม เบา ราคาถูก รองเท้าหัวโตผลไม้ พื้นสูง 7 ซม. พื้นนุ่ม",
   *       "en" : "Boots High Quality cheap price"
   *     }
   *     ความยาวสูงสุด 5000 ตัวอักษร, ต่ำสุด 23 ตัวอักษร
   *
   */
  descriptions?: InputMaybe<Scalars['JSON']>
  /**
   *
   *     *** ส่งมาแค่ภาษาที่ต้องการจะอัพเดต
   *     ชื่อผลิตภัณฑ์ สามารถสร้างได้หลายภาษา เช่น :
   *     {
   *       "th" : "รองเท้า BAOJI แท้💯% รองเท้าหัวโตผลไม้ พื้นสูง 7 ซม. พื้นนุ่ม",
   *       "en" : "BAOJI Boots High Quality"
   *     }
   *     ความยาวสูงสุด 120 ตัวอักษร, ต่ำสุด 19 ตัวอักษร
   *
   */
  names?: InputMaybe<Scalars['JSON']>
  /** ราคาของผลิตภัณฑ์ */
  price?: InputMaybe<PriceUpdate>
  /** รูปภาพสินค้า ถ้าอัพเดตส่งมาทุกรูปที่มี */
  productImages?: InputMaybe<Array<InputMaybe<ImageUpdate>>>
  /** ตัวเลือกสินค้า */
  skus?: InputMaybe<Array<SkuUpdate>>
}

export type UpdateResponse = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Update>
}

export type UpdateValue = {
  /** จำนวนที่ต้องการแก้ไข +,- */
  changeQty: Scalars['Float']
  /** ถ้า inventory เป็นประเภท varaint สามารถเปิด-ปิดได้ */
  varaintStatus?: InputMaybe<Toggle_Creat_Product_Status>
}

export type UpdateVaraintInput_ = {
  imageStatus?: InputMaybe<Toggle_Creat_Product_Status>
  name?: InputMaybe<Scalars['String']>
}

export type UserEmailResp = {
  value: Maybe<Scalars['String']>
}

export type UserPhoneResp = {
  value: Scalars['String']
}

export type UserResp = {
  _id: Maybe<Scalars['String']>
  attribute: Maybe<Scalars['JSON']>
  email: Maybe<Array<UserEmailResp>>
  phone: Maybe<Array<UserPhoneResp>>
}

export type VaraintList = {
  _id: Maybe<Scalars['String']>
  imageStatus: Maybe<Toggle_Creat_Product_Status>
  key: Maybe<Scalars['String']>
  name: Maybe<Scalars['String']>
  options: Maybe<Array<Maybe<VaraintOptions>>>
  productId: Maybe<Scalars['String']>
}

export type VaraintOptions = {
  _id: Maybe<Scalars['String']>
  fileKey: Maybe<Scalars['String']>
  key: Maybe<Scalars['String']>
  name: Maybe<Scalars['String']>
}

export type VariantListResponse = {
  code: Maybe<Scalars['String']>
  message: Maybe<Scalars['String']>
  payload: Maybe<Array<Maybe<VaraintList>>>
}

export type CreateLeadMutationVariables = Exact<{
  input: CreateLeadInput
}>

export type CreateLeadMutation = { createLead: { code: string; message: string; payload: { _id: string } } }

export type CreateLeadToUserMutationVariables = Exact<{
  input: CreateLeadInput
}>

export type CreateLeadToUserMutation = { createLeadToUser: { code: string; message: string; payload: { _id: string } } }

export type DeleteLeadMutationVariables = Exact<{
  leadId: Scalars['String']
}>

export type DeleteLeadMutation = { deleteLead: { code: string; message: string; payload: { _id: string } } }

export type GetDataLeadQueryVariables = Exact<{
  input?: InputMaybe<FindLeadInput>
}>

export type GetDataLeadQuery = {
  getDataLead: {
    code: string
    message: string
    payload: Array<{
      _id: string
      firstName: string
      lastName: string
      citizenId: string
      passport: string
      dataSource: string
      resourceOwner: string
      status: string
      image: string
      leadType: string
      organizationName: string
      createdAt: any
      updatedAt: any
      phone: Array<{ value: string }>
      email: Array<{ value: string }>
      createdAtBy: { _id: string; attribute: any; email: Array<{ value: string }>; phone: Array<{ value: string }> }
      updatedAtBy: { _id: string; attribute: any; email: Array<{ value: string }>; phone: Array<{ value: string }> }
    }>
    pagination: { limit: number; page: number; totalItems: number; totalPages: number }
  }
}

export type QualifyLeadMutationVariables = Exact<{
  leadId: Scalars['String']
}>

export type QualifyLeadMutation = { qualifyLead: { code: string; message: string; payload: { _id: string } } }

export type UpdateLeadMutationVariables = Exact<{
  input: CreateLeadInput
  leadId: Scalars['String']
}>

export type UpdateLeadMutation = { updateLead: { code: string; message: string; payload: { _id: string } } }

export declare const CreateLead: import('graphql').DocumentNode
export declare const CreateLeadToUser: import('graphql').DocumentNode
export declare const DeleteLead: import('graphql').DocumentNode
export declare const GetDataLead: import('graphql').DocumentNode
export declare const QualifyLead: import('graphql').DocumentNode
export declare const UpdateLead: import('graphql').DocumentNode

export const CreateLeadDocument = gql`
  mutation CreateLead($input: CreateLeadInput!) {
    createLead(input: $input) {
      code
      message
      payload {
        _id
      }
    }
  }
`
export type CreateLeadMutationFn = Apollo.MutationFunction<CreateLeadMutation, CreateLeadMutationVariables>

/**
 * __useCreateLeadMutation__
 *
 * To run a mutation, you first call `useCreateLeadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLeadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLeadMutation, { data, loading, error }] = useCreateLeadMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateLeadMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateLeadMutation, CreateLeadMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateLeadMutation, CreateLeadMutationVariables>(CreateLeadDocument, options)
}
export type CreateLeadMutationHookResult = ReturnType<typeof useCreateLeadMutation>
export type CreateLeadMutationResult = Apollo.MutationResult<CreateLeadMutation>
export type CreateLeadMutationOptions = Apollo.BaseMutationOptions<CreateLeadMutation, CreateLeadMutationVariables>
export const CreateLeadToUserDocument = gql`
  mutation CreateLeadToUser($input: CreateLeadInput!) {
    createLeadToUser(input: $input) {
      code
      message
      payload {
        _id
      }
    }
  }
`
export type CreateLeadToUserMutationFn = Apollo.MutationFunction<
  CreateLeadToUserMutation,
  CreateLeadToUserMutationVariables
>

/**
 * __useCreateLeadToUserMutation__
 *
 * To run a mutation, you first call `useCreateLeadToUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLeadToUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLeadToUserMutation, { data, loading, error }] = useCreateLeadToUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateLeadToUserMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateLeadToUserMutation, CreateLeadToUserMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateLeadToUserMutation, CreateLeadToUserMutationVariables>(
    CreateLeadToUserDocument,
    options
  )
}
export type CreateLeadToUserMutationHookResult = ReturnType<typeof useCreateLeadToUserMutation>
export type CreateLeadToUserMutationResult = Apollo.MutationResult<CreateLeadToUserMutation>
export type CreateLeadToUserMutationOptions = Apollo.BaseMutationOptions<
  CreateLeadToUserMutation,
  CreateLeadToUserMutationVariables
>
export const DeleteLeadDocument = gql`
  mutation DeleteLead($leadId: String!) {
    deleteLead(leadId: $leadId) {
      code
      message
      payload {
        _id
      }
    }
  }
`
export type DeleteLeadMutationFn = Apollo.MutationFunction<DeleteLeadMutation, DeleteLeadMutationVariables>

/**
 * __useDeleteLeadMutation__
 *
 * To run a mutation, you first call `useDeleteLeadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteLeadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteLeadMutation, { data, loading, error }] = useDeleteLeadMutation({
 *   variables: {
 *      leadId: // value for 'leadId'
 *   },
 * });
 */
export function useDeleteLeadMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteLeadMutation, DeleteLeadMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteLeadMutation, DeleteLeadMutationVariables>(DeleteLeadDocument, options)
}
export type DeleteLeadMutationHookResult = ReturnType<typeof useDeleteLeadMutation>
export type DeleteLeadMutationResult = Apollo.MutationResult<DeleteLeadMutation>
export type DeleteLeadMutationOptions = Apollo.BaseMutationOptions<DeleteLeadMutation, DeleteLeadMutationVariables>
export const GetDataLeadDocument = gql`
  query GetDataLead($input: FindLeadInput) {
    getDataLead(input: $input) {
      payload {
        _id
        firstName
        lastName
        citizenId
        passport
        phone {
          value
        }
        email {
          value
        }
        dataSource
        resourceOwner
        status
        image
        leadType
        organizationName
        createdAt
        updatedAt
        createdAtBy {
          email {
            value
          }
          _id
          phone {
            value
          }
          attribute
        }
        updatedAtBy {
          email {
            value
          }
          _id
          phone {
            value
          }
          attribute
        }
      }
      pagination {
        limit
        page
        totalItems
        totalPages
      }
      code
      message
    }
  }
`

/**
 * __useGetDataLeadQuery__
 *
 * To run a query within a React component, call `useGetDataLeadQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDataLeadQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDataLeadQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetDataLeadQuery(
  baseOptions?: Apollo.QueryHookOptions<GetDataLeadQuery, GetDataLeadQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetDataLeadQuery, GetDataLeadQueryVariables>(GetDataLeadDocument, options)
}
export function useGetDataLeadLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetDataLeadQuery, GetDataLeadQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetDataLeadQuery, GetDataLeadQueryVariables>(GetDataLeadDocument, options)
}
export type GetDataLeadQueryHookResult = ReturnType<typeof useGetDataLeadQuery>
export type GetDataLeadLazyQueryHookResult = ReturnType<typeof useGetDataLeadLazyQuery>
export type GetDataLeadQueryResult = Apollo.QueryResult<GetDataLeadQuery, GetDataLeadQueryVariables>
export const QualifyLeadDocument = gql`
  mutation QualifyLead($leadId: String!) {
    qualifyLead(leadId: $leadId) {
      code
      message
      payload {
        _id
      }
    }
  }
`
export type QualifyLeadMutationFn = Apollo.MutationFunction<QualifyLeadMutation, QualifyLeadMutationVariables>

/**
 * __useQualifyLeadMutation__
 *
 * To run a mutation, you first call `useQualifyLeadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useQualifyLeadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [qualifyLeadMutation, { data, loading, error }] = useQualifyLeadMutation({
 *   variables: {
 *      leadId: // value for 'leadId'
 *   },
 * });
 */
export function useQualifyLeadMutation(
  baseOptions?: Apollo.MutationHookOptions<QualifyLeadMutation, QualifyLeadMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<QualifyLeadMutation, QualifyLeadMutationVariables>(QualifyLeadDocument, options)
}
export type QualifyLeadMutationHookResult = ReturnType<typeof useQualifyLeadMutation>
export type QualifyLeadMutationResult = Apollo.MutationResult<QualifyLeadMutation>
export type QualifyLeadMutationOptions = Apollo.BaseMutationOptions<QualifyLeadMutation, QualifyLeadMutationVariables>
export const UpdateLeadDocument = gql`
  mutation UpdateLead($input: CreateLeadInput!, $leadId: String!) {
    updateLead(input: $input, leadId: $leadId) {
      code
      message
      payload {
        _id
      }
    }
  }
`
export type UpdateLeadMutationFn = Apollo.MutationFunction<UpdateLeadMutation, UpdateLeadMutationVariables>

/**
 * __useUpdateLeadMutation__
 *
 * To run a mutation, you first call `useUpdateLeadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLeadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLeadMutation, { data, loading, error }] = useUpdateLeadMutation({
 *   variables: {
 *      input: // value for 'input'
 *      leadId: // value for 'leadId'
 *   },
 * });
 */
export function useUpdateLeadMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateLeadMutation, UpdateLeadMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateLeadMutation, UpdateLeadMutationVariables>(UpdateLeadDocument, options)
}
export type UpdateLeadMutationHookResult = ReturnType<typeof useUpdateLeadMutation>
export type UpdateLeadMutationResult = Apollo.MutationResult<UpdateLeadMutation>
export type UpdateLeadMutationOptions = Apollo.BaseMutationOptions<UpdateLeadMutation, UpdateLeadMutationVariables>
