import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import GridList from '@material-ui/core/GridList';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
// import Button from '@material-ui/core/Button';

function Page404 () {

    return(
        <ImageGrid>
          <Link to ="/"> <Poster src='/images/404page.png' alt='icon'/> </Link>
        </ImageGrid>
    )

}

export default Page404

const ImageGrid = styled.div`
 display:grid;
 padding:-1rem;
 grid-template-columns : repeat(1, 1fr);
 grid-row-gap:1rem;
 margin-top:5px;
 background-color:white;
 margin:4%
`

const Poster = styled.img`
    box-shadow: 0 0 35px white;
    cursor:pointer;
`