import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import HomeMenuList from './HomeMenuList';
import { withStyles } from '@material-ui/core/styles';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import HomeSearchBar from'./HomeSearchBar'


const styles = theme => ({
    belowdiv:{
        display: 'flex',
       
      },

});


class HomeMenuBar extends Component {

 state ={
            
    'Products' : {
        'PlantsList' :[
            {   'id':1,
                'MenuItem' : 'All Plants Categories >>',
                'to' : 'Plants/AllPlants'
                
            },
            {
                'id':2,
                'MenuItem' : 'PlantScapping',
                'to' : 'Plants/PlantScap'
            },
            {
                'id':3,
                'MenuItem' : 'Top 10 Plants',
                'to' : 'Plants/Top10'
            },
            {
                'id':4,
                'MenuItem' : 'Flowering Plants',
                'to' : 'Plants/Flower'
            },
            {
                'id':5,
                'MenuItem' : 'Indoor Plants',
                'to' : 'Plants/Indoor'
            },

        ],

        'PotsList' :[
            {   'id':1,
                'MenuItem' : 'All Planters Categories',
                'to' : 'Pots/AllPlanters'
            },
            {
                'id':2,
                'MenuItem' : 'Standard Planters',
                'to' : 'Pots/StdPlanters'
            },
            {
                'id':3,
                'MenuItem' : 'Self Watering Planters',
                'to' : 'Pots/SelfPlanters'
            },
            {
                'id':4,
                'MenuItem' : 'Planters By Color',
                'to' : 'Pots/PlantersByColor'
            },
            {
                'id':5,
                'MenuItem' : 'Planters By Size',
                'to' : 'Pots/PlantersBySize'
            },
            {
                'id':6,
                'MenuItem' : 'Planters By Shape',
                'to' : 'Pots/PlantersByShape'
            },

        ],

        'SeedsList' :[
            {   'id':1,
                'MenuItem' : 'All Seeds Categories',
                'to' : 'Seeds/AllSeeds'
            },
            {
                'id':2,
                'MenuItem' : 'All Flower Bulbs Categories',
                'to' : 'Seeds/AllBulbs'
            },
            {
                'id':3,
                'MenuItem' : 'Vegetable Seeds',
                'to' : 'Seeds/VegSeeds'
            },
            {
                'id':4,
                'MenuItem' : 'Pots Vegetable Seeds',
                'to' : 'Seeds/PotSeeds'
            },
            {
                'id':5,
                'MenuItem' : 'Flower Seeds',
                'to' : 'Seeds/FlowerSeeds'
            },
            {
                'id':6,
                'MenuItem' : 'Fruits Plants',
                'to' : 'Seeds/FriutSeeds'
            },
            {
                'id':7,
                'MenuItem' : 'Lawn Grass Seeds',
                'to' : 'Seeds/LawnSeeds'
            },
            

        ],


    },

    'Plants':'Plants',
    'Pots' : 'Pots',
    'Seeds' : 'Seeds & Bulbs'
      
    }

   
    render() { 
        const { classes } = this.props;
        const {Plants,Pots,Seeds} = this.state;
      const {PlantsList, SeedsList,PotsList} = this.state.Products;
     
        
        return (  
            <Toolbar style={{minHeight:'50px'}}>
            <div className={classes.belowdiv}>
            <Link to='/' style={{textDecoration:'none',color:'white'}}><div  style={{marginLeft:'150px', marginTop:'10px', textTransform:'capitalize', cursor:'pointer'}}>Home</div></Link>
            <div  style={{marginLeft:'50px', paddingTop:'5px'}}><HomeMenuList MenuArr={PlantsList} MenuName={Plants}/></div>
            <div  style={{marginLeft:'50px', paddingTop:'5px'}}><HomeMenuList MenuArr={SeedsList} MenuName={Seeds} /></div>
            <div  style={{marginLeft:'50px', paddingTop:'5px'}}><HomeMenuList MenuArr={PotsList} MenuName={Pots} /></div>
         
            <div  style={{marginLeft:'50px', marginTop:'10px' , textTransform:'capitalize',cursor:'pointer'}}>Soil & Fertilizers</div>
      
            </div> 

        
            </Toolbar>

        );
    }
}
 
export default withStyles(styles) (HomeMenuBar);