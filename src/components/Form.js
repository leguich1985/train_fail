import React from "react";
import Input from "./componentEl/input";
import Button from "./componentEl/button";
import useForm from "./useForm";

const Form = () => {
  const { handleChange, form, handleSubmit } = useForm();
  console.log(12345, form);
  return (
    <div className="form">
      <Input className="input" type="date" id="date" onChange={handleChange} />
      <Input
        className="input"
        placeholder="Пройденная дистанция"
        type="number"
        id="number"
        onChange={handleChange}
      />
      <Button
        type="submit"
        id="submit"
        className="add"
        children="ok"
        onClick={handleSubmit}
      />
    </div>
  );
};

export default Form;
