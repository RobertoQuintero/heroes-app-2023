import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../src/auth"
import { MemoryRouter } from "react-router-dom"
import { AppRouter } from "../../src/router/AppRouter"

describe('pruebas en AppRouter', () => { 
  test('debe mostrar el login si no está autenticado', () => {
    const contextValue={
      logged:false,
    }
    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter/>
        </AuthContext.Provider>
      </MemoryRouter>
    )
    expect(screen.getByText('LoginPage')).toBeTruthy()
    // expect(screen.getAllByText('Login').length).toBe(2)
  })

  test('debe mostrar el componente de Marvel no está autenticado', () => {
    const contextValue={
      logged:true,
      user:{
        id:1,
        name:'Roberto'
      }
    }
    render(
      <MemoryRouter initialEntries={['/login']}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter/>
        </AuthContext.Provider>
      </MemoryRouter>
    )
    expect(screen.getByText('MarvelPage')).toBeTruthy()
  })
  
})