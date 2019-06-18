import React from 'react';
import {Redirect,withRouter} from "react-router";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
// import {Button} from '@material-ui/core';
import {Tabs,Tab} from '@material-ui/core';
import HomeMenuBar from './HomeMenuBar';
// import ImgGrid from './ImgGrid'
import BodyComponent from '../components/BodyComponent'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {resetLoginInfo,resetSignUp,resetUserDetail} from '../action/UserAction';
import {resetProductInCart,getProductNamesForSearch} from '../action/action'
import SearchBar from '../components/SearchBar';
const styles = theme => ({
  appBar : {
     backgroundColor : '#058541',
   //backgroundColor:'#40d83d',
     //backgroundColor:'#4cf107',
     //backgroundColor:'#02b909',
    
      position: 'fixed',
      top: '0',
      width: '100%',
    
 
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`,
    color:'inherit',
    opacity:0.7
    
  },
  margin: {
    margin: theme.spacing.unit * 2,
  },
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:'black'
  },
  inputRoot: {
    backgroundColor: 'white',
    width: '100%',
   borderRadius:'5px'
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 650,
      },
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

  imgGrid:{
    
      marginTop:'10%'
  }
});

class HomeSearchBar extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
    searchData : []
    
  };

  async  componentDidMount(){

      
    console.log("compononet did mount called")    
    const { getProductNamesForSearch } = this.props;  
    let searchData11 = await getProductNamesForSearch();
    
    this.setState({searchData:searchData11.data})     
   }
  
  async componentWillMount(){
    let searchData = getProductNamesForSearch();
     this.setState({searchData:searchData})
     
  }

  forceUpadteHandler = () => {
    this.forceUpdate()
  }
 

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();

  };

  handleOptionClose = (event) => {

   const{resetLoginInfo,resetSignUp,resetUserDetail,resetProductInCart} = this.props
   resetLoginInfo();
   resetSignUp();
   this.props.resetUserDetail();
   resetProductInCart();
   
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
    this.props.history.push('/')

  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  handleAccountMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl, searchData } = this.state;
    const { classes,productInCart,logininfo } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const accountOpen = Boolean(anchorEl);


    const renderMenu = (
     <React.Fragment>
      
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
       
        {logininfo.userId == null ?  <Link to='/Signin' style={{textDecoration:'none'}}><MenuItem onClick={this.handleMenuClose}> Signin</MenuItem></Link> : undefined}
      
        {logininfo.userId == null  ?  <Link to='/Signup' style={{textDecoration:'none'}}><MenuItem onClick={this.handleMenuClose}>Signup</MenuItem></Link> : undefined }
        {logininfo.userId != null ? <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem> : undefined }
        {/* <MenuItem onClick={this.handleMenuClose}>My account</MenuItem> */}
        {logininfo.userId != null  ?<MenuItem id="logout" onClick={(event) => this.handleOptionClose(event)} >Log Out</MenuItem> : undefined }
      </Menu>
      </React.Fragment>
    );

    // const renderMobileMenu = (
    //   <Menu
    //     anchorEl={mobileMoreAnchorEl}
    //     anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    //     transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    //     open={isMobileMenuOpen}
    //     onClose={this.handleMenuClose}
    //   >
    //     <MenuItem onClick={this.handleMobileMenuClose}>
    //       <IconButton color="inherit">
    //         <Badge badgeContent={4} color="secondary">
    //           <MailIcon />
    //         </Badge>
    //       </IconButton>
    //       <p>Messages</p>
    //     </MenuItem>
    //     <MenuItem onClick={this.handleMobileMenuClose}>
    //       <IconButton color="inherit">
    //         <Badge badgeContent={11} color="secondary">
    //           <NotificationsIcon />
    //         </Badge>
    //       </IconButton>
    //       <p>Notifications</p>
    //     </MenuItem>
    //     <MenuItem onClick={this.handleProfileMenuOpen}>
    //       <IconButton color="inherit">
    //         <AccountCircle />
    //       </IconButton>
    //       <p>Profile</p>
    //     </MenuItem>
    //   </Menu>
    // );

    return (
        
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
         
            {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
              <MenuIcon />
            </IconButton> */}
            <Link to='/' style={{textDecoration:'none',color:'white'}}> <Typography className={classes.title} variant="h4" color="inherit" noWrap>
              Ecotage
            </Typography> </Link>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              
              {/* <InputBase
                placeholder="Search"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              /> */}
            <SearchBar className={this.props.inputInput} styleOned={this.props.search} searchData={this.state.searchData} {...this.props}/>

            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
            {logininfo.userId ?
             <Typography style={{textDecoration:'none', color:'inherit',paddingTop:'4%',fontWeight:'700',fontFamily:'roboto'}}>Welcome 
             &nbsp;<span style={{color:'#ea6709', textOverflow:'ellipsis', fontWeight:'700',fontFamily:'roboto'}}>{this.props.logininfo.userName}</span>
             </Typography> : undefined}

            <IconButton
                  aria-owns={accountOpen ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleAccountMenu}
                  color="inherit"
                ><AccountCircle/></IconButton>
               
              <Tabs  >
              {/* <Link style={{textDecoration:'none',color:'white'}} to={'/'}><Tab style={{minWidth:'50px'}} label="Login" /> </Link> */}
              <Link to='/OrderConfirmed' style={{textDecoration:'none', color:'white', opacity:'9'}}> <Tab style={{minWidth:'5%'}} label="Orders" /> </Link>
              
            
   <Link to='/ViewCart/' style={{textDecoration:'none', color:'white', opacity:'9'}}>
      <IconButton aria-label="Cart">
          <Badge badgeContent={productInCart.length} color="secondary">
          <ShoppingCartIcon /> 
          </Badge>
      </IconButton>
      </Link>

              
              </Tabs>
           
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
            
          </Toolbar>
          
          <HomeMenuBar/>
         
        
        </AppBar>
        {/* <div style={{marginTop:'10%'}}> <ImgGrid/></div> */}
        <BodyComponent/>
        {renderMenu}
        {/* {renderMobileMenu} */}
      </div>
    );
  }
}

HomeSearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state =>({  
  productInCart : state.productStore.productInCart,
  logininfo : state.loginStore.logininfo
})

const mapDispatchToProps = dispatch => bindActionCreators ({
  resetLoginInfo,
  resetSignUp,
  resetUserDetail,
  resetProductInCart,
  getProductNamesForSearch
},dispatch)

//export default connect(mapStateToProps)((withStyles(styles)(HomeSearchBar)));
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(HomeSearchBar)))

// export default withStyles(styles)(HomeSearchBar);
