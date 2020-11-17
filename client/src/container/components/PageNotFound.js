import React from "react";
import { Link } from "@reach/router";
import { Row } from "antd";

const PageNotFound = () => {
  return (
    <Row style={{ padding: 20, textAlign: "center" }}>
      The page is not available. click <Link to="/">here</Link> to go back to
      homepage.
    </Row>
  );
};

export default PageNotFound;
