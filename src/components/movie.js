import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { fetchForecast } from "../actions/movieActions";
import ForecastDetail from "../components/moviedetail"

// support routing

function Movie(props) {
    const [selectedForecast] = useState(props.selectedForecast);
    const params = useParams();
    const forecastId = params.forecastId;
    console.log(forecastId);
    const dispatch = useDispatch();
    if (selectedMovie == null) {
        dispatch(fetchForecast(forecastId));
    }

    return (<MovieDetail forecastId={forecastId} />)
}

export default Forecast;
