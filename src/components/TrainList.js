import React from "react";
import { data } from "../data/data";
import TrainItem from "./TrainItem";
import useForm from "./useForm";
const TrainList = () => {
  const { form } = useForm();
  console.log(123, form);
  console.log(data);
  return (
    <div className="table">
      {data.map((el, idx) => (
        <TrainItem key={idx} {...el} />
      ))}
    </div>
  );
};

export default TrainList;
