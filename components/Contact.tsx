import React, { createRef, useState } from "react";
import { Phone, Mail, CheckCircle } from "react-feather";
import Footer from "./Footer";
import emailjs from "emailjs-com";

type Props = {};

function Contact({}: Props) {
  const [sent, setSent] = useState(false);
  const form = createRef<any>();
  const timeout = function showTimeout(){
    setTimeout(()=>setSent(false), 5000);
  }

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_nz6b6uk",
      "template_b6iz66a",
      form.current,
      "6MXkopwuXTl8szTmB"
    );

    e.target.reset();

    setSent(true);
    timeout()
  };

  return (
    <div className="relative flex flex-col gap-5 md:flex-row items-center justify-center h-screen text-center md:text-left w-[90%] mx-auto">
      <h2 className="head">Contact</h2>
      <div className="grid md:grid-cols-2 mt-20 gap-7">
        <div className="w-full self-center text-gray-300 space-y-4">
          <div className="flex justify-start gap-5">
            <div className="self-center animate-pulse">
              <Phone className="w-9 h-9" />
            </div>
            <div className="grid justify-items-start">
              <div className="text-lg font-semibold tracking-wider">
                Call me
              </div>
              <div>+234 706 057 2712</div>
            </div>
          </div>
          <a
            href="mailto:ibrahimhamman215@gmail.com"
            className="flex justify-start gap-5"
          >
            <div className="self-center animate-pulse">
              <Mail className="w-9 h-9" />
            </div>
            <div className="grid justify-items-start">
              <div className="text-lg font-semibold tracking-wider">Email</div>
              <div>ibrahimhamman215@gmail.com</div>
            </div>
          </a>
        </div>
        <form
          className="space-y-2"
          autoComplete="off"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="flex w-full gap-2">
            <input
              name="name"
              placeholder="Name"
              className="input"
              type="text"
              required
            />
            <input
              name="email"
              placeholder="Email"
              className="input"
              type="text"
              required
            />
          </div>
          <div>
            <input
              name="subject"
              placeholder="Subject"
              className="input"
              type="text"
              required
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Message"
              className="input"
              required
            ></textarea>
          </div>
          <button className=" mt-5 w-full bg-gray-400 p-3 rounded font-semibold text-gray-900 hover:animate-pulse">
            {sent ? (
              <div className="flex justify-center gap-1">
                Sent <CheckCircle />
              </div>
            ) : (
              <>Submit</>
            )}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
