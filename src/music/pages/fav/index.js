import React from 'react'
import Layout from '../../components/Layout'

const FavMusic = () => {
  return (
    <Layout
      sub_1="Home"
      sub_2="List"
      sub_3="Favorite"
    >
      <h1>This is favorite page</h1>
    </Layout>
  )
}

export default React.memo(FavMusic)