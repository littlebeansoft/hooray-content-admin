/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    // Version
    REACT_APP_VERSION: string
    REACT_APP_STORAGE_VERSION: string

    // API Endpoints
    REACT_APP_GRAPHQL_CORE_ENDPOINT: string
    REACT_APP_GRAPHQL_CONTENT_ENDPOINT: string
    REACT_APP_GRAPHQL_LABEL_ENDPOINT: string
  }
}
