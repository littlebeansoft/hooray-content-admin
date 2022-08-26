import { useRef, useState } from 'react'

import type { AutoComplete, AutoCompleteOption, AutoCompleteOptionParams } from './interface'
import type { LocaleType, MasterDataLocaleText } from 'graphql/interface'
import useGetLocaleText from 'graphql/useGetLocaleText'
import store from 'redux/store'
import unionBy from 'lodash/unionBy'
// import useGetMasterData from 'graphql/useGetMasterData'

const resultLimit = 20

export const setOptionFromQuery = (
  form: MasterDataLocaleText[],
  defaultValue?: MasterDataLocaleText
): AutoCompleteOption[] => {
  const options = form.map(({ dataKey, text }) => {
    return {
      label: text,
      value: dataKey,
    }
  })
  if (defaultValue) {
    const optionsWithDefault = options.concat({ label: defaultValue.text, value: defaultValue.dataKey })
    return unionBy(optionsWithDefault, 'value')
  }

  return options
}

const useLocaleTextSelectOption = (
  dataType: LocaleType,
  parentKey: string,
  defaultMasterData?: MasterDataLocaleText,
  option?: AutoCompleteOptionParams
): AutoComplete => {
  const { appKey } = store.getState().auth
  const [searchValue, setSearchValue] = useState<string | undefined>(undefined)

  const [isFetching, setIsFetching] = useState(false)
  const [options, setOptions] = useState<AutoCompleteOption[]>([])
  const timer = useRef<ReturnType<typeof setTimeout>>()
  const shouldSkip = searchValue == null || searchValue.length === 0
  const newParentKey = dataType + '.' + appKey + '.' + parentKey
  const formQuery = useGetLocaleText({
    // skip: shouldSkip,
    variables: {
      input: {
        query: {
          parentKey: newParentKey,
          dataType,
        },
        pagination: {
          limit: option?.limit || resultLimit,
        },
        search: {
          text: searchValue,
        },
        filter: {},
        sort: {
          text: 1,
        },
      },
    },
    fetchPolicy: 'network-only',
    notifyOnNetworkStatusChange: true,
    onCompleted(resp) {
      const payload = resp?.getLocaleText?.payload || []
      const formOptions = defaultMasterData
        ? setOptionFromQuery(payload, defaultMasterData)
        : setOptionFromQuery(payload)
      setOptions(formOptions)
      setIsFetching(false)
    },
  })

  const onSearch = (value: string) => {
    clearTimeout(timer.current!)
    timer.current = setTimeout(() => {
      setIsFetching(true)
      setSearchValue(value)
    }, 500)
  }

  return {
    loading: isFetching || formQuery.loading,
    options,
    onSearch,
  }
}

export default useLocaleTextSelectOption
