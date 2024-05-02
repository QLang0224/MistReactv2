import React from 'react';
import './App.css';
import MistHeader from './components/movieheader';
import ForecastList from './components/movielist';
import Forecast from './components/movie';
import Authentication from './components/authentication';
import {HashRouter, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './stores/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HashRouter>
          <div>
            <MistHeader />
            <Route exact path="/" render={()=><ForecastList />}/>
            <Route exact path="/forecastlist" render={()=><ForecastList />}/>
            <Route exact path="/forecast/:forecastId" render={()=><Forecast />}/>
            <Route path="/signin" render={()=><Authentication />}/>
          </div>
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
