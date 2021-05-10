import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Headline extends Component {
  render() {
    const { header, desc } = this.props;

    if (!header) {
      return null;
    }

    return (
      <div data-test="headerline-component">
        <h1 data-test="header">{header}</h1>
        <p data-test="description">{desc}</p>
      </div>
    );
  }
}

Headline.propTypes = {
  header: PropTypes.string,
  desc: PropTypes.string,
  user: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      email: PropTypes.string,
      age: PropTypes.number,
      onlineStatus: PropTypes.bool,
    })
  ),
};

export default Headline;
