import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter, useNavigate } from "react-router-dom"
import { SearchPage } from "../../../src/heroes"

const mockedUseNavigate=jest.fn()

jest.mock('react-router-dom',()=>({
  ...jest.requireActual('react-router-dom'),
  useNavigate:()=>mockedUseNavigate
}))

describe('Pruebas en SearchPage', () => { 
  beforeEach(()=>jest.clearAllMocks())

  test('debe mostarse correctamente con  valores por defecto', () => {
    const {container}=render(
      <MemoryRouter>
        <SearchPage/>
      </MemoryRouter>
    )
    expect(container).toMatchSnapshot()
  })

  test('debe mostar a Batman y el input con el valor del queryString', () => {

    render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchPage/>
      </MemoryRouter>
    )
    const input = screen.getByRole('textbox')
    expect(input.value).toBe('batman')

    const img=screen.getByRole('img')
    expect(img.src).toContain('/assets/heroes/dc-batman.jpg')

    const search= screen.getByLabelText('searchDiv')
    expect(search.style.display).toBe('none')
  })

  test('debe mostrar un error si no se muestra el heroe (batman123)', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman123']}>
        <SearchPage/>
      </MemoryRouter>
    )

    const search= screen.getByLabelText('searchDanger')
    expect(search.style.display).toBe('')
  })

  test('debe llamar el navigate a la pantalla nueva', () => {
    render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage/>
      </MemoryRouter>
    )

    const input = screen.getByRole('textbox')
    fireEvent.change(input,{target:{name:'searchText', value:'superman'}})

    const form = screen.getByLabelText('form')
    fireEvent.submit(form)

    expect(mockedUseNavigate).toHaveBeenCalledWith('?q=superman')
    
  })
  
  
})