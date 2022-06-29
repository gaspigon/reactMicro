import React, { useState } from "react";
import '../Form/Form.css'


const FormData = ({setShowForm, setBuyerData}) => {

  const [buyer, setBuyer] = useState({
    name: '',
    email:'',
    phone: ''
  })


  const submitData = (e) => {
    e.preventDefault()
    setBuyerData(buyer)
    setShowForm(false)

  }

  return (
      <form className="form" onSubmit={submitData}>
        <div className="box-form">
          <input type={'text'} placeholder='nombre' value={buyer.name} onChange={(e) => setBuyer({...buyer, name: e.target.value})} />
          <input type={'email'} placeholder='email' value={buyer.email} onChange={(e) => setBuyer({...buyer, email: e.target.value})}/>
          <input type={'number'} placeholder='celular' value={buyer.phone} onChange={(e) => setBuyer({...buyer, phone: e.target.value})} />
          <input type={'submit'}/>
        </div>
        
      </form>
  );
}

export default FormData