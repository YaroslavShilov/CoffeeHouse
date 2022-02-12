import React from "react";
import Header from "../components/Header/Header";
import AboutItem from "../components/AboutItem/AboutItem";
import { RouteComponentProps } from "react-router";
import Preloader from "../components/Preloader/Preloader";

type MatchParams = {
  name: string;
};

type Props = RouteComponentProps<MatchParams>;

const AboutIt: React.FC<Props> = ({ match }) => (
  <Preloader>
    <Header title={"Our Coffee"} />
    <AboutItem url={match.params.name} />
  </Preloader>
);

export default AboutIt;
