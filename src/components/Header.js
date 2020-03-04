import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";


class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  handleLogout = () => {
  this.props.signOut();
}

  render() {
    return (
      <div style={{}} className="ui segment">
        <div className="ui secondary menu" >
          <img src={require('../resources/logo.png')} style={{margin:"0 auto"}} height="50" alt="Logo"/>

        </div>
      </div>
    );
  };
}

export default connect(null)(Header);
