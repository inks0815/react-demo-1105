import React,{Component} from 'react';
import LeftNav from './Leftnav';
import Main from './Main'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;


class Wrap extends React.Component {
  // submenu keys of first level


  render() {
    const _a = this.props.action_a;
    const _b = this.props.action_b;
    const _c = this.props.action_c;
    const _data = this.props.value;
    return (


        <Layout style={{ minHeight: '100vh' }}>
          <Sider
              breakpoint="lg"
              collapsedWidth="0"
              onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
            >
              <LeftNav a_a={_a} a_b={_b} a_c={_c}></LeftNav>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
          <Main imgdata = {_data}></Main>
          <Footer style={{ textAlign: 'center' }}>
           Ant Design ©2016 Created by Ant UED
         </Footer>
       </Layout>
     </Layout>

    );
  }
}

 export default Wrap
