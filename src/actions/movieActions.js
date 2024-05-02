import actionTypes from '../constants/actionTypes';
//import runtimeEnv from '@mars/heroku-js-runtime-env'
const env = process.env;

function forecastFetched(forecast) {
    return {
        type: actionTypes.FETCH_FORECAST,
        selectedForecast: forecast
    }
}

export function setForecast(forecast) {
    return dispatch => {
        dispatch(setForecast(forecast));
    }
}

export function fetchForecast(forecastId) {
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/forecastlist/${forecastId}?reviews=true`, {
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
            dispatch(forecastFetched(res));
        }).catch((e) => console.log(e));
    }
}

export function fetchForecastList() {
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/forecastlist?reviews=true`, {
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
            dispatch(forecastFetched(res));
        }).catch((e) => console.log(e));
    }
}
