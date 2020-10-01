import React from 'react';
import { connect } from 'react-redux';
import './Header.css';

export class Header extends React.Component {
    render() {
      return (
        <div className="Header-component theme1">
          <header>
            Simple TPB Movie Search Application
          <hr />
          </header>
        </div>
      );
    };
};

const mapStateToProps = (state) => ({
    theme: state.theme
});

export default connect(mapStateToProps, null)(Header);
