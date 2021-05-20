import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, desc }) => {
  if (!title) {
    return null;
  }

  return (
    <div data-test="article-card">
      <h2 data-test="title">{title}</h2>
      <div data-test="desc">{desc}</div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default Card;
