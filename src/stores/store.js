import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from "../reducers/authReducer";
import forecastReducer from "../reducers/forecastReducer";
const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
    const { logger } = require('redux-logger');

    middlewares.push(logger);
}

const store = createStore(
    combineReducers( {
        auth: authReducer,
        forecast: forecastReducer
    }),
    applyMiddleware(
        ...middlewares
    )
);

export default store;
