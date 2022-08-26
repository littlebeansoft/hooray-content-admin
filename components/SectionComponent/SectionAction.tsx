import type { FC } from 'react'

import { useRouter } from 'next/router'
import { EditOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Tooltip, Space } from 'antd'

import type { ContentPackAPIPayload } from './interface'

interface ContentPackActionProps {
  data: ContentPackAPIPayload
}

const SectionAction: FC<ContentPackActionProps> = ({ data }) => {
  const router = useRouter()

  return (
    <Space size="large">
      <Tooltip title={`Edit  ${data.title} `}>
        <Button
          icon={<EditOutlined />}
          // type="primary"
          onClick={() =>
            router.push({
              pathname: `${router.pathname}/[productPropertyId]`,
              query: {
                ...router.query,
                productPropertyId: data._id,
              },
            })
          }
        />
      </Tooltip>
      <Tooltip style={{ marginLeft: '20px' }} title={`Add section ${data.title} `}>
        <Button
          icon={<PlusOutlined />}
          // type="primary"
          onClick={() =>
            router.push({
              pathname: `/org/[orgToken]/section/[contentId]`,
              query: {
                ...router.query,
                contentId: data._id,
              },
            })
          }
        />
      </Tooltip>
    </Space>
  )
}

export default SectionAction