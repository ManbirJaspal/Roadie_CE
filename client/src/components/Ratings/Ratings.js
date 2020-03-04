import React from 'react';
import RenderList from '../ReviewList/RenderList';
import { Rating, Progress } from 'semantic-ui-react';
import '../../styles1/style.css';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {renderListWithRating} from '../../actions';
import StarRatings from './StarRatings';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
  }

  ratingNumber = (e) => {
    this.props.renderListWithRating(e.currentTarget.dataset.id);
  }

  render() {
    return (
      <div>
        <div class="ratings">
          <div>
            <div>
              <StarRatings />
            </div>
            <div class="avg-rating">{this.props.avgRating} out of 5
            </div>
          </div>
          <p className="num-reviews">{this.props.totalStars} Reviews
          </p>
          <div class="rating-bar">
            <div><Link data-id="5" onClick={this.ratingNumber} className="rating-bar-link link">5 star</Link></div>
            <div className="progress-bar">
              <Progress percent={((this.props.ratingsList[4].num * 100)/this.props.totalStars)} color="yellow"></Progress>
            </div>
          </div>
          <div class="rating-bar">
            <div><Link data-id="4" onClick={this.ratingNumber} className="rating-bar-link link">4 star</Link></div>
            <div className="progress-bar">
              <Progress percent={((this.props.ratingsList[3].num * 100)/this.props.totalStars)} color="yellow"></Progress>
            </div>
          </div>
          <div class="rating-bar">
            <div><Link data-id="3" onClick={this.ratingNumber} className="rating-bar-link link">3 star</Link></div>
            <div className="progress-bar">
              <Progress percent={((this.props.ratingsList[2].num * 100)/this.props.totalStars)} color="yellow"></Progress>
            </div>
          </div>
          <div class="rating-bar">
            <div><Link data-id="2" onClick={this.ratingNumber} className="rating-bar-link link">2 star</Link></div>
            <div className="progress-bar">
              <Progress percent={((this.props.ratingsList[1].num * 100)/this.props.totalStars)} color="yellow"></Progress>
            </div>
          </div>
          <div className="rating-bar">
            <div><Link data-id="1" onClick={this.ratingNumber}  className="rating-bar-link link">1 star</Link></div>
            <div className="progress-bar">
              <Progress className="progress" percent={((this.props.ratingsList[0].num * 100)/this.props.totalStars)} color="yellow"></Progress>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    avgRating: state.rating.avgRating,
    totalStars: state.rating.totalStars,
    ratingsList: Object.values(state.rating)
  };
};

export default connect(mapStateToProps, {renderListWithRating})(Ratings);
