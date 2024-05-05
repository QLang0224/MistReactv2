import actionTypes from '../constants/actionTypes';
const env = process.env;

function forecastListFetched(forecastlist) {
    return {
        type: actionTypes.FETCH_FORECASTLIST,
        forecastlist: forecastlist
    }
}

function forecastFetched(forecast) {
    return {
        type: actionTypes.FETCH_FORECAST,
        selectedForecast: forecast
    }
}

export function forecastSet(forecast) {
    return {
        type: actionTypes.SET_FORECAST,
        selectedForecast: forecast
    }
}

export function setForecast(forecast) {
    return dispatch => {
        dispatch(forecastSet(forecast));
    }
}

export function fetchForecast() {
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/forecast/`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            mode: 'cors',
        })
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }

            return fetch(`${env.REACT_APP_API_URL}/forecast/`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('token')
                },
                mode: 'cors'
            }).then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json()
            }).then((res) => {
                dispatch(forecastFetched(res.forecast));
            }).catch((e) => console.log(e));
        })
    }
}

export function fetchForecastList() {
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/forecastlist/`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            mode: 'cors'
        }).then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json()
        }).then((res) => {
            dispatch(forecastListFetched(res));
        }).catch((e) => console.log(e));
    }
}
