import React from "react";
import "../styles/banner.css";

function Banner() {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url("https://acf.geeknetic.es/imgri/imagenes/noticias/2020/18310-netflix-av1-codec-muestra.jpg?f=webp")`,
        backgroundSize: "cover",
        backgroundPosition: "cover cover",
      }}
    >
      <div className="bannerContent">
        <h1 className="bannerTitle">Movie Name</h1>
      </div>
    </div>
  );
}

export default Banner;
