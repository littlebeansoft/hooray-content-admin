import { Result } from 'antd'
import { useRouteError } from 'react-router-dom'

import PageContainer from 'components/PageContainer'

interface ErrorResponse {
  status: 403 | 404 | 500 | '403' | '404' | '500'
}

const ErrorPage = () => {
  const { status = 500 } = useRouteError() as ErrorResponse

  const statusText = {
    403: {
      title: 'We are Sorry...',
      subTitle: (
        <>
          The page you are trying to access has restricted access.
          <br />
          Please refer to your system administrator.
        </>
      ),
    },
    404: {
      title: 'Page not found',
      subTitle: 'The page you are looking for could not be found',
    },
    500: {
      title: 'Sorry, unexpected error',
      subTitle: 'We are working on fixing the problem. Be back soon.',
    },
  }

  const { title, subTitle } = statusText[status]

  return (
    <PageContainer>
      <Result status={status} title={title} subTitle={subTitle} />
    </PageContainer>
  )
}

export default ErrorPage
