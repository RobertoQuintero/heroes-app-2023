import { render, screen } from "@testing-library/react"
import { HeroCard } from "../../../src/heroes/components/HeroCard"
import { MemoryRouter } from "react-router-dom"

describe('pruebas en HeroCard', () => { 
  const hero ={
    id: "dc-batman",
    superhero: "Batman",
    publisher: "DC Comics",
    alter_ego: "Bruce Wayne",
    first_appearance: "Detective Comics #27",
    characters: "Bruce Wayne",
  }
  test('debe mostrar el heroe segun el objeto enviado', () => {
   render(
   <MemoryRouter>
     <HeroCard {...hero}/>
   </MemoryRouter>
   ) 
    expect(screen.getByText(hero.superhero)).toBeTruthy()
  })
  
})