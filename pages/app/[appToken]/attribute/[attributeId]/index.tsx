import React from 'react'
import MainLayout from 'layouts/MainLayout/MainLayout'
import TitleComponent from 'components/TitleComponent'
import withAuth from 'middlewares/withAuth'
import { useRouter } from 'next/router'
import AttributeUpdateCard from 'components/Attribute/AttributeUpdateCard'
import getAttribute from 'graphql/useGetAttribute'
import { GetAttributeResp } from 'graphql/useGetAttribute/interface'

const AttributeUpdate: React.FC = () => {
  const router = useRouter()
  const { attributeId = '' } = router.query
  const [attribute, setAttribute] = React.useState<GetAttributeResp>()

  // console.log('Attribute-Id', attributeId)

  const attributeList = getAttribute({
    context: {
      clientType: 'LABEL',
    },
    fetchPolicy: 'network-only',
    variables: {
      input: {
        query: {
          attributeId: attributeId as string,
        },
      },
    },
    onCompleted(resp: any) {
      const data = resp.getAttribute
      setAttribute(data.payload[0])
    },
  })

  return (
    <MainLayout breadcrumb={['Home', '']}>
      <TitleComponent
        title={attribute?.name || ''}
        onBack={() =>
          router.push({
            pathname: `/app/[appToken]/attribute`,
            query: {
              credentialKey: router.query.credentialKey,
              appToken: router.query.appToken,
            },
          })
        }
      />
      <AttributeUpdateCard attribute={attribute} loading={attributeList.loading} />
    </MainLayout>
  )
}

export default withAuth(AttributeUpdate)
