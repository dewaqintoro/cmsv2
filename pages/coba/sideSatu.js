import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

 
class SideSatu extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };



  render() {
    return (
      <Layout>
      <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu> 
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: this.toggle,
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit veniam placeat assumenda commodi exercitationem saepe laudantium quasi, repellendus accusamus minus dolorum magni animi blanditiis, dolores rem sunt! Quas eos repudiandae provident incidunt quis molestias placeat, eius quae maxime, possimus illo! Eveniet at aliquid, esse fugiat libero quis illum eum officia modi porro minus dignissimos ea alias ipsam! Maxime praesentium vero sed harum facere nulla eveniet? Provident accusantium magni modi! Numquam neque cupiditate eveniet voluptates adipisci odio dolore placeat ea? At quaerat, ad, numquam delectus minus neque dolorem voluptate sequi quia in sint eos dolorum. Illo dolore labore exercitationem culpa modi.</h1>
        </Content>
      </Layout>
    </Layout>
    )
  }
}


export default SideSatu