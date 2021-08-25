import React from 'react'
import { NavLink } from 'react-router-dom';

const NavList = () => {
  return (
    <>
      <ul className="nav__list">
          <NavLink to="/home">
            <li className="nav__item">
              <p className="nav__item--name active"><i className="fas fa-home"></i>Trang chủ</p>
            </li>
          </NavLink>
          <NavLink to="/">
            <li className="nav__item">
              <p className="nav__item--name"><i className="fas fa-search"></i>Tìm kiếm</p>
            </li>
          </NavLink>
          <li className="nav__item">
            <p className="nav__item--name"><i className="far fa-chart-bar"></i>Thư viện</p>
          </li>
          <li className="nav__item">
            <p className="nav__item--name"><i className="fas fa-plus"></i>Tạo playlist</p>
          </li>
          <NavLink to="/fav">
            <li className="nav__item">
              <p className="nav__item--name"><i className="far fa-heart"></i>Bài hát yêu thích</p>
            </li>
          </NavLink>
        </ul>
    </>
  )
}

export default React.memo(NavList)