import React from 'react';

const Rating = ({ value }) => {
  const maxStars = 5;
  const roundedRating = value;
  const stars = [];

  for (let i = 0; i < maxStars; i++) {
    if (i < roundedRating) {
      stars.push(<span key={i}>&#9733;</span>);
    } else {
      stars.push(<span key={i}>&#9734;</span>);
    }
  }

  return <div>{stars}</div>;
};

export default Rating;
