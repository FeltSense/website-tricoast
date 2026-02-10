'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "Dr. Chen and the entire team at Tricoast Dental made my family feel so comfortable. My daughter was nervous about her first visit, but they were incredibly patient and gentle. We finally found a dental home we trust!",
      author: "Sarah Martinez",
      role: "Parent of Two",
      image: "/images/testimonial-testimonials-0-1770694700390.jpg",
      rating: 5
    },
    {
      id: 2,
      quote: "I've been putting off dental work for years due to anxiety, but Tricoast Dental changed everything. The staff is compassionate, the technology is modern, and they truly care about patient comfort. Highly recommend!",
      author: "Michael Thompson",
      role: "Long-time Patient",
      image: "/images/testimonial-testimonials-1-1770694700704.jpg",
      rating: 5
    },
    {
      id: 3,
      quote: "From routine cleanings to cosmetic work, Tricoast Dental delivers exceptional care. They take time to explain everything, never rush appointments, and the results speak for themselves. Worth every visit!",
      author: "Jennifer Lee",
      role: "Houston Resident",
      image: "/images/testimonial-testimonials-2-1770694700973.jpg",
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-4">
            What Our <span className="font-semibold text-primary-500">Patients</span> Say
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
            Real stories from families we've had the privilege to serve
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards',
                opacity: 0
              }}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent-500 text-accent-500"
                  />
                ))}
              </div>

              <blockquote className="text-slate-700 leading-relaxed mb-8 flex-grow font-light">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-primary-500/10">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-slate-500 font-light">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-primary-50 px-6 py-3 rounded-full">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-primary-500 text-primary-500"
                />
              ))}
            </div>
            <span className="text-slate-900 font-semibold">4.9/5</span>
            <span className="text-slate-600 font-light">from 500+ reviews</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}