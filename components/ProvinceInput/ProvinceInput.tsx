import type { FC } from 'react'

import { Form, Input, Select } from 'antd'

import OtherProvinceInput from './OtherProvinceInput'

import useLocaleTextSelectOption from 'hooks/useLocaleTextSelectOption'

import type { MasterDataLocaleText } from 'graphql/interface'

export interface LocationData {
  province: MasterDataLocaleText | undefined
  distrcit: MasterDataLocaleText | undefined
  subDistrict: MasterDataLocaleText | undefined
}

interface ProvinceInputProps {
  disabled?: boolean
  locationData?: LocationData
}

const ProvinceInput: FC<ProvinceInputProps> = ({ disabled, locationData }) => {
  const { loading, options, onSearch } = useLocaleTextSelectOption('MASTER_DATA', 'COUNTRY.TH', locationData?.province)

  return (
    <>
      <Form.Item noStyle shouldUpdate={() => true}>
        {(form) => (
          <Form.Item label="Province" name="province">
            <Select
              disabled={disabled}
              style={{ width: '100%' }}
              loading={loading}
              showSearch
              onSearch={onSearch}
              options={options}
              onSelect={() => {
                form.setFields([
                  {
                    name: 'district',
                    value: undefined,
                  },
                  {
                    name: 'subDistrict',
                    value: undefined,
                  },
                  {
                    name: 'postCode',
                    value: undefined,
                  },
                ])
              }}
            />
          </Form.Item>
        )}
      </Form.Item>

      <Form.Item noStyle shouldUpdate={(prevValues, nextValues) => prevValues.province !== nextValues.province}>
        {(form) => {
          const parentKey = form.getFieldValue('province')

          return (
            <OtherProvinceInput
              selectProps={{
                disabled: parentKey == null || disabled,
                onSelect: () => {
                  form.setFields([
                    {
                      name: 'subDistrict',
                      value: undefined,
                    },
                    {
                      name: 'postCode',
                      value: undefined,
                    },
                  ])
                },
              }}
              parentKey={parentKey}
              name="district"
              label="District"
              defaultMasterDataValue={locationData?.distrcit}
            />
          )
        }}
      </Form.Item>

      <Form.Item noStyle shouldUpdate={(prevValues, nextValues) => prevValues.district !== nextValues.district}>
        {(form) => {
          const parentKey = form.getFieldValue('district')

          return (
            <OtherProvinceInput
              selectProps={{
                disabled: parentKey == null || disabled,
              }}
              parentKey={parentKey}
              name="subDistrict"
              label="Sub District"
              defaultMasterDataValue={locationData?.subDistrict}
            />
          )
        }}
      </Form.Item>

      <Form.Item noStyle shouldUpdate={(prevValues, nextValues) => prevValues.subDistrict !== nextValues.subDistrict}>
        {(form) => {
          const parentKey = form.getFieldValue('subDistrict')

          return (
            <Form.Item name="zipCode" label="ZIP Code">
              <Input disabled={parentKey == null || disabled} />
            </Form.Item>
          )
        }}
      </Form.Item>
    </>
  )
}

export default ProvinceInput
