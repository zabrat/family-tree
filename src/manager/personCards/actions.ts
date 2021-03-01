import { constants } from '../../constants';
import IPersonData from '../../types/personData';

type ActionType = {
    type: constants.SET_PEOPLE_LIST,
    payload: IPersonData[]
}

export const ongetPeopleList = (payload:IPersonData[]):ActionType => ({
    type: constants.SET_PEOPLE_LIST,
    payload
})