import React, { Component } from 'react';
import ImgGrid from '../main/ImgGrid'
import PlantsList from './Plants/PlantsList';
import SeedsList from './Seeds/SeedsList';
import PotsList from './Pots/PotsList';
import SoilsList from './Soils/SoilsList'
// import Page404 from  './Page404'
import ProductDetail from './ProductDetail';
import ViewCart from './ViewCart';
import HtmlRender from './HtmlRender'
import SignIn from './Authentication/signin';
import Signup from './Authentication/SignUp';


class BodyComponent extends Component {
    
    render() { 
        console.log('props from body component :'+ JSON.stringify(this.props.components))
        const component = this.props.components;
        var comp;
        switch (component) {
            case 'ImgGrid':
                comp = <ImgGrid/>
                break;
            case 'PlantsList':
                comp = <PlantsList/>
                break;
            case 'SeedsList':
                comp = <SeedsList/>
                break;
            case 'PotsList':
                comp = <PotsList/>
                break;
            case 'SoilsList':
                comp = <SoilsList/>
                break;
            case 'ProductDetail': 
                comp = <ProductDetail/>
                break;
            case 'ViewCart': 
                comp = <ViewCart/> 
                break;
            case 'HtmlRender': 
                comp = <HtmlRender/> 
                break;
            case 'Signin':                 
                comp = <SignIn/> 
                break;
            case 'Signup':                 
                comp = <Signup/> 
                break;

            default: comp =  undefined
                break;
        }
        return (  
            
                
                <div style={{marginTop:'10%'}}>
               {
                   comp
                //    (component ==='ImgGrid') ?
                //    <ImgGrid/>
                //    : (component ==='PlantsList') ?
                //    <PlantsList/>
                //    :undefined

                  
               }
                </div>


            
           

        );
    }
}
 
export default BodyComponent;