import type { ParseConfig } from 'papaparse'
import type { RcFile } from 'antd/lib/upload'
import moment from 'moment'

import Papa from 'papaparse'

const defaultPapaParseConfig: ParseConfig = {
  header: true,
  skipEmptyLines: true,
}

export const convertCSVToJSON = <T = unknown>(file: RcFile, config?: ParseConfig): Promise<Papa.ParseResult<T>> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.readAsText(file)

    reader.onload = (event) => {
      if (event.target?.result == null) {
        return
      }

      const csvString = event.target.result as string

      const result = Papa.parse<T>(csvString, {
        ...defaultPapaParseConfig,
        ...(config || {}),
      })

      resolve(result)
    }

    reader.onerror = (event) => {
      reject(event)
    }
  })

export const dateUnixFormatter = (date: number) => {
  return moment.unix(date/1000).format("DD - MM - YYYY");
}
