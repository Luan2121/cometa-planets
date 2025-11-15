import { PaginatedQuery } from "@/types/commons";

const BASE_URL = "https://swapi.py4e.com/api"


export interface Planet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string; 
  url: string;
}

export const fetchPlanets = async ({ pageParam } : { pageParam : string}) : Promise<PaginatedQuery<Planet[]> | null> => {
  try {
    const url = pageParam ? pageParam : `${BASE_URL}/planets`;
    const response = await fetch(url)
    const planets = await response.json();
    return planets as PaginatedQuery<Planet[]>
  }catch (error){
    console.log(`[🚨]: Error fetching planets`,error)
    return null;
  }
}