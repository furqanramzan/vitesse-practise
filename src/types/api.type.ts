export interface Page {
  page: number
  perPage: number
}

export interface Status {
  success: boolean
  code: number
  message: string
}

export interface Meta {
  current_page: number
  from: number
  last_page: number
  path: string
  per_page: string
  to: number
  total: number
}

export interface Links {
  first: string
  last: string
  prev: string | null
  next: string | null
}
