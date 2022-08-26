import type { MasterDataAPIPayload } from 'graphql/interface'

export interface MasterDataKeyValue {
  [key: string]: any
}

export interface GroupMasterData {
  [key: string]: MasterDataKeyValue
}

export function groupMasterData(masterDataList: MasterDataAPIPayload[], parentKey: string) {
  let masterData: GroupMasterData = {}

  masterDataList.forEach((master) => {
    const isSameParentKey = master.parentKey === parentKey

    masterData[parentKey] = isSameParentKey
      ? {
          ...masterData[parentKey],
          [master.dataKey]: master,
        }
      : {
          ...masterData[parentKey],
        }
  })

  return masterData
}
