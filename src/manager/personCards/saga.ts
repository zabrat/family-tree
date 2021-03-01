import { constants } from '../../constants/index';
import { takeEvery, call, put } from "redux-saga/effects";
import * as api from '../../REST';
import * as actions from './actions';

export function* watchPersonCards() {
  yield takeEvery(constants.GET_PEOPLE_LIST, workerPersonCards);
}

function* workerPersonCards(): any {
  try {
    const peopleList = yield call(api.getPeopleList);
    put(actions.ongetPeopleList(peopleList));
  } catch (err) {
    console.log("ERROR", err);
  }
}
