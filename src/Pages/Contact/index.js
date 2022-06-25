import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import { 
  ContactBody,
  ContactBanner,
  ContactForm, 
  TextInput,
  TextAreaInput,
  ContactSubmit} from './Contact.style'



const Contact = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('portfolio_contact_form', 'portfolio_contact_form', form.current, 'F9mX-PQe9dgT_coFy')
    .then((result) => {
      alert(result.text)
    }, (error) => {
      alert(error.text)
    })  

    e.target.reset();
  }
    
  return (
    <ContactBody id={'contact'}>
        <ContactBanner src='./images/contactbanner.png' alt='contact banner' />
        <ContactForm ref={form} onSubmit={sendEmail}>
            <TextInput type="text" name="name" placeholder='name' required />
            <TextInput type="email" name="email" placeholder='email' required />
            <TextAreaInput name="message" type="text" placeholder='message' required />
            <ContactSubmit type="submit" value="Send" />
        </ContactForm>
    </ContactBody>
  )
}

export default Contact