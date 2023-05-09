import { fireEvent, render, screen } from "@testing-library/react"
import { Navbar } from "../../../src/ui"
import { AuthContext } from "../../../src/auth"
import { MemoryRouter, useNavigate } from "react-router-dom"

const mockedUseNavigate=jest.fn()
jest.mock('react-router-dom',()=>({
  ...jest.requireActual('react-router-dom'),
  useNavigate:()=>mockedUseNavigate
}))
describe('Pruebas en Navbar', () => { 
  const logoutMock= jest.fn()
  const contextValue={
    logged:true,
    user:{
      id:1,
      name:'Roberto'
    },
    logout:logoutMock
  }

  beforeEach(()=>jest.clearAllMocks())
  test('debe mostrar el nombre del usuario', () => {
    
    render(
      <MemoryRouter initialEntries={['/login']}>
        <AuthContext.Provider value={contextValue}>
          <Navbar/>
        </AuthContext.Provider>
      </MemoryRouter>
    )
    expect(screen.getByText(contextValue.user.name)).toBeTruthy()
  })

  test('debe llamar el logout y navigate cuando se hace click en el botón', () => {
    
    
    render(
      <MemoryRouter initialEntries={['/login']}>
        <AuthContext.Provider value={contextValue}>
          <Navbar/>
        </AuthContext.Provider>
      </MemoryRouter>
    )
    const button= screen.getByLabelText('logout')
    fireEvent.click(button)
    expect(logoutMock).toHaveBeenCalled()
    expect(mockedUseNavigate).toHaveBeenCalledWith("/login", {"replace": true})
  })
  
})