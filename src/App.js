import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch,Link}from 'react-router-dom' 

 import {createStore,applyMiddleware} from 'redux';
 import {Provider} from 'react-redux';

 import { composeWithDevTools } from 'redux-devtools-extension';
 import thunk from "redux-thunk";

 import rootReducer from './rootReducer'
//  import { save, load } from "redux-localstorage-simple"
 
import logger from 'redux-logger'
import HomeSearchBar from './main/HomeSearchBar';
import PlantsList from './components/Plants/PlantsList'
import BodyComponent from './components/BodyComponent'
import ImgGrid from './main/ImgGrid';
import Page404 from './components/Page404'
import ProductDetail from './components/ProductDetail';

const middleware = [thunk,logger]
const store = createStore(
  rootReducer,
  {},
  // load(),
  // composeWithDevTools(applyMiddleware(...middleware,save()))
  composeWithDevTools(applyMiddleware(...middleware))
  )

class App extends Component {
state ={

  PlantsList :'PlantsList',
  Home : 'ImgGrid',
  

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
                <Route  path="/Plants/" render={(props) => <BodyComponent {...props} components={PlantsList}/>}/>
                <Route  path="/Seeds/" render={(props) => <BodyComponent {...props} components={PlantsList}/>}/>
                <Route  path="/Pots/" render={(props) => <BodyComponent {...props} components={PlantsList}/>}/>
                <Route  path="/Soil/" render={(props) => <BodyComponent {...props} components={PlantsList}/>}/>
                <Route  path="/ProductDetail" render={(props) => <ProductDetail  {...props} components={PlantsList}/>} />
                <Route   render={() => <Page404/>} />
               
                {/* <Route path="Plants/PlantScap" component={HomeSearchBar} />  */}
            </Switch>
      </Router>
      </Provider>
    );
  }
}

export default App;

