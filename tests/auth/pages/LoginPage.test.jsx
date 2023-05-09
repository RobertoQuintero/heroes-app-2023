import { fireEvent, render, screen } from "@testing-library/react"
import { AuthContext, LoginPage } from "../../../src/auth"
import { MemoryRouter } from "react-router-dom"

const mockedUseNavigate= jest.fn()
jest.mock("react-router-dom",()=>({
  ...jest.requireActual("react-router-dom"),
  useNavigate:()=>mockedUseNavigate
}))

describe('Pruebas en LoginPage', () => { 
  const loginMock=jest.fn()
  const authState={
    login:loginMock
  }

  beforeEach(()=>jest.clearAllMocks())

  test('debe llamar login al hacer click', () => {

    render(
      <AuthContext.Provider value={{...authState}}>
        <MemoryRouter>
          <LoginPage/>
        </MemoryRouter>
      </AuthContext.Provider>
    )
    const login= screen.getByLabelText('login')
    fireEvent.click(login)
    expect(loginMock).toHaveBeenCalledWith('Roberto Quintero')
  })

  test('debe llamar el localStorage getItem con lastPath', () => {
    Storage.prototype.getItem= jest.fn()
    render(
      <AuthContext.Provider value={{...authState}}>
        <MemoryRouter>
          <LoginPage/>
        </MemoryRouter>
      </AuthContext.Provider>
    )
    const login= screen.getByLabelText('login')
    fireEvent.click(login)
    expect(localStorage.getItem).toHaveBeenCalledWith('lastPath')
  })

  test('debe llamar el navigate hacia el path indicado', () => {
    render(
      <AuthContext.Provider value={{...authState}}>
        <MemoryRouter>
          <LoginPage/>
        </MemoryRouter>
      </AuthContext.Provider>
    )
    const login= screen.getByLabelText('login')
    fireEvent.click(login)
    expect(mockedUseNavigate).toHaveBeenCalledWith('/',{replace:true})
  })
})