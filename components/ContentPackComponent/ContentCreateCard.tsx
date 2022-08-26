import { Card, Form } from 'antd'
import FullWidthSpace from 'components/FullWidthSpace'
import { useRouter } from 'next/router'
import React from 'react'
import ContentCreateForm from './ContentCreateForm'

const ContentCreateCard: React.FC = () => {
    const router = useRouter()

    const [form] = Form.useForm()



    const onBack = () => {
        router.push({
            pathname: `/org/[orgToken]/content-pack`,
            query: {
                ...router.query,
            },
        })
    }

    const onFinish = (values: any) => {
        console.log("value: " + values);
    }

    return (
        <Card className="w-100" style={{ marginTop: '1.5em' }}>
            <FullWidthSpace direction="vertical">
                <ContentCreateForm 
                form={form} 
                onFinish={onFinish}
                />
            </FullWidthSpace>
        </Card>
    )
}

export default ContentCreateCard
