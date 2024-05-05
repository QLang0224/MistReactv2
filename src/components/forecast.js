import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { fetchForecast } from "../actions/forecastActions";
import ForecastDetail from "../components/forecastdetail"

// support routing

function Forecast(props) {
    const [selectedForecast] = useState(props.selectedForecast);
    const params = useParams();
    console.log(forecast._id);
    const dispatch = useDispatch();
    if (selectedForecast == null) {
        dispatch(fetchForecast(forecast._id));
    }

    return (<ForecastDetail forecastId={forecast._id} />)
}

export default Forecast;
