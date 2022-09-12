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
  return moment.unix(date / 1000).format('DD - MM - YYYY')
}

export function move(arr: [], old_index: number, new_index: number) {
  while (old_index < 0) {
    old_index += arr.length
  }
  while (new_index < 0) {
    new_index += arr.length
  }
  if (new_index >= arr.length) {
    var k = new_index - arr.length
    while (k-- + 1) {
      arr.push()
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0])
  return arr
}
