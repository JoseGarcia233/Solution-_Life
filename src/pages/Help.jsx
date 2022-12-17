import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import  '../css/help.css'
const Contact = () => {
    const form = useRef();

    const alert = (txt) => {
        if (txt === 'Mail sent successfully '){
            Swal.fire({
            icon: 'success',
            text: txt,
            showConfirmButton: false,
            timer: 1500
        })} else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: txt,
                showConfirmButton: true,
                timer: 1500
            })
        }}

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_1iqat4v', 'template_a18dyo9', form.current, 'jvPaWitqbMBVSLvDs')
          .then((result) => {
              console.log(result.text);
              alert('Mail sent successfully ')
          }, (error) => {
              console.log(error.text);
              alert('The mail could not be sent ')
          });
      };

    return (
        <div className='containerContact'>
            
            <br/>
            <form className='formContact' ref={form} onSubmit={sendEmail} data-aos="fade-up">
               <h2>Contac us Here for help</h2>

                <label htmlFor="email" id='labelT'>Your Email</label>
                <input type="email" placeholder="Email" name="email" id="email" required/>

                <label htmlFor="textare" id='labelT2'>Your message</label>
                <textarea type="text" name='message' id="textare" required/>

                <button type='submit' value='submit' className='btnLogin'>Send message</button>
            </form>
        </div>
    )

}



export default Contact;