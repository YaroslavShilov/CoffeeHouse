import React from "react";
import Header from "../components/Header/Header";
import AboutItem from "../components/AboutItem/AboutItem";
import { RouteComponentProps } from "react-router";

type MatchParams = {
  name: string;
};

type Props = RouteComponentProps<MatchParams>;

const AboutIt: React.FC<Props> = ({ match }) => {
  return (
    <>
      <Header title={"Our Coffee"} />
      <AboutItem url={match.params.name} />
    </>
  );
};

export default AboutIt;
