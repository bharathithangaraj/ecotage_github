import React, { Component } from 'react';
import ImgGrid from '../main/ImgGrid'
import PlantsList from './Plants/PlantsList'

class BodyComponent extends Component {
    
    render() { 
        console.log('props from body component :'+ JSON.stringify(this.props.components))
        const component = this.props.components;
        return (  
            
                
                <div style={{marginTop:'10%'}}>
               {
                   (component ==='ImgGrid') ?
                   <ImgGrid/>
                   : (component ==='PlantsList') ?
                   <PlantsList/>
                   :undefined

                  
               }
                </div>


            
           

        );
    }
}
 
export default BodyComponent;