
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
  count: number
  label: string
  pct?: string
  archiveSize?: number
}

export type ProviderStats = {
  provider: string
  count: number
  pct?: number 
  label?: string
}

// TS magic referred to here: https://github.com/microsoft/TypeScript/issues/35859
// accommodates error: "Element implicitly has an 'any' type because type 'Map<string, string>' has no index signature. Did you mean to call 'data.get'?ts(7052)"
// export interface ICountsByProvider {
//   [propertyName: string]: number;
// }

export type SummaryDataType = {
  counts_by_year: Array<CountsByYearType>
  counts_by_provider: Array<ProviderStats>
  fy_counts: Array<CountsByFiscalYearType>
  max_entry_date: string
  min_entry_date: string
  order_count: OrderCountType
  record_count: number
  report_date: string
}
