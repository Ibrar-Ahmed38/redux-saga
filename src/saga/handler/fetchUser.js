import {call, put , takeEvery} from 'redux-saga/effects'
import fetchUsers from '.././request/fetchUsers'

function* handleUsers(){
    try{
        const users = yield call(fetchUsers)
        yield put({type : "GET_USERS_SUCESS" , users : users})
    }catch(error){
        yield put({type : "GET_USER_FAILED", message : error.message})
    }
}

function* watcherUserSaga(){
    yield takeEvery("GET_USERS_REQUESTED", handleUsers)
}

export default watcherUserSaga