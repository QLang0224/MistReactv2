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
        const ForecastListCarousel = ({forecastlist}) => {
            if (!forecastlist) {
                return <div>Loading...</div>
            }

            return (
                <Carousel onSelect={this.handleSelect}>
                    {forecastlist.map((forecast) =>
                        <Carousel.Item key={forecast._id}>
                            <div>
                                <LinkContainer to={'/forecast/'+forecast._id} onClick={()=>this.handleClick(forecast)}>
                                    <Nav.Link><Image className="image" src={forecast.imageUrl} thumbnail /></Nav.Link>
                                </LinkContainer>
                            </div>
                            <Carousel.Caption>
                                <h3>{`${forecast.timeOfDay} - ${forecast.tempertureFarenheit}°F`}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )}

                </Carousel>
            )
        }

        return (
            <ForecastListCarousel forecastlist={this.props.forecastlist} />
        )
    }
}

const mapStateToProps = state => {
    return {
        forecastlist: state.forecast.forecastlist
    }
}

export default connect(mapStateToProps)(ForecastList);

