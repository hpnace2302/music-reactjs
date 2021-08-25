import React from 'react'

const NavLogo = () => {
  return (
    <>
      <div className="nav__logo">
        <div className="nav__logo--icon"><i className="fab fa-spotify"></i></div>
        <div className="nav__logo--name">Music</div>
      </div>  
    </>
  )
}

export default React.memo(NavLogo)