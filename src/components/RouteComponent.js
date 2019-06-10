import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch}from 'react-router-dom' 
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import BodyComponent from './BodyComponent'
import Page404 from './Page404';
//import CheckOut from './CheckOut';

class RouteComponent extends Component {
    state ={

        PlantsList :'PlantsList',
        SeedsList :'SeedsList',
        PotsList:'PotsList',
        SoilsList:'SoilsList',
        Home : 'ImgGrid',
        viewProduct : 'ProductDetail',
        ViewCart : 'ViewCart',
        CheckOut : "CheckOut",
        HtmlRender : 'HtmlRender',
        Signin : "Signin",
        Signup : "Signup",
        OrderResponse : "OrderResponse",
        Payment : 'Checkout',
        Payment1 : 'Checkout1'
       
        
      
      }
    render () {
        const {pageUrl,pageId,productDetUrl,productId} = this.props;
        const navigate = `${pageUrl}/${pageId}`
        const {Home,PlantsList,viewProduct,
          ViewCart,CheckOut,HtmlRender,Signin,Signup,OrderResponse,Payment,Payment1} = this.state
        console.log(this.state.Home)
            return(
                <Switch>
               
                <Route exact path="/" render={(props) => <BodyComponent {...props} components={Home}/>} />
                {/* <Route  path="/Plants/" render={(props) => <BodyComponent {...props} components={PlantsList}/>}/> */}
                <Route key={pageUrl}  exact path={`/${pageUrl}`} render={(props) => <BodyComponent {...props} components={PlantsList}/>}/>
                {/* <Route key={pageUrl}  exact path={`/${pageUrl}`} render={(props) => <BodyComponent {...props} components={PlantsList}/>}/> */}
                {/* <Route  key="FruitPlants" exact path="/Plants/FruitPlants" render={(props) => <BodyComponent {...props} components={PlantsList}/>}/>
                <Route  key="Top5plantsPack" exact path="/Plants/Top5PlantsPacks" render={(props) => <BodyComponent {...props} components={PlantsList}/>}/> */}
                {/* <Route  path="/Seeds/" render={(props) => <BodyComponent {...props} components={SeedsList}/>}/>
                <Route  path="/Pots/" render={(props) => <BodyComponent {...props} components={PotsList}/>}/>
                <Route  path="/Soil/" render={(props) => <BodyComponent {...props} components={SoilsList}/>}/>
                 */}
                 {/* <Route  path="/Soil/" render={(props) => <BodyComponent {...props} components={SoilsList}/>}/> */}
                <Route  key={productId} exact path={`/${productDetUrl}`} render={(props) => <BodyComponent  {...props} components={viewProduct}/>} /> 

                <Route key='ViewCart' exact path="/ViewCart" render={(props) => <BodyComponent  {...props} components={ViewCart}/>} />
                <Route key='CheckOut' exact path="/CheckOut" render={(props) => <BodyComponent  {...props} components={CheckOut}/>} />
                <Route key='OrderResponse' exact path="/OrderConfirmed" render={(props) => <BodyComponent  {...props} components={OrderResponse}/>} />

                <Route  path="/HtmlRender" render={(props) => <BodyComponent  {...props} components={HtmlRender}/>} />

                <Route  path="/Signin" render={(props) => <BodyComponent  {...props} components={Signin}/>} />
                <Route  path="/Signup" render={(props) => <BodyComponent  {...props} components={Signup}/>} />
                <Route  path="/Payment" render={(props) => <BodyComponent  {...props} components={Payment}/>} />
                <Route  path="/Payment1" render={(props) => <BodyComponent  {...props} components={Payment1}/>} />

                <Route   render={() => <Page404/>} />
               
                {/* <Route path="Plants/PlantScap" component={HomeSearchBar} />  */}
                </Switch>
            )
            
    }
}

const mapStateToProps = state =>({        
    pageUrl : state.productStore.pageUrl,
    pageId : state.productStore.pageId,
    productDetUrl : state.productStore.productDetUrl,
    productId : state.productStore.productId
  })

export default connect(mapStateToProps) (RouteComponent);