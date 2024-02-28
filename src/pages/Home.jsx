import React from "react";
import { useLoaderData } from "react-router-dom";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";

const Home = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <>
      <Banner banner={data.banner} />
      <About />
    </>
  );
};

export default Home;
