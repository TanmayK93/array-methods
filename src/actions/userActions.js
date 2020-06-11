import { FETCH_USERS, NEW_USER, DOUBLE_MONEY, WEALTH_GREATER_THAN_100, SORT_BY_RICHEST, CALCULATE_TOTAL_WEALTH } from './types';

let userList = []

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}


export const fetchUsers = () => async dispatch => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    userList = data.map(user => {
        const newUser = {
            id: user.id,
            name: user.name,
            username: user.username,
            money: getRandomInt(200)
        }
        return newUser;
    })
    await dispatch({
        type: FETCH_USERS,
        payload: userList
    })
};

export const addNewUser = userData => async dispatch => {
    const newUser = {
        id: userList.length + 1,
        name: userData.name,
        money: getRandomInt(100)
    };
    dispatch({
        type: NEW_USER,
        payload: newUser
    })
}

export const doubleMoney = userData => dispatch => {
    const result = userData.map(user => {
        return { ...user, money: user.money * 2 };
    });
    dispatch({
        type: DOUBLE_MONEY,
        payload: result
    })
}

export const showMillionaires = userData => dispatch => {
    const result = userData.filter(user => user.money > 100);
    dispatch({
        type: WEALTH_GREATER_THAN_100,
        payload: result
    })
}

export const sortByRichest = userData => dispatch => {
    const sortedData = userData.sort((a, b) => b.money - a.money);

    const result = sortedData.map(user => {
        return { ...user };
    });

    dispatch({
        type: SORT_BY_RICHEST,
        payload: result
    })
}

export const calculateTotalWealth = userData => dispatch => {

    const wealth = userData.reduce((acc, user) => (acc += user.money), 0);

    dispatch({
        type: CALCULATE_TOTAL_WEALTH,
        payload: wealth
    })
}