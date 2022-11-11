import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6'

import ErrorPage from 'pages/ErrorPage'

import { appRouteConfig, orgRouteConfig } from 'setup/PageRouter/routes'

const PageRouter = () => {
  const router = createBrowserRouter([
    {
      element: <RootProvider />,
      errorElement: <ErrorPage />,
      children: [
        {
          errorElement: <ErrorPage />,
          children: orgRouteConfig,
        },
        {
          errorElement: <ErrorPage />,
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
      <Outlet />
    </QueryParamProvider>
  )
}
