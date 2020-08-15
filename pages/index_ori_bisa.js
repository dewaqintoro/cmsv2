// import { Form, Select, InputNumber, Switch, Slider, Button } from 'antd'

// Custom DatePicker that uses Day.js instead of Moment.js
// import DatePicker from '../components/DatePicker'

// import { SmileFilled } from '@ant-design/icons'

// import Link from 'next/link'

// const FormItem = Form.Item
// const Option = Select.Option

// const content = {
//   marginTop: '100px',
// }

// export default function Home() {
//   return (
//     <div style={content}>
//       <div className="text-center mb-5">
//         <Link href="#">
//           <a className="logo mr-0">
//             <SmileFilled size={48} strokeWidth={1} />
//           </a>
//         </Link>

//         <p className="mb-0 mt-3 text-disabled">Welcome to the world !</p>
//       </div>
//       <div>
//         <Form layout="horizontal">
//           <FormItem
//             label="Input Number"
//             labelCol={{ span: 8 }}
//             wrapperCol={{ span: 8 }}
//           >
//             <InputNumber
//               size="large"
//               min={1}
//               max={10}
//               style={{ width: 100 }}
//               defaultValue={3}
//               name="inputNumber"
//             />
//           </FormItem>

//           <FormItem
//             label="Switch"
//             labelCol={{ span: 8 }}
//             wrapperCol={{ span: 8 }}
//           >
//             <Switch defaultChecked name="switch" />
//           </FormItem>

//           <FormItem
//             label="Slider"
//             labelCol={{ span: 8 }}
//             wrapperCol={{ span: 8 }}
//           >
//             <Slider defaultValue={70} />
//           </FormItem>

//           <FormItem
//             label="Select"
//             labelCol={{ span: 8 }}
//             wrapperCol={{ span: 8 }}
//           >
//             <Select
//               size="large"
//               defaultValue="lucy"
//               style={{ width: 192 }}
//               name="select"
//             >
//               <Option value="jack">jack</Option>
//               <Option value="lucy">lucy</Option>
//               <Option value="disabled" disabled>
//                 disabled
//               </Option>
//               <Option value="yiminghe">yiminghe</Option>
//             </Select>
//           </FormItem>

//           <FormItem
//             label="DatePicker"
//             labelCol={{ span: 8 }}
//             wrapperCol={{ span: 8 }}
//           >
//             <DatePicker name="startDate" />
//           </FormItem>
//           <FormItem
//             style={{ marginTop: 48 }}
//             wrapperCol={{ span: 8, offset: 8 }}
//           >
//             <Button size="large" type="primary" htmlType="submit">
//               OK
//             </Button>
//             <Button size="large" style={{ marginLeft: 8 }}>
//               Cancel
//             </Button>
//           </FormItem>
//         </Form>
//       </div>
//     </div>
//   )
// }





// full sidebar height


// import { Layout, Menu } from 'antd';
// import {
//   AppstoreOutlined,
//   BarChartOutlined,
//   CloudOutlined,
//   ShopOutlined,
//   TeamOutlined,
//   UserOutlined,
//   UploadOutlined,
//   VideoCameraOutlined,
// } from '@ant-design/icons';

// const { Header, Content, Footer, Sider } = Layout;

// export default class Home extends React.Component {
//   state = {
//     collapsed: false,
//   };

//   toggle = () => {
//     this.setState({
//       collapsed: !this.state.collapsed,
//     });
//   };

//   render() {
//     return (
//       <div className="dew">
//          <Layout>
//     <Sider
//       breakpoint="lg"
//       collapsedWidth="0"
//       onBreakpoint={broken => {
//         console.log(broken);
//       }}
//       onCollapse={(collapsed, type) => {
//         console.log(collapsed, type);
//       }}
//       style={{
//         overflow: 'auto',
//         height: '100vh',
//         position: 'fixed',
//         left: 0,
        
//       }}
//     >
//       <div className="logo" />
//       <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
//         <Menu.Item key="1" icon={<UserOutlined />}>
//           <a href="http://www.instagram.com" target="_blank">Dew</a>
//         </Menu.Item>
//         <Menu.Item key="2" icon={<VideoCameraOutlined />}>
//           nav 2
//         </Menu.Item>
//         <Menu.Item key="3" icon={<UploadOutlined />}>
//           nav 3
//         </Menu.Item>
//         <Menu.Item key="4" icon={<BarChartOutlined />}>
//           nav 4
//         </Menu.Item>
//         <Menu.Item key="5" icon={<CloudOutlined />}>
//           nav 5
//         </Menu.Item>
//         <Menu.Item key="6" icon={<AppstoreOutlined />}>
//           nav 6
//         </Menu.Item>
//         <Menu.Item key="7" icon={<TeamOutlined />}>
//           nav 7
//         </Menu.Item>
//         <Menu.Item key="8" icon={<ShopOutlined />}>
//           nav 8
//         </Menu.Item>
//       </Menu>
//     </Sider>
//     <Layout className="site-layout" style={{ marginLeft: 200 }}>
//       <Header className="site-layout-background" style={{ padding: 0 }} />
//       <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
//         <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
//           ...
//           <br />
//           Really
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           long
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           content
//         </div>
//       </Content>
//       <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
//     </Layout>
//   </Layout>,
//       </div>
//     );
//   }
// }



