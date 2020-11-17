import { Layout } from "antd";
import React from "react";
import { connect } from "react-redux";

const { Content } = Layout;

class Container extends React.Component {
  render() {
    const { children} = this.props;

    return (
      <Layout style={{ minHeight: "100vh" }}>
       
          <Content style={{ margin: "1rem" }}>
          {children}
          </Content>
      </Layout>
    );
  }
}


export default connect(null, null)(Container);
