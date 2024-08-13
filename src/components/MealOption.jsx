import React from 'react';

const MealOption = ({ title, items }) => {
  return (
    <div className="meal-option">
      <h4>{title}</h4>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default MealOption;
