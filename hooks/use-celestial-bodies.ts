import { QueryKeys } from "@/constants/query-keys"
import { fetchPlanets, Planet } from "@/lib/celestial-bodies"
import { PaginatedQuery } from "@/types/commons"
import { useInfiniteQuery } from "@tanstack/react-query"

export const useCelestialBodies = (params ?: UseCelestialBodiesParams) => {
  return useInfiniteQuery({
    queryKey: QueryKeys.celestialBodies(),
    queryFn: fetchPlanets,
    initialData: {
      pages: [params?.initialData],
      pageParams: [""]
    },
    initialPageParam: "",
    getNextPageParam: (lastPage) => {
      if(!lastPage?.next) return undefined
      return lastPage.next
    },
    getPreviousPageParam: (lastPage) => {
      if(!lastPage?.previous) return undefined
      return lastPage.previous
    }
  })
}

export interface UseCelestialBodiesParams {
  initialData: PaginatedQuery<Planet[]> | null
}