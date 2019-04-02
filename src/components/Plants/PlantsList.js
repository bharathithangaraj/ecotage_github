import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Products= {

    'PlantsList' : {
        'Plants' :[
            {
                'id':1,
                'name' : 'Plant1',
                'url':'images/airpurify/img_1.jpg',
                'to':'/Plants/ProductDetail/',
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
                'name' : 'Plant2',
                'url':'images/airpurify/img_2.jpg',
                'to':'/Plants/ProductDetail/',
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
                'name' : 'Plant3',
                'url':'images/airpurify/img_3.jpg',
                'to':'/Plants/ProductDetail/',
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
                'name' : 'Plant4',
                'url':'images/airpurify/img_4.jpg',
                'to':'/Plants/ProductDetail/',
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
                'name' : 'Plant5',
                'url':'images/airpurify/img_5.jpg',
                'to':'/Plants/ProductDetail/',
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
                'name' : 'Plant6',
                'url':'images/airpurify/img_6.jpg',
                'to':'/Plants/ProductDetail/',
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
                'name' : 'Plant7',
                'url':'images/airpurify/img_7.jpg',
                'to':'/Plants/ProductDetail/',
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
                'name' : 'Plant8',
                'url':'images/airpurify/img_8.jpg',
                'to':'/Plants/ProductDetail/',
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
                'name' : 'Plant9',
                'url':'images/airpurify/img_9.jpg',
                'to':'/Plants/ProductDetail/',
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
                'name' : 'Plant10',
                'url':'images/airpurify/img_10.jpg',
                'to':'/Plants/ProductDetail/',
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
                'name' : 'Plant11',
                'url':'images/airpurify/img_11.jpg',
                'to':'/Plants/ProductDetail/',
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
                'name' : 'Plant12',
                'url':'images/airpurify/img_12.jpg',
                'to':'/Plants/ProductDetail/',
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

function PlantsList (){

    const {Plants} = Products.PlantsList;
    console.log(Plants)

    return (
        <ImageGrid>
                {Plants.map((list,key) =>
                <Link to={`/${list.to}`}>
                 <Poster src={`/${list.url}`} alt='no image'/>
                 </Link>
            )}
        </ImageGrid>
    )

}

export default PlantsList;

const ImageGrid = styled.div`
 display:grid;
 padding:-1rem;
 grid-template-columns : repeat(4, 1fr);
 grid-row-gap:1rem;
 margin-top:5px;
 background-color:white;
 margin:5%
`
const Poster = styled.img`
    box-shadow: 0 0 35px white;
    cursor:pointer;
`

