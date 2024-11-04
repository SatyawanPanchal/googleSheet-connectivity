import   { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser';
import './EmailSender.css'
 

const EmailSender = () => {
    const [formData,setFormData]=useState({
        to_email:"",
        subject:"",
        message:"",
        to_name:"",
        from_name:""
    })

const handleOnChange=(e)=>{
    const{name,value}=e.target;

    setFormData((prev)=>({...prev,[name]:value}))
}

const sendEmail=(e)=>{
    e.preventDefault();
    const serviceId="service_hm5htji";
    const templateId="template_t256fia";
    const publicKey="DxHPyiBw0ZaZWiPHY";
    emailjs.send(serviceId,templateId,formData,publicKey)
    .then(
        ()=>{alert('email send successfully');
        },
        (error)=>{
            alert('error in email sending ',error.text);
            
        }
    )
}

useEffect((
    )=>{
    
        console.log('the data updated--->',formData);

},[formData])
  return (
    <div className='main-email-container'>
      <form className='email-form' action="" onSubmit={sendEmail}>
        <label >Email To :</label>
        <input type="text" name='to_email' value={formData.to_email} onChange={handleOnChange} />


        <label >Subject of Email:</label>
        <input type="text" name='subject' value={formData.subject} onChange={handleOnChange} />

        <label >Message for person :</label>
        <input type="text" name='message' value={formData.message} onChange={handleOnChange} />

        <label >Name of the Person:</label>
        <input type="text" name='to_name' value={formData.to_name} onChange={handleOnChange} />

        <label >Your Name/ Designation :</label>
        <input type="text" name='from_name' value={formData.from_name} onChange={handleOnChange} />

<button type='submit'> Send Email</button>

      </form>
    </div>
  )
}

export default EmailSender;
