import { useRef, useState } from 'react'
import { useEffectOnce } from 'react-use'
import { gql } from '@apollo/client'
import debounce from 'lodash/debounce'

import apolloClient from 'config/initializeApolloClient'

import { defaultOptions } from './config'

import type { APIPayloadResponse, FindDataInput } from 'graphql/graphQL-service-hook'
import type { ServiceHookOptions, ServiceHookResponse, ServiceHookWithOptions } from './interface'

interface ProductWithSearchAPIPayload {
  _id: string
  image: string
  code: string
  globalName: string
}

interface ProductWithSearchData {
  getOrgProduct: APIPayloadResponse<ProductWithSearchAPIPayload[]>
}

interface ProductWithSearchVars {
  input: FindDataInput
}

type ProductWithSearchResponse = ServiceHookResponse<ProductWithSearchAPIPayload[]>

type ProductWithSearchOptions = ServiceHookOptions<ProductWithSearchAPIPayload>

const PRODUCT_WITH_SEARCH_QUERY = gql`
  query GetOrgProduct($input: INPUT_FIND_DATA) {
    getOrgProduct(input: $input) {
      message
      code
      payload {
        _id
        code
        image
        globalName
      }
    }
  }
`

const resultLimit = 5

const defaultFetchVariables: ProductWithSearchVars = {
  input: {
    pagination: {
      limit: resultLimit,
    },
    query: {
      type: {
        $ne: 'SCRAP',
      },
      canProduce: 'YES',
    },
  },
}

const fetchListProducts = (variables: ProductWithSearchVars) =>
  apolloClient.query<ProductWithSearchData, ProductWithSearchVars>({
    query: PRODUCT_WITH_SEARCH_QUERY,
    variables,
    fetchPolicy: 'no-cache',
  })

const useProductWithSearch: ServiceHookWithOptions<ProductWithSearchResponse, ProductWithSearchOptions> = (options) => {
  const op = {
    ...defaultOptions,
    ...(options ?? {}),
  }

  const [fetching, setFetching] = useState(false)
  const [listProducts, setListProducts] = useState<ProductWithSearchAPIPayload[]>([])
  const [searchKeyword, setSearchKeyword] = useState('')

  const fetchRef = useRef(0)

  const onSearch = debounce((value: string) => {
    setSearchKeyword(value)

    if (value.length < op.searchLength) {
      return
    }

    fetchRef.current += 1
    const fetchId = fetchRef.current

    setListProducts([])
    setFetching(true)

    const fetchVariables: ProductWithSearchVars = {
      input: {
        ...defaultFetchVariables.input,
        search: {
          globalName: value,
          localName: value,
          code: value,
        },
      },
    }

    fetchListProducts(fetchVariables).then(({ data }) => {
      if (fetchId !== fetchRef.current) {
        // for fetch callback order
        return
      }

      const newAutoComleteOptions = data.getOrgProduct.payload

      setListProducts(newAutoComleteOptions)
      setFetching(false)
    })
  }, 500)

  useEffectOnce(() => {
    if (op.firstLoad) {
      fetchListProducts(defaultFetchVariables).then(({ data }) => {
        const newAutoComleteOptions = data.getOrgProduct.payload

        setListProducts(newAutoComleteOptions)
      })
    }
  })

  return {
    fetching: fetching,
    options: listProducts,
    searchInfo: {
      keyword: searchKeyword,
      length: op.searchLength,
    },
    resetSearch: () => setSearchKeyword(''),
    onSearch,
  }
}

export default useProductWithSearch
