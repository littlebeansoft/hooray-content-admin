import React, { useState } from 'react'
import { Card, Button, Row, Col, Avatar, Radio, Image } from 'antd'
import { useRouter } from 'next/router'
import type { CardContentListProp } from './interface'
import { calculateTimeToArray } from 'utils/calculateTime'
import { EditOutlined, ToolOutlined } from '@ant-design/icons'


const CardContentList: React.FC<CardContentListProp> = ({ data }) => {
    const router = useRouter()

    return (
        <Card
            className="w-100"
            bodyStyle={{ display: "none" }}
            title={
                <Row justify="space-between" align="middle" gutter={[0, 0]}>
                    <Col span={24} md={12} className="col-info">
                        <Avatar.Group>
                            <Image width={213} height={120} alt="" src={data.cover} />
                            <div className="ml-2">
                                <h4 className="">{data.title}</h4>
                                <h5>{data.description}</h5>
                                <div style={{ display: "flex", flexDirection: "row" }}>
                                    <h5>การบรรยาย {calculateTimeToArray(data.length)[0]} ชั่วโมง:{calculateTimeToArray(data.length)[1]}นาที   </h5>

                                    <h5 className="ml-2" >
                                        บทเรียน {data.numOfsections} บท
                                    </h5>
                                    {" "}
                                    <h5 className="ml-2" >
                                        วีดีโอทั้งหมด {data.numOfcontent} วีดีโอ
                                    </h5>
                                </div>

                                <h4>ราคา {data.price}</h4>
                            </div>
                        </Avatar.Group>
                    </Col>
                    <Col
                        span={24}
                        md={12}
                        style={{
                            display: "flex",
                            alignItems: "flex-end",
                            justifyContent: "flex-end",
                        }}
                    >
                        <Button.Group>
                            <Button icon={<EditOutlined />} >EDIT</Button>
                            <Button icon={<ToolOutlined />} >MANAGE</Button>
                        </Button.Group>
                    </Col>
                </Row>
            }
        ></Card>

    )
}

export default CardContentList
