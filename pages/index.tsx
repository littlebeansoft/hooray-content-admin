import React from 'react'
import { useRouter } from 'next/router'

import LoadingPage from 'components/LoadingPage'

const HomePage: React.FC = () => {
  const router = useRouter()
  React.useEffect(() => {
    router.push('/org/token/dashboard')
  })
  return <LoadingPage />
}

export default HomePage
