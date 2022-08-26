export interface S3SignedUrlAPIPayload {
  signedUrl: string
  publicUrl: string
  filename: string
  fileKey: string
}
