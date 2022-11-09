import { LoadingOutlined } from '@ant-design/icons'
import { Alert, Space, Tag } from 'antd'

import { useGetPublicProfileQuery } from 'graphql/__generated/operations'

import { coreClient } from 'setup/apollo'

interface GetInstructorProfileNameProps {
  userIDs: string[]
}

const GetInstructorProfileName = ({
  userIDs,
}: GetInstructorProfileNameProps) => {
  const query = useGetPublicProfileQuery({
    client: coreClient,
    fetchPolicy: 'network-only',
    variables: {
      userIdList: userIDs,
    },
  })

  if (query.loading) {
    return <LoadingOutlined />
  }

  if (query.error) {
    return <Alert type="error" message="ไม่สามารเรียกข้อมูลผู้สอนได้" />
  }

  const data = query.data?.getPublicProfile.payload

  return (
    <>
      {data?.map((item) => (
        <Tag key={item._id}>
          <Space size="small">
            <span>{item?.attribute.firstName}</span>
            <span>{item?.attribute.lastName}</span>
          </Space>
        </Tag>
      ))}
    </>
  )
}

export default GetInstructorProfileName
