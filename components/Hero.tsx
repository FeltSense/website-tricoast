'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ChevronRight } from 'lucide-react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-neutral-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-hero-1770694710394.png"
          alt="Modern dental office with comfortable patient environment"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-neutral-900 opacity-70" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32 sm:px-8 lg:px-12">
        <div className="max-w-4xl">
          {/* Trust Badge */}
          <div
            className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-accent-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white text-sm font-light">4.9 Patient Rating</span>
          </div>

          {/* Main Headline */}
          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl font-light text-white leading-tight mb-6 transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Quality Dental Care for{' '}
            <span className="font-semibold text-primary-300">Houston Families</span>
          </h1>

          {/* Subheadline */}
          <p
            className={`text-xl sm:text-2xl text-neutral-200 font-light leading-relaxed mb-12 max-w-2xl transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Experience modern dentistry with a personal touch. Your comfort and confidence are
            our priorities.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Link
              href="tel:+18323655135"
              className="group inline-flex items-center justify-center gap-3 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200 hover:scale-105 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now: (832) 365-5135</span>
            </Link>

            <Link
              href="#features"
              className="group inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-light text-lg transition-all duration-200"
            >
              <span>Learn More</span>
              <ChevronRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Trust Indicators */}
          <div
            className={`mt-16 pt-12 border-t border-white/20 flex flex-wrap gap-8 sm:gap-12 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div>
              <div className="text-3xl font-semibold text-white mb-1">15+</div>
              <div className="text-sm font-light text-neutral-300">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-white mb-1">5,000+</div>
              <div className="text-sm font-light text-neutral-300">Happy Patients</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-white mb-1">100%</div>
              <div className="text-sm font-light text-neutral-300">Patient Focused</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}