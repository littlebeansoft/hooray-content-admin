import React from 'react'
import MainLayout from 'layouts/MainLayout/MainLayout'
import TitleComponent from 'components/TitleComponent'
import withAuth from 'middlewares/withAuth'
import { useRouter } from 'next/router'
import { GetDataContactQuery, useGetDataContactQuery } from 'graphql/generated/operations'
import { ContactResponse } from 'graphql/interface'
import ContactDetailCard from 'components/Contact/ContactDataDetail'

const ContactDetail: React.FC = () => {
  const router = useRouter()
  const [contact, setContact] = React.useState<ContactResponse>()

  const { contactId = '' } = router.query

  console.log('contactId:-->', contactId)

  const contactData = useGetDataContactQuery({
    // skip: !router.isReady,
    context: { clientType: 'CUSTOMER' },
    fetchPolicy: 'cache-and-network',
    variables: {
      input: {
        query: {
          _id: contactId as string,
        },
      },
    },
    onCompleted(resp: GetDataContactQuery) {
      setContact(resp.getDataContact.payload[0])
    },
  })

  return (
    <MainLayout breadcrumb={['Home', 'Detail Contact']}>
      <TitleComponent
        title={contact?.firstName + ' ' + contact?.lastName}
        onBack={() =>
          router.push({
            pathname: `/app/[appToken]/contact`,
            query: {
              credentialKey: router.query.credentialKey,
              appToken: router.query.appToken,
            },
          })
        }
      />
      <ContactDetailCard contact={contact} loading={contactData.loading} />
    </MainLayout>
  )
}

export default withAuth(ContactDetail)
