import React from 'react';
import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import GridList from '@material-ui/core/GridList';
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
                    'to':'Plants/offers/'
                },
                {
                    'id':3,
                    'url':'images/Home_Img_1/img_3.jpg',
                    'to':'Seeds/offers/'
                },
                {
                    'id':4,
                    'url':'images/Home_Img_1/img_4.jpg',
                    'to':'Soil/offers/'
                },


            ],

            'Images2' : [
                {
                    'id':1,
                    'name' :'Gardening Kits',
                    'url':'images/Home_Img_2/img_1.jpg',
                    'to':'GardenKits/'
                },
                {
                    'id':2,
                    'name' :'Easy Plants',
                    'url':'images/Home_Img_2/img_2.jpg',
                    'to':'Plants/'
                },
                {
                    'id':3,
                    'name' :'Minature Toys',
                    'url':'images/Home_Img_2/img_3.jpg',
                    'to':'Toys/'
                },
                {
                    'id':4,
                    'name' :'Pebbels',
                    'url':'images/Home_Img_2/img_4.jpg',
                    'to':'Pebbels/'
                },
                {
                    'id':5,
                    'name' :'Gardening Tools',
                    'url':'images/Home_Img_2/img_5.jpg',
                    'to':'GardenTools/'
                },
                {
                    'id':6,
                    'name' :'Soil/Fertilizers',
                    'url':'images/Home_Img_2/img_6.jpg',
                    'to':'Fertilizer/'
                },
                {
                    'id':7,
                    'name' :'Air Purifiers',
                    'url':'images/Home_Img_2/img_7.jpg',
                    'to':'Airpurifiers/'
                },
                {
                    'id':8,
                    'name' :'Seed Balls',
                    'url':'images/Home_Img_2/img_8.jpg',
                    'to':'Seedballs/'
                },

            ],

            'Images3' :[
                {
                    'id':1,
                    'url':'images/Home_Img_3/img_1.jpg',
                    'to':'/Plants/PlantScap/balcony/'
                },
                {
                    'id':2,
                    'url':'images/Home_Img_3/img_2.jpg',
                    'to':'/Plants/PlantScap/Wall/'
                },
                
            ],

            'Images4' :[
                {
                    'id':1,
                    'url':'images/Home_Img_4/img_1.png',
                    'to':'/Plants/Top5Packs/'
                },
                {
                    'id':2,
                    'url':'images/Home_Img_4/img_2.png',
                    'to':'/Plants/TableTopPack'
                },
                {
                    'id':3,
                    'url':'images/Home_Img_4/img_3.png',
                    'to':'/Plants/AirPurifierPack'
                },
                {
                    'id':4,
                    'url':'images/Home_Img_4/img_4.png',
                    'to':'/Plants/PlantScap/cactus'
                },
                {
                    'id':5,
                    'url':'images/Home_Img_4/img_5.png',
                    'to':'/Plants/PlantScap'
                },
                {
                    'id':6,
                    'url':'images/Home_Img_4/img_6.png',
                    'to':'Plants/Flower/'
                },

            ],
        }
}


function ImgGrid() {
    
  
  const {Images1,Images2,Images3,Images4} = img_arr.Images;
  console.log(Images1[0].to)

  return (
    <div style={{textAlign: "center"}} >
     <ImageGrid>
            {/* <Link to={`/${Images1[0].to}`}> */}
            <Poster src={Images1[0].url} alt='image'/>
            {/* </Link> */}
            {/* <Link to={`/${Images1[1].to}`}> */}
            <Poster src={Images1[1].url} alt='image'/>
            {/* </Link> */}
            
            <div style={{display:'flex-column'}}>
            {/* <Link to={`/${Images1[2].to}`}> */}
            <Poster src={Images1[2].url} alt='image'/>
            {/* </Link> */}
            {/* <Link to={`/${Images1[3].to}`}> */}
            <Poster src={Images1[3].url} alt='image'/>
            {/* </Link> */}
            </div>
            {/* {Image1.map((list,key) => 
            
             {console.log(list.id) 
                return ( 
                 <div>
                     {(list.id == 3 || list.id==4) ?  
                    <DivGrid>
                        
                    <Poster src={list.url} alt='image'/>
                    </DivGrid>
                    :  <Poster src={list.url} alt='image'/>
                    
                }
                 </div>
             )
            }  
               
                
            )} */}
            
            
     </ImageGrid>

     <IconGrid>
            {Images2.map((list,key) =>
                <div style={{textAlign:'center'}}>
                {/* <Link to={`/${list.to}`}> */}
                 <Poster src={list.url} alt='icon'/>
                 {/* </Link> */}
                 <br/>
                 <b style={{color:'#666', fontSize:'10px'}}>{list.name}</b>
                 </div>
            )}
     </IconGrid>

     <ImageGrid2>
            {Images3.map((list,key) =>
                // <Link to={`/${list.to}`}>
                 <Poster src={list.url} alt='icon'/>
                //  </Link>
            )}
            
     </ImageGrid2>

     

    <div>
        <span style={{fontSize:'3vmax',fontFamily:'georgia,serif',color:'#666666',lineHeight:'1.3em'}}>
        <span style={{color:'#c9180c'}}>Upto 40% OFF </span> 
            <em>on plants' packs,<br/>enjoy your own</em>

        <span style={{color:"#c9180c"}}> GARDEN !</span></span> 
    </div>

    <IconGrid>

        {Images4.map((list,key) => 
            // <Link to={`/${list.to}`}>
                 <Poster src={list.url} alt='icon'/>
                //  </Link>
            )}
            

     </IconGrid>

     <div>
        <span style={{fontSize:'3vmax',fontFamily:'georgia,serif',color:'#666666',lineHeight:'1.3em'}}>
        <span style={{color:'#c9180c'}}>Browse </span> 
            <em>Our Store<br/>One stop for all your gardening needs</em>
        </span> 
    </div>


    </div>
  );
}

ImgGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default ImgGrid;

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

const IconGrid = styled.div`
 display:grid;
 padding:-1rem;
 grid-template-columns : repeat(8, 1fr);
 grid-row-gap:1rem;
 margin-top:5px;
 background-color:white;
 margin:3%
`
const ImageGrid2 = styled.div`
 display:grid;
 padding:-1rem;
 grid-template-columns : repeat(2, 1fr);
 grid-row-gap:1rem;
 margin-top:5px;
 background-color:white;
 margin:4%
`
// const DivGrid = styled.div`
// display:'flex-column';
// `

// const divGrid = styled.div`
//     display:grid;
//  padding:-1rem;
//  grid-template-columns : repeat(1, 1fr);
//  grid-row-gap:1rem;
//  margin-top:5px;
//  background-color:white;
//  margin:8%;
//  box-shadow: 0 0 35px white;
// `

