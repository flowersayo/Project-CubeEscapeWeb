import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode} style={{backgroundColor:'black'}}>
    <Menu.Item key='intro' className='hoverToRed'>
      <a href="/intro" >게임소개</a>
    </Menu.Item>
    <Menu.Item key='hint' className='hoverToRed'>
      <a href="/hint" >스테이지소개</a>
    </Menu.Item>
    <SubMenu title={<a href="/forum" onClick={(e)=>{e.preventDefault(); }} >게시판</a>} className='hoverToRed' >
        <Menu.Item key="setting:1" ><a href="/forum/free" className='submenu'>자유게시판</a></Menu.Item>
        <Menu.Item key="setting:2"><a href="/forum/playtip"  className='submenu'>공략게시판</a></Menu.Item>
        <Menu.Item key="setting:3" ><a href="/forum/idea" className='submenu'>아이디어게시판</a></Menu.Item>
    </SubMenu>
    <Menu.Item key='review' className='hoverToRed'>
      <a href="/review">리뷰</a>
    </Menu.Item>
    <Menu.Item key='report' className='hoverToRed'>
      <a href="/report">버그제보</a>
    </Menu.Item>
   
  </Menu>
  )
}

export default LeftMenu