import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6'

import ErrorPage from 'pages/ErrorPage'

import PageLayout from 'layouts/PageLayout'

import { appAuthValidUser, orgAuthValidUser } from 'helpers/auth'

import { appRouteConfig, orgRouteConfig } from 'setup/PageRouter/routes'

const PageRouter = () => {
  const router = createBrowserRouter([
    {
      element: <RootProvider />,
      errorElement: <ErrorPage />,
      children: [
        {
          errorElement: <ErrorPage />,
          loader: orgAuthValidUser,
          children: orgRouteConfig,
        },
        {
          errorElement: <ErrorPage />,
          loader: appAuthValidUser,
          children: appRouteConfig,
        },
      ],
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default PageRouter

const RootProvider = () => {
  return (
    <QueryParamProvider adapter={ReactRouter6Adapter}>
      <PageLayout>
        <Outlet />
      </PageLayout>
    </QueryParamProvider>
  )
}
