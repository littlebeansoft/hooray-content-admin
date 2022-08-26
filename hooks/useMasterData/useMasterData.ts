import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import useGetMasterData from 'graphql/useGetMasterData'

import { localeCode } from 'utils/localService'
import { groupMasterData } from './masterData'

import type { MasterDataAPIPayload } from 'graphql/interface'
import type { ServiceHookWithOptions } from 'hooks/interface'
import type { MasterDataList, UseMasterDataOptions, UseMasterDataResponse } from './interface'

const useMasterData: ServiceHookWithOptions<UseMasterDataResponse, UseMasterDataOptions> = (options) => {
  const { i18n } = useTranslation()
  const localeIsEn = i18n.language === localeCode.enUS

  const [masterDataList, setMasterDataList] = useState<MasterDataList>({})
  const [loading, setLoading] = useState(!options?.skip)

  const onRequestMasterData = (payload: MasterDataAPIPayload[]) => {
    let masterData: MasterDataList = {}

    options?.parentKeys.forEach((parentKey) => {
      masterData = {
        ...masterData,
        ...groupMasterData(payload, parentKey),
      }
    })

    setMasterDataList(masterData)
    setLoading(false)
  }

  const masterDataQuery = useGetMasterData({
    skip: options?.skip,
    context: {
      clientType: 'CORE',
      headers: {
        authorization: '',
        credentialKey: '',
      },
    },
    variables: {
      input: {
        query: {
          parentKey: { $in: options?.parentKeys },
          locale: 'en',
        },
        sort: {
          dataKey: 1,
        },
      },
    },
    onCompleted(resp) {
      onRequestMasterData(resp.getMasterData.payload)
    },
  })

  return {
    masterDataList,
    loading: loading || masterDataQuery.loading,
  }
}

export default useMasterData
