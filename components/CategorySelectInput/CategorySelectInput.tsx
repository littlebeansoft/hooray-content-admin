import { Form, Select, Spin } from 'antd'
import useGetCategory from 'graphql/useGetCategory'
import { GetCategoryResp } from 'graphql/useGetCategory/interface'

import _ from 'lodash'
import React, { useRef, useState } from 'react'

const ruleRequired = {
  required: true,
  message: 'Required',
}

interface CategorySelectInputProps {
  category?: string
}

const CategorySelectInput: React.FC<CategorySelectInputProps> = ({ category }) => {
  const [searchValue, setSearchValue] = useState<string | undefined>(undefined)
  const timer = useRef<ReturnType<typeof setTimeout>>()

  const categoryList = useGetCategory({
    context: {
      clientType: 'LABEL',
    },
    fetchPolicy: 'cache-first',
    variables: {
      input: {
        query: {
          name: searchValue,
        },
        pagination: {
          limit: 30,
          page: 1,
        },
      },
    },
  })

  const onSearch = (value: string) => {
    clearTimeout(timer.current!)

    timer.current = setTimeout(() => {
      setSearchValue(value)
    }, 500)
  }

  const getOptions = (payload: GetCategoryResp[] | null) => {
    if (!payload) {
      return undefined
    }
    let options = payload.map((item: GetCategoryResp) => {
      return {
        key: item._id,
        value: item.name || '',
      }
    })
    return options
  }

  return (
    <>
      <Form.Item name="category" label="ประเภทสินค้า">
        <Select
          showSearch
          style={{ width: 207 }}
          placeholder="ประเภทสินค้าที่ขาย"
          filterOption={false}
          onSearch={onSearch}
          notFoundContent={categoryList.loading ? <Spin size="small" /> : null}
          options={
            categoryList.data
              ? getOptions(categoryList?.data?.getCategory.payload)
              : [
                  {
                    key: 'ไม่พบข้อมูล',
                    value: 'ไม่พบข้อมูล',
                  },
                ]
          }
        />
      </Form.Item>
    </>
  )
}

export default CategorySelectInput
