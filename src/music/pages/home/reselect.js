import { createSelector } from 'reselect'

const homeState = state => state.homeReducer

export const getLoadingMusic = createSelector(
  homeState,
  item => item.loading
)

export const getMessNotFoundDataMusic = createSelector(
  homeState,
  item => item.messageMusic
)

export const getDataMusics = createSelector(
  homeState,
  item => item.allMusics
)

export const getDataMusicSongs = createSelector(
  getDataMusics,
  item => {
    if(item.hasOwnProperty('songs')) {
      return item.songs
    }
    return {}
  }
)