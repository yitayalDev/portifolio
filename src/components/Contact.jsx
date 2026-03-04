import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        'service_km4aelm',
        'template_1b88bhc',
        form.current,
        'HZ_IAX1znudLEhvQ0'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          setIsSending(false);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send message. Please try again.');
          setIsSending(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#0f172a] relative overflow-hidden"
    >
      {/* Background Blurs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] -ml-64 -mb-64"></div>

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-black tracking-[0.3em] text-blue-500 uppercase mb-3">
            Available for Hire
          </h2>
          <h3 className="text-5xl md:text-6xl font-black text-white">
            Get In <span className="text-blue-500">Touch</span>
          </h3>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-8 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-extrabold text-white mb-6">
              Let's Build Something <br />
              <span className="text-blue-400">Exceptional</span> Together
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg mb-12">
              I’m always open to exciting collaborations, freelance work, or
              full-time roles. Drop me a message, and let’s turn your vision into reality.
            </p>

            <div className="space-y-6">
              {[
                { label: "Email", value: "merawiyitu@gmail.com", icon: "fa-envelope", color: "blue" },
                { label: "Phone", value: "0988011906", icon: "fa-phone", color: "cyan" },
                { label: "Location", value: "Gondar, Ethiopia", icon: "fa-map-marker-alt", color: "indigo" }
              ].map((info, index) => (
                <div key={index} className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all group">
                  <div className={`w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all`}>
                    <i className={`fas ${info.icon} text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="text-gray-500 font-bold text-xs uppercase tracking-widest mb-1">{info.label}</h4>
                    <p className="text-white font-bold">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Polished Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 flex flex-col gap-6 shadow-2xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                required
                className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all font-medium"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
                className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all font-medium"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all font-medium"
            />
            <textarea
              name="message"
              placeholder="How can I help you?"
              rows="5"
              required
              className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all font-medium resize-none"
            ></textarea>

            <button
              type="submit"
              disabled={isSending}
              className="w-full bg-blue-600 text-white py-5 rounded-xl font-black text-lg hover:bg-blue-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] transition-all duration-300 transform active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-4 border border-blue-400/20"
            >
              <i className={`fas ${isSending ? 'fa-spinner fa-spin' : 'fa-paper-plane'}`}></i>
              {isSending ? 'TRANSMITTING...' : 'SEND MESSAGE'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
