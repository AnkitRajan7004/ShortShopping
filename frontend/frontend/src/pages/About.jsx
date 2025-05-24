import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const faqData = [
  {
    question: 'How do I track my order?',
    answer: 'You can track your order status on the Orders page once logged in.'
  },
  {
    question: 'What is your return policy?',
    answer: 'Returns are accepted within 30 days of delivery with a valid receipt.'
  },
  {
    question: 'Do you offer international shipping?',
    answer: 'Currently, we ship within the country only. International shipping coming soon!'
  }
]

const About = () => {
  // Fade + slide animation control
  const [visibleSections, setVisibleSections] = useState({
    aboutText: false,
    whyChoose: false,
    faq: false,
  })

  // Accordion FAQ open index
  const [openFaqIndex, setOpenFaqIndex] = useState(null)

  // Back to top button visibility
  const [showTopBtn, setShowTopBtn] = useState(false)

  // Newsletter success message state
  const [newsletterSuccess, setNewsletterSuccess] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const aboutTextEl = document.getElementById('about-text')
      const whyChooseEl = document.getElementById('why-choose')
      const faqEl = document.getElementById('faq-section')

      if (aboutTextEl) {
        const rect = aboutTextEl.getBoundingClientRect()
        if (rect.top < window.innerHeight - 100) {
          setVisibleSections((prev) => ({ ...prev, aboutText: true }))
        }
      }

      if (whyChooseEl) {
        const rect = whyChooseEl.getBoundingClientRect()
        if (rect.top < window.innerHeight - 100) {
          setVisibleSections((prev) => ({ ...prev, whyChoose: true }))
        }
      }

      if (faqEl) {
        const rect = faqEl.getBoundingClientRect()
        if (rect.top < window.innerHeight - 100) {
          setVisibleSections((prev) => ({ ...prev, faq: true }))
        }
      }

      // Show back to top button after scrolling 300px
      setShowTopBtn(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Toggle FAQ item open/close
  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Simulated newsletter submit
  const handleNewsletterSubmit = () => {
    setNewsletterSuccess(true)
    setTimeout(() => setNewsletterSuccess(false), 4000)
  }

  return (
    <div className="px-4 sm:px-0 max-w-7xl mx-auto text-gray-800">
      {/* About Us Title with animated underline */}
      <div className="text-3xl font-bold text-center pt-8 border-t border-yellow-400 relative">
        <Title text1="ABOUT" text2="US" />
        <div className="absolute left-1/2 -bottom-2 w-20 h-1 bg-yellow-400 rounded-md transform -translate-x-1/2 animate-pulse" />
      </div>

      {/* About Content Section */}
      <div
        id="about-text"
        className={`my-10 flex flex-col md:flex-row gap-16 opacity-0 translate-y-8 transition-all duration-1000 ease-in-out ${
          visibleSections.aboutText ? 'opacity-100 translate-y-0' : ''
        }`}
      >
        <img
          loading="lazy"
          className="w-full md:max-w-[450px] rounded-lg shadow-lg border-4 border-yellow-300 object-cover"
          src={assets.about_img}
          alt="About ShortShopping"
          style={{ filter: visibleSections.aboutText ? 'none' : 'blur(10px)', transition: 'filter 0.8s ease-out' }}
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-700 text-lg leading-relaxed">
          <p>
            At <span className="font-semibold text-yellow-500">ShortShopping</span>, we make your online shopping fast, easy, and enjoyable. Discover quality products handpicked for style and value, all in one place.
          </p>
          <p>
            From trendy fashion to must-have gadgets, our curated collections are designed to meet your every need — with unbeatable prices and trusted service.
          </p>
          <b className="text-yellow-600 text-xl mt-4">Our Vision</b>
          <p>
            We aim to create a seamless shopping experience where convenience meets reliability. Your satisfaction drives everything we do.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
<div
        id="why-choose"
        className={`text-2xl font-semibold text-yellow-600 py-6 mb-10 text-center max-w-md mx-auto opacity-0 translate-y-8 transition-all duration-1000 ease-in-out ${
          visibleSections.whyChoose ? 'opacity-100 translate-y-0' : ''
        }`}
      >
        <Title text1="WHY" text2="CHOOSE US" />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20 gap-6 md:gap-10 justify-center">
        {[
          {
            title: 'Curated Selection',
            desc: 'Every product is carefully selected for quality and style to ensure you get the best.',
            icon: '🛍️',
          },
          {
            title: 'Fast & Easy Shopping',
            desc: 'Our simple interface and quick checkout make your shopping smooth and hassle-free.',
            icon: '⚡',
          },
          {
            title: 'Customer First',
            desc: 'Our friendly support team is always ready to help you with anything you need.',
            icon: '🤝',
          },
        ].map(({ title, desc, icon }) => (
          <div
            key={title}
            className="border border-yellow-300 px-10 md:px-16 py-10 flex flex-col gap-5 flex-1 rounded-lg shadow-md bg-yellow-50 hover:shadow-lg transition-shadow duration-300 cursor-default"
          >
            <div className="text-4xl mb-2">{icon}</div>
            <b className="text-yellow-700 text-lg">{title}</b>
            <p className="text-gray-700">{desc}</p>
          </div>
        ))}
      </div>

      {/* FAQ Accordion */}
      <div
        id="faq-section"
        className={`max-w-3xl mx-auto mb-20 opacity-0 translate-y-8 transition-all duration-1000 ease-in-out ${
          visibleSections.faq ? 'opacity-100 translate-y-0' : ''
        }`}
      >
        <h3 className="text-2xl font-semibold text-yellow-600 mb-6 text-center">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {faqData.map(({ question, answer }, idx) => (
            <div
              key={idx}
              className="border border-yellow-300 rounded-md shadow-sm bg-yellow-50"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full text-left px-6 py-4 flex justify-between items-center text-yellow-700 font-semibold focus:outline-none"
              >
                <span>{question}</span>
                <span className={`transform transition-transform duration-300 ${openFaqIndex === idx ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {openFaqIndex === idx && (
                <div className="px-6 pb-6 text-gray-700">{answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Subscription Box */}
      <div className="mb-20 max-w-xl mx-auto">
        <NewsletterBox
          buttonClass="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-md px-6 py-3 transition-colors duration-300 shadow-md hover:shadow-lg"
          inputClass="border border-yellow-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          onSubmit={handleNewsletterSubmit}
        />
        {newsletterSuccess && (
          <p className="mt-4 text-center text-green-600 font-semibold animate-pulse">
            Thank you for subscribing to our newsletter!
          </p>
        )}
      </div>

      {/* Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-yellow-500 text-white p-3 rounded-full shadow-lg hover:bg-yellow-600 transition-colors duration-300"
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </div>
  )
}

export default About
