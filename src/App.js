import React from 'react';
import './App.css';
import MistHeader from './components/Mistheader';
import ForecastList from './components/forecastlist';
import Forecast from './components/forecast';
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
            <Route exact path="/forecast/forecastlist" render={()=><ForecastList />}/>
            <Route exact path="/forecast/:forecastId" render={()=><Forecast />}/>
            <Route path="/signin" render={()=><Authentication />}/>
            <Route path="/signup" render={()=><Authentication />}/>
          </div>
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
