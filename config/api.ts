const domain = {
  core: process.env.NEXT_PUBLIC_API_HOORAY_CORE_DOMAIN || 'https://core-api.hooray.site',
  wms: process.env.NEXT_PUBLIC_API_HOORAY_BANGBOW_DOMAIN || 'https://wms-api-dev.hooray.site',
}
const path = {
  graphql: '/graphql',
  rest: '/rest',
}

const type = {
  admin: '/admin',
  client: '/client',
}

const version = {
  ['1.0']: '/v1.0',
}

export const API = {
  CORE: {
    GRAPHQL: {
      ADMIN: { ['1.0']: domain.core + path.graphql + type.admin + version['1.0'] },
    },
    REST: {
      ADMIN: { ['1.0']: domain.core + path.rest + type.admin + version['1.0'] },
    },
  },
  WMS: {
    GRAPHQL: {
      ADMIN: { ['1.0']: domain.wms + path.graphql + type.admin + version['1.0'] },
    },
    REST: {
      ADMIN: { ['1.0']: domain.wms + path.rest + type.admin + version['1.0'] },
    },
  },
}
