import React, { Component } from 'react';
import ImgGrid from '../main/ImgGrid'
import PlantsList from './Plants/PlantsList'
import Page404 from  './Page404'
import ProductDetail from './ProductDetail';
import ViewCart from './ViewCart';

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
            case 'ProductDetail': 
                comp = <ProductDetail/>
                break;
            case 'ViewCart': 
                comp = <ViewCart/> 
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