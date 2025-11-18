import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { TableHeader as ITableHeader, PaginatedQuery } from "@/types/commons"
import { InfiniteData } from "@tanstack/react-query"
import { Planet } from "@/lib/celestial-bodies"
import { formatDiameter, formatPopulation, planetHasWater } from "@/utils/planets"

function PlanetsTable({
  headers,
  planets
} : PlanetsTabletProps) {
  return (
    <Table className="relative">
      <TableHeader>
        <TableRow className="sticky top-0 bg-[#FFF] z-10">
          <TableHead className="text-xs text-muted-foreground">
            <Checkbox />
          </TableHead>
          {headers.map( (header,index) => (
            <TableHead 
              className="text-xs text-muted-foreground"
              key={`header=${index}`}
            >
              {header.title}
            </TableHead>
          ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {planets?.pages.map( (group,index) => {
            return group?.results.map( (planet) => {
              return (
                <TableRow key={`group-${index}-${planet.name}`} >
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    {planet.name}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline-muted">
                      {planet.climate}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="font-400">
                      {planet.terrain}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {planet.gravity}
                  </TableCell>
                  <TableCell>
                    {formatDiameter(planet.diameter)}
                  </TableCell>
                  <TableCell>
                    {planet.rotation_period}
                  </TableCell>
                  <TableCell>
                    <Badge variant = {planetHasWater(planet.surface_water) ? "outline-muted" : "destructive"}>
                      {planetHasWater(planet.surface_water) ? "Si" : "No"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {formatPopulation(planet.population)}
                  </TableCell>
                  <TableCell>
                    {planet.residents.length}
                  </TableCell>
                  <TableCell>
                    {planet.films.length}
                  </TableCell>
                </TableRow>
              )
            })
          })}
        </TableBody>
      </Table>
  )
}

export interface PlanetsTabletProps {
  headers: ITableHeader[],
  planets: InfiniteData<PaginatedQuery<Planet[]> | null | undefined> | null | undefined
}

export default PlanetsTable