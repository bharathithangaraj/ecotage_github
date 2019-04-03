import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
// import Grid from '@material-ui/core/Grid';
// import { unstable_Box as Box } from '@material-ui/core/Box';

const Products= {

    'PlantsList' : {
        'Plants' :[
            {
                'id':1,
                'name' : 'Set of 3 Air Purifier n Summer Cooling Plants Pack',
                'url':'images/airpurify/img_1.jpg',
                'to':'/Plants/ProductDetail/',
                'price' : '500',
                "description" : [
                    {
                        "height" : 100,
                        "widht" : 10,
                        "Life"  : 100
                    }

                ]
            },
            {
                'id':2,
                'name' : 'Top 4 Air Purifier Plants for India',
                'url':'images/airpurify/img_2.jpg',
                'to':'/Plants/ProductDetail/',
                'price' : '500',
                "description" : [
                    {
                        "height" : 100,
                        "widht" : 10,
                        "Life"  : 100
                    }

                ]
            },
            {
                'id':3,
                'name' : 'Table Top / Office Desk Plants For Removing Indoor Toxins',
                'url':'images/airpurify/img_3.jpg',
                'to':'/Plants/ProductDetail/',
                'price' : '500',
                "description" : [
                    {
                        "height" : 100,
                        "widht" : 10,
                        "Life"  : 100
                    }

                ]
            },
            {
                'id':4,
                'name' : 'Table Top / Office Desk Plants For Gift',
                'url':'images/airpurify/img_4.jpg',
                'to':'/Plants/ProductDetail/',
                'price' : '500',
                "description" : [
                    {
                        "height" : 100,
                        "widht" : 10,
                        "Life"  : 100
                    }

                ]
            },

            {
                'id':5,
                'name' : 'Unity in Diversity - Independence Day Pac',
                'url':'images/airpurify/img_5.jpg',
                'to':'/Plants/ProductDetail/',
                'price' : '500',
                "description" : [
                    {
                        "height" : 100,
                        "widht" : 10,
                        "Life"  : 100
                    }

                ]
            },
            {
                'id':6,
                'name' : 'Air Purifier Table Top / Office Desk Plants',
                'url':'images/airpurify/img_6.jpg',
                'to':'/Plants/ProductDetail/',
                'price' : '500',
                "description" : [
                    {
                        "height" : 100,
                        "widht" : 10,
                        "Life"  : 100
                    }

                ]
            },
            {
                'id':7,
                'name' : 'True AC Table Top / Office Desk Plants',
                'url':'images/airpurify/img_7.jpg',
                'to':'/Plants/ProductDetail/',
                'price' : '500',
                "description" : [
                    {
                        "height" : 100,
                        "widht" : 10,
                        "Life"  : 100
                    }

                ]
            },
            {
                'id':8,
                'name' : 'Top 3 Air Purifier Plants Pack',
                'url':'images/airpurify/img_8.jpg',
                'to':'/Plants/ProductDetail/',
                'price' : '500',
                "description" : [
                    {
                        "height" : 100,
                        "widht" : 10,
                        "Life"  : 100
                    }

                ]
            },

            {
                'id':9,
                'name' : 'Low Maintenance Table Top / Office Desk Plants',
                'url':'images/airpurify/img_9.jpg',
                'to':'/Plants/ProductDetail/',
                'price' : '500',
                "description" : [
                    {
                        "height" : 100,
                        "widht" : 10,
                        "Life"  : 100
                    }

                ]
            },
            {
                'id':10,
                'name' : 'Cubicle-Friendly Table Top / Office Desk Indoor Plants',
                'url':'images/airpurify/img_10.jpg',
                'to':'/Plants/ProductDetail/',
                'price' : '500',
                "description" : [
                    {
                        "height" : 100,
                        "widht" : 10,
                        "Life"  : 100
                    }

                ]
            },
            {
                'id':11,
                'name' : 'NASA Recommended Table Top / Office Desk Plants',
                'url':'images/airpurify/img_11.jpg',
                'to':'/Plants/ProductDetail/',
                'price' : '500',
                "description" : [
                    {
                        "height" : 100,
                        "widht" : 10,
                        "Life"  : 100
                    }

                ]
            },
            {
                'id':12,
                'name' : 'Table Top / Office Desk To Boost Productivity',
                'url':'images/airpurify/img_12.jpg',
                'to':'/Plants/ProductDetail/',
                'price' : '500',
                "description" : [
                    {
                        "height" : 100,
                        "widht" : 10,
                        "Life"  : 100
                    }

                ]
            },


        ]
    }
}

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
      paddingTop:'10px'
    },
    input: {
      display: 'none',
    },
  });

function PlantsList (){

   
    const {Plants} = Products.PlantsList;
    console.log(Plants)

    return (
        <ImageGrid>
                {Plants.map((list,key) =>
            
                <div style={{padding:'10px'}}>
                 <Shadow >
                <Link to={`/${list.to}`}>
                 <Poster style={{padding: '25px'}} src={`/${list.url}`} alt='no image'/>
                 </Link>
                 <BoxDeco>
                 <div style={{width:'99%',textOverflow:'ellipsis',whiteSpace:'nowrap',overflow:'hidden'}}>
                 
                 <Link to={`${list.to}`} style={{textAlign: "center", padding: '3px',textDecoration: 'none',color: 'black'}}>{list.name} </Link>
                 </div>
              
                 <div style={{paddingTop:'10px',fontSize:'16px',fontWeight:'700',color:'#fe5621'}}>
                 <span dangerouslySetInnerHTML={{ __html: '&#8377'}}></span>
                 {list.price}
                 </div>
                    <br/>
                 <Button variant="contained" size="small" style={{backgroundColor:'#40d83d' ,textTransform:'capitalize'}} >Add To Cart</Button>
                 </BoxDeco>
                 </Shadow>
                </div>
               
            )}

        </ImageGrid>
    )

}

export default PlantsList;

const ImageGrid = styled.div`
 display:grid;
 padding:-1rem;
 grid-template-columns : repeat(4, 1fr);
 grid-row-gap:10px;
 margin-top:1rem;
 background-color:white;
 margin:5%;
 background-color: lighten( $color, 20% );
 border-radius: 5px;
 font-family: roboto;

`

const Shadow = styled.div`
text-align:center;
width: 250px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
text-align: center;
height: 400px;
`
const Poster = styled.img`
    box-shadow: 0 0 35px white;
    cursor:pointer;
    height: 200px;
`
const BoxDeco =styled.div`
padding-bottom:"25px",
font-family:'Roboto',
min-height:'0',
float:'none'
`

const TextDeco =styled.div`
text-align: "center";
 padding: '3px';
 text-decoration: 'none';
 color: 'black'
`

const priceDiv = styled.div`
font-size: 16px;
font-weight: 700;
color: #fe5621;
`


