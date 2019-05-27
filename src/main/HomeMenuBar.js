import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import HomeMenuList from './HomeMenuList';
import { withStyles } from '@material-ui/core/styles';
import {getAllCategories} from '../action/action';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {getPageUrl} from '../action/action';

import { Link} from 'react-router-dom';
// import HomeSearchBar from'./HomeSearchBar'

const styles = theme => ({
    belowdiv:{
        display: 'flex',
       
      },

});


class HomeMenuBar extends Component {

 state ={
            
    // 'Products' : {
    //     'PlantsList' :[
    //         {   'id':1,
    //             'MenuItem' : 'All Plants Categories >>',
    //             'to' : 'Plants/AllPlants'
                
    //         },
    //         {
    //             'id':2,
    //             'MenuItem' : 'PlantScapping',
    //             'to' : 'Plants/PlantScap'
    //         },
    //         {
    //             'id':3,
    //             'MenuItem' : 'Top 10 Plants',
    //             'to' : 'Plants/Top10'
    //         },
    //         {
    //             'id':4,
    //             'MenuItem' : 'Flowering Plants',
    //             'to' : 'Plants/Flower'
    //         },
    //         {
    //             'id':5,
    //             'MenuItem' : 'Indoor Plants',
    //             'to' : 'Plants/Indoor'
    //         },

    //     ],

    //     'PotsList' :[
    //         {   'id':1,
    //             'MenuItem' : 'All Planters Categories',
    //             'to' : 'Pots/AllPlanters'
    //         },
    //         {
    //             'id':2,
    //             'MenuItem' : 'Standard Planters',
    //             'to' : 'Pots/StdPlanters'
    //         },
    //         {
    //             'id':3,
    //             'MenuItem' : 'Self Watering Planters',
    //             'to' : 'Pots/SelfPlanters'
    //         },
    //         {
    //             'id':4,
    //             'MenuItem' : 'Planters By Color',
    //             'to' : 'Pots/PlantersByColor'
    //         },
    //         {
    //             'id':5,
    //             'MenuItem' : 'Planters By Size',
    //             'to' : 'Pots/PlantersBySize'
    //         },
    //         {
    //             'id':6,
    //             'MenuItem' : 'Planters By Shape',
    //             'to' : 'Pots/PlantersByShape'
    //         },

    //     ],

    //     'SeedsList' :[
    //         {   'id':1,
    //             'MenuItem' : 'All Seeds Categories',
    //             'to' : 'Seeds/AllSeeds'
    //         },
    //         {
    //             'id':2,
    //             'MenuItem' : 'All Flower Bulbs Categories',
    //             'to' : 'Seeds/AllBulbs'
    //         },
    //         {
    //             'id':3,
    //             'MenuItem' : 'Vegetable Seeds',
    //             'to' : 'Seeds/VegSeeds'
    //         },
    //         {
    //             'id':4,
    //             'MenuItem' : 'Pots Vegetable Seeds',
    //             'to' : 'Seeds/PotSeeds'
    //         },
    //         {
    //             'id':5,
    //             'MenuItem' : 'Flower Seeds',
    //             'to' : 'Seeds/FlowerSeeds'
    //         },
    //         {
    //             'id':6,
    //             'MenuItem' : 'Fruits Plants',
    //             'to' : 'Seeds/FriutSeeds'
    //         },
    //         {
    //             'id':7,
    //             'MenuItem' : 'Lawn Grass Seeds',
    //             'to' : 'Seeds/LawnSeeds'
    //         },
            

    //     ],


    // },
    'PlantsList':[],
    'SeedsList':[],
    'PotsList':[],
    'Plants':'Plants',
    'Pots' : 'Pots',
    'Seeds' : 'Seeds'
      
    }

    async componentDidMount() {
        const {getAllCategories,getPageUrl} = this.props;
        try {
            getAllCategories();

           
            
        }catch(e) {
		console.log(e)
		}
 }

    

   
    render() { 
        const { classes, categories,getPageUrl} = this.props;
        
        const {PlantsList, SeedsList,PotsList} = this.state;
        const {Plants,Pots,Seeds} = this.state;
    
        console.log(PlantsList)

       
        return (  
            <Toolbar style={{minHeight:'50px'}}>
            <div className={classes.belowdiv}>
            <Link to='/' style={{textDecoration:'none',color:'white'}}><div  style={{marginLeft:'150px', marginTop:'10px', textTransform:'capitalize', cursor:'pointer'}}>Home</div></Link>
            <div  style={{marginLeft:'50px', paddingTop:'5px'}}><HomeMenuList MenuArr={categories} MenuName={Plants}/></div>
            <div  style={{marginLeft:'50px', paddingTop:'5px'}}><HomeMenuList MenuArr={categories} MenuName={Seeds} /></div>
            <div  style={{marginLeft:'50px', paddingTop:'5px'}}><HomeMenuList MenuArr={categories} MenuName={Pots} /></div>
         
            <Link to='/Soil' onClick={()=>getPageUrl(12,'Soil')} style={{textDecoration:'none',color:'white'}}> <div  style={{marginLeft:'50px', marginTop:'10px' , textTransform:'capitalize',cursor:'pointer'}}>Soil & Fertilizers</div></Link>
      
            </div> 

        
            </Toolbar>

        );
    }
}
 
const mapStateToProps = state =>({        
    categories : state.productStore.categories
  })
  const mapDispatchToProps = dispatch => bindActionCreators ({    
    getAllCategories,
    getPageUrl
  },dispatch)
//export default withStyles(styles) (HomeMenuBar);
export default withStyles(styles) (connect(mapStateToProps,mapDispatchToProps)  (HomeMenuBar));