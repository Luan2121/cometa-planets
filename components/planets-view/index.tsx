"use client"

import { LoadMoreButton } from "@/components/load-more-button";
import PlanetsTable from "@/components/planets-table";
import { useCelestialBodies } from "@/hooks/use-celestial-bodies";
import { Planet } from "@/lib/celestial-bodies";
import { PaginatedQuery } from "@/types/commons";

export function PlanetsView({
  planets : initialPlanets
} : PlanetsViewProps) {

  const { 
    data : { planets, totalPopulation },
    fetchNextPage,
    isFetching
  } = useCelestialBodies({
    initialData: initialPlanets
  })
  
  return (
    <div className="flex flex-col flex-1 min-h-0">
      <h2 className="text-2xl font-bold mb-4">
        Planetas y cuerpos celestes
      </h2>
      <div className="w-full min-h-0 flex mb-4">
        <PlanetsTable 
          headers={headers}
          planets={planets}
        />
      </div>
      <div className="flex justify-end text-xs pr-4">
         <b>
          Población Total:
         </b> {totalPopulation}
      </div>
      <div className="text-center">
        <LoadMoreButton
          variant="outline"
          onClick={() => fetchNextPage()}
          isLoading={isFetching}
          disabled={isFetching}
        >
          Cargar Mas
        </LoadMoreButton>
      </div>
    </div>
  );
}

const headers = [
  { title: "Nombre" },
  { title: "Clima" },
  { title: "Terreno" },
  { title: "Gravedad" },
  { title: "Diámetro (km)" },
  { title: "Período de rotación" },
  { title: "Agua superficial" },
  { title: "Población" },
  { title: "Residentes" },
  { title: "Películas"}
];

export interface PlanetsViewProps {
  planets: PaginatedQuery<Planet[]> | null
}