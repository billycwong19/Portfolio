import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import { 
  ContactBody,
  ContactBanner,
  ContactForm, 
  TextInput,
  TextAreaInput,
  ContactSubmit,
  MessageSent} from './Contact.style'



const Contact = () => {

    const [messageSentState, setMessageSentState] = useState(false)
    const messageSent = () => {
      setMessageSentState(!messageSentState)
      setTimeout(() => setMessageSentState(false), 5000)
    }

  const form = useRef()
  
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('portfolio_contact_form', 'portfolio_contact_form', form.current, 'F9mX-PQe9dgT_coFy')
    .then((result) => {
      console.log(result.text)
      messageSent()
    }, (error) => {
      alert(error.text)
    })  

    e.target.reset();
  }
    
  return (
    <ContactBody id={'contact'}>
        <ContactBanner src='./images/contactbanner.png' alt='contact banner' />
        <p>send me a message!</p>
        <ContactForm ref={form} onSubmit={sendEmail}>
            <TextInput type="text" name="name" placeholder='your name' required />
            <TextInput type="email" name="email" placeholder='your email' required />
            <TextAreaInput name="message" type="text" placeholder='message' required />
            <ContactSubmit type="submit" value="Send" />
            <MessageSent messageSentState={messageSentState}>
              <p>Message sent!</p> 
              <p>I will get back to you soon.</p>
            </MessageSent>
        </ContactForm>
    </ContactBody>
  )
}

export default Contact