import React, { Component } from "react";
import {connect} from 'react-redux';
import { Responsive, Button, Form, Modal, Dropdown } from 'semantic-ui-react';
import {createReview, getReviews, addtoStars, calculateAverage, calculateTotalStars,getRatingsList, clearList} from '../../actions';
import styled from 'styled-components';
import '../../styles1/style.css';
import '../../styles.css';


const rating = [
  { key: 1, text: 'One star', value: 1 },
  { key: 2, text: 'Two stars', value: 2},
  { key: 3, text: 'Three stars', value: 3},
  { key: 4, text: 'Four stars', value: 4},
  { key: 5, text: 'Five stars', value: 5}
]

const HoverButton = styled.button`
color: float:right;
border-radius: 5px;
margin: 5px;
color:#57C4BE;
background-color: white;
border: solid #57C4BE 1px;
font-size:17px;
padding: 14px;
float:right;
:hover {
  color: white;
  cursor: pointer;
  background-color: #57C4BE;
}
`

export class AddReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      rating: null,
      title:"",
      review: "",
      value:"",
      open: false,
      errors:[]
    };
  }

  validate = (name, title, review, rating) => {
    const errors = [];

    if (name.length === 0) {
      errors.push("Name can't be empty");
    }
    if (title.length === 0) {
      errors.push("Title can't be empty");
    }
    if (review.length === 0) {
      errors.push("Review can't be empty");
    }
    if (rating == null) {
      errors.push("Rating can't be empty");
    }

    return errors;
  }

  show = (dimmer) => () => this.setState({ dimmer, open: true })
  close = () => {
    this.setState({ open: false });
    this.setState({errors: [] });
  }

  onSubmit = async (event) => {
    event.preventDefault();
    const { name, title, review , rating} = this.state;
    const errors = this.validate(name, title, review, rating);
    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }
    this.close();
    await this.props.createReview(this.state.name, this.state.title, this.state.review, this.state.rating );
    await this.props.addtoStars(this.state.rating);
    await this.props.calculateTotalStars();
    await this.props.calculateAverage();
    await this.props.getReviews();
    await this.props.getRatingsList();
  }

  onCancelClick = () => {
    this.close();
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onChangeDropdown = (event, data) => {
    this.setState({rating: data.value})
  }

  render() {
    const { open, dimmer } = this.state;
    return (
      <div className="add-review-div">
      <HoverButton onClick={this.show('blurring')}>Leave Review</HoverButton>
      <Modal className="review-modal" dimmer={dimmer} open={open} onClose={this.close} style={{width:"500px", height:"520px", marginLeft:"35%", marginRight:"20%", marginTop:"10%"}}>
      <h1 className="title">ADD REVIEW</h1>
      <form className="modal-form" onSubmit={this.onSubmit}>
      {this.state.errors.map(error => (
        <p style={{color:"red"}} key={error}>Error: {error}</p>
      ))}
      <div style={{marginTop: "10px", display:"flex", flexDirection:"column"}} className="ui big icon input">
      <div>
      <label>
      Rating
      </label>
      <div class="dropdown"><Dropdown
      search
      onChange={this.onChangeDropdown}
      name="options"
      selection
      wrapSelection={false}
      options={rating}
      placeholder='One star'
      />
      </div>
      </div>
      <label>
      Your name
      </label>
      <input type="text" placeholder="Enter text here...." name="name" onChange={this.handleChange} />
      <label >
      Review Title
      </label>
      <input type="text" placeholder="Enter text here...." name="title" onChange={this.handleChange} />
      <label>
      Write your review below
      </label>
      <textarea onChange={this.handleChange}  name="review" />
      <div>
      <HoverButton>Submit</HoverButton>
      <Modal.Actions>
      <HoverButton onClick={this.close}>Cancel</HoverButton>
      </Modal.Actions>
      </div>
      </div>
      </form>
      </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ratingsList: Object.values(state.rating)
  };
};

export default connect(mapStateToProps, {createReview, getReviews, addtoStars, calculateAverage, calculateTotalStars, getRatingsList, clearList})(AddReview);
