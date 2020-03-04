import React, { Component } from "react";
import history from '../../history';
import '../../styles1/style.css';
import {connect} from 'react-redux';
import { getReviews, renderListWithRating, calculateAverage, clearList, getRatingsList, clearRating, calculateTotalStars, addtoStars} from '../../actions';
import {Button, Image, Rating, Progress } from 'semantic-ui-react';
import { Dropdown } from 'semantic-ui-react';
import RenderList from '../ReviewList/RenderList';
import AddReview from '../ReviewList/AddReview';
import styled from 'styled-components';
import Ratings from '../Ratings/Ratings';


const HoverButton = styled.button`
color: float:right;
border-radius: 5px;
margin: 5px;
color:#57C4BE;
background-color: white;
border: solid #57C4BE 1px;
font-size:17px;
padding: 0 24px;
:hover {
	color: white;
	cursor: pointer;
	background-color: #57C4BE;
}
`

export class Main extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount(){
		this.props.clearList();
		this.props.clearRating();
		this.props.getReviews();
		this.props.getRatingsList();
		this.props.calculateAverage();
		this.props.calculateTotalStars();
	}

	render() {
		return (
			<div class="main" >
				<div class="product-container">
					<div>
						<img src={require('../../resources/product.jpg')}  width={250} height={300}  alt="Product"/>
					</div>
					<div class="product-description">
						<h1>ROADIE COMMUNICATOR - INCLUDES INSTALLATION SOFTWARE</h1>
						<p>by <strong>Roadie</strong></p>

						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra turpis orci, a dignissim dui faucibus quis. Curabitur gravida egestas ex, ut pulvinar ex malesuada eget.</p>
						<ul role="list" class="ui list">
							<ul >
								<li role="listitem" class="">Phasellus eu arcu tortor. Nunc sed arcu diam. Proin condimentum nunc nec ex tempor mattis. Maecenas non cursus leo, ut lacinia erat. Fusce et lobortis urna. Maecenas vel odio leo. Mauris eu urna mollis urna tincidunt consectetur. Proin convallis vehicula justo. Aliquam hendrerit eu nibh ut tempus</li>
							</ul>
						</ul>
						<div class="btn-container">
							<AddReview></AddReview>
							<HoverButton><p>Add to Cart</p></HoverButton>
						</div>
					</div>
				</div>
				<h2 class="customer-review-title">CUSTOMER REVIEWS</h2>
				<div class="customer-reviews-container">
					<div>
						<Ratings></Ratings>
					</div>
					<div className="list-ren"><RenderList></RenderList></div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
};

export default connect(mapStateToProps, { getReviews, renderListWithRating, calculateAverage, clearList, getRatingsList, clearRating, calculateTotalStars, addtoStars})(Main);
