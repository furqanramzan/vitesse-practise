import type { Meta, Links, Status } from './api.type'

export interface ProductUnit {
  id: string
  name: string
  slug: string
  precision: string
  created_at: string
  updated_at: string
}

export interface ProductUnits {
  index: string
  meta: Meta
  status: Status
  links: Links
  data: ProductUnit[]
}
