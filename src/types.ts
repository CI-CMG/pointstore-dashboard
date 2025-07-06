
export type OrderCountType = {
  count: number
  since: string
}

export type HexbinDataType = {
  count: number,
  h3: string
}

export type CountsByYearType = {
  year: number
  provider: string
  total: number
  percentage_of_archive: number
}

export type CountsByFiscalYearType = {
  // TODO should be number
  count: string
  label: string
  pct?: string
  archiveSize?: number
}

export type SummaryDataType = {
  counts_by_year: Array<CountsByYearType>
  // TODO should be Map<string, number>
  counts_by_provider: Map<string,string>
  fy_counts: Array<CountsByFiscalYearType>
  max_entry_date: string
  min_entry_date: string
  order_count: OrderCountType
  record_count: string
  report_date: string
}
