export type RouteKey =
  | 'root'
  | 'content'
  | 'contentCreate'
  | 'contentUpdate'
  | 'orgTokenRef'
  | 'appTokenRef'

export const paths: Record<RouteKey, string> = {
  root: '/',

  orgTokenRef: '/org/:ref',

  appTokenRef: '/app/:ref',

  content: 'content',
  contentCreate: 'content/create',
  contentUpdate: 'content/:id',
}