import { PermissionAPIPayload } from 'graphql/useGetMyPermission/interface'

interface CheckPermissionCanEditDataOptions {
  code: string
  permissionKey: string
  permissionsList?: PermissionAPIPayload[]
}

export function checkPermissionData(code: string, permissionKey: string, permissionsList: PermissionAPIPayload[]) {
  let isCan: boolean = false
  if (permissionsList == null) {
    isCan = false
  } else {
    const permissionLength = permissionsList.filter(
      (pms) => pms.permissionKey === permissionKey && pms.code.filter((item: string) => item === code).length
    ).length
    isCan = permissionLength > 0 ? true : false
  }
  return isCan
}
