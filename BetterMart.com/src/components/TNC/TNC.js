import React, { useState, useEffect } from "react";
import Policy from "./Policy";
// import './App.css';

const TNC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Policy />
    </>
  );
};

export default TNC;
