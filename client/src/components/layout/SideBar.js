import React, { useState } from "react";
import { Layout, Menu, Affix, Card } from "antd";
import { Link } from "@reach/router";
import { menuItems } from "./menuItems";

const { Sider, Header, Content } = Layout;
const { SubMenu } = Menu;

const SideBar = ({ children }) => {
  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  const [collapsed, setCollapsed] = useState(false);

  const menuRender = () => {
    return menuItems.map((menu, menuIndex) => {
      if (menu.children == null) {
        return (
          <Menu.Item key={`${menu.title}-${menuIndex}-no-child`}>
            <Link to={`${menu.link}`}>{collapsed && menu.title}</Link>
          </Menu.Item>
        );
      } else {
        return (
          <SubMenu
            key={`${menu.title}-${menuIndex}-with-child`}
            title={menu.title}
          >
            {menu.children.map((subMenu, subMenuIndex) => {
              if (subMenu.children == null) {
                return (
                  <Menu.Item
                    key={`${menu.title}-submenu-${subMenu.title}-no-child`}
                  >
                    <Link to={`${subMenu.link}`}>{subMenu.title}</Link>
                  </Menu.Item>
                );
              } else {
                return (
                  <SubMenu
                    key={`${menu.title}-${subMenu.title}-submenu-with-child-${subMenuIndex}`}
                    title={subMenu.title}
                  >
                    {subMenu.children.map((subSubMenu, subSubMenuIndex) => {
                      if (subSubMenu.children == null) {
                        return (
                          <Menu.Item
                            key={`${subSubMenu.title}-${subSubMenuIndex}-subsubmenu-no-child`}
                          >
                            <Link to={`${subSubMenu.link}`}>
                              {subSubMenu.title}
                            </Link>
                          </Menu.Item>
                        );
                      } else {
                        return (
                          <SubMenu
                            key={`subSubmenu-with-child-${subSubMenu.title}-${subSubMenuIndex}-with-child`}
                          >
                            {subSubMenu.title}
                          </SubMenu>
                        );
                      }
                    })}
                  </SubMenu>
                );
              }
            })}
          </SubMenu>
        );
      }
    });
  };

  return (
    <>
      {window.innerWidth > 578 ? (
        <Sider
          className="sider-class"
          // collapsedWidth={"20vh"}
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapse}
        >
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <div
              style={{
                margin: "13px 0 13px 0",
                padding: "20px",
                fontSize: "27px",
                // fontWeight: "bold",
                color: "white",
              }}
            >
              <Link
                style={{
                  fontSize: "27px",
                  color: "white",
                }}
                to="/"
              >
                {/* {this.props.client.client_name} */}
              </Link>
            </div>

            {menuRender()}
          </Menu>
        </Sider>
      ) : (
        <Affix>
          <Menu
            style={{ width: "100%" }}
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="horizontal"
          >
            {menuRender()}
          </Menu>
        </Affix>
      )}

      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {/* <NavBar user={this.props.user} /> */}
        </Header>

        <Content style={{ margin: "1rem" }}>
          <Card className="layout-card">{children}</Card>{" "}
        </Content>
        {/* <Layout.Footer style={{ textAlign: "center" }}>
            2020 Raghav Kattel
          </Layout.Footer> */}
      </Layout>
    </>
  );
};
export default SideBar;
