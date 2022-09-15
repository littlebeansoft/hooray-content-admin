import React from 'react'
import withAuth from 'middlewares/withAuth'
import { useRouter } from 'next/router'
import ProductTabsCard from 'components/Product/ProductTabsCard'

const ProductCreate: React.FC = () => {
  const router = useRouter()

  return (
    <>
      <ProductTabsCard />
    </>
  )
}

export default withAuth(ProductCreate)
