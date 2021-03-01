import { all, call } from "redux-saga/effects";
;

const sagaList: Array<any> = [

];

export function* watchRootSaga() {
  yield all(sagaList.map((saga: any) => call(saga)));
}
