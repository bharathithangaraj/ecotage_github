import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles => (theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },

}));


class PaymentForm extends Component {

  

  state = {
    text:false
  }

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  prev = e => {
    e.preventDefault()
    this.props.prevStep();
  }

  render() {

    const classes = useStyles();
    
    const { handleChange, values } = this.props;

    return (

      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Payment method
      </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              required id="cardName" label="Name on card"
              fullWidth
              onChange={handleChange('nameOnCard')}
              defaultValue={values.nameOnCard}

            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField required id="cardNumber"
              label="Card number" fullWidth
              onChange={handleChange('cardNumber')}
              defaultValue={values.cardNumber}
              error={values.cardText}
            />
          </Grid>
          <Grid item xs={12} md={6}>
         
            <TextField
              required id="expDate"
              type="date"
              label="Expiry date" fullWidth
              onChange={handleChange('expDate')}
              defaultValue="2010-01-01"
              
            />
            
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cvv"
              label="CVV"
              helperText="Last three digits on signature strip"
              fullWidth
              onChange={handleChange('cvv')}
              defaultValue={values.cvv}
              error={values.cvvText}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveCard" value="yes" />}
              label="Remember credit card details for next time"
            />
          </Grid>
        </Grid>
        <Button variant="contained"
          color="primary"
          style={styles.button}
          onClick={this.prev} > Back </Button>

        <Button variant="contained"
          color="primary"
          style={styles.button}
          onClick={this.continue}> Next </Button>

      </React.Fragment>
    )
  }

}

const styles = {
  button: {
    margin: 15,
    backgroundColor: '#058541',
    color: 'white',
    fontSize: '14px',
    border: 'none',
    cursor: 'pointer',

    textTransform: 'capitalize',
    padding: '8px 20px',
    border: 'none',
    margin: '5px',
  }
}
export default PaymentForm;