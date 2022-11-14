import { Select, SelectProps, Spin } from 'antd'

import { useGetCategoryForSearchQuery } from 'graphql/__generated/operations'

import { labelClient } from 'setup/apollo'

const CategorySearchInput = (props: SelectProps) => {
  const query = useGetCategoryForSearchQuery({
    client: labelClient,
    variables: {
      input: {
        pagination: {
          limit: 1000,
        },
      },
    },
  })

  const selectOptions = query.data?.getCategory.payload.map((item) => ({
    label: item.name,
    value: item._id,
  }))

  return (
    <Select
      {...props}
      allowClear
      showSearch
      mode="multiple"
      placeholder="ค้นหาหมวดหมู่"
      loading={query.loading}
      options={selectOptions}
      notFoundContent={query.loading ? <Spin size="small" /> : null}
    />
  )
}

export default CategorySearchInput
