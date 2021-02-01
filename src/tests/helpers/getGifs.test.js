import { getGifts } from "./../../helpers/getGifs";

describe("Pruebas con getGifs Fetch", () => {
  test("Debe de traer 10 elementos", async () => {
    const gifs = await getGifts("Pika");
    expect(gifs.length).toBe(10);
  });

  test("Pruebas con getGifs Fetch si le envio la categoria vacia", async () => {
    const gifs = await getGifts("");
    expect(gifs.length).toBe(0);
  });
});
