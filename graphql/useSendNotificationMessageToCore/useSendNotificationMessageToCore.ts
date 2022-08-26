import { useMutation } from '@apollo/client'
import { message } from 'antd'

import QUERY_DOCUMENT from './sendNotificationMessageToCore'

import type { APIPayloadResponseWithPagination, GraphQLServiceMutationHook } from '../graphQL-service-hook'
import type { NotificationMessageToCoreAPIPayload } from './interface'

export type ChannelKey = 'EMAIL' | 'SMS' | 'APPLICATION'
export type ChannelCondition = 'ALL_USER' | 'USER_ROLE' | 'USER_SELECTED' | 'CUSTOM_EMAIL' | 'CUSTOM_PHONE_NUMBER'

interface NotificationMessageToCore {
  sendNotificationMessageToCore: APIPayloadResponseWithPagination<NotificationMessageToCoreAPIPayload>
}

interface InputNotificationMessage {
  title: string
  content: string
}

interface ChannelNotificationMessage {
  key: ChannelKey
  condition: ChannelCondition
}

interface NotificationMessageToCoreVars {
  to: string[]
  input: InputNotificationMessage
  channel: ChannelNotificationMessage
  sendAt: Date
}

const useSendNotificationMessageToCore: GraphQLServiceMutationHook<
  NotificationMessageToCore,
  NotificationMessageToCoreVars
> = (options) => {
  return useMutation(QUERY_DOCUMENT, {
    onError(error) {
      message.error(error.message)
    },
    ...options,
  })
}

export default useSendNotificationMessageToCore
