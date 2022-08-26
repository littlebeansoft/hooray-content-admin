export const fallbackValue = (text?: string | number): string | number => {
  return text || 'No Data'
}

export const converstToString = (text?: string | string[]): string | undefined => {
  return Array.isArray(text) ? text[0] : text
}
