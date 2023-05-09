const { render, screen } = require("@testing-library/react")
const { AuthContext } = require("../../src/auth/context/AuthContext")
const { PublicRoute } = require("../../src/router/PublicRoute")
const { MemoryRouter, Route, Routes } = require("react-router-dom")

describe('Pruebas en PublicRoute', () => { 
  test('debe mostrar  el children si no está autenticado', () => {
    
    render(
      <AuthContext.Provider value={{logged:false}}>
        <PublicRoute>
          <h1>Ruta pública</h1>
        </PublicRoute>
      </AuthContext.Provider>
    )
    expect(screen.getByText('Ruta pública')).toBeTruthy()
    
  })

  test('debe navegar si está autenticado', () => {
    const contextValue={
      logged:true,
      user:{
        id:1,
        name:'Roberto'
      }
    }

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route path="login" element={
              <PublicRoute>
                <h1>Ruta pública</h1>
              </PublicRoute>
            } />
            <Route path="marvel" element={<h1>Página Marvel</h1>}/>
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    )
    expect(screen.getByText('Página Marvel')).toBeTruthy()
  })
  
})