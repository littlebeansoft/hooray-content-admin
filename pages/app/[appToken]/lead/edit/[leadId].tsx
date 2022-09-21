import React from 'react'
import MainLayout from 'layouts/MainLayout/MainLayout'
import TitleComponent from 'components/TitleComponent'
import withAuth from 'middlewares/withAuth'
import { useRouter } from 'next/router'
import { GetDataLeadQuery, useGetDataLeadQuery } from 'graphql/generated/operations'
import { LeadDataAPIPayload } from 'graphql/interface'
import LeadUpdateCard from 'components/Lead/LeadUpdateCard'

const UpdateLeadPage: React.FC = () => {
  const router = useRouter()
  const [leadData, setLeadData] = React.useState<LeadDataAPIPayload>()
  const { leadId = '' } = router.query

  const lead = useGetDataLeadQuery({
    // skip: !router.isReady,
    context: { clientType: 'CUSTOMER' },
    fetchPolicy: 'cache-and-network',
    variables: {
      input: {
        query: {
          _id: leadId as string,
        },
      },
    },
    onCompleted(resp: GetDataLeadQuery) {
      setLeadData(resp.getDataLead.payload[0])
    },
  })

  return (
    <MainLayout breadcrumb={['Home', '']}>
      <TitleComponent
        title={leadData?.firstName + ' ' + leadData?.lastName}
        onBack={() =>
          router.push({
            pathname: `/app/[appToken]/lead`,
            query: {
              credentialKey: router.query.credentialKey,
              appToken: router.query.appToken,
            },
          })
        }
      />
      <LeadUpdateCard leadData={leadData} loading={lead.loading} edit={true} />
    </MainLayout>
  )
}

export default withAuth(UpdateLeadPage)
