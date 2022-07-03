import React, {   useState } from "react";
import {useForm} from "react-hook-form"
import '../Form/Form.css'




const FormData = ({setShowForm, setBuyerData, setDisable}) => {

  const {register, formState:{errors}, handleSubmit} = useForm();
 

  const [buyer, setBuyer] = useState({
    name: '',
    email:'',
    phone: ''
  })


  const submitData = (e) => {
    
    setBuyerData(buyer)
    setShowForm(false)
    setDisable(false)
  }

  return (
      <form className="form" onSubmit={(handleSubmit(submitData)) }>
        <div className="box-form">
          <h3 className="form-title">Complete sus datos de contacto!</h3>
          <input type={'text'} className="form-input" placeholder="Nombre" {...register("Nombre", {required:true , pattern:{ value: ""} })} value={buyer.name} onChange={(e) => setBuyer({...buyer, name: e.target.value})} />
          {errors.Nombre && <span style={{fontSize:12, color:'red'}}>Campo Requerido</span>}
          <input type={'email'} className="form-input" placeholder='Email' value={buyer.email} onChange={(e) => setBuyer({...buyer, email: e.target.value})}/>
          <input type={'number'} className="form-input" placeholder='Celular' {...register("Celular", {required:true , pattern:{ value: ""} })} value={buyer.phone} onChange={(e) => setBuyer({...buyer, phone: e.target.value})} />
          <input type={'submit'} className="form-submit" />
          
        </div>
        
      </form>
  );
}

export default FormData