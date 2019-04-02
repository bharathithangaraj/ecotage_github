import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch,Link}from 'react-router-dom' 

 import {createStore,applyMiddleware} from 'redux';
 import {Provider} from 'react-redux';

 import { composeWithDevTools } from 'redux-devtools-extension';
 import thunk from "redux-thunk";

import logger from 'redux-logger'
import HomeSearchBar from './main/HomeSearchBar';
import PlantsList from './components/Plants/PlantsList'
import BodyComponent from './components/BodyComponent'
import ImgGrid from './main/ImgGrid';


const middleware = [thunk,logger]
const store = createStore(
  
  composeWithDevTools(applyMiddleware(...middleware))
  )

class App extends Component {
state ={

  PlantsList :'PlantsList',
  Home : 'ImgGrid'



}
  

  render() {
    const {Home,PlantsList} = this.state
    console.log(this.state.Home)
   
    return (
      <Provider store={store}>
      <Router>
        <div className='App'>
            <HomeSearchBar/>
            {/* <ImgGrid/> */}
            
        </div>
        <Switch>
                {/* <Route exact path="/" /> */}
                <Route exact path="/" render={(props) => <BodyComponent {...props} components={Home}/>} />
                <Route  path="/Plants/AllPlants/" render={(props) => <BodyComponent {...props} components={PlantsList}/>}/>
                {/* <Route path="Plants/PlantScap" component={HomeSearchBar} />  */}
            </Switch>
      </Router>
      </Provider>
    );
  }
}

export default App;

