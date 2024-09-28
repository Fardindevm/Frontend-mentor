import logo from '../Images/icon-star.svg';
import { Component } from "react";
import './Rate.css'
import Change from './Change.js'

class Rate extends Component {

  constructor(props) {
    super(props)

    this.state = {
      change: false,
      value: null,
      selectedRating: null
    }
    this.submitHandle = this.submitHandle.bind(this)
    this.handleRatingChange= this.handleRatingChange.bind(this)
  }

  handleRatingChange(event) {
    this.setState({
      selectedRating: event.target.value
    });
  }
  
  submitHandle (event) {
    event.preventDefault();
    if (this.state.selectedRating) {
      this.setState({
        change: true,
        value: this.state.selectedRating
      });
    } else {
      alert("Please select a rating before submitting.");
    }
  }
  


  render(){

   const ratings = [1, 2, 3, 4, 5];
    
   return( 
    <div className='main'>
    <div className="container-sm container"> 
      <form className="rateStars" onSubmit={this.submitHandle}>
        <div className='circle d-flex'>
          <img src={logo} alt='logo' />
        </div>
          <h4 className='m-10'>How did we do?</h4>
          <p>Please let us know how we did with you support request. 
          All feedback is appreciated to help us improve our offering!</p>
          <div className="rating-container">
          {ratings.map((rating) => (
            <label key={rating} className="radio-label">
              <input 
                type="radio" 
                name="rating" 
                value={rating} 
                className="radio-input"
                onChange={this.handleRatingChange}
                checked={this.state.selectedRating == rating}
              />
              <span className="radio-button">{rating}</span>
            </label>
          ))}
        </div>
          <button type='submit' className='submitButton'>submit</button>
      </form>
      {this.state.change ? <Change value={this.state.value}/>: null}
    </div>
    </div>
  ) 
 }
}

export default Rate;