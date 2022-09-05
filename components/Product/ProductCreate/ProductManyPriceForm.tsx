import { MinusCircleOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Space, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import ProductManyPriceChoice from './ProducManyPriceChoice';
import { v4 as uuidv4 } from 'uuid';

const ProductManyPriceForm: React.FC = () => {

  const [count, setCount] = useState(0)
  const [formList, setFormList] = useState<{id: any}[]>([])


  return (
    <>
      {formList.map((item, index) => {
        return (
          <Row key={index} style={{ width: '100%', }} >
            <Col xl={6} md={4} sm={24} >
              <Typography>
                ตัวเลือก
              </Typography>
            </Col>
            <Col xl={18} md={20} sm={24} >
              <Space style={{ display: 'flex', marginBottom: 8, flexDirection: 'column', }} align='start' >
                <Space style={{ display: 'flex', marginBottom: 8, flexDirection: 'row', width: "100%" }} align='baseline'   >
                  <Form.Item
                    name="nameChoices"
                    label={"ชื่อตัวเลือก"}
                    labelCol={{ span: 8 }}
                  >
                    <Input placeholder="ชื่อตัวเลือก" style={{ width: "100%" }} />
                  </Form.Item>
                  <DeleteOutlined onClick={() => {
                    setFormList(formList.filter(i => i.id === item.id));
                  }} style={{ fontSize: '20px', textAlign: 'center' }} />
                </Space>
                <ProductManyPriceChoice key={index} />
              </Space>
            </Col>
          </Row>
        )
      })}

      <Row>
        <Col xl={6} md={4} sm={24} >
          <Typography>
            ตัวเลือก
          </Typography>
        </Col>
        <Col xl={18} md={20} sm={24}>
          <Form.Item>
            <Button type="dashed" block icon={<PlusOutlined />}
              style={{
                borderColor: 'rgb(38 153 251)', color: "rgb(38 153 251)",
                width: "50%"
              }}
              onClick={() => {
                setFormList([...formList, { id: uuidv4() }])
              }}
            >
              เพิ่ม
            </Button>
          </Form.Item>
        </Col>
      </Row>

    </>

  );
};

export default ProductManyPriceForm;