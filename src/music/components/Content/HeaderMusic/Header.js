import React from 'react'
import HeaderControl from './Header-control'
import HeaderSearch from './Header-search'
import HeaderAccout from './Header-accout'

const Header = () => {
  return (
    <>
      <div className="content__nav">
        <HeaderControl/>
        <HeaderSearch/>
        <HeaderAccout/>
      </div>
    </>
  )
}

export default React.memo(Header)