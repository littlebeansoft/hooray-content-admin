const domain = {
  core: process.env.NEXT_PUBLIC_API_HOORAY_CORE_DOMAIN || 'https://core-api.hooray.site',
  customer: process.env.NEXT_PUBLIC_API_HOORAY_CUSTOMER_DOMAIN || 'https://kara-customer-service.hooray.site',
  location: process.env.NEXT_PUBLIC_API_HOORAY_LOCATION_DOMAIN || 'https://kara-location-service.hooray.site',
  product: process.env.NEXT_PUBLIC_API_HOORAY_PRODUCT_DOMAIN || 'https://kara-product-service.hooray.site',
  order: process.env.NEXT_PUBLIC_API_HOORAY_ORDER_DOMAIN || 'https://kara-order-service.hooray.site'
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
  CUSTOMER: {
    GRAPHQL: {
      ADMIN: { ['1.0']: domain.customer + path.graphql + type.admin + version['1.0'] },
    },
    REST: {
      ADMIN: { ['1.0']: domain.customer + path.rest + type.admin + version['1.0'] },
    },
  },
  LOCATION: {
    GRAPHQL: {
      ADMIN: { ['1.0']: domain.location + path.graphql + type.admin + version['1.0'] },
    },
    REST: {
      ADMIN: { ['1.0']: domain.location + path.rest + type.admin + version['1.0'] },
    },
  },
  PRODUCT: {
    GRAPHQL: {
      ADMIN: { ['1.0']: domain.product + path.graphql + type.admin + version['1.0'] },
    },
    REST: {
      ADMIN: { ['1.0']: domain.product + path.rest + type.admin + version['1.0'] },
    },
  },
  ORDER: {
    GRAPHQL: {
      ADMIN: { ['1.0']: domain.order + path.graphql + type.admin + version['1.0'] },
    },
    REST: {
      ADMIN: { ['1.0']: domain.order + path.rest + type.admin + version['1.0'] },
    },
  },
}
