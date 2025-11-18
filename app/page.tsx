import { PlanetsView } from "@/components/planets-view";
import { fetchPlanets } from "@/lib/celestial-bodies";

export default async function Home({} : HomeProps) {
  const planets = await fetchPlanets({ pageParam: "" })
  return (
    <PlanetsView 
      planets={planets}
    />
  )
}

export interface HomeProps {

}