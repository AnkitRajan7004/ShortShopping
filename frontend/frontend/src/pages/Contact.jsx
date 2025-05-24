import React, { useState } from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) errs.name = 'Name is required'
    if (!formData.email.trim()) errs.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Email is invalid'
    if (!formData.message.trim()) errs.message = 'Message is required'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    setErrors(prev => ({ ...prev, [e.target.name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 4000)
    }
  }

  return (
    <div className="bg-[#faf8f2] min-h-screen pb-20">
      <div className="text-center text-3xl pt-10 border-t mb-8 border-[#c4b89a] text-[#4b462e]">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-20 px-4 sm:px-6 md:px-20 mb-20">
        {/* Left Section */}
        <div className="max-w-md flex flex-col gap-6 text-[#4b462e]">
          <img 
            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-md shadow-lg border-2 border-[#d3c88f] hover:scale-105 transition-transform duration-300" 
            src={assets.contact_img} 
            alt="Contact Us" 
          />
          <div>
            <p className="font-semibold text-xl mb-2">Our Office</p>
            <p className="text-[#756f45] leading-relaxed">
              27/3 Hazratganj Road <br /> Gomti Nagar, Lucknow, UP - 226010, India
            </p>
            <p className="text-[#756f45] leading-relaxed mt-3">
              Tel: +91 522 123 4567 <br /> Email: support@medicare.in
            </p>
          </div>

          <div>
            <p className="font-semibold text-xl mb-2">Careers at Medicare</p>
            <p className="text-[#756f45] mb-4">
              Learn more about our teams and job openings.
            </p>
            <button
              className="w-full sm:w-auto border border-[#b7a960] px-8 py-3 rounded-md font-semibold text-[#7a732f] hover:bg-[#b7a960] hover:text-[#3a3815] transition duration-300"
              onClick={() => alert('Redirect to Careers page (not implemented)')}
            >
              Explore Jobs
            </button>
          </div>
        </div>

        {/* Right Section: Form */}
        <form 
          onSubmit={handleSubmit} 
          className="bg-[#f0eede] p-6 sm:p-8 rounded-lg shadow-md max-w-lg w-full flex flex-col gap-6"
          noValidate
        >
          <p className="text-[#6a6738] font-semibold text-xl sm:text-2xl mb-4">Get In Touch</p>

          <div className="relative">
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="peer w-full rounded-md border border-[#c9c4a1] bg-[#faf8f2] px-3 pt-5 pb-2 text-[#4b462e] focus:outline-none focus:ring-2 focus:ring-[#b8b169]"
              placeholder=" "
            />
            <label
              htmlFor="name"
              className="absolute left-3 top-2 text-[#837f56] text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#bbb87f] peer-focus:top-2 peer-focus:text-[#837f56]"
            >
              Name
            </label>
            {errors.name && <p className="text-[#a07c46] text-xs mt-1">{errors.name}</p>}
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="peer w-full rounded-md border border-[#c9c4a1] bg-[#faf8f2] px-3 pt-5 pb-2 text-[#4b462e] focus:outline-none focus:ring-2 focus:ring-[#b8b169]"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="absolute left-3 top-2 text-[#837f56] text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#bbb87f] peer-focus:top-2 peer-focus:text-[#837f56]"
            >
              Email
            </label>
            {errors.email && <p className="text-[#a07c46] text-xs mt-1">{errors.email}</p>}
          </div>

          <div className="relative">
            <textarea
              name="message"
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="peer w-full resize-none rounded-md border border-[#c9c4a1] bg-[#faf8f2] px-3 pt-5 pb-2 text-[#4b462e] focus:outline-none focus:ring-2 focus:ring-[#b8b169]"
              placeholder=" "
            />
            <label
              htmlFor="message"
              className="absolute left-3 top-2 text-[#837f56] text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#bbb87f] peer-focus:top-2 peer-focus:text-[#837f56]"
            >
              Message
            </label>
            {errors.message && <p className="text-[#a07c46] text-xs mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-[#b7a960] text-[#3a3815] font-semibold py-3 rounded-md hover:bg-[#8f8533] transition duration-300"
          >
            Send Message
          </button>

          {submitted && <p className="text-green-700 font-semibold mt-2">Thank you for your message! We'll get back to you soon.</p>}
        </form>
      </div>

      {/* Map Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-16">
        <p className="text-[#4b462e] text-xl sm:text-2xl mb-4 font-semibold">Find Us Here</p>
        <div className="w-full h-64 sm:h-80 md:h-96 rounded-md border-2 border-[#c4b89a] overflow-hidden">
          <iframe
            title="Medicare Lucknow Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.206161847024!2d80.94615967496394!3d26.84669396594451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be25c3b2c6fcd%3A0x63ecf04e2e05d394!2sHazratganj%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1716543420000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default Contact
