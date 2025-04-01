'use client'
import Image from 'next/image'
import { FC, FormEvent, useState } from 'react'

const ContactPage: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    addressState: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Handle form submission here (e.g., call an API endpoint)
    console.log('Form Data:', formData)
    alert('Form submitted! We will get back to you shortly.')
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <nav className="text-sm mb-4 text-gray-500">
        Home &gt; Contact Hoist Hydraulics Victoria
      </nav>

      <h1 className="text-3xl font-bold mb-6">Contact Hoist Hydraulics Victoria</h1>

      <div className="mb-8">

      </div>

      {/* Intro / Description */}
      <p className="mb-6 leading-relaxed">
        If you have any questions or require any quotations or product info, 
        feel free to contact us using the methods available below. Otherwise, 
        fill in the contact form and we will get back to you as soon as possible.
      </p>

      {/* Contact Information */}
      <div className="mb-8 space-y-1 text-gray-700">
        <p><strong>Address:</strong> 874 Mountain Highway, Bayswater, Victoria</p>
        <p><strong>Phone:</strong> (03) 9728 1888</p>
        <p><strong>Fax:</strong> (03) (03) 9728 8889</p>
        <p><strong>Email:</strong> Sales@hoist.net</p>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">
            Your Name (required)
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 font-medium">
            Your Email (required)
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block mb-1 font-medium">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label htmlFor="addressState" className="block mb-1 font-medium">
            Address / State
          </label>
          <input
            type="text"
            id="addressState"
            name="addressState"
            value={formData.addressState}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block mb-1 font-medium">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 font-medium">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Placeholder for Google reCAPTCHA (customize or integrate as needed) */}
        <div className="my-4">
          <div className="border border-gray-300 p-4 text-center text-gray-500 rounded-md">
            [ reCAPTCHA placeholder ]
          </div>
        </div>

        <button
          type="submit"
          className="px-6 py-2 rounded-md bg-primary text-white hover:bg-primary-active focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Send
        </button>
      </form>
    </main>
  )
}

export default ContactPage
