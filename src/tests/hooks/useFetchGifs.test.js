const { useFetchGifs } = require("../../hooks/useFetchGifs");
import { renderHook } from "@testing-library/react-hooks";

describe("Pruebas en useFetchGifs", () => {
  const category = "pika";

  test("Debe de retornar el estado inicial", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(category)
    );
    const { data, loading } = result.current;
    // console.log(data, loading);
    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test("Debe de retornar un arreglo de img y el loading en false ", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(category)
    );
    await waitForNextUpdate();

    const { data, loading } = result.current;
    expect(data.length).toEqual(10);
    expect(loading).toBe(false);
  });
});
