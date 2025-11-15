import { PlanetsView } from "@/components/planets-view";
import { fetchPlanets } from "@/lib/celestial-bodies";

export default async function Home() {
  const planets = await fetchPlanets({ pageParam: "" })
  return (
    <PlanetsView 
      planets={planets}
    />
  )
}