import React,{Component} from 'react';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;

class LeftNav extends React.Component {
  // submenu keys of first level
  handleClick = (e) => {
    switch(e.key){
      case '1':this.props.a_a
      case '2':console.log(this.props.a_b);
      case '3':this.props.a_c
      default:this.props.a_c
    }
  }

  render() {

    return (


        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={this.handleClick}>
        <Menu.Item key="1" >
          <Icon type="user" />
          <span className="nav-text">nav 1</span>
        </Menu.Item>
        <Menu.Item key="2" >
          <Icon type="video-camera" />
          <span className="nav-text">nav 2</span>
        </Menu.Item>
        <Menu.Item key="3" >
          <Icon type="upload" />
          <span className="nav-text">nav 3</span>
        </Menu.Item>
        <Menu.Item key="4">
          <Icon type="user" />
          <span className="nav-text">nav 4</span>
        </Menu.Item>
      </Menu>

    );
  }
}

 export default LeftNav
