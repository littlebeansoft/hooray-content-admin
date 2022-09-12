import dayjs from 'dayjs'
import numeral from 'numeral'

export function isVideoSource(src: string) {
  return /^.*\.(mp4|mov|mkv)$/.test(src)
}

export function isDocumentSource(src: string) {
  return /^.*\.(doc|DOC|docx|DOCX|pdf|PDF|xls|XLS|xlsx|XLSX|pptx|PPTX|ppt|PPT|txt|TXT|csv|CSV)$/.test(src)
}

export const numberFormat = (value?: number | string, format = '0,0.[00]') => {
  return numeral(value).format(format)
}

export function formatDate(date: Date | string = '', format = 'DD - MM - YYYY') {
  return dayjs(date).format(format)
}

export const fallbackValue = (stringValue?: string | number | null, fallbackText = '') => stringValue ?? fallbackText
