export interface S3PutObjectAPIPayload {
  fileKey: string
  filename: string
  publicUrl: string
  signedUrl: string
}
