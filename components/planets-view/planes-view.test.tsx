import { screen } from "@testing-library/react"
import { PlanetsView } from "./index"
import { renderWithClient } from "@/utils/test-utils"

const planetsMock = {
    "count": 61, 
    "next": "https://swapi.py4e.com/api/planets/?page=2", 
    "previous": null, 
    "results": [
      {
        "name": "Tatooine", 
        "rotation_period": "23", 
        "orbital_period": "304", 
        "diameter": "10465", 
        "climate": "arid", 
        "gravity": "1 standard", 
        "terrain": "desert", 
        "surface_water": "1", 
        "population": "200000", 
        "residents": [
            "https://swapi.py4e.com/api/people/1/", 
            "https://swapi.py4e.com/api/people/2/", 
            "https://swapi.py4e.com/api/people/4/", 
            "https://swapi.py4e.com/api/people/6/", 
            "https://swapi.py4e.com/api/people/7/", 
            "https://swapi.py4e.com/api/people/8/", 
            "https://swapi.py4e.com/api/people/9/", 
            "https://swapi.py4e.com/api/people/11/", 
            "https://swapi.py4e.com/api/people/43/", 
            "https://swapi.py4e.com/api/people/62/"
        ], 
        "films": [
            "https://swapi.py4e.com/api/films/1/", 
            "https://swapi.py4e.com/api/films/3/", 
            "https://swapi.py4e.com/api/films/4/", 
            "https://swapi.py4e.com/api/films/5/", 
            "https://swapi.py4e.com/api/films/6/"
        ], 
        "created": "2014-12-09T13:50:49.641000Z", 
        "edited": "2014-12-20T20:58:18.411000Z", 
        "url": "https://swapi.py4e.com/api/planets/1/"
      }
    ]
}

jest.mock('@/lib/celestial-bodies', () => ({
  fetchPlanets: jest.fn(),
}))

beforeEach(() => {
  global.fetch = jest.fn()
})

describe('Planets View Component', () => {
  it('It renders header', () => {
    renderWithClient(<PlanetsView planets={planetsMock}/>)

    expect(
      screen.getByRole('heading', { name: /Planetas y cuerpos celestes/i })
    ).toBeInTheDocument()
  })
})