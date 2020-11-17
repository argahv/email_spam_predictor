import React from "react";
import Container from "./Container";
// import MobileContainer from "./MobileContainer";

const ResponsiveContainer = ({ children }) => (
  <div>
    <Container>{children}</Container>
    {/* <MobileContainer>{children}</MobileContainer> */}
  </div>
);

export default ResponsiveContainer;
