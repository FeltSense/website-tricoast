'use client'

import { Award, Users, Heart, Sparkles, MapPin, Star } from 'lucide-react'
import Image from 'next/image'

export default function Features() {
  const features = [
    {
      icon: Users,
      title: 'Experienced Professionals',
      description: 'Our skilled dental team brings years of expertise serving Houston families with compassionate, personalized care.',
    },
    {
      icon: Sparkles,
      title: 'Comprehensive Services',
      description: 'From routine cleanings to advanced cosmetic procedures, we offer complete dental care under one roof.',
    },
    {
      icon: Star,
      title: '4.9-Star Rating',
      description: '402 satisfied patients trust us with their smiles. Join our family of happy, healthy patients.',
    },
    {
      icon: Heart,
      title: 'Patient-Focused Care',
      description: 'Modern facility designed for your comfort, with a warm atmosphere that puts even anxious patients at ease.',
    },
    {
      icon: MapPin,
      title: 'Convenient Location',
      description: 'Easily accessible Houston location with ample parking and flexible scheduling to fit your busy life.',
    },
    {
      icon: Award,
      title: 'Modern Dentistry',
      description: 'State-of-the-art technology and techniques ensure efficient, comfortable treatment with exceptional results.',
    },
  ]

  return (
    <section id="features" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">
            Why Choose <span className="font-semibold text-primary-500">Tricoast Dental</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Experience the difference of patient-centered dental care backed by expertise, technology, and genuine compassion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group p-8 rounded-lg border border-gray-100 bg-white hover:shadow-md hover:border-primary-200 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors">
                  <Icon className="w-6 h-6 text-primary-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/services-feature-1770694709586.png"
            alt="Modern dental treatment room at Tricoast Dental showing our commitment to patient comfort and advanced care"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
            <p className="text-white text-xl lg:text-2xl font-light max-w-2xl">
              Our state-of-the-art facility combines cutting-edge technology with a warm, welcoming environment designed for your comfort.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}