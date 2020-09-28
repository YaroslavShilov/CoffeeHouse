import React from "react";
import Header from "../components/Header/Header";
import AboutItem from "../components/AboutItem/AboutItem";

const AboutIt = ({ match }) => {
  return (
    <>
      <Header title={"Our Coffee"} />
      {/*<AboutItem url={match.params.name}/>*/}
    </>
  );
};

export default AboutIt;
