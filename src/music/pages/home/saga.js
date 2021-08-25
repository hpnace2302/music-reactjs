import { call, put, takeEvery } from 'redux-saga/effects'
import * as actions from './actions'
import { api } from '../../services/api'
import { helper} from '../../helper/common'

function* homeMusicSaga() {
  try {
    yield put(actions.startGetDataMusic(true))
    const data = yield call(api.getAllDataMusic)
    if (!helper.isEmptyObject(data)) {
      yield put(actions.getDataMusicSuccess(data))
    } else {
      yield put(actions.getDataMusicNotFound({
        code: 404,
        message: 'not found data'
      }))
    }
  }
  catch (e) {
    yield put(actions.getDataMusicFail(e))
  }
  finally {
    yield put(actions.stopGetDataMusic(false))
  }
}

export function* watchHomeMusicSaga() {
  yield takeEvery(actions.GET_DATA_MUSIC, homeMusicSaga)
}