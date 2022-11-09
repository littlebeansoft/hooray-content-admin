import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6'

import ErrorPage from 'pages/ErrorPage'
import ContentPage from 'pages/content/IndexPage'

import { appAuthValidUser, orgAuthValidUser } from 'helpers/auth'

import { paths } from 'setup/PageRouter/routes'

const PageRouter = () => {
  const router = createBrowserRouter([
    {
      element: <RootProvider />,
      errorElement: <ErrorPage />,
      children: [
        {
          loader: orgAuthValidUser,
          errorElement: <ErrorPage />,
          children: [
            {
              path: paths.orgContent,
              element: <ContentPage />,
            },
            {
              path: paths.orgContentCreate,
              element: <h1>This is org content create page</h1>,
            },
            {
              path: paths.orgContentUpdate,
              element: <h1>This is org content update page</h1>,
            },
          ],
        },
        {
          loader: appAuthValidUser,
          errorElement: <ErrorPage />,
          children: [
            {
              path: paths.appContent,
              element: <h1>This is app content page</h1>,
            },
            {
              path: paths.appContentCreate,
              element: <h1>This is app content create page</h1>,
            },
            {
              path: paths.appContentUpdate,
              element: <h1>This is app content update page</h1>,
            },
          ],
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
