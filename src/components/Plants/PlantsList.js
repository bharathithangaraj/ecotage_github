import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const img_arr= {

    'Images' : {
        'Images1' :[
            {
                'id':1,
                'url':'images/Home_Img_1/img_1.jpg',
                'to':'Plants/PlantScap/cactus'
            },
            {
                'id':2,
                'url':'images/Home_Img_1/img_2.jpg',
                'to':'/plants/offers/'
            },
            {
                'id':3,
                'url':'images/Home_Img_1/img_3.jpg',
                'to':'/seeds/offers/'
            },
            {
                'id':4,
                'url':'images/Home_Img_1/img_4.jpg',
                'to':'/fertilizer/offers/'
            },


        ]
    }
}

const PlantsList = () => {

    return (
        <div>PlantsList</div>
    )

}

export default PlantsList;

