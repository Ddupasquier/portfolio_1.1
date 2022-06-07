/* eslint-disable no-alert */
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

  function validateEmail(mail) {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    alert('You have entered an invalid email address!');
    return false;
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      toSend.from_name === '' ||
      toSend.reply_to === '' ||
      toSend.to_name === '' ||
      toSend.message === '' ||
      validateEmail(toSend.reply_to) === false
    ) {
      alert(
        'All fields must be filled out and you must enter a valid email. Thanks.'
      );
      return;
    }
    send(serviceID, templateID, toSend, userID)
      .then(() => {
        // eslint-disable-next-line no-alert
        alert(
          // eslint-disable-next-line comma-dangle
          "Thanks for the email! I'll get back to you as soon as possible."
        );
      })
      .catch((err) => {
        // eslint-disable-next-line no-alert
        alert('Your email failed to send', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div id="contact">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="from_name"
          placeholder="Your name"
          value={toSend.from_name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="reply_to"
          placeholder="Your email"
          value={toSend.reply_to}
          onChange={handleChange}
        />
        {/* <input
          type="text"
          name="to_name"
          placeholder="dylandupasquier@gmail.com"
          value={toSend.to_name}
          onChange={handleChange}
        /> */}
        <br />
        <textarea
          type="text"
          name="message"
          placeholder="Your message"
          value={toSend.message}
          onChange={handleChange}
          className="message"
        />
        <br />

        <button type="submit" className="btn19">
          SEND
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
