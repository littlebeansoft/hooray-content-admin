export type Middleware = (req: any, res: any, func: (result: any) => void) => void
