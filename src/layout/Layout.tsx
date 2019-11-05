import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connectAlita } from "redux-alita";
import { Layout, Menu, Icon } from "antd";
import Routes from "./../router/index";
import SiderBar from "./sider/SiderBar";
const { Header, Content } = Layout;
type AppProps = {
  setAlitaState: (param: any) => void;
  auth: any;
  responsive: any;
};
class AppMain extends Component<AppProps> {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    const {
      auth = { data: { user: "admin" } },
      responsive = { data: {} }
    } = this.props;
    return (
      <Layout>
        <Router>
          <SiderBar collapsed={this.state.collapsed} />
          <Layout>
            <Header
              style={{
                background: "#fff",
                padding: 0
              }}
            >
              <Icon
                className="trigger"
                type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                onClick={this.toggle}
              />
            </Header>
            <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                background: "#fff",
                minHeight: 280
              }}
            >
              <Routes auth={auth} />
            </Content>
          </Layout>
        </Router>
      </Layout>
    );
  }
}

export default connectAlita(["auth"])(AppMain);
