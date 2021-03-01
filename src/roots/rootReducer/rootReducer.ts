import { combineReducers } from 'redux';


const rootReducer = combineReducers({
});

export type AppStateType = ReturnType<typeof rootReducer>;

export default rootReducer;