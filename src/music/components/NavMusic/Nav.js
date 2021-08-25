import React from 'react'
import NavLogo from './Nav-logo'
import NavList from './Nav-list'

const Nav = () => {
  return (
    <>
      <div className="nav">
        <NavLogo/>
        <NavList/>
      </div>
    </>
  )
} 

export default React.memo(Nav)