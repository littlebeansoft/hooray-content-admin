import { useRef, useState } from 'react'
import useGetProductLocation from 'graphql/useGetLocation'

import type { AutoComplete, AutoCompleteOption } from './interface'
import type { ProductLocationAPIPayload } from 'graphql/interface'
import useGetLocation from 'graphql/useGetLocation'

const resultLimit = 5

export const setOptionFromQuery = (form: ProductLocationAPIPayload[]): AutoCompleteOption[] => {
  return form.map(({ _id, globalName }) => ({
    label: globalName,
    value: _id,
  }))
}

const useOrgLocationAutoComplete = (locationId?: string): AutoComplete => {
  const [isFetching, setIsFetching] = useState(false)
  const [searchValue, setSearchValue] = useState<string | undefined>(undefined)
  const [options, setOptions] = useState<AutoCompleteOption[]>([])
  const timer = useRef<ReturnType<typeof setTimeout>>()
  const shouldSkip = searchValue == null || searchValue.length === 0
  let query = {}
  if (locationId) query = { _id: { $ne: locationId } }
  const formQuery = useGetLocation({
    // skip: shouldSkip,
    variables: {
      input: {
        query: {
          ...query,
        },
        pagination: {
          limit: resultLimit,
        },
        search: {
          localName: searchValue,
        },
      },
    },
    fetchPolicy: 'network-only',
    notifyOnNetworkStatusChange: true,
    onCompleted(resp) {
      const payload = resp?.getOrgLocation?.payload || []
      const formOptions = setOptionFromQuery(payload)
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
    loading: shouldSkip ? false : isFetching || formQuery.loading,
    options,
    onSearch,
  }
}

export default useOrgLocationAutoComplete
