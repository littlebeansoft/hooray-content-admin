import { LoadingOutlined } from '@ant-design/icons'
import { Alert, Space } from 'antd'

import { useGetPublicProfileQuery } from 'graphql/__generated/operations'

import { coreClient } from 'setup/apollo'

interface GetUserProfileNameProps {
  userID: string
}

const GetUserProfileName = ({ userID }: GetUserProfileNameProps) => {
  const query = useGetPublicProfileQuery({
    client: coreClient,
    fetchPolicy: 'network-only',
    variables: {
      userIdList: [userID],
    },
  })

  if (query.loading) {
    return <LoadingOutlined />
  }

  if (query.error) {
    return <Alert type="error" message="ไม่สามารเรียกข้อมูลได้" />
  }

  const data = query.data?.getPublicProfile.payload[0]

  return (
    <Space size="small">
      <span>{data?.attribute.firstName}</span>
      <span>{data?.attribute.lastName}</span>
    </Space>
  )
}

export default GetUserProfileName
