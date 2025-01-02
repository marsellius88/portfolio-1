import React from "react";
import PageHeading from "../components/PageHeading";
import AboutContainer from "../components/About/AboutContainer";

export default function About({ about }) {
  return (
    <>
      <PageHeading title="About Me" />
      <AboutContainer about={about} />
    </>
  );
}
