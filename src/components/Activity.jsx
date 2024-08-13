import React from 'react';

const Activity = ({ time, title, description }) => {
  return (
    <div className="activity">
      <strong>{time}</strong> - <em>{title}</em>
      <p>{description}</p>
    </div>
  );
};

export default Activity;
