import React, { useState } from "react";

const useForm = () => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    console.log(form);
  };

  const handleSubmit = (e) => {
    console.log(form);
  };
  return { handleChange, handleSubmit, form };
};

export default useForm;
