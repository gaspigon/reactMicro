import React, { useState } from "react";
// import { useForm } from "react-hook-form";


const FormData = ({setShowForm, setBuyerData}) => {

  const [buyer, setBuyer] = useState({
    name: '',
    email:'',
    phone: ''
  })

  // const handleInputChange = (e) => {
  //   setBuyer({
  //     ...buyer,
  //     [e.target.name]: e.target.value
  //   })
  // }

  const submitData = (e) => {
    e.preventDefault()
    setBuyerData(buyer)
    setShowForm(false)
  }

  return (
      <form onSubmit={submitData}>
        <input type={'text'} placeholder='nombre' value={buyer.name} onChange={(e) => setBuyer({...buyer, name: e.target.value})} />
        <input type={'email'} placeholder='email' value={buyer.email} onChange={(e) => setBuyer({...buyer, email: e.target.value})}/>
        <input type={'number'} placeholder='celular' value={buyer.phone} onChange={(e) => setBuyer({...buyer, phone: e.target.value})} />
        <input type={'submit'}/>
      </form>
  );
}

export default FormData