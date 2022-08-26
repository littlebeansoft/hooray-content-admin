import { Middleware } from './types'
export default function initMiddleware(middleware: Middleware) {
  return (req: any, res: any) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result)
        }
        return resolve(result)
      })
    })
}
