import React from "react";
import { useLoaderData } from "react-router-dom";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Download from "./components/Download/Download";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";

const Home = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <>
      <Banner banner={data.banner} />
      <About />
      <Education />
      <Download />
      <Skills />
    </>
  );
};

export default Home;
