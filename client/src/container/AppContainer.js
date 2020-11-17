import React from "react";
import { Router } from "@reach/router";
import { connect } from "react-redux";
import { PublicRoute, PageNotFound } from "./components";
import LayoutContainer from "../components/layout/LayoutContainer";
import "antd/dist/antd.dark.css";

import { Dashboard } from "./protected";
const AppContainer = () => {
 

  return (
    <>
      <LayoutContainer>
        <Router>
          <PublicRoute container={Dashboard} path="/" />
          <PublicRoute container={PageNotFound} path="*" />
        </Router>
      </LayoutContainer>
    </>
  );
};


// const mapDispatchToProps = {
//   getUser,
// };

export default connect(null, null)(AppContainer);
