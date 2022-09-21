import React from 'react'
import MainLayout from 'layouts/MainLayout/MainLayout'
import TitleComponent from 'components/TitleComponent'
import withAuth from 'middlewares/withAuth'
import ContactDataTableCard from 'components/Contact/ContactDataTableCard'

const AllUser: React.FC = () => {
  return (
    <MainLayout breadcrumb={['Home', '']}>
      <TitleComponent title="Contact" />
      <ContactDataTableCard />
    </MainLayout>
  )
}

export default withAuth(AllUser)
