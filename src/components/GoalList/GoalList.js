import React from "react";
import "./GoalList.css";

const GoalList = ({ goals }) => {
  return (
    <ul className="goal-list">
      {goals.map((goal) => (
        <li key={goal.id}>{goal.text}</li>
      ))}
    </ul>
  );
};

export default GoalList;
