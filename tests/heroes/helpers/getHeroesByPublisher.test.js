import { getHeroesByPublisher } from "../../../src/heroes/helpers";

describe("pruebas en getHeroesByPublisher", () => {
  test("debe devolver los heroes segun el publisher", () => {
    const heroes = getHeroesByPublisher("DC Comics");
    expect(heroes.length).toBe(10);
  });

  test("debe devolver el error si no se encuentra el publisher", () => {
    const publisher = "DC";
    try {
      getHeroesByPublisher(publisher);
    } catch (error) {
      expect(error.message).toBe(`${publisher} is not a valid publisher`);
    }
  });
});
