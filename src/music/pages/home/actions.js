export const GET_DATA_MUSIC = Symbol('GET_DATA_MUSIC')

export const START_GET_DATA_MUSIC = Symbol('START_GET_DATA_MUSIC')
export const STOP_GET_DATA_MUSIC = Symbol('STOP_GET_DATA_MUSIC')
export const GET_DATA_MUSIC_SUCCESS = Symbol('GET_DATA_MUSIC_SUCCESS')
export const GET_DATA_MUSIC_FAIL = Symbol('GET_DATA_MUSIC_FAIL')
export const NOT_FOUND_DATA_MUSIC = Symbol('NOT_FOUND_DATA_MUSIC')

export const getDataMusics = () => ({
  type: GET_DATA_MUSIC,
})

export const startGetDataMusic = (start) => ({
  type: START_GET_DATA_MUSIC,
  start
})

export const stopGetDataMusic = (stop) => ({
  type: STOP_GET_DATA_MUSIC,
  stop
})

export const getDataMusicSuccess = (data) => ({
  type: GET_DATA_MUSIC_SUCCESS,
  data
})

export const getDataMusicFail = (error) => ({
  type: GET_DATA_MUSIC_FAIL,
  error
})

export const getDataMusicNotFound = (message) => ({
  type: NOT_FOUND_DATA_MUSIC,
  message
})