import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Cart from "../Cart/Cart";

const FormData = () => {
  const { register, handleSubmit } = useForm();

const [formData, setFormData] = useState()

 const onSubmit = (data, e) => {
    e.target.reset();
    setFormData(data);
    console.log(data);
  };
;

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <input  />
       <input type={"email"}{...register("email")} value={FormData.name}/>
      <input type="number" {...register("edad", { min: 12, max: 99 })} /> 
      <input type="submit" />
    </form>
  );
}

export default FormData