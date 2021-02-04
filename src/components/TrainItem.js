import React from "react";

const TrainItem = ({ id, date, done }) => {
  return (
    <>
      <div className="train-item">
        <div className="date">
          <p>{date}</p>
        </div>
        <div className="walked">{done}</div>
        <div className="actions">
          <span>
            <i className="far fa-edit" />
          </span>
          <span>
            <i className="fas fa-trash-alt" />
          </span>
        </div>
      </div>
    </>
  );
};

export default TrainItem;
