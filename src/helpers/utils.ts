export const getSearchParams = () => {
  return new URLSearchParams(window.location.search)
}

export const getCredentialKeyFromQueryString = () => {
  return getSearchParams().get('credentialKey')
}
