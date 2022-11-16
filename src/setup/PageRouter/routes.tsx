import type { RouteObject } from 'react-router-dom'

import ContentPage from 'pages/content/IndexPage'
import ContentCreatePage from 'pages/content/CreatePage'
import ContentUpdatePage from 'pages/content/UpdatePage'

import ContentApprovalPage from 'pages/contentApproval/IndexPage'

export type RouteKey =
  | 'root'
  | 'orgContent'
  | 'orgContentCreate'
  | 'orgContentUpdate'
  | 'appLabel'
  | 'appLabelCreate'
  | 'appLabelUpdate'
  | 'appContentApproval'

export const paths: Record<RouteKey, string> = {
  root: '/',

  orgContent: '/org/:ref/content',
  orgContentCreate: '/org/:ref/content/create',
  orgContentUpdate: '/org/:ref/content/:id',

  appLabel: '/app/:ref/content',
  appLabelCreate: '/app/:ref/content/create',
  appLabelUpdate: '/app/:ref/content/:id',

  appContentApproval: '/app/:ref/content-approval',
}

export const orgRouteConfig: RouteObject[] = [
  {
    path: paths.orgContent,
    element: <ContentPage />,
  },
  {
    path: paths.orgContentCreate,
    element: <ContentCreatePage />,
  },
  {
    path: paths.orgContentUpdate,
    element: <ContentUpdatePage />,
  },
]

export const appRouteConfig: RouteObject[] = [
  {
    path: paths.appLabel,
    element: <h1>This is app label page</h1>,
  },
  {
    path: paths.appLabelCreate,
    element: <h1>This is app label create page</h1>,
  },
  {
    path: paths.appLabelUpdate,
    element: <h1>This is app label update page</h1>,
  },

  {
    path: paths.appContentApproval,
    element: <ContentApprovalPage />,
  },
]
