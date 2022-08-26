import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Card, Spin, Form } from 'antd'

import FullWidthSpace from 'components/FullWidthSpace'
import MasterDataForm from 'components/MasterData/MasterDataForm'
import useCreateMasterData from 'graphql/useCreateMasterData'

const ProductTypeCreateCard: React.FC = () => {
  const router = useRouter()
  const { parentKey = null } = router.query
  const [form] = Form.useForm()
  form.setFieldsValue({
    localeTextList: [
      {
        locale: 'en',
        text: '',
      },
      {
        locale: 'th',
        text: '',
      },
    ],
  })
  const [createMasterData, createMasterDataResp] = useCreateMasterData({
    onCompleted() {
      router.push({
        pathname: `/app/[appToken]/master-data`,
        query: {
          ...router.query,
          parentKey: parentKey,
        },
      })
    },
  })

  const onBack = () => {
    router.push({
      pathname: `/app/[appToken]/master-data`,
      query: {
        ...router.query,
        parentKey: parentKey,
      },
    })
  }
  const onFinish = (values: any) => {
    createMasterData({
      variables: {
        masterDataInput: {
          dataKey: parentKey ? parentKey?.toString() + '.' + values?.dataKey : values?.dataKey,
          parentKey: parentKey ? parentKey?.toString() : null,
        },
        localeListInput: values.localeTextList,
      },
    })
  }

  return (
    <Card className="w-100" style={{ marginTop: '1.5em' }}>
      <FullWidthSpace direction="vertical">
        <MasterDataForm onFinish={onFinish} onCancel={onBack} form={form} />
      </FullWidthSpace>
    </Card>
  )
}

export default ProductTypeCreateCard
