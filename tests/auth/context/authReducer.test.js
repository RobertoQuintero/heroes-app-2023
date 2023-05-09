import { authReducer } from "../../../src/auth/context/authReducer";

describe("Pruebas en authReducer", () => {
  const initialState = {
    logged: false,
    user: null,
  };
  test("debe retornar el estado por defecto", () => {
    const state = authReducer(initialState, {});
    expect(state).toEqual(initialState);
  });

  test("debe de llamar el login autenticar y establecer el user", () => {
    const action = {
      type: "[Auth] Login",
      payload: {
        id: 1,
        name: "Roberto",
      },
    };

    const state = authReducer(initialState, action);
    expect(state).toEqual({
      logged: true,
      user: action.payload,
    });
  });

  test("debe de llamar el logout", () => {
    const loginState = {
      logged: true,
      user: {
        id: 1,
        name: "Roberto",
      },
    };
    const action = {
      type: "[Auth] Logout",
    };

    const state = authReducer(loginState, action);
    expect(state).toEqual({ logged: false });
  });
});
