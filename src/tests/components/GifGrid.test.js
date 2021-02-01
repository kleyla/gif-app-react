const { shallow } = require("enzyme");
const { GifGrid } = require("../../components/GifGrid");
const { useFetchGifs } = require("../../hooks/useFetchGifs");
jest.mock("../../hooks/useFetchGifs");

describe("Prueba de GifGrid", () => {
  const category = "pika";

  test("Debe mostrarse correctamente", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe demostrar items cuando se cargan imagenes useFetchGifs", () => {
    const gifs = [
      { id: "abc", url: "https://", title: "pika" },
      { id: "123", url: "https://holi", title: "kiss" },
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
