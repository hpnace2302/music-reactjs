import React from 'react'

const HeaderControl = () => {
  return (
    <>
      <div className="content__nav--mobile__logo">
        <div className="nav__logo--icon"><i className="fab fa-spotify"></i></div>
        <div className="nav__logo--name">Music</div>
      </div>
      <div className="content__nav--mobile">
        <div className="content__nav--mobile__search">
          <i className="fas fa-search"></i>
        </div>
        <div className="content__nav--mobile__bar">
          <i className="fas fa-bars"></i>
        </div>
      </div>
      <div className="content__nav--control">
        <i className="fas fa-arrow-circle-left"></i>
        <i className="fas fa-arrow-circle-right"></i>
      </div>
    </>
  )
}

export default React.memo(HeaderControl)