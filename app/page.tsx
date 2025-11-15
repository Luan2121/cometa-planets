"use client"
import PlanetsTable from "@/components/planets-table";
import PlanetsTablet from "@/components/planets-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Footer from "@/components/ui/footer";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useCelestialBodies } from "@/hooks/use-celestial-bodies";
import { formatDiameter, formatPopulation, planetHasWater } from "@/utils/planets";
import { RotateCw } from "lucide-react";

export default function Home() {

  const { 
    data : planets,
    fetchNextPage 
  } = useCelestialBodies()
  
  return (
    <div className="flex flex-col flex-1 min-h-0">
      <h2 className="text-2xl font-bold">
        Planetas y cuerpos celestes
      </h2>
      <div className="w-full min-h-0 overflow-y-scroll">
        <PlanetsTable 
          headers={headers}
          planets={planets}
        />
      </div>

      <Button
        variant="outline"
        onClick={() => fetchNextPage()}
      >
        <RotateCw />
        Cargar Mas
      </Button>
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
