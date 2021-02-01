const { shallow } = require("enzyme");
const { default: AddCategory } = require("../../components/AddCategory");

describe("Pruebas en el componente AddCategory", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Pika";
    input.simulate("change", {
      target: {
        value: value,
      },
    });
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(value);
  });

  test("No Debe de postear la informacion con submit ", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
    // la funcion tiene argumento vacio por eso no se llama
  });

  test("Debe de llamar el setCategories y limpiar la caja de text", () => {
    const value = "Pika";
    wrapper.find("input").simulate("change", { target: { value } });
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
