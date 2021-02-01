import React from "react";
import PropTypes from "prop-types";
// import { getGifts } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);

  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
      {loading && <p className="animate__animated animate__flash">Loading</p>}
      <div className="card-grid">
        {images.map((img) => {
          return <GifGridItem {...img} key={img.id} />;
        })}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
