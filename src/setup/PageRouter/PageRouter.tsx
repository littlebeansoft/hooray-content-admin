import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ErrorPage from 'pages/ErrorPage'

import { appAuthValidUser, orgAuthValidUser } from 'helpers/auth'

import { paths } from 'setup/PageRouter/routes'

const PageRouter = () => {
  const router = createBrowserRouter([
    {
      errorElement: <ErrorPage />,
      children: [
        {
          path: paths.orgTokenRef,
          loader: orgAuthValidUser,
          errorElement: <ErrorPage />,
          children: [
            {
              path: paths.content,
              element: <h1>This is org content page</h1>,
            },
            {
              path: paths.contentCreate,
              element: <h1>This is org content create page</h1>,
            },
            {
              path: paths.contentUpdate,
              element: <h1>This is org content update page</h1>,
            },
          ],
        },
        {
          path: paths.appTokenRef,
          loader: appAuthValidUser,
          errorElement: <ErrorPage />,
          children: [
            {
              path: paths.content,
              element: <h1>This is app content page</h1>,
            },
            {
              path: paths.contentCreate,
              element: <h1>This is app content create page</h1>,
            },
            {
              path: paths.contentUpdate,
              element: <h1>This is app content update page</h1>,
            },
          ],
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default PageRouter
