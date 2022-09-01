import React from 'react'
import MainLayout from 'layouts/MainLayout/MainLayout'
import TitleComponent from 'components/TitleComponent'
import withAuth from 'middlewares/withAuth'
import { useRouter } from 'next/router'
import OrganizationCreateCard from 'components/OrganizationLabel/OrganizationLabelCreate/OrganizationCreateCard'

const OrganizationLabelCreate: React.FC = () => {
  const router = useRouter()

  return (
    <MainLayout breadcrumb={['Home', 'Add New Organization Label']}>
      <TitleComponent
        title="Add New Organization Label"
        onBack={() =>
          router.push({
            pathname: `/org/[orgToken]/organization-label`,
            query: {
              ...router.query,
            },
          })
        }
      />
      <OrganizationCreateCard />
    </MainLayout>
  )
}

export default withAuth(OrganizationLabelCreate)
