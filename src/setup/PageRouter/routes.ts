export type RouteKey =
  | 'root'
  | 'orgContent'
  | 'orgContentCreate'
  | 'orgContentUpdate'
  | 'appContent'
  | 'appContentCreate'
  | 'appContentUpdate'

export const paths: Record<RouteKey, string> = {
  root: '/',

  orgContent: '/org/:ref/content',
  orgContentCreate: '/org/:ref/content/create',
  orgContentUpdate: '/org/:ref/content/:id',

  appContent: '/app/:ref/content',
  appContentCreate: '/app/:ref/content/create',
  appContentUpdate: '/app/:ref/content/:id',
}
