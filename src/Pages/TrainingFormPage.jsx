import React from "react";
import Form from "../components/Form";
import TrainList from "../components/TrainList";

const TrainingFormPage = () => {
  return (
    <section className="container">
      <div className="page">
        <Form />
        <TrainList />
      </div>
    </section>
  );
};

export default TrainingFormPage;
