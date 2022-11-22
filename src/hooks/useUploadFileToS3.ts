import type { RcFile } from 'antd/es/upload'

import { useState } from 'react'
import axios, { AxiosResponse } from 'axios'

const useUploadFile = <T = any>() => {
  const [uploading, setUploading] = useState(false)
  const [uploadPercent, setUploadPercent] = useState(0)

  const uploadFileToS3 = async (
    url: string,
    file: RcFile
  ): Promise<AxiosResponse<T>> => {
    setUploading(true)

    return new Promise((resolve, reject) =>
      axios
        .request<T>({
          method: 'PUT',
          url,
          data: file,
          onUploadProgress: (progressEvent) => {
            const { loaded, total = 0 } = progressEvent
            const uploadPercent = Math.ceil((100 / total) * loaded)

            setUploadPercent(uploadPercent)
          },
        })
        .then(async (resp) => {
          resolve(resp)
        })
        .catch((error) => {
          reject(error)
        })
        .finally(async () => {
          setUploading(false)
          setUploadPercent(0)
        })
    )
  }

  return {
    uploading,
    uploadPercent,
    uploadFileToS3,
  }
}

export default useUploadFile
