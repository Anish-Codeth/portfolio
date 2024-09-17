"use client";
import React, { useEffect, useState,useRef } from "react";
import emailjs from '@emailjs/browser'

const Email = ({formActive}) => {
  const [loading, setLoading] = useState(false);
 

  const form = useRef();

  const sendEmail = async (e) => {
    setLoading(true)
    e.preventDefault();

try{
  const result=await emailjs.sendForm(
        'service_4g93q2n',
        'template_5eq9v7h',
        form.current,
        'Rdcx518JvI2Aw0MAd',

      )
     alert('message sent successfully')
    }
    catch(err)
    {
     alert('error came')
    }
    setLoading(false)
    console.log(formActive)
    formActive('release')
  };


  return (
    <form
      className="p-7 border-4 flex flex-col  "
      ref={form}
      onSubmit={sendEmail}
    >
      <div className="name flex flex-col  mb-4">
        <p>Your Name (required)</p>
        <input
          className="border-4 border-black text-black p-2"
          type="text"
          name='from_name'
        />
      </div>

      {/* Email Input */}
      <div className="email flex flex-col  mb-4">
        <p>Your Email (required)</p>
        <input
          className="border-4 border-black text-black  p-2"
          type="email"
          name="from_email"
        />
      </div>

      <div className="subject flex flex-col  mb-4">
        <p>Subject</p>
        <input
          className="border-4 border-black text-black p-2"
          type="text"
          name='subject'
        />
      </div>

      <div className="message flex flex-col  mb-4">
        <p>Your Message</p>
        <textarea
          className="border-4 border-black text-black p-2"
          p-2
          rows="4"
          name='message'
        ></textarea>
      </div>

      <div className="button m-4 border-white border-4 w-fit p-2 rounded-lg">
        <input
          type="submit"
          value={loading?"Sending email...":'send'}
          className="hover:bg-white hover:text-black cursor-pointer p-2 rounded-lg"
        />
      </div>

      {/* {success ? <p>hi</p> : <p></p>} */}
    </form>
  );
};

export default Email;
