import React, {useEffect} from 'react'
import ContentMusic from '../../components/Content/ContentMusic'
// import Layout from '../../components/Layout'
import Nav from '../../components/NavMusic/Nav'
import * as actions from './actions'
import { useDispatch, useSelector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { getLoadingMusic, getMessNotFoundDataMusic } from './reselect'
import { Skeleton } from 'antd'
import { helper } from '../../helper/common'
import Body from './components/BodyMusic/Body'

// const { Body } = Layout

const HomeMusic = () => {
  const dispatch = useDispatch()
  const { loading, mess } = useSelector(createStructuredSelector({
    loading: getLoadingMusic,
    mess: getMessNotFoundDataMusic,
  }))

  useEffect(() => {
    dispatch(actions.getDataMusics())
  }, [dispatch])

  const ShowComponentSongs = () => {
    if(loading) {
      return (
        <Skeleton active/>
      )
    } else if (!helper.isEmptyObject(mess)) {
      return (
        <h3>{mess.message}</h3>
      )
    } else {
      return (
        <Body/>
      )
    }
  }

  return (
    <>
      <Nav/>
      <ContentMusic
        // sub_1="Home"
        // sub_2="List"
        // sub_3="Music"
      >
        {/* <h1>This is home page</h1> */}
        <ShowComponentSongs/>
      </ContentMusic>
    </>
  )
}

export default React.memo(HomeMusic)