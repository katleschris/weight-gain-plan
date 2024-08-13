import React from 'react';

const Meal = ({ time, title, items }) => {
  return (
    <div className="meal">
      <strong>{time}</strong> - <em>{title}</em>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Meal;
