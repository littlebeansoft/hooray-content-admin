import type { RouteObject } from 'react-router-dom'

import ContentPackPage from 'pages/contentPack/IndexPage'
import ContentPackCreatePage from 'pages/contentPack/CreatePage'
import ContentPackUpdatePage from 'pages/contentPack/UpdatePage'

import ContentPage from 'pages/content/IndexPage'
import ContentCreatePage from 'pages/content/CreatePage'
import ContentUpdatePage from 'pages/content/UpdatePage'

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
  | 'orgContent'
  | 'orgContentCreate'
  | 'orgContentUpdate'
  | 'appCategory'
  | 'appCategoryCreate'
  | 'appCategoryUpdate'
  | 'appContentApproval'
  | 'appContentApprovalDetail'

export const paths: Record<RouteKey, string> = {
  root: '/',

  orgContentPack: '/org/:ref/content-pack',
  orgContentPackCreate: '/org/:ref/content-pack/create',
  orgContentPackUpdate: '/org/:ref/content-pack/:id',

  orgContent:
    '/org/:ref/content-pack/:contentPackID/section/:sectionID/content',
  orgContentCreate:
    '/org/:ref/content-pack/:contentPackID/section/:sectionID/content/create',
  orgContentUpdate:
    '/org/:ref/content-pack/:contentPackID/section/:sectionID/content/:contentID',

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
