import { fireEvent, render, screen } from "@testing-library/react"
import { HeroPage } from "../../../src/heroes/pages/HeroPage"
import { MemoryRouter, Route, Routes } from "react-router-dom"

const mockedUseNavigate=jest.fn()
jest.mock("react-router-dom",()=>({
  ...jest.requireActual("react-router-dom"),
useNavigate:()  =>mockedUseNavigate
}))

describe('pruebas en HeroPage', () => { 
  beforeEach(()=>jest.clearAllMocks())

  test('debe mostrar el heroe', () => {

    render(
      <MemoryRouter initialEntries={['/hero/dc-batman']}>
        <Routes>
          <Route path='hero/:id' element={<HeroPage />}/>
          <Route path='marvel' element={<h1>Marvel</h1>} />
        </Routes>
      </MemoryRouter>
    )
    const name= screen.getByLabelText('name').innerHTML
    expect(name).toBe('Batman')
  })

  test('debe mostrar la pagina de marvel al no encontrar un heroe', () => {

    render(
      <MemoryRouter initialEntries={['/hero/123ñkl']}>
        <Routes>
          <Route path='hero/:id' element={<HeroPage />}/>
          <Route path='marvel' element={<h1>Marvel</h1>} />
        </Routes>
      </MemoryRouter>
    )
    
    expect(screen.getByText('Marvel')).toBeTruthy()
  })
  
  test('debe llamar el navigate al hacer click en el botón', () => {
    render(
      <MemoryRouter initialEntries={['/hero/dc-batman']}>
        <Routes>
          <Route path='hero/:id' element={<HeroPage />}/>
          <Route path='marvel' element={<h1>Marvel</h1>} />
        </Routes>
      </MemoryRouter>
    )
    const button= screen.getByLabelText('back')
    fireEvent.click(button)
    expect(mockedUseNavigate).toHaveBeenCalledWith(-1)

  })
  
  
})