'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Award, Heart, Users, Clock } from 'lucide-react'

export default function About() {
  const [imageLoaded, setImageLoaded] = useState(false)

  const stats = [
    { icon: Award, value: '4.9', label: 'Star Rating', suffix: '/5' },
    { icon: Users, value: '15K+', label: 'Happy Patients', suffix: '' },
    { icon: Clock, value: '20+', label: 'Years Experience', suffix: '' },
    { icon: Heart, value: '100%', label: 'Patient-Focused', suffix: '' },
  ]

  const values = [
    {
      title: 'Patient Comfort First',
      description: 'We create a welcoming environment where every patient feels heard, respected, and cared for.',
    },
    {
      title: 'Modern Technology',
      description: 'State-of-the-art equipment and techniques ensure precise, efficient, and comfortable treatment.',
    },
    {
      title: 'Family-Centered Care',
      description: 'From children to grandparents, we provide comprehensive dental care for your whole family.',
    },
  ]

  return (
    <section id="about" className="relative bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src="/images/about-background-1770694710540.png"
                alt="Tricoast Dental team providing quality care to Houston families"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={`object-cover transition-opacity duration-700 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 h-48 w-48 rounded-2xl bg-primary-500/10 -z-10" />
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <div className="inline-block rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 mb-6">
              About Us
            </div>
            
            <h2 className="text-4xl font-light text-slate-900 mb-6 lg:text-5xl">
              Your trusted partner in{' '}
              <span className="font-semibold text-primary-600">dental health</span>
            </h2>

            <div className="space-y-4 text-lg text-slate-600 leading-relaxed mb-10">
              <p>
                At Tricoast Dental, we believe exceptional dental care starts with understanding and trust. 
                For over two decades, we've been proud to serve Houston families with comprehensive dental 
                services delivered in a warm, welcoming environment.
              </p>
              <p>
                Our commitment goes beyond healthy smiles. We invest in the latest technology and continuing 
                education to provide treatments that are comfortable, efficient, and tailored to your unique needs. 
                Whether you're visiting us for a routine cleaning or a complete smile transformation, you'll 
                experience the same dedication to excellence and patient comfort that has earned us a 4.9-star rating.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-6 mb-12">
              {values.map((value, index) => (
                <div key={index} className="border-l-2 border-primary-500 pl-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-slate-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 mt-20 lg:mt-32">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="relative rounded-xl bg-slate-50 p-8 text-center transition-all duration-300 hover:bg-primary-50 hover:shadow-md"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-semibold text-slate-900 mb-1">
                  {stat.value}
                  <span className="text-xl text-slate-500">{stat.suffix}</span>
                </div>
                <div className="text-sm font-medium text-slate-600">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}