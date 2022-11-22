import type { RouteObject } from 'react-router-dom'

import ContentPackPage from 'pages/contentPack/IndexPage'
import ContentPackCreatePage from 'pages/contentPack/CreatePage'
import ContentPackUpdatePage from 'pages/contentPack/UpdatePage'

import ContentApprovalPage from 'pages/contentApproval/IndexPage'
import ContentApprovalDetailPage from 'pages/contentApproval/DetailPage'

import CategoryPage from 'pages/category/IndexPage'
import CategoryCreatePage from 'pages/category/CreatePage'
import CategoryUpdatePage from 'pages/category/UpdatePage'

export type RouteKey =
  | 'root'
  | 'orgContentPack'
  | 'orgContentPackCreate'
  | 'orgContentPackUpdate'
  | 'appCategory'
  | 'appCategoryCreate'
  | 'appCategoryUpdate'
  | 'appContentApproval'
  | 'appContentApprovalDetail'

export const paths: Record<RouteKey, string> = {
  root: '/',

  orgContentPack: '/org/:ref/content',
  orgContentPackCreate: '/org/:ref/content/create',
  orgContentPackUpdate: '/org/:ref/content/:id',

  appCategory: '/app/:ref/category',
  appCategoryCreate: '/app/:ref/category/create',
  appCategoryUpdate: '/app/:ref/category/:id',

  appContentApproval: '/app/:ref/content-approval',
  appContentApprovalDetail: '/app/:ref/content-approval/:id',
}

export const orgRouteConfig: RouteObject[] = [
  {
    path: paths.orgContentPack,
    element: <ContentPackPage />,
  },
  {
    path: paths.orgContentPackCreate,
    element: <ContentPackCreatePage />,
  },
  {
    path: paths.orgContentPackUpdate,
    element: <ContentPackUpdatePage />,
  },
]

export const appRouteConfig: RouteObject[] = [
  {
    path: paths.appCategory,
    element: <CategoryPage />,
  },
  {
    path: paths.appCategoryCreate,
    element: <CategoryCreatePage />,
  },
  {
    path: paths.appCategoryUpdate,
    element: <CategoryUpdatePage />,
  },

  {
    path: paths.appContentApproval,
    element: <ContentApprovalPage />,
  },
  {
    path: paths.appContentApprovalDetail,
    element: <ContentApprovalDetailPage />,
  },
]
