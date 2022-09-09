import { Card, Form, message } from 'antd'
import FullWidthSpace from 'components/FullWidthSpace'
import useCreateLead from 'graphql/useCreateLead'
import { CreateLeadInput } from 'graphql/useCreateLead/interface'
import { useRouter } from 'next/router'
import React from 'react'
import LeadCreateForm from './LeadCreateForm'
import QUERY_LEAD from 'graphql/useGetLeadData/getLeadData'

const LeadCreateCard: React.FC = () => {
    const router = useRouter()

    const [form] = Form.useForm()



    const [createLead, createLeadResp] = useCreateLead({
        onCompleted() {
            message.success('Created Lead was Successfully')
            router.push({
                pathname: `/org/[orgToken]/lead`,
                query: {
                    ...router.query,
                },
            })
        },
    })

    const onFinish = (values: any) => {
        //console.log("Value: -->" + JSON.stringify(values));

        createLead({
            context: { clientType: 'CUSTOMER' },
            variables: {
                input: {
                    ...values,
                    image: values?.image[0],
                    phone: [
                        { value: values.phone }
                    ],
                    email: [
                        { value: values.email }
                    ]
                }
            },
            refetchQueries: [
                {
                    query: QUERY_LEAD,
                    context: { clientType: 'CUSTOMER' },
                    fetchPolicy: 'network-only',
                    variables: {
                        input: {
                            pagination: {
                                limit: 10,
                                page: 1,
                            }
                        }
                    }

                }
            ]
        })
    }

    return (
        <Card className="w-100" style={{ marginTop: '1.5em' }}>
            <FullWidthSpace direction="vertical">
                <LeadCreateForm
                    form={form}
                    onFinish={onFinish}
                />
            </FullWidthSpace>
        </Card>
    )
}

export default LeadCreateCard
