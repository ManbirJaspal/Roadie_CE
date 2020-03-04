import React,{Fragment} from "react";
import { connect } from "react-redux";
import StarRatingComponent from 'react-star-rating-component';
import '../../styles1/style.css';

class StarRatings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rating: 0
    };
  }

  componentDidMount(){
    this.setRating();
    console.log("inside cdm of staRRATINGS");
    console.log(this.props);
  }

  componentWillReceiveProps(nextProps){
       console.log("inside CWRP");
      if(nextProps.avgRating!==this.props.avgRating) {
        console.log(nextProps.avgRating);
        this.setState({rating: nextProps.avgRating});
      }
    }

  setRating = () => {
    this.setState({rating: this.props.avgRating});
  }

  render() {
  const { rating } = this.state;
  if(this.props.listRating == null){
    return (
      <div className="star-component-div">
        <StarRatingComponent
            name="rate1"
            starCount={5}
            value={rating}
          />
      </div>
    );
  } else {
    return (
      <div className="star-component-div">
        <StarRatingComponent
            name="rate1"
            starCount={5}
            value={this.props.listRating}
          />
      </div>
    );
  }

}
}

    const mapStateToProps = state => {
      return {
                avgRating: state.rating.avgRating,
              };
            };
export default connect(mapStateToProps)(StarRatings);
