import { QueryKeys } from "@/constants/query-keys"
import { fetchPlanets, Planet } from "@/lib/celestial-bodies"
import { PaginatedQuery } from "@/types/commons"
import { round } from "@/utils/planets"
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
    },
    select: (groups) => {
      const totalPopulation = groups.pages.reduce( (accum : number, page) => {
        const populationForPage = page?.results.reduce(( accum, planet) => {
          return accum + round(planet.population)
        },0) ?? 0
        return accum + populationForPage
      },0)
      return {
        planets: groups,
        totalPopulation: totalPopulation.toLocaleString("en-US")
      }
    }
  })
}

export interface UseCelestialBodiesParams {
  initialData: PaginatedQuery<Planet[]> | null
}