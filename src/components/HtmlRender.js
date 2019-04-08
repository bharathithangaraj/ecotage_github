import React, { Component } from 'react';
import DescriptionData from '../JsonData/DescriptionData'

class HtmlRender  extends Component {

    
    render() { 
        const {PlantsDetails} = DescriptionData.PlantsDetailsList;
        return ( 
           
                     <div dangerouslySetInnerHTML={ {__html: PlantsDetails[0].desc} } />
            
         )
    }
}
 
export default HtmlRender;