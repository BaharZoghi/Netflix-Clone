import React from "react";
import "../styles/homescreen.css";
import NavBar from "./NavBar";
import Banner from "../components/Banner";
import Rows from "./Rows";
import request from "../components/Request";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <NavBar />
      <Banner />
      <Rows
        title="NETFLIX ORIGINAL"
        fetchURL={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Rows title="Trending Now" fetchURL={request.fetchTrending} />
      <Rows title="Top Rated" fetchURL={request.fetchTopRated} />
      <Rows title="Action Movies" fetchURL={request.fetchActionMovies} />
      <Rows title="Comedy Movies" fetchURL={request.fetchComedyMovies} />
      <Rows title="Horror Movies" fetchURL={request.fetchHorrorMovies} />
      <Rows title="Romance Movies" fetchURL={request.fetchRomanceMovies} />
      <Rows title="Documentaries" fetchURL={request.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;
