import { MinusCircleOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Space, Typography } from 'antd';
import React, { useEffect, useState } from 'react';

const ProductManyPriceChoice: React.FC = () => {

    const [count, setCount] = useState(0)

    return (
        <>
            <Space>
                <Form.List name="choices">
                    {(fields, { add, remove }) => (
                        <>
                            {fields.map(({ key, name, ...restField }) => (
                                <Space key={key} style={{ display: 'flex', marginBottom: 8, flexDirection: 'column' }} align="baseline">
                                    <Form.Item label="ตัวเลืกสินค้า" labelCol={{ span: 8 }}>
                                        <Input placeholder="ชื่อตัวเลือก" />
                                    </Form.Item>
                                </Space>
                            ))}
                            <Form.Item>
                                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />} style={{ borderColor: 'rgb(38 153 251)', color: "rgb(38 153 251)", width: "250px" }} >
                                    เพิ่มตัวเลือก
                                </Button>
                            </Form.Item>
                        </>
                    )}
                </Form.List>
            </Space>
        </>
    );
};

export default ProductManyPriceChoice;