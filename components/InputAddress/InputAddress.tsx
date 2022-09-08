import { Form, Input, Select, Spin, Typography } from 'antd'
import { MasterDataLocationPayload } from 'graphql/interface'
import useGetMasterDataLocation from 'graphql/useGetMasterDataLocation'
import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import { InputAddressProps } from './interface'




const ruleRequired = {
    required: true,
    message: 'Required',
}

const InputAddress: React.FC<InputAddressProps> = ({ addressRes }) => {
    const [thailand, setThailand] = useState('none')
    const [provicesKey, setProvicesKey] = useState("none")
    const [districtKey, setDistrictKey] = useState("none")

    useEffect(() => {
        if (!addressRes) {

        } else {

        }
    }, [addressRes])

    const countries = useGetMasterDataLocation({
        context: { clientType: 'LOCATION' },
        variables: {
            input: {
                query: {
                    parentKey: "COUNTRY",
                    locale: "en"
                },
                pagination: {
                    limit: 999,
                    page: 1
                }
            }
        }
    })

    const provices = useGetMasterDataLocation({
        context: { clientType: 'LOCATION' },
        variables: {
            input: {
                query: {
                    parentKey: thailand,
                    locale: "th"
                },
                pagination: {
                    limit: 999,
                    page: 1
                }
            }
        }
    })

    const district = useGetMasterDataLocation({
        context: { clientType: 'LOCATION' },
        variables: {
            input: {
                query: {
                    parentKey: provicesKey,
                    locale: "th"
                },
                pagination: {
                    limit: 999,
                    page: 1
                }
            }
        }
    })

    const tambon = useGetMasterDataLocation({
        context: { clientType: 'LOCATION' },
        variables: {
            input: {
                query: {
                    parentKey: districtKey,
                    locale: "th"
                },
                pagination: {
                    limit: 999,
                    page: 1
                }
            }
        }
    });

    const getOptions = (payload: MasterDataLocationPayload[] | null) => {
        if (!payload) {
            return
        }

        const rmdPayload = _.uniqBy(payload, 'dataKey');

        let options = rmdPayload.map((item: MasterDataLocationPayload) => {
            return (
                {
                    key: item.dataKey,
                    value: item.text
                }
            )
        })
        return options
    }



    return (
        <>
            <Form.Item name="country" label="ประเทศ">
                <Select
                    showSearch
                    allowClear
                    showArrow
                    style={{ width: 207 }}
                    placeholder="Please Select"
                    filterOption={true}
                    onSelect={(value: any, values: any) => {
                        if (values.key === "COUNTRY.TH") {
                            setThailand("PROVINCE")
                        }
                    }}
                    defaultValue={addressRes?.country}
                    notFoundContent={countries.loading ? <Spin size="small" /> : null}
                    options={getOptions(countries?.data?.getMasterData?.payload ?? null)}
                />
            </Form.Item>
            <Form.Item name="province" label="จังหวัด">
                <Select
                    showSearch
                    allowClear
                    showArrow
                    style={{ width: 207 }}
                    placeholder="Please Select"
                    filterOption={true}
                    onSelect={(value: any, values: any) => {
                        setProvicesKey(values.key)
                    }}
                    notFoundContent={provices.loading ? <Spin size="small" /> : null}
                    options={getOptions(provices?.data?.getMasterData?.payload ?? null)}
                />
            </Form.Item>
            <Form.Item name="district" label="เขต/อำเภอ">
                <Select
                    showSearch
                    allowClear
                    showArrow
                    style={{ width: 207 }}
                    placeholder="Please Select"
                    filterOption={true}
                    onSelect={(value: any, values: any) => {
                        setDistrictKey(values.key)
                    }}
                    notFoundContent={district.loading ? <Spin size="small" /> : null}
                    options={getOptions(district.data?.getMasterData.payload ?? null)}
                />
            </Form.Item>
            <Form.Item name="subDistrict" label="แขวง/ตำบล">
                <Select
                    showSearch
                    allowClear
                    showArrow
                    style={{ width: 207 }}
                    placeholder="Please Select"
                    filterOption={false}
                    notFoundContent={tambon.loading ? <Spin size="small" /> : null}
                    options={getOptions(tambon.data?.getMasterData.payload ?? null)}
                />
            </Form.Item>
            <Form.Item name="postcode" label="เลขที่ไปรษณีย์" rules={[ruleRequired]}>
                <Input placeholder="เลขที่ไปรษณีย์" style={{ width: 221 }} />
            </Form.Item>
        </>
    )
}

export default InputAddress
