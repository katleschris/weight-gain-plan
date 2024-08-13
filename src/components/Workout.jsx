import React from 'react';

const Workout = ({ time, title, exercises }) => {
  return (
    <div className="workout">
      <strong>{time}</strong> - <em>{title}</em>
      <ul>
        {exercises.map((exercise, index) => (
          <li key={index}>{exercise}</li>
        ))}
      </ul>
    </div>
  );
};

export default Workout;
