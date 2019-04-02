import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';



const styles = theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing.unit * 2,
    
  },
  header : {
    color: 'white',
    textTransform: 'capitalize'
  },
  
 

  ddbutton : {
    content: '',
    position: 'absolute',
    top: '50%',
    right: '-2px',
    transform: 'translateY(-50%)',
    width: 0, 
    height: 0, 
    borderLeft: '5px solid transparent',
    borderRight: '5px solid transparent',
    borderTop: '5px solid white',
  }
  

});

class HomeMenuList extends React.Component {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes,MenuArr, MenuName } = this.props;
     console.log(MenuArr)
    const { open } = this.state;

    return (
      <div className={classes.root}>
       
        <div>
         
          <Button
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={this.handleToggle}
            // style = {{fontFamily:''}}
           
            isOpen={this.state.open}
          >
           <span className={`${classes.header} `}>{MenuName}<span className={` ${classes.ddbutton}`}></span></span>
          </Button>
          <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper>
                  <ClickAwayListener onClick={this.handleClose}>
                   
                    <MenuList>
                       
                      {MenuArr.map((List) => 
                         <Link style={{textDecoration:'none',color:'white'}} to={`/${List.to}`}>
                            <MenuItem key={List.id}>{List.MenuItem}</MenuItem>
                            </Link>
                      )}
                    
                    </MenuList>


                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    );
  }
}

HomeMenuList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeMenuList);
