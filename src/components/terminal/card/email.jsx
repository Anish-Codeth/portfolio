"use client";
import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Email = ({ formActive }) => {
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      if (
        e.target.from_name.value == "" ||
        e.target.from_email.value == "" ||
        e.target.subject.value == "" ||
        e.target.message.value == ""
      )
        throw new Error("Fill out the field");
      console.log(e.target.message.value);
      const result = await emailjs.sendForm(
        "service_4g93q2n",
        "template_5eq9v7h",
        form.current,
        "Rdcx518JvI2Aw0MAd"
      );
      alert("Message sent successfully");

      formActive("release");
    } catch (err) {
      if ((err = "Fill out the field")) alert(err);
      else alert("An error occurred");
    }
    setLoading(false);
  };

  return (
    <form className="p-7 flex flex-col" ref={form} onSubmit={sendEmail}>
      <div className="name flex flex-col mb-4">
        <p className="text-gray-300">Your Name (required)</p>
        <input
          className="border-2 border-gray-600 bg-gray-800 text-white p-2"
          type="text"
          name="from_name"
        />
      </div>

      <div className="email flex flex-col mb-4">
        <p className="text-gray-300">Your Email (required)</p>
        <input
          className="border-2 border-gray-600 bg-gray-800 text-white p-2"
          type="email"
          name="from_email"
        />
      </div>

      <div className="subject flex flex-col mb-4">
        <p className="text-gray-300">Subject</p>
        <input
          className="border-2 border-gray-600 bg-gray-800 text-white p-2"
          type="text"
          name="subject"
        />
      </div>

      <div className="message flex flex-col mb-4">
        <p className="text-gray-300">Your Message</p>
        <textarea
          className="border-2 border-gray-600 bg-gray-800 text-white p-2"
          rows="4"
          name="message"
        ></textarea>
      </div>
      <div className="flex justify-between">
        <div className="button m-4 border-gray-600 border-2 w-fit p-2 rounded-lg">
          <input
            type="submit"
            value={loading ? "Sending email..." : "Send"}
            className="hover:bg-gray-700 hover:text-white cursor-pointer p-2 rounded-lg"
          />
        </div>
        <div
          className="button m-4 border-gray-600 border-2 w-fit p-2 rounded-lg hover:bg-gray-700 hover:text-white "
          onClick={() => formActive("release")}
        >
          <p className=" h-full text-center">Cancel</p>
        </div>
      </div>
    </form>
  );
};

export default Email;
