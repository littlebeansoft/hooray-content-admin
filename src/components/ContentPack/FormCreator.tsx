import { Col, Form, Row, Select } from 'antd'

import ContentBlock from 'components/ContentBlock'

import { useGetListCreatorsProfileQuery } from 'graphql/__generated/operations'

import { coreClient } from 'setup/apollo'

const FormCreator = () => {
  const query = useGetListCreatorsProfileQuery({
    client: coreClient,
  })

  const listCreators = query.data?.getResourceAdmin.payload

  return (
    <ContentBlock title="ข้อมูลผู้สอน">
      <Row gutter={[32, 16]}>
        <Col span={24}>
          <Form.Item label="ผู้สอน" name="creatorIDs">
            <Select mode="multiple" showSearch>
              {listCreators?.map((item) => (
                <Select.Option key={item._id} value={item._id}>
                  <span>
                    {item.attribute.firstName} {item.attribute.lastName}
                  </span>
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>
    </ContentBlock>
  )
}

export default FormCreator
