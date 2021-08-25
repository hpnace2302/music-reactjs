import * as actions from './actions'

const initState = {
  loading: false,
  allMusics: {},
  errorMusic: {},
  messageMusic: {},
}

export const homeReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.START_GET_DATA_MUSIC:
      return {
        ...state,
        ...{ loading: action.start}
      }
    case actions.STOP_GET_DATA_MUSIC:
      return {
        ...state,
        ...{ loading: action.stop}
      }
    case actions.GET_DATA_MUSIC_SUCCESS:
      return {
        ...state,
        ...{ allMusics: action.data, errorMusic: {}, messageMusic: {}}
      }
    case actions.GET_DATA_MUSIC_FAIL:
      return {
        ...state,
        ...{ allMusics: {}, errorMusic: action.error, messageMusic: {}}
      }
    case actions.NOT_FOUND_DATA_MUSIC:
    return {
      ...state,
      ...{ allMusics: {}, errorMusic: {}, messageMusic: action.message}
    }
    default:
      return state
  }
}