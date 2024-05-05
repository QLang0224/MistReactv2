import React, { Component } from 'react';
import { fetchForecast } from "../actions/forecastActions";
import { connect } from 'react-redux';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

class ForecastDetail extends Component {
    componentDidMount() {
        const { dispatch, selectedForecast } = this.props;
        if (!selectedForecast) {
            dispatch(fetchForecast());
        }
    }

    render() {
        const { selectedForecast } = this.props;

        return (
            <div>
                <h2>Forecast Detail</h2>
                {selectedForecast ? (
                    <Card>
                        <Card.Header>Daily Details</Card.Header>
                        <Card.Body>
                            <Image className="image" src={selectedForecast.imageUrl} thumbnail />
                            <ListGroup>
                                <ListGroupItem>Temperature: {selectedForecast.temperatureFarenheit}</ListGroupItem>
                                <ListGroupItem>Conditions: {selectedForecast.conditions}</ListGroupItem>
                                <ListGroupItem>Wind Speed: {selectedForecast.windSpeed}</ListGroupItem>
                                <ListGroupItem>Precipitation Chance: {selectedForecast.precipitationChance}</ListGroupItem>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                ) : (
                    <p>Loading forecast data...</p>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedForecast: state.forecast.selectedForecast
    }
}

export default connect(mapStateToProps)(ForecastDetail);

