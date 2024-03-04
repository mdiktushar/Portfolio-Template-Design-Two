import React from "react";
import { useLoaderData } from "react-router-dom";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Download from "./components/Download/Download";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Expriance from "./components/Expriance/Expriance";
import Testimonials from "./components/Testimonials/Testimonials";

const Home = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <>
      <Banner banner={data.banner} />
      <About />
      <Education />
      <Download />
      <Expriance />
      <Skills skills={data.skills}/>
      <Testimonials />
    </>
  );
};

export default Home;
