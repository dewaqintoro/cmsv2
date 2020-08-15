import React, { Component } from 'react'

import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import Link from 'next/link'
const { Header, Content, Footer, Sider } = Layout;
import SideCompDew from './components/SideCompDew';
 
class AdminPage extends Component {

  render() {
    return (
    <div>
      <Layout> 
        <SideCompDew aktif="1"/>
        <Layout>
          <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              {/* <Kasus/> */}
              <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facere dolore porro neque ea quas reiciendis qui nesciunt autem aut reprehenderit delectus, similique quidem fuga est error velit adipisci. Odio tenetur facilis sapiente repellendus. Beatae consequuntur quos nobis amet. Minima labore porro non distinctio ut facilis cupiditate. Deserunt blanditiis fuga aliquam accusamus quis, excepturi amet, consectetur tenetur culpa nemo velit sequi omnis officiis asperiores fugiat! Ipsa commodi sed possimus ad omnis officiis. Fugit veniam molestias explicabo optio repudiandae vel, blanditiis earum iure, vero assumenda eligendi ipsum delectus! Dignissimos culpa natus, provident voluptates temporibus esse nisi? At quam tempore explicabo saepe.</h1>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
    )
  }
}

export default AdminPage