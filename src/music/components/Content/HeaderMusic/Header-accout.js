import React from 'react'
// import { Layout, Menu } from 'antd'
import { NavLink , useHistory } from 'react-router-dom'
import {helper} from '../../../helper/common'

const HeaderAccout = () => {
  // const {pathname} = useLocation()
  const infoUser = helper.getUsername()
  const history = useHistory()

  const logoutMovies = () => {
    helper.removeToken()
    // quay về trang login
    history.push('/login')
  }

  return (
    <>
      <div className="content__nav--accout">
          { infoUser === null &&
            <NavLink to="/login">
              <div className="content__nav--accout-login">Đăng Nhập</div>
            </NavLink>
          }
          {infoUser !== null &&
            <div className="user" key="user">Hi : {infoUser}</div>
          }
          {infoUser !== null && 
          <div className="user" key="logout" onClick={() => logoutMovies()}>
            Logout
          </div>
          }
      </div>
    </>
  )
}

export default React.memo(HeaderAccout)