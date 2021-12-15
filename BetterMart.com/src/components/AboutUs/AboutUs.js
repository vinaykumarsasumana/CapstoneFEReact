import React, { useEffect } from "react";

import Content from "./Components/Content";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Sitemap from "./Sitemap";

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <Content />
    </React.Fragment>
  );
}

export default AboutUs;
