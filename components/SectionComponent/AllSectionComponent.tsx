import React, { useState } from 'react'
import { Card, Button, Typography } from 'antd'
import { useRouter } from 'next/router'
import { ExportOutlined, FileDoneOutlined, FileExclamationOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { fallBackValueTable } from 'helpers/util'
import { ColumnsType } from 'antd/lib/table'
import type { ContentPackAPIPayload } from './interface'
import type { Pagination } from 'graphql/graphQL-service-hook'
import { defaultPagination } from 'config/paginationConfig'
import CustomTable from 'components/CustomTable'
import { formatDate } from 'helpers/formatter'
import SectionAction from './SectionAction'


const { Text } = Typography



const mockData = [
    {
        _id: "1",
        cover: "https://img-c.udemycdn.com/course/240x135/4689378_7c1d_2.jpg",
        title: "Front-End Figma HTML CSS Designers to Developers",
        description: "คอร์สเรียน Front-End Figma HTML CSS Designers to Developers the Series",
        catagory: "Development",
        contentPreviewUrl: "https://www.youtube.com/watch?v=d7xcLnuskqw",
        price: 2500,
        lengthText: "12:30:06",
        numOfsections: 5,
        numOfcontent: 56,
        section: [
            {
                _id: "12",
                title: "บทที่ 1 Setup project",
                "lengthText": "1:30:06",
                numOfcontent: 5,
                sortOrder: 1,
                status: "ACTIVE",
                createAt: "2022-08-24T13:48:15Z",
                updateAt: "2022-08-24T13:48:15Z",
            },
            {
                _id: "13",
                title: "บทที่ 2 Setup project",
                "lengthText": "1:30:06",
                numOfcontent: 5,
                sortOrder: 2,
                status: "ACTIVE",
                createAt: "2022-08-24T13:48:15Z",
                updateAt: "2022-08-24T13:48:15Z",
            }
        ],
        status: 'ACTIVE',
        createAt: "2022-08-24T13:48:15Z",
        updateAt: "2022-08-24T13:48:15Z",
    }
]

const AllSectionComponent: React.FC = () => {
    const router = useRouter()
    const [pagination, setPagination] = useState<Pagination>(defaultPagination)
    const [search, setSearch] = useState<string>()
    const [isVisible, setIsVisible] = useState(false)

    const columns: ColumnsType<ContentPackAPIPayload> = [
        {
            title: 'Oder',
            dataIndex: 'sortOrder',
            key: 'sortOrder',
            width: 50,
            ellipsis: true,
            fixed: "left",
            render: (_text) => fallBackValueTable(_text),
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            width: 150,
            ellipsis: true,
            fixed: "left",
            render: (_text) => fallBackValueTable(_text),
        },
        {
            title: 'Length',
            dataIndex: 'lengthText',
            key: 'lengthText',
            width: 100,
            ellipsis: true,
            render: (_text) => fallBackValueTable(_text),
        },
        {
            title: 'VDO Content',
            dataIndex: 'numOfcontent',
            key: 'numOfcontent',
            width: 100,
            ellipsis: true,
            render: (_text) => fallBackValueTable(_text),
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            width: 150,
            ellipsis: true,
            render: (text, record) => {
                let _tColor
                let _iCon
                let _text

                console.log("text: " + text)

                switch (text) {
                    default:
                    case 'INACTIVE':
                        _tColor = '#FFB200'
                        _iCon = [<FileExclamationOutlined key="file-icon" />]
                        _text = 'Inactive'
                        break
                    case 'ACTIVE':
                        _tColor = '#34B53A'
                        _iCon = [<ExportOutlined key="export-icon" />]
                        _text = 'Active'
                        break
                }

                return (
                    <Text style={{ color: _tColor, border: "solid" }} /* type={_tColor || 'warning'} */>
                        {/* {_iCon}{" "} */}
                        {_text}
                    </Text>
                ) // just for decoration
            },
        },
        {
            title: 'Create At',
            dataIndex: 'createAt',
            key: 'createAt',
            width: 100,
            ellipsis: true,
            render: (createAt) => (createAt ? formatDate(createAt) : '-'),
        },
        {
            title: 'Update At',
            dataIndex: 'updateAt',
            key: 'updateAt',
            width: 100,
            ellipsis: true,
            render: (updateAt) => (updateAt ? formatDate(updateAt) : '-'),
        },
        {
            key: 'eventAction',
            width: 100,
            align: 'center',
            fixed: 'right',
            render: (_text, record) => <SectionAction data={record} />,
        },
    ]

    return (
        <>
            <Card className="w-100" style={{ marginTop: '1em' }}>
                <CustomTable
                    onSearch={(value: string) => {
                        setSearch(value)
                    }}
                    header={[
                        <Button
                            key="addProductType"
                            type="primary"
                            icon={<PlusCircleOutlined />}
                            onClick={() => {
                                router.push({
                                    pathname: `${router.pathname}/create`,
                                    query: {
                                        ...router.query,
                                    },
                                })
                            }}
                        >
                            Create Section
                        </Button>,
                    ]}
                    rowKey="_id"
                    scroll={{ x: 800, y: 300 }}
                    loading={false}
                    pagination={{
                        current: pagination?.page,
                        pageSize: pagination?.limit,
                        total: pagination?.totalItems,
                        onChange: (page: number) => {
                            setPagination({ ...pagination, page })
                        },
                    }}
                    columns={columns}
                    dataSource={mockData[0].section}
                />
            </Card>
        </>
    )
}

export default AllSectionComponent
