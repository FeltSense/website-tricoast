'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)
    setError(false)

    try {
      const response = await fetch('/api/form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formId: 'contact',
          formData: {
            name: name,
            email: email,
            message: message
          },
          userAgent: navigator.userAgent
        })
      })

      const result = await response.json()

      if (response.ok && result.success === true) {
        setSuccess(true)
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setError(true)
      }
    } catch (err) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 font-light">
            We're here to answer your questions and schedule your visit. Reach out to our friendly team today.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  disabled={loading}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tell us about your dental needs or questions..."
                />
              </div>

              {success && (
                <div className="p-4 bg-secondary-50 border border-secondary-200 rounded-lg">
                  <p className="text-secondary-700 font-medium">
                    Thank you! We'll be in touch soon.
                  </p>
                </div>
              )}

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700 font-medium">
                    Unable to send message. Please try again.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-medium text-gray-900 mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Phone</p>
                    <a href="tel:+1234567890" className="text-gray-900 hover:text-primary-600 transition-colors">
                      (123) 456-7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Email</p>
                    <a href="mailto:hello@tricoastdental.com" className="text-gray-900 hover:text-primary-600 transition-colors break-all">
                      hello@tricoastdental.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Location</p>
                    <p className="text-gray-900">
                      123 Main Street<br />
                      Houston, TX 77001
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-accent-50 p-6 rounded-xl border border-accent-200">
              <p className="text-sm text-gray-700 font-light leading-relaxed">
                <span className="font-semibold text-gray-900">Office Hours:</span><br />
                Monday - Friday: 8am - 6pm<br />
                Saturday: 9am - 2pm<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}