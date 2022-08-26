import { SaveOutlined } from '@ant-design/icons'
import { Button } from 'antd'

const RightSubmitButton: React.FC = () => {
  return (
    <div style={{ width: '100%', textAlign: 'right' }}>
      <Button icon={<SaveOutlined />} type="primary" htmlType="submit">
        Save
      </Button>
    </div>
  )
}

export default RightSubmitButton
