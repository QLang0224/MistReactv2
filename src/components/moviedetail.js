import React, { Component } from 'react';
import { fetchForecast } from "../actions/movieActions";
import {connect} from 'react-redux';
import {Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

class ForecastDetail extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        if (this.props.selectedForecast == null) {
            dispatch(fetchForecast(this.props.forecastId));
        }
    }

    render() {
        const DetailInfo = () => {
            if (!this.props.selectedForecast) {
                return <div>Loading....</div>
            }

            return (
                <Card>
                    <Card.Header>Movie Detail</Card.Header>
                    <Card.Body>
                        <Image className="image" src={this.props.selectedForecast.imageUrl} thumbnail />
                    </Card.Body>
                </Card>
            )
        }

        return (
            <DetailInfo />
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedForecast: state.forecast.selectedForecast
    }
}

export default connect(mapStateToProps)(ForecastDetail);

