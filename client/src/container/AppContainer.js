import React, { useEffect, useState } from "react";
import { api } from "../api";
import { Router } from "@reach/router";
import { createStructuredSelector } from "reselect";
// import { getUser } from "./actions";
import { connect } from "react-redux";
import { PublicRoute, PageNotFound } from "./components";
// import { Login } from "./guest";
import LayoutContainer from "../components/layout/LayoutContainer";
import { selectToken } from "./selectors";
import "antd/dist/antd.css";

import { Dashboard } from "./protected";
const AppContainer = ({ token, getUser }) => {
  // useEffect(() => {
  //   getClient();
  // }, []);
  // const [theme] = useState(null);

  // useEffect(() => {
  //   api.defaults.headers.common.Authorization = token;
  //   if (token) {
  //     getUser();
  //   }
  // }, [token, getUser]);

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

const mapStateToProps = createStructuredSelector({
  token: selectToken,
});

// const mapDispatchToProps = {
//   getUser,
// };

export default connect(mapStateToProps, null)(AppContainer);
