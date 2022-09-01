import { RightOutlined } from '@ant-design/icons'
import { Col, List, Row, Select, Spin, Typography, } from 'antd'
import FullWidthSpace from 'components/FullWidthSpace'
import UploadImage from 'components/UploadImage'
import UploadFileDocument from 'components/UploadFileDocument'
import { allowFileExtensionsDocument, allowFileExtensionsImage } from 'config'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
//


const data = [
    { text: 'หมวดหมู่สินค้า' },
    { text: 'หมวดหมู่สินค้า' },
    { text: 'หมวดหมู่สินค้า' },
    { text: 'หมวดหมู่สินค้า' },
    { text: 'หมวดหมู่สินค้า' },
    { text: 'หมวดหมู่สินค้า' },
    { text: 'หมวดหมู่สินค้า' },
    { text: 'หมวดหมู่สินค้า' },
    { text: 'หมวดหมู่สินค้า' },
    { text: 'หมวดหมู่สินค้า' },
    { text: 'หมวดหมู่สินค้า' },
]

const ProductListSelect: React.FC = () => {





    return (
        <Row style={{ border: '1px solid rgba(140, 140, 140, 0.35)' }} >
            <Col span={8}>
                <WrapperList id='scrollableDiv'>
                    <List
                        size="small"
                        header={false}
                        footer={false}
                        bordered
                        dataSource={data}
                        renderItem={(item, index) => (
                            <List.Item key={index}>
                                <List.Item.Meta
                                    title={item.text} />
                                <div>
                                    <RightOutlined />
                                </div>
                            </List.Item>
                        )}
                        split={false}
                    />
                </WrapperList>
            </Col>
            <Col span={8}>
                <WrapperList>
                    <List
                        size="small"
                        header={false}
                        footer={false}
                        bordered
                        dataSource={data}
                        renderItem={(item, index) => (
                            <List.Item key={index}>
                                <List.Item.Meta
                                    title={item.text} />
                                <div>
                                    <RightOutlined />
                                </div>
                            </List.Item>
                        )}
                        split={false}
                    />
                </WrapperList>
            </Col>
            <Col span={8}>
                <WrapperList>

                </WrapperList>
            </Col>
        </Row>
    )
}

export default ProductListSelect

export const WrapperList = styled.div`
    height: 200px;
    padding: 0 0px;
   // border: 1px solid rgba(140, 140, 140, 0.35);
    overflow: auto;
    
`
