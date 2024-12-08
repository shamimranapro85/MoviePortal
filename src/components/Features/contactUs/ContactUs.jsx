import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className="py-12 ">
      <div className="max-w-4xl rounded-md border mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center  mb-8">Contact Us</h2>
        <p className="text-center">Movies are a magical escape, blending storytelling and emotion. They entertain, inspire, and connect us, offering diverse worlds, unforgettable characters, and timeless experiences for all audiences.</p>
        <div className=" p-8 shadow-md rounded-lg">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium ">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input input-bordered w-full mt-2"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium ">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input input-bordered w-full mt-2"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium ">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="textarea textarea-bordered w-full mt-2"
                placeholder="Enter your message, releated your collected movie"
                required
                rows="5"
              />
            </div>
            <button type="submit" className="btn btn-primary w-full mt-4">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
