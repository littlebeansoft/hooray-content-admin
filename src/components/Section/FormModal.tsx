import {
  Col,
  Form,
  FormInstance,
  Input,
  InputNumber,
  Modal,
  ModalProps,
  Row,
  Switch,
} from 'antd'
import TinyEditor from 'components/TinyEditor'

import { baseFormProps, ruleRequired } from 'helpers/antdUtils'

import type { RecordType as FormValues } from './ListTable'

const { useForm, useFormInstance } = Form

interface SectionFormModalProps {
  form: FormInstance<FormValues>
  modalProps?: ModalProps
  onFinish?: (values: FormValues) => void
}

const SectionFormModal = ({
  form,
  modalProps,
  onFinish,
}: SectionFormModalProps) => {
  return (
    <Modal destroyOnClose width={768} {...modalProps}>
      <Form {...baseFormProps} form={form} onFinish={onFinish}>
        <Row gutter={[32, 16]}>
          <Col span={12}>
            <Form.Item label="ชื่อบทเรียน" name="title" rules={[ruleRequired]}>
              <Input placeholder="กรอกชื่อบทเรียน" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="ลำดับ" name="sortOrder" rules={[ruleRequired]}>
              <InputNumber
                style={{ width: '100%' }}
                min={1}
                placeholder="กรอกลำดับบทเรียน"
              />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              label="คำอธิบาย"
              name="description"
              rules={[ruleRequired]}
              trigger="onEditorChange"
            >
              <TinyEditor />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item label="เปิดใช้งาน" name="active" valuePropName="checked">
              <Switch />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  )
}

export default SectionFormModal

export const useParentFormInstance = () => useForm<FormValues>()

export const useChildFormInstance = () => useFormInstance<FormValues>()
