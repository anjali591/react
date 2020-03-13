import React, {Component} from 'react';
//import dialogStyles from './dialogStyles.css';

let dialogStyles = {
    //background-color: '#fefefe';
    margin: '15% auto', /* 15% from the top and centered */
    padding: '20px',
    border: '1px solid #888',
    width: '80%' /* Could be more or less, depending on screen size */
  };
class Dialog extends Component{
    render(){
        return(
            //<div>{this.props.children}</div>
            <div style={dialogStyles}>
                
                {this.props.children}
            </div>
        )
    }
}

export default Dialog;