/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu } from 'antd';
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";

function LoginMenu(props) {
  const user = useSelector(state => state.user)

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert('Log Out Failed')
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode} style={{backgroundColor:'black'}}>
        <Menu.Item key="mail" className='hoverToRed'>
          <a href="/login">로그인</a>
        </Menu.Item>
        <Menu.Item key="app" className='hoverToRed'>
          <a href="/register">회원가입</a>
        </Menu.Item>
      </Menu>
    )
  } else {
    return (
      <Menu mode={props.mode} style={{backgroundColor:'black'}}>
        <Menu.Item key="logout" className='hoverToRed' >
          <a onClick={logoutHandler} id='logout'>로그아웃</a>
        </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(LoginMenu);

