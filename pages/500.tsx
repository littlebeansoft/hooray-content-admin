import { Result } from 'antd'

export default function Custom500(): JSX.Element {
  return <Result status="500" title="500" subTitle="Sorry, something went wrong." />
}
