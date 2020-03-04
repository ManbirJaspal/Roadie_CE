import React,{Fragment} from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Button, Icon, Image, Item, Label, Rating, Modal, Header, Card } from 'semantic-ui-react';
import StarRatings from '../Ratings/StarRatings';
import '../../styles1/style.css';

class RenderList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderList() {
    const listReview = this.props.list;
    return (listReview).map(l => {
      if(this.props.starVal == undefined){
        return (
          <div class="ui card">
          <div class="content">
          <div class="header">{l.title}</div>
          <div className="sr">
          <StarRatings disabled listRating={l.rating} ></StarRatings>
          </div>
          <div class="meta review"> by {l.name} on {l.date}</div>
          <div class="description review">{l.review}</div>
          </div>
          </div>
        );
      }

      else if((l.rating == this.props.starVal)) {
        return (
          <div class="ui card">
          <div class="content">
          <div class="header">{l.title}</div>
          <div className="sr">
          <StarRatings disabled listRating={l.rating} maxRating={5}> </StarRatings>
          </div>
          <div class="meta review"> by {l.name} on {l.date}</div>
          <div class="description review">{l.review}</div>
          </div>
          </div>
        );
      }

    });
  }

  render() {
    return (
      <div>
      <div class="ui cards cardsList">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: Object.values(state.list),
    starVal: state.list.starValue
  };
};

export default connect(mapStateToProps)(RenderList);
