import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    const { loggedInUser } = this.props;
    return (
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>{/* <Link to='/cart'>Cart</Link> */}</li>
          <li>{/* <Link to='/catalog'>Catalog</Link> */}</li>
          {/* <li style={{ float: 'right', paddingLeft: 5 }}>
            <p class='header-text'>Total cost: ${this.props.totalCost}</p>
          </li> */}
          <li style={{ float: 'right' }}>
            {loggedInUser === null ? (
              <p className='header-text'>
                <button onClick={() => this.props.signIn('John')}>
                  Sign in as John
                </button>
                <button onClick={() => this.props.signIn('Jane')}>
                  Sign in as Jane
                </button>
              </p>
            ) : (
              <p class='header-text'>
                Logged in as: {loggedInUser}{' '}
                <button onClick={() => this.props.signOut()}>Sign out</button>
              </p>
            )}
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
