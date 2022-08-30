import React from 'react'
import MainLayout from 'layouts/MainLayout/MainLayout'
import TitleComponent from 'components/TitleComponent'
import withAuth from 'middlewares/withAuth'
import UserDataTableCard from 'components/Users/UsersDataTableCard'

const AllUser: React.FC = () => {
    return (
        <MainLayout breadcrumb={['Home', '']}>
            <TitleComponent title="All User" />
            <UserDataTableCard />
        </MainLayout>
    )
}

export default withAuth(AllUser)
