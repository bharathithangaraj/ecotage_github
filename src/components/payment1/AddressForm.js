import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { getUserDetail} from '../../action/UserAction'

class AddressForm extends Component {

    async  componentDidMount(){

       
        const { getUserDetail,logininfo } = this.props;
       if(logininfo.userId != null) {
        await getUserDetail(logininfo.userName,logininfo.token);
       }
       
       }
      
       componentDidCatch() {
       
        }
      
         
      componentWillUnmount() {
        const {logininfo } = this.props;
        if(logininfo.userId != null) {
        this.props.getUserDetail(logininfo.userName,logininfo.token);
        }
      }

    continue = e => {
       
        e.preventDefault();
        this.props.nextStep();
    };

    formControlCheck = (event) =>  {
        this.props.values.addUserDtls = true 
       
    }
    render() {
        const { values, handleChange,userDetail } = this.props;

        return (
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                    Shipping address
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="First name"
                            fullWidth
                            autoComplete="fname"
                            onChange ={handleChange('firstName')}
                            defaultValue={values.firstName ==='' ? userDetail.firstName: values.firstName}
                        />
                    </Grid>
                     <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="lastName"
                            name="lastName"
                            label="Last name"
                            fullWidth
                            autoComplete="lname"
                            onChange ={handleChange('lastName')}
                            defaultValue={values.lastName === ''?userDetail.lastName : values.lastName}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="address1"
                            name="address1"
                            label="Address line 1"
                            fullWidth
                            autoComplete="billing address-line1"
                            onChange ={handleChange('addressline1')}
                            defaultValue={values.addressline1 === '' ? userDetail.showUserDetails ?userDetail.showUserDetails.address1:values.addressline1 : values.addressline1}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="address2"
                            name="address2"
                            label="Address line 2"
                            fullWidth
                            autoComplete="billing address-line2"
                            onChange ={handleChange('addressline1')}
                            defaultValue={values.addressline2 ==='' ? userDetail.showUserDetails ? userDetail.showUserDetails.address2 : values.addressline2:values.addressline2}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="city"
                            name="city"
                            label="City"
                            fullWidth
                            autoComplete="billing address-level2"
                            onChange ={handleChange('city')}
                            defaultValue={values.city ==='' ? userDetail.showUserDetails ? userDetail.showUserDetails.city :values.city:values.city}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="state" 
                        name="state" 
                        label="State/Province/Region" 
                        fullWidth 
                        onChange ={handleChange('state')}
                        defaultValue={values.state ==='' ? userDetail.showUserDetails ?userDetail.showUserDetails.state :values.state:values.state}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="zip"
                            name="zip"
                            label="Zip / Postal code"
                            fullWidth
                            autoComplete="billing postal-code"
                            onChange ={handleChange('zip')}
                            defaultValue={values.zip ==='' ? userDetail.showUserDetails ? userDetail.showUserDetails.pincode :values.zip:values.zip}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="country"
                            name="country"
                            label="Country"
                            fullWidth
                            autoComplete="billing country"
                            onChange ={handleChange('country')}
                            defaultValue={values.country ==='' ? userDetail.showUserDetails ? userDetail.showUserDetails.country :values.country:values.country}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel id="formControl"
                            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                            label="Use this address for payment details"
                            onChange= { (event) => this.formControlCheck(event)}
                            value=""
                        />
                    </Grid>  
                </Grid>
                <Button
                         variant="contained"
                        
                        style={styles.button}
                        onClick={this.continue}
                        
                    > Next </Button>
            </React.Fragment>
        )
    }

}

const styles = {
    button : {
        margin:15,
        backgroundColor: '#058541',
        color: 'white',
        fontSize: '14px',
        border:'none',
        cursor:'pointer',
        
        textTransform:'capitalize',
        padding:'8px 20px',
        border:'none',
        margin:'5px',
    }
}

const mapStateToProps = state =>({
    logininfo : state.loginStore.logininfo,
    userDetail : state.loginStore.userDetail
  })
  const mapDispatchToProps = dispatch => bindActionCreators ({
    getUserDetail
  },dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(AddressForm);