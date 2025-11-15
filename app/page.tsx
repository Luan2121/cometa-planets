"use client"

import { LoadMoreButton } from "@/components/load-more-button";
import PlanetsTable from "@/components/planets-table";
import { useCelestialBodies } from "@/hooks/use-celestial-bodies";

export default function Home() {

  const { 
    data : planets,
    fetchNextPage,
    isFetching
  } = useCelestialBodies()
  
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
  { title: "Población" }
];
