import React from 'react';
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


const styles = theme => ({
  appBar : {
     //backgroundColor : '#02543e',
   backgroundColor:'#40d83d',
     //backgroundColor:'#4cf107',
    
      position: 'fixed',
      top: '0',
      width: '100%',
    
 
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
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
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
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const accountOpen = Boolean(anchorEl);


    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Signin</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>Signup</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );

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
              <InputBase
                placeholder="Search"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
            <IconButton
                  aria-owns={accountOpen ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleAccountMenu}
                  color="inherit"
                ><AccountCircle/></IconButton>
               
              <Tabs  >
              {/* <Link style={{textDecoration:'none',color:'white'}} to={'/'}><Tab style={{minWidth:'50px'}} label="Login" /> </Link> */}
              <Tab style={{minWidth:'5%'}} label="Orders" />
              <Link to='/ViewCart/' style={{textDecoration:'none', color:'white'}}><Tab  style={{minWidth:'5%'}} label="Cart"  />
              <sup><Badge pill variant="success">
                  {this.props.productInCart.length > 0 ? this.props.productInCart.length:''}
                </Badge>
              </sup>
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
        {renderMobileMenu}
      </div>
    );
  }
}

HomeSearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state =>({  
  productInCart : state.productStore.productInCart,
})

export default connect(mapStateToProps)((withStyles(styles)(HomeSearchBar)));

// export default withStyles(styles)(HomeSearchBar);
