import React from 'react';
import {bindActionCreators} from 'redux'
import { getProduct } from '../action/action';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {APP_URL} from '../Action_Constants'

// import { makeStyles } from '@material-ui/core/styles';

import Autosuggest from 'react-autosuggest';


const theme = {
    // container: {
    //   position: 'absolute'

    // },
    input: {
      width: 'auto',
    //   height: 30,
      padding: '10px 20px 10px 50px',
      fontFamily: 'Helvetica, sans-serif',
      fontWeight: 300,
      fontSize: 16,
      border: '1px solid #aaa',
      borderTopLeftRadius: 18,
      borderTopRightRadius: 18,
      borderBottomLeftRadius: 18,
      borderBottomRightRadius: 18,      
    },
    inputFocused: {
      outline: 'none'
    },
    inputOpen: {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    },
    suggestionsContainer: {
      display: 'none'
    },
    suggestionsContainerOpen: {
      display: 'block',
      position: 'absolute',
      top:40,
    //   width: 280,
      border: '1px solid #aaa',
    //   backgroundColor: '#fff',
    backgroundColor: 'white',
    color: 'black',
      fontFamily: 'Helvetica, sans-serif',
      fontWeight: 300,
      fontSize: 16,
      borderBottomLeftRadius: 4,
      borderBottomRightRadius: 4,
      zIndex: 2
    },
    suggestionsList: {
      margin: 0,
      padding: 0,
      listStyleType: 'none',
      textAlign:'left'
    },
    suggestion: {
      cursor: 'pointer',
      padding: '10px 20px'
    },
    suggestionHighlighted: {
      backgroundColor: '#ddd'
    }
  };


let searchData = [];
function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

// Teach Autosuggest how to calculate suggestions for any given input value.
// const getSuggestions = value => {
//     const escapedValue = escapeRegexCharacters(value.trim());
    
//     if (escapedValue === '') {
//       return [];
//     }
  
//     const regex = new RegExp('\\b' + escapedValue, 'i');    
//     return searchData.filter(product => regex.test(product.productName)).slice(0,5);
// };

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
// const getSuggestionValue = product => product.productName;
// const getSuggestionValue = product =>(props)=>{
//     console.log("getSuggestionValue:::"+JSON.stringify(this.props))
//     const { getProduct } = props;  
//     getProduct(product.productId);
//     return product.productName;
// }

// Use your imagination to render suggestions.
const renderSuggestion = product => (
  <div key={product.productId}>
    {product.productName} 
  </div>
);

class SearchBar extends React.Component {
  constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: [],      
    };
  }
  async  componentDidMount(){
    const {searchData} = this.props;    
       
  }

  getSuggestionValue = product =>{        
        const { getProduct } = this.props;  
        getProduct(product.productId);
        window.location.href=`http://localhost/ProductDetail/Plants`
        // alert(JSON.stringify(product.productName)+"        "+product.productId)
        return product.productName;
    }
  getSuggestions = value => {
    const escapedValue = escapeRegexCharacters(value.trim());
    
    if (escapedValue === '') {
      return [];
    }
  
    const regex = new RegExp('\\b' + escapedValue, 'i');    
    return searchData.filter(product => regex.test(product.productName)).slice(0,5);
};

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    
    searchData = this.props.searchData;
      
    const { value, suggestions} = this.state;
    
    // const classes = useStyles();
    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Search',
      value,
      onChange: this.onChange
    };    
    // Finally, render it!
    return (
      <Autosuggest 
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        className = {this.props.className+' '+this.props.styleOned}
        theme = {theme}
      />
    );
  }
}
const mapStateToProps = state =>({  
    productItem : state.productStore.productItem,  
  })
  
  const mapDispatchToProps = dispatch => bindActionCreators ({
    getProduct
  },dispatch)
  export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);
// export default SearchBar;
// export default  function(){
//     return (     
//         <div>
//             <br/>
//             <br/>
//             <br/>
//        <SearchBar/>
//        </div>
//     )
// } 

 