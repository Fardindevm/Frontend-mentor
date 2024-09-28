import $ from 'jquery';
import Photo from '../Images/illustration-thank-you.svg'
import './Change.css'
import { Component } from 'react';

class Change extends Component {
  
    render () {
      $(".container").children().remove();
      $(".container").addClass("ChangedMain")
    return (
      <div className='ChangedDiv'>
        <img src={Photo} alt="illustration-thank-you"/>
        <div className='valueDiv'>
          <p className='value'>You selected {this.props.value} out of 5</p>
        </div>
        <h4>Thank you!</h4>
        <p>We appreciate you taking the time to give a rating. 
          If you ever need more support, don't hesitate to get in touch!</p>
      </div> 
    )
  }
}
    
export default Change;