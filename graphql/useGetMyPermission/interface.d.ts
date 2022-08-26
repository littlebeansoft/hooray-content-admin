export type PermissionCode = 'NONE' | 'EDIT' | 'READ'
export interface PermissionAPIPayload {
  code: PermissionCode[]
  permissionKey: string
  scopeList: string[]
}
