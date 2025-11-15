
export const round = (value : string) => {
  const num = Number(value);        // Convertir el string a número
  if (isNaN(num)) return 0;         // Manejo básico de error
  return Math.round(num * 100) / 100;
}

export const planetHasWater = (surfaceWater : string) => {
  const surfaceWaterAsNumber = parseInt(surfaceWater)

  return surfaceWater === "unknown" || ( !isNaN(surfaceWaterAsNumber) && surfaceWaterAsNumber <= 0)
    ? false
    : true
}

export const formatGravity = (gravity : string) => {

}

export const formatDiameter = (diameter : string) => {
  const diameterAsNumber = round(diameter)

  return `${diameterAsNumber.toLocaleString("en-US")} km`
}

export const formatPopulation = (population : string) => {
  const populationAsNumber = round(population)
  return `${populationAsNumber.toLocaleString("en-US")}`
}