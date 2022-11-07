import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

import { OrgAuthProvider } from 'contexts/useOrgAuthContext'
import { AppAuthProvider } from 'contexts/useAppAuthContext'

import ErrorPage from 'pages/ErrorPage'

import { isValidURL } from 'helpers/auth'

import { paths } from 'setup/PageRouter/routes'

const PageRouter = () => {
  const router = createBrowserRouter([
    {
      errorElement: <ErrorPage />,
      children: [
        {
          path: paths.orgTokenRef,
          loader: isValidURL,
          element: <OrgTokenRefPageOutlet />,
          errorElement: <ErrorPage />,
          children: [
            {
              path: paths.content,
              element: <>This is org content page</>,
            },
            {
              path: paths.contentCreate,
              element: <>This is org content create page</>,
            },
            {
              path: paths.contentUpdate,
              element: <>This is org content update page</>,
            },
          ],
        },
        {
          path: paths.appTokenRef,
          loader: isValidURL,
          element: <AppTokenRefPageOutlet />,
          errorElement: <ErrorPage />,
          children: [
            {
              path: paths.content,
              element: <>This is app content page</>,
            },
            {
              path: paths.contentCreate,
              element: <>This is app content create page</>,
            },
            {
              path: paths.contentUpdate,
              element: <>This is app content update page</>,
            },
          ],
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default PageRouter

const OrgTokenRefPageOutlet = () => {
  return (
    <OrgAuthProvider>
      <Outlet />
    </OrgAuthProvider>
  )
}

const AppTokenRefPageOutlet = () => {
  return (
    <AppAuthProvider>
      <Outlet />
    </AppAuthProvider>
  )
}
