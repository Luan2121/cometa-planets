import { QueryKeys } from "@/constants/query-keys"
import { fetchPlanets } from "@/lib/celestial-bodies"
import { useInfiniteQuery } from "@tanstack/react-query"

export const useCelestialBodies = (params ?: UseCelestialBodiesParams) => {
  return useInfiniteQuery({
    queryKey: QueryKeys.celestialBodies(),
    queryFn: fetchPlanets,
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
  page: number
}