import dayjs from 'dayjs'
import numeral from 'numeral'

export const DATE_FORMAT = 'DD/MM/YYYY'
export const TIME_FORMAT = 'HH:mm'
export const DATE_TIME_FORMAT = `${DATE_FORMAT} ${TIME_FORMAT}`
export const HUMAN_READABLE_FORMAT = `DD MMM YYYY - ${TIME_FORMAT}`

export const numberFormat = (value?: string | number, format = '0,0.00') => {
  return numeral(value).format(format)
}

export const humanReadableDateTimeFormat = (dateTime: Date) => {
  if (dateTime == null) {
    return '-'
  }

  return dayjs(dateTime).format(HUMAN_READABLE_FORMAT)
}
