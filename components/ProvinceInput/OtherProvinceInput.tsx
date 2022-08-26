import { Form, FormItemProps, Select, SelectProps } from 'antd'

import useLocaleTextSelectOption from 'hooks/useLocaleTextSelectOption'

import type { MasterDataLocaleText } from 'graphql/interface'

interface OtherInputProps extends FormItemProps {
  parentKey: string
  defaultMasterDataValue?: MasterDataLocaleText
  selectProps?: SelectProps<any>
}

const OtherProvinceInput: React.FC<OtherInputProps> = ({
  parentKey,
  selectProps,
  defaultMasterDataValue,
  ...props
}) => {
  const { loading, options, onSearch } = useLocaleTextSelectOption(
    'MASTER_DATA',
    parentKey?.replace('MASTER_DATA.IFZ.', ''),
    defaultMasterDataValue
  )

  return (
    <Form.Item {...props}>
      <Select
        {...selectProps}
        style={{ width: '100%' }}
        loading={loading}
        showSearch
        options={options}
        onSearch={onSearch}
      />
    </Form.Item>
  )
}

export default OtherProvinceInput
