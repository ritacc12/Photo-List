import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <p className="photographer">{data.photographer}</p>
      <div className="imageContainer">
        <img src={data.src.large} alt="" />
      </div>
      <div className="download">
        <p>
          在此下載圖片:{" "}
          <a target="_blank" href={data.src.large} rel="noreferrer">
            按一下
          </a>
        </p>
      </div>
    </div>
  );
};

export default Picture;
