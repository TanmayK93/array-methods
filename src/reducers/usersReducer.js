import { FETCH_USERS, NEW_USER, DOUBLE_MONEY, WEALTH_GREATER_THAN_100, SORT_BY_RICHEST, CALCULATE_TOTAL_WEALTH } from '../actions/types';

const initialState = {
    usersData: [],
    newUser: {},
    totalWealth: 0
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                usersData: action.payload
            };
        case NEW_USER:
            return {
                ...state,
                newUser: action.payload,
                totalWealth: 0
            };
        case DOUBLE_MONEY:
            return {
                ...state,
                usersData: action.payload,
                totalWealth: 0
            };
        case WEALTH_GREATER_THAN_100:
            return {
                ...state,
                usersData: action.payload,
                totalWealth: 0
            };
        case SORT_BY_RICHEST:
            return {
                ...state,
                usersData: action.payload
            };
        case CALCULATE_TOTAL_WEALTH:
            return {
                ...state,
                totalWealth: action.payload
            }
        default:
            return state;
    }
}