import React from 'react'
import Header from './HeaderMusic/Header'
import Player from './PlayerMusic/Player'
// import Body from '../../pages/home/components/BodyMusic/Body'

const Content = (props) => {
  return (
    <div className="content">
      <Header/>
      {props.children}
      <Player/>
    </div>
  )
}

export default React.memo(Content)