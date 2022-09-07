import { useMutation } from '@apollo/client'
import { message } from 'antd'

import CREATE_LEAD from './createLead'

import type { GraphQLServiceMutationHook } from '../graphQL-service-hook'
import type { LeadInput, CreateLead } from './interface'

const useCreateLead: GraphQLServiceMutationHook<CreateLead, LeadInput> = (options) => {
    return useMutation(CREATE_LEAD, {
        onError(err) {
            message.error(err)
        },
        ...options,
    })
}

export default useCreateLead