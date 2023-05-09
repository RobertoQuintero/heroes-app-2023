import { getHeroesByName } from "../../../src/heroes/helpers";

describe("pruebas en getHoroesByName", () => {
  test("debe devolver los heroes segun el nombre", () => {
    const heroes = getHeroesByName("green");
    expect(heroes.length).toBe(2);
  });
});
