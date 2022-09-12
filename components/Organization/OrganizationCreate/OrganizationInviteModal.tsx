import { Button, Col, Form, Input, Modal, Row, Select } from 'antd'
import React, { useState } from 'react'
import { PlusCircleOutlined, PlusOutlined } from '@ant-design/icons'

const OrganizationInviteModal: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <>
      <Button type="primary" ghost onClick={showModal} icon={<PlusOutlined />}>
        เชิญสมาชิก
      </Button>
      <Modal title="การเชิญสมาชิก (สูงสุด 1 คน)" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
          <Row gutter={20}>
            <Col span={12}>
              <Form.Item name="phoneNumber" label="เบอร์โทรศัพท์">
                <Input placeholder="เบอร์โทรศัพท์" type="text" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="role" label="บทบาท">
                <Select
                  //showSearch
                  allowClear
                  showArrow
                  style={{ width: '100%' }}
                  placeholder="Please Select"
                  // onSearch={categoryProperty.onSearch}
                  filterOption={false}
                  //  notFoundContent={categoryProperty.loading ? <Spin size="small" /> : null}
                  // options={categoryProperty.options}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  )
}

export default OrganizationInviteModal
