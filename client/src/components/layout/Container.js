import { Layout } from "antd";
import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import {
  selectClient,
  selectUser,
  selectIsLoggedIn,
} from "../../container/selectors";
import SideBar from "./SideBar";

const { Content } = Layout;

class Container extends React.Component {
  render() {
    const { children, isLoggedIn, client } = this.props;

    return (
      <Layout style={{ minHeight: "100vh" }}>
        {/* {isLoggedIn ? (
          <SideBar>{children}</SideBar>
        ) : ( */}
          <Content style={{ margin: "1rem" }}>
          {/* {!isLoggedIn && children} */}
          {children}
          </Content>
        {/* )} */}
      </Layout>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  client: selectClient,
  user: selectUser,
  isLoggedIn: selectIsLoggedIn,
});

export default connect(mapStateToProps, null)(Container);
