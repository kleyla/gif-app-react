const { shallow } = require("enzyme");
const { default: GifExpertApp } = require("../GifExpertApp");

describe("Prueba en GifExpertApp", () => {
  test("Debe mostrarse correctamente", () => {
    const wrapper = shallow(<GifExpertApp />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar una lista de categorias", () => {
    const categories = ["Pika", "dragon"];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
