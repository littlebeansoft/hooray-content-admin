import { useDispatch, useSelector } from 'react-redux'
import { Button, Result, Spin } from 'antd'
import { useRouter } from 'next/router'

import jwtDecode from 'jwt-decode'
import { setMode } from 'redux/actios/modeAction'

export interface LayoutProps {
  children: React.ReactNode
}

const withAuth = (WrapComponent: any) => {
  return function AuthWrapper() {
    const dispatch = useDispatch()
    const router = useRouter()
    const { appToken, orgToken } = router.query
    const { loading, error } = useSelector((state: any) => state.auth.appToken)
    const {
      loading: orgLoading,
      error: orgError,
      accessTokenOrg,
      mode,
    } = useSelector((state: any) => state.auth.orgToken)
    if (accessTokenOrg && !mode) {
      const decoded: any = jwtDecode(accessTokenOrg)
      dispatch(setMode({ orgKey: decoded?.orgKey, token: accessTokenOrg }))
    }

    if ((appToken && loading) || (orgToken && orgLoading)) {
      return (
        <div style={{ position: 'absolute', top: '50%', left: '50%' }}>
          <Spin size="large" tip="Loading..." />
        </div>
      )
    }
    if ((appToken && error) || (orgToken && orgError)) {
      return <Result status="500" title="500" subTitle="Sorry, something went wrong." />
    }
    return <WrapComponent />
  }
}

export default withAuth
