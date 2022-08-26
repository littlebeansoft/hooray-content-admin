import { gql } from '@apollo/client'

const SEND_NOTIFICATIO_MESSAGE_TO_CORE = gql`
  mutation sendNotificationMessageToCore(
    $to: [String!]!
    $input: INPUT_NOTIFICATION_MESSAGE
    $channel: INPUT_NOTIFICATION_MESSAGE_CHANNEL
    $sendAt: Date!
  ) {
    sendNotificationMessageToCore(to: $to, input: $input, channel: $channel, sendAt: $sendAt) {
      message
      code
      payload {
        totalSuccess
      }
    }
  }
`

export default SEND_NOTIFICATIO_MESSAGE_TO_CORE
