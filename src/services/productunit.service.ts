import { request } from './axios.service'
import type { Page } from '~/types/api.type'
import type { ProductUnits } from '~/types/productunit.type'

const options = {
  url: 'productunit',
  params: {},
  // method: 'GET',
}
export const fetchProductUnit = async(params?: Page): Promise<ProductUnits> => {
  if (params)
    options.params = params

  const { data } = await request(options)
  return data
}
