import { all, call } from 'redux-saga/effects'
import { watchHomeMusicSaga } from '../pages/home/saga'

export default function* rootSaga() {
  yield all([
    call(watchHomeMusicSaga)
  ])
}