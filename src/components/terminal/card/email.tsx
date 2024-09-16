"use client";
import React, { useState } from "react";

const Email = () => {
  const [sendMessage, setSendMessage] = useState();
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [success, setSuccess] = useState();

  const sendMessageFunction = async (e) => {
    console.log("clicked");
    e.preventDefault();
    const options = {
      method: "post",
      header: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formdata),
    };

    const nojson = await fetch("email/api", options);
    const json = await nojson.json();
    console.log(json);
    setSuccess(json.state);
  };

  return (
    <form
      className="p-7 border-4 flex flex-col  "
      onSubmit={sendMessageFunction}
    >
      <div className="name flex flex-col  mb-4">
        <p>Your Name (required)</p>
        <input
          className="border-4 border-black text-black p-2"
          type="text"
          onChange={(e) => setFormData({ ...formdata, name: e.target.value })}
          value={formdata.name}
        />
      </div>

      {/* Email Input */}
      <div className="email flex flex-col  mb-4">
        <p>Your Email (required)</p>
        <input
          className="border-4 border-black text-black  p-2"
          type="email"
          onChange={(e) => setFormData({ ...formdata, email: e.target.value })}
          value={formdata.email}
        />
      </div>

      <div className="subject flex flex-col  mb-4">
        <p>Subject</p>
        <input
          className="border-4 border-black text-black p-2"
          type="text"
          onChange={(e) =>
            setFormData({ ...formdata, subject: e.target.value })
          }
          value={formdata.subject}
        />
      </div>

      <div className="message flex flex-col  mb-4">
        <p>Your Message</p>
        <textarea
          className="border-4 border-black text-black p-2"
          p-2
          onChange={(e) =>
            setFormData({ ...formdata, message: e.target.value })
          }
          value={formdata.message}
          rows="4"
        ></textarea>
      </div>

      <div className="button m-4 border-white border-4 w-fit p-2 rounded-lg">
        <input
          type="submit"
          value="Send"
          className="hover:bg-white hover:text-black cursor-pointer p-2 rounded-lg"
        />
      </div>

      {success ? <p>hi</p> : <p></p>}
    </form>
  );
};

export default Email;
