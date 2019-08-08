import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.less';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Link to="/user">用户</Link>
      </div>
    );
  }
}

export default Home;
