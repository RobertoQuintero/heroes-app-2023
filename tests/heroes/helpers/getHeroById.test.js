import { getHeroById } from "../../../src/heroes/helpers";

describe("Pruebas en getHeroById", () => {
  test("debe regresar el heroe segun el id", () => {
    const hero = getHeroById("dc-batman");
    expect(hero).toEqual({
      id: "dc-batman",
      superhero: "Batman",
      publisher: "DC Comics",
      alter_ego: "Bruce Wayne",
      first_appearance: "Detective Comics #27",
      characters: "Bruce Wayne",
    });

    const hero2 = getHeroById("dc-batmann");
    expect(hero2).toBe(undefined);
  });
});
