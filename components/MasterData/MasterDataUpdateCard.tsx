import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Card, Spin, Form } from 'antd'

import FullWidthSpace from 'components/FullWidthSpace'
import MasterDataForm from 'components/MasterData/MasterDataForm'
import useUpdateMasterData from 'graphql/useUpdateMasterData'
import DangerZone from 'components/DangerZone'
import useGetMasterData from 'graphql/useGetMasterData'
import useDeleteMasterData from 'graphql/useDeleteMasterData'

const MasterDataUpdateCard: React.FC = () => {
  const router = useRouter()
  const [form] = Form.useForm()
  const { dataKey = '', parentKey = '' } = router.query
  const masterData = useGetMasterData({
    // notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
    variables: {
      input: {
        query: {
          dataKey: dataKey,
          parentKey: parentKey || null,
        },
      },
    },
    onCompleted: (res) => {
      form.setFieldsValue({
        dataKey: res.getMasterData.payload[0].dataKey.split('.').pop(),
        localeTextList: (res.getMasterData.payload[0].localeTextList || []).map((value) => {
          return {
            locale: value.locale,
            text: value.text,
          }
        }),
      })
    },
  })
  const [updateUpdateMasterData, updateUpdateMasterDataResp] = useUpdateMasterData({
    onCompleted() {
      router.push({
        pathname: `/app/[appToken]/master-data`,
        query: {
          ...router.query,
        },
      })
    },
  })
  const [deleteMasterData, deleteMasterDataResp] = useDeleteMasterData({
    onCompleted() {
      router.push({
        pathname: `/app/[appToken]/master-data`,
        query: {
          ...router.query,
        },
      })
    },
  })
  const onBack = () => {
    router.push({
      pathname: `/app/[appToken]/master-data`,
      query: {
        ...router.query,
      },
    })
  }

  const onDelete = () => {
    deleteMasterData({
      variables: {
        dataKey: dataKey.toString(),
      },
    })
  }
  const onFinish = (values: any) => {
    console.log(values)
    updateUpdateMasterData({
      variables: {
        dataKey: parentKey ? parentKey?.toString() + '.' + values?.dataKey : values?.dataKey,
        masterDataInput: {
          dataKey: parentKey ? parentKey?.toString() + '.' + values?.dataKey : values?.dataKey,
          parentKey: parentKey ? parentKey?.toString() : null,
        },
        localeInputList: values.localeTextList,
      },
    })
  }

  return (
    <Card className="w-100" style={{ marginTop: '1.5em' }}>
      <FullWidthSpace direction="vertical">
        {masterData.data?.getMasterData && (
          <>
            <MasterDataForm onFinish={onFinish} onCancel={onBack} form={form} />
            <DangerZone onDelete={onDelete} topic={'Master data'} loading={masterData.loading} buttonLabel={'Delete'} />
          </>
        )}
      </FullWidthSpace>
    </Card>
  )
}

export default MasterDataUpdateCard
