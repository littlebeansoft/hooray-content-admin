import React from 'react'
import MainLayout from 'layouts/MainLayout/MainLayout'
import TitleComponent from 'components/TitleComponent'
import withAuth from 'middlewares/withAuth'
import { useRouter } from 'next/router'
import ProductCreateCard from 'components/Product/ProductCreate/ProductCreateCard'

const ProductCreate: React.FC = () => {
    const router = useRouter()

    return (
        <MainLayout breadcrumb={['Home', 'Add New Product']}>
            <TitleComponent
                title="Add New Product"
                onBack={() =>
                    router.push({
                        pathname: `/org/[orgToken]/product`,
                        query: {
                            ...router.query,
                        },
                    })
                }
            />
            <ProductCreateCard />
        </MainLayout>
    )
}

export default withAuth(ProductCreate)
