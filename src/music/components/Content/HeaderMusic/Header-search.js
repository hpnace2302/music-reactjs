import React from 'react'

const HeaderSearch = () => {
  return (
    <>
      <div className="content__nav--search">
        <i className="content__nav--search__icon fas fa-search"></i>
        <input type="text" className="content__nav--search__input" placeholder='Nghệ sĩ hoặc bài hát'></input>
        <i className="content__nav--search__icon fas fa-times"></i>
      </div>
    </>
  )
}

export default React.memo(HeaderSearch)