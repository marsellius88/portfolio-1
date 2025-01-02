import React from "react";
import PageHeading from "../components/PageHeading";
import ContactContainer from "../components/Contact/ContactContainer";

export default function Contact({ about }) {
  return (
    <>
      <PageHeading title="Contact Me" />
      <ContactContainer about={about} />
    </>
  );
}
