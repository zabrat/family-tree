import { constants } from '../../constants/index';
import IPersonData from '../../types/personData'

interface IInitialState{
    peopleList: IPersonData[]
}

const initialState: IInitialState = {
    peopleList: []
}

export default (state = initialState, action: any) => {
    switch(action.type) {
        case constants.SET_PEOPLE_LIST:
            return {
                ...state,
                people: action.payload
            }
        default:
            return state;
    }
}