// responsive


import React from 'react'
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import Link from 'next/link'
const { Header, Content, Footer, Sider } = Layout;
const index = () => {

  return (
    <div>
      <Layout>
    <Sider
      breakpoint="lg" 
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
      <div className="center profil">
        <div className="imgProfil">
            <img id="imgProfil" src="https://res.cloudinary.com/dewaqintoro/image/upload/v1596626011/icon/bx_bxs-user-circle_kfbclt.png"/>
        </div>
      <p id="username" style={{textalign: "center"}}>Dewa Qintoro</p>
      <p id="id" style={{textalign: "center"}}>ID:20201161</p>
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link href="/">
            Dashboard
          </Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          <Link href="/persebaran">
            Persebaran
          </Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          nav 4
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      {/* <Header className="site-layout-sub-header-background" style={{ padding: 0 }} /> */}
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          content
        </div>
      </Content>
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
          ...
          <br />
          Really
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          long
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
    </div>
  )
}

export default index





// import React, { Component } from 'react'
// import { Layout, Menu } from 'antd';
// import { 
//   MenuUnfoldOutlined,
//   MenuFoldOutlined,
//   UploadOutlined, 
//   UserOutlined, 
//   VideoCameraOutlined } from '@ant-design/icons';

// const { Header, Content, Footer, Sider } = Layout;
// export default class index extends Component {
//   state = {
//     collapsed: false,
//   };
//   toggle = () => {
//         this.setState({
//           collapsed: !this.state.collapsed,
//         });
//       };
//   render() {
//     return (
//       <div>
//         <Layout>
//      <Sider
//       breakpoint="lg" 
//       collapsedWidth="0"
//       onBreakpoint={broken => {
//         console.log(broken);
//       }}
//       onCollapse={(collapsed, type) => {
//         console.log(collapsed, type);
//       }}
//     >
//       <div className="logo" />
//       <div className="center profil">
//         <div className="imgProfil">
//             <img id="imgProfil" src="https://res.cloudinary.com/dewaqintoro/image/upload/v1596626011/icon/bx_bxs-user-circle_kfbclt.png"/>
//         </div>
//       <p id="username" style={{textalign: "center"}}>Dewa Qintoro</p>
//       <p id="id" style={{textalign: "center"}}>ID:20201161</p>
//       </div>
//       <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
//         <Menu.Item key="1" icon={<UserOutlined />}>
//           nav 1
//         </Menu.Item>
//         <Menu.Item key="2" icon={<VideoCameraOutlined />}>
//           nav 2
//         </Menu.Item>
//         <Menu.Item key="3" icon={<UploadOutlined />}>
//           nav 3
//         </Menu.Item>
//         <Menu.Item key="4" icon={<UserOutlined />}>
//           nav 4
//         </Menu.Item>
//       </Menu>
//     </Sider>
//     <Layout>
//       <Header className="site-layout-background" style={{ padding: 0 }}>
//             {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
//               className: 'trigger',
//               onClick: this.toggle,
//             })}
//           </Header>
//       <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
//         <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
//           ...
//           <br />
//           Really
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           long
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           content
//         </div>
//       </Content>
//       <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
//     </Layout>
//   </Layout>
//       </div>
//     )
//   }
// }



// import React, { Component } from 'react'
// import { Layout, Menu } from 'antd';
// import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

// const { Header, Content, Footer, Sider } = Layout;
// export default class index extends Component {
//   render() {
//     return (
//       <div>
//         <Layout>
//     <Sider
//     style={{
//       overflow: 'auto',
//       height: '100vh',
//       position: 'fixed',
//       left: 0,
//     }}
//       breakpoint="lg"
//       collapsedWidth="0"
//       onBreakpoint={broken => {
//         console.log(broken);
//       }}
//       onCollapse={(collapsed, type) => {
//         console.log(collapsed, type);
//       }}
//     >
//       <div className="logo" />
//       <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
//         <Menu.Item key="1" icon={<UserOutlined />}>
//           nav 1
//         </Menu.Item>
//         <Menu.Item key="2" icon={<VideoCameraOutlined />}>
//           nav 2
//         </Menu.Item>
//         <Menu.Item key="3" icon={<UploadOutlined />}>
//           nav 3
//         </Menu.Item>
//         <Menu.Item key="4" icon={<UserOutlined />}>
//           nav 4
//         </Menu.Item>
//       </Menu>
//     </Sider>
//     <Layout className="site-layout">
//       <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
//       {/* <Content style={{ margin: '24px 16px 0' }}>
//         <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
//           content
//         </div>
//       </Content> */}

// <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
//         <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
//           ...
//           <br />
//           Really
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           long
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           ...
//           <br />
//           content
//         </div>
//       </Content>

//       <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
//     </Layout>
//   </Layout>
//       </div>
//     )
//   }
// }
