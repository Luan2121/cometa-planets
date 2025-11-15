
export interface PaginatedQuery<T> {
  count: number,
  next: string | null,
  previous: string | null,
  results: T
}

export interface TableHeader {
  title: string
}