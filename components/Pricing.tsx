'use client'

import { useState } from 'react'
import { Check, Sparkles } from 'lucide-react'

export default function Pricing() {
  const [isLoading, setIsLoading] = useState(false)

  const handlePreOrder = async () => {
    setIsLoading(true)
    try {
      const priceId = process.env.NEXT_PUBLIC_STRIPE_PRICE_ID
      if (!priceId) {
        alert('Stripe not configured. Please contact support.')
        setIsLoading(false)
        return
      }

      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId })
      })

      const { url, error } = await response.json()
      
      if (error) {
        alert('Payment system error. Please try again.')
        console.error(error)
        setIsLoading(false)
        return
      }

      if (url) {
        window.location.href = url
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Unable to process. Please try again.')
      setIsLoading(false)
    }
  }

  const benefits = [
    'Priority scheduling for new patients',
    'Comprehensive dental examination',
    'Digital X-rays and diagnostics',
    'Personalized treatment plan',
    'Exclusive member benefits and discounts'
  ]

  return (
    <section id="pricing" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Reserve Your Spot
          </h2>
          <p className="text-lg text-gray-600 font-light">
            Join our growing family of satisfied patients and experience dental care that puts your comfort first
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="relative bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 lg:p-12 shadow-sm border border-primary-100">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-2 bg-accent-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-md">
                <Sparkles className="w-4 h-4" />
                <span>Founding Patient Offer</span>
              </div>
            </div>

            <div className="text-center mb-8 pt-4">
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-6xl font-light text-gray-900">$29</span>
              </div>
              <p className="text-gray-600 font-light">One-time new patient special</p>
            </div>

            <div className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-light">{benefit}</span>
                </div>
              ))}
            </div>

            <button
              onClick={handlePreOrder}
              disabled={isLoading}
              className="block w-full py-4 px-6 bg-primary-500 hover:bg-primary-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium rounded-full text-center transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-[1.02]"
            >
              {isLoading ? 'Processing...' : 'Reserve Your Appointment'}
            </button>

            <div className="mt-6 text-center space-y-2">
              <p className="text-sm text-gray-600 font-light">
                Join 500+ Houston families who trust us with their smiles
              </p>
              <p className="text-xs text-gray-500 font-light">
                Secure payment powered by Stripe
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 font-light max-w-md mx-auto">
              Limited availability. This special offer is available for new patients only and includes a comprehensive examination, digital X-rays, and personalized consultation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}