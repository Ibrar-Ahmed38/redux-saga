import {all} from 'redux-saga/effects'
import watcherUserSaga from './handler/fetchUser'


export default function*  rootSaga(){
    yield all([watcherUserSaga()])
}