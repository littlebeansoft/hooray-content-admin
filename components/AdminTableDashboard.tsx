import { Input, Progress, Space, Table, TableProps } from 'antd'
import type { SearchProps } from 'antd/lib/input'

import FullWidthSpace from 'components/FullWidthSpace'
import ActionRow from 'components/ActionRow'

interface ProgressSelectProps {
  totalItem: number
  selectedItem: number
}

interface AdminTableDashboardProps extends TableProps<any> {
  extra?: React.ReactNode[]
  inputSearchProps?: SearchProps
  progressSelectProps?: ProgressSelectProps
}

const AdminTableDashboard: React.FC<AdminTableDashboardProps> = ({
  extra,
  inputSearchProps,
  progressSelectProps,
  ...props
}) => {
  return (
    <FullWidthSpace direction="vertical" size="large">
      <ActionRow
        leftComponent={inputSearchProps && <Input.Search style={{ width: 400 }} enterButton {...inputSearchProps} />}
        rightComponent={
          <Space size="large">
            {extra && <Space>{extra.map((item) => item)}</Space>}
            {progressSelectProps && renderProgressSelect(progressSelectProps)}
          </Space>
        }
      />

      <Table {...props} />
    </FullWidthSpace>
  )

  function renderProgressSelect(progressSelectProps: ProgressSelectProps) {
    const { totalItem, selectedItem } = progressSelectProps
    const percent = (selectedItem * 100) / totalItem

    return <Progress width={48} type="circle" percent={percent} format={() => `${selectedItem || 0}/${totalItem}`} />
  }
}

export default AdminTableDashboard
