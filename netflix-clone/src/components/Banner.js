import React from "react";
import "../styles/banner.css";

function Banner() {
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <div
      className="banner"
      style={{
        backgroundColor: "black",
        // backgroundImage: `url("https://www.bajajfinservmarkets.in/content/dam/emistoremarketplace/index/20-02-2020/netflix/Netflix-Banner_1080x419.jpg?impolicy=pqmedium")`,
        backgroundSize: "cover",
        backgroundPosition: "cover cover",
      }}
    >
      <div className="bannerContent">
        <h1 className="bannerTitle">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My list</button>
        </div>
        <h1 className="banner__description">
          {truncate(
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus tempus neque, vitae finibus ipsum gravida vel. Pellentesque hendrerit mollis risus. Curabitur sed tempus tortor. Praesent in fringilla lacus. Nunc quis urna at tellus consequat viverra at sed ex. Vivamus quis convallis tortor. Cras bibendum nec arcu vitae posuere.`,
            150
          )}
        </h1>
      </div>
      <div className="banner--fadebutton" />
    </div>
  );
}

export default Banner;
