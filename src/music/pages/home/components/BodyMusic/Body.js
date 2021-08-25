import React from 'react'
import { createStructuredSelector } from 'reselect'
import { getDataMusicSongs } from '../../reselect'
import Card from '../Card'
import { useSelector } from 'react-redux'
import { helper } from '../../../../helper/common'
import { Skeleton } from 'antd'
// import Player from '../PlayerMusic/Player'

const Body = () => {
  const { body } = useSelector(createStructuredSelector({
    body: getDataMusicSongs
  }))

  if (helper.isEmptyObject(body)) {
    return (<Skeleton active />)
  }
  return (
    <>
      <div className="music">
        <div style={{width: '100%'}} className="content__container">
          <div className="container__heading">
            <div className="container__heading-left">Lựa chọn của bạn</div>
          </div>
          <div className="container__music">
            <div className="row no-gutters">
              <div 
                // style={{height: '200rem', width: '100%'}} 
                className="container__music--list"
              >
                {/* {body.map((item) => (
                  <Player data={item} />
                ))} */}
                {body.map((item) => (
                  <Card data={item}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default React.memo(Body)