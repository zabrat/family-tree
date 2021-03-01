import { constants } from '../../constants';

type ActionType = {
    type: constants.GET_PEOPLE_LIST,
}

export const onGetPeopleList = ():ActionType => ({
    type: constants.GET_PEOPLE_LIST,
})