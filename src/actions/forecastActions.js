import actionTypes from '../constants/actionTypes';
const env = process.env;

function forecastFetched(forecast) {
    return {
        type: actionTypes.FETCH_FORECAST,
        selectedForecast: forecast
    }
}

export function setForecast(forecast) {
    return dispatch => {
        dispatch(forecastFetched(forecast));
    }
}

export function fetchForecast(forecastId) {
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

export function fetchForecastList(forecastlist) {
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/forecastlist/`, {
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
                dispatch(forecastFetched(res.forecast));
            }).catch((e) => console.log(e));
        })
    }
}
