import { combineReducers } from 'redux';
import personCards from '../../manager/personCards/reducer';


const rootReducer = combineReducers({
    personCards
});

export type AppStateType = ReturnType<typeof rootReducer>;

export default rootReducer;