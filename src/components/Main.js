import React,{Component} from 'react';
import { Layout } from 'antd';
const {  Content} = Layout;



class Main extends React.Component {
  // submenu keys of first level

  render() {

    return (
      <Content style={{ margin: '24px 16px 0' }}>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          <img src={this.props.imgdata} />
        </div>
      </Content>
    );
  }
}

 export default Main
