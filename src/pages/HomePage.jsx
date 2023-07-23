import React from "react";
import HomeHeader from "../componenets/Layout/HomeHeader";
import Filters from "../componenets/Home/Filters";
import Posts from "../componenets/Home/Post/Posts";
import Footer from "../componenets/Home/Footer";

function HomePage() {
  return (
    <main>
      <HomeHeader />
      <Filters />
      <Posts />
      <Footer />
    </main>
  );
}

export default HomePage;
