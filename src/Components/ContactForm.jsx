import React, { useState } from 'react';
import { send } from 'emailjs-com';

function ContactForm() {
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'dylandupasquier@gmail.com',
    message: '',
    reply_to: '',
  });

  const serviceID = 'default_service';
  const templateID = 'template_5o9ftxu';
  const userID = 'EcV8iYjkjGTnrhJmE';

  const onSubmit = (e) => {
    e.preventDefault();
    send(serviceID, templateID, toSend, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
    alert("Thanks for the email! I'll get back to you as soon as possible.");
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className='form-login2'>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='from_name'
          placeholder='Your name'
          value={toSend.from_name}
          onChange={handleChange}
        />
        <input
          type='text'
          name='reply_to'
          placeholder='Your email'
          value={toSend.reply_to}
          onChange={handleChange}
        />
        <input
          type='text'
          name='to_name'
          placeholder='dylandupasquier@gmail.com'
          value={toSend.to_name}
          onChange={handleChange}
        /><br />
        <textarea
          type='text'
          name='message'
          placeholder='Your message'
          value={toSend.message}
          onChange={handleChange}
          className="message"
        /><br />

        <button type='submit' className='btn19'>
          SEND
        </button>
      </form>
    </div>
  );
}

export default ContactForm;