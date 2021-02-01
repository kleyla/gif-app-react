import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);
  // console.log(categories);
  //   const handleAdd = () => {
  //     // setCategories(["Holi", ...categories]);
  //     setCategories((cats) => [...cats, "Holi"]);
  //   };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      {/* <button onClick={handleAdd}>Agregar</button> */}
      <ol>
        {categories.map((item, index) => {
          return <GifGrid category={item} key={index} />;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
