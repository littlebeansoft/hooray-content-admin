import { useRef } from 'react'
import styled from '@emotion/styled'
import { Button, Col, Form, FormListOperation, Input, Row } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'

import ContentBlock from 'components/ContentBlock'
import UploadFile from 'components/UploadFile'
import TinyEditor from 'components/TinyEditor'
import Label, { LabelContainer } from 'components/Label'

import { ruleRequired } from 'helpers/antdUtils'

const ContentFormGeneral = () => {
  const objectiveRef = useRef<FormListOperation>()
  const requirementRef = useRef<FormListOperation>()
  const suitableRef = useRef<FormListOperation>()

  return (
    <ContentBlock title="ข้อมูลหลักสูตร">
      <Row gutter={[32, 16]}>
        <Col span={24}>
          <Form.Item
            label="รูปปกหลักสูตร"
            name="covers"
            help="ขนาดรูปที่แนะนำคือ 21:9 เช่น 2560 x 1080 px ถ้าหากขนาดไม่ถูกต้องการแสดงผลอาจจะผิดพลาด"
            rules={[ruleRequired]}
          >
            <UploadFile />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item
            label="รูปขนาดย่อ"
            name="thumbnails"
            help="ขนาดรูปที่แนะนำคือ 16:9 เช่น 1920 x 1080 px ถ้าหากขนาดไม่ถูกต้องการแสดงผลอาจจะผิดพลาด"
            rules={[ruleRequired]}
          >
            <UploadFile />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="ชื่อ" name="title" rules={[ruleRequired]}>
            <Input />
          </Form.Item>
        </Col>
        {/* <Col span={12}>
          <Form.Item label="หมวดหมู่" name="categoryIDs" rules={[ruleRequired]}>
            <CategorySearchInput />
          </Form.Item>
        </Col> */}

        <Col span={24}>
          <Form.Item
            label="คำอธิบาย"
            name="description"
            trigger="onEditorChange"
            rules={[ruleRequired]}
          >
            <TinyEditor />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item label="ตัวอย่างหลักสูตร (วิดิโอ)" name="previewUrls">
            <UploadFile allowFileExtension=".mp4,.mkv,.mov,.avi" />
          </Form.Item>
        </Col>

        <Col span={24}>
          <LabelContainer>
            <Label>วัตถุประสงค์</Label>

            <Button
              type="primary"
              size="small"
              icon={<PlusOutlined />}
              onClick={() => objectiveRef.current?.add()}
            >
              เพิ่ม
            </Button>
          </LabelContainer>

          <Form.List name="objectives">
            {(fields, handler) => {
              objectiveRef.current = handler

              if (fields.length === 0) {
                return <NotFoundListItem>ยังไม่มีวัตถุประสงค์</NotFoundListItem>
              }

              return (
                <>
                  {fields.map((field) => (
                    <Form.Item key={field.key}>
                      <ListItemContainer>
                        <Form.Item {...field} rules={[ruleRequired]} noStyle>
                          <Input placeholder="กรอกวัตถุประสงค์" />
                        </Form.Item>

                        <MinusCircleOutlined
                          className="list-remove-item-button"
                          onClick={() =>
                            objectiveRef.current?.remove(field.name)
                          }
                        />
                      </ListItemContainer>
                    </Form.Item>
                  ))}
                </>
              )
            }}
          </Form.List>
        </Col>

        <Col span={24}>
          <LabelContainer>
            <Label>ข้อกำหนดการเรียน</Label>

            <Button
              type="primary"
              size="small"
              icon={<PlusOutlined />}
              onClick={() => requirementRef.current?.add()}
            >
              เพิ่ม
            </Button>
          </LabelContainer>

          <Form.List name="requirements">
            {(fields, handler) => {
              requirementRef.current = handler

              if (fields.length === 0) {
                return (
                  <NotFoundListItem>ยังไม่มีข้อกำหนดการเรียน</NotFoundListItem>
                )
              }

              return (
                <>
                  {fields.map((field) => (
                    <Form.Item key={field.key}>
                      <ListItemContainer>
                        <Form.Item {...field} rules={[ruleRequired]} noStyle>
                          <Input placeholder="กรอกข้อกำหนดการเรียน" />
                        </Form.Item>

                        <MinusCircleOutlined
                          className="list-remove-item-button"
                          onClick={() =>
                            requirementRef.current?.remove(field.name)
                          }
                        />
                      </ListItemContainer>
                    </Form.Item>
                  ))}
                </>
              )
            }}
          </Form.List>
        </Col>

        <Col span={24}>
          <LabelContainer>
            <Label>ใครเหมาะสำหรับหลักสูตรนี้</Label>

            <Button
              type="primary"
              size="small"
              icon={<PlusOutlined />}
              onClick={() => suitableRef.current?.add()}
            >
              เพิ่ม
            </Button>
          </LabelContainer>

          <Form.List name="suitables">
            {(fields, handler) => {
              suitableRef.current = handler

              if (fields.length === 0) {
                return (
                  <NotFoundListItem>
                    ยังไม่มีใครเหมาะสำหรับหลักสูตรนี้
                  </NotFoundListItem>
                )
              }

              return (
                <>
                  {fields.map((field) => (
                    <Form.Item key={field.key}>
                      <ListItemContainer>
                        <Form.Item {...field} rules={[ruleRequired]} noStyle>
                          <Input placeholder="กรอกใครเหมาะสำหรับหลักสูตรนี้" />
                        </Form.Item>

                        <MinusCircleOutlined
                          className="list-remove-item-button"
                          onClick={() =>
                            suitableRef.current?.remove(field.name)
                          }
                        />
                      </ListItemContainer>
                    </Form.Item>
                  ))}
                </>
              )
            }}
          </Form.List>
        </Col>
      </Row>
    </ContentBlock>
  )
}

export default ContentFormGeneral

const NotFoundListItem = styled.div`
  width: 100%;
  height: 100px;
  border: 1px dashed #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ListItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  > .list-remove-item-button {
    font-size: 20px;
    color: #999;
  }
`
