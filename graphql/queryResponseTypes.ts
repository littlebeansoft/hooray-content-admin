import type { GetDataBillOfMaterialQuery, GetOrgProductionOrderDetailQuery } from './generated/operations'

export type QR_GetDataBomOfMaterial = GetDataBillOfMaterialQuery['getDataBillOfMaterial']['payload'][number]

export type QR_ProductionOrderDetail =
  GetOrgProductionOrderDetailQuery['getOrgProductionOrderDetail']['payload'][number]
