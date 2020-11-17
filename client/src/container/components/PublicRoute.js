import React from "react";

const PublicRoute = ({ container: Container, ...restProps }) => {
  return <Container {...restProps} />;
};

export default PublicRoute;
