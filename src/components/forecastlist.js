import React, { Component } from 'react';
import { fetchForecastList } from "../actions/forecastActions";
import { setForecast } from "../actions/forecastActions";
import {connect} from 'react-redux';
import {Image, Nav} from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class ForecastList extends Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchForecastList());
    }

    handleSelect(selectedIndex, e) {
        const {dispatch} = this.props;
        dispatch(setForecast(this.props.forecastlist[selectedIndex]));
    }

    handleClick = (forecast) => {
        const {dispatch} = this.props;
        dispatch(setForecast(forecast));
    }

    render() {
        const ForecastListCarousel = ({forecastList}) => {
            if (!forecastList) {
                return <div>Loading...</div>
            }

            return (
                <Carousel onSelect={this.handleSelect}>
                    {forecastList.map((forecast) =>
                        <Carousel.Item key={forecast.forecastId}>
                            <div>
                                <LinkContainer to={'/forecast/'+forecast.forecastId} onClick={()=>this.handleClick(forecast)}>
                                    <Nav.Link><Image className="image" src={forecast.imageUrl} thumbnail /></Nav.Link>
                                </LinkContainer>
                            </div>
                            <Carousel.Caption>
                                <h3>{forecast.temperatureFahrenheit}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )}

                </Carousel>
            )
        }

        return (
            <ForecastListCarousel forecastList={this.props.forecastlist} />
        )
    }
}

const mapStateToProps = state => {
    return {
        forecastlist: state.forecast.forecastlist
    }
}

export default connect(mapStateToProps)(ForecastList);
