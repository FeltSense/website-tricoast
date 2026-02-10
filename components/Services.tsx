'use client'

import { Smile, Heart, Shield, Sparkles, Users, Calendar } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Smile,
      title: 'General Dentistry',
      description: 'Comprehensive dental care including cleanings, exams, and preventive treatments to keep your smile healthy.',
      features: ['Routine Cleanings', 'Oral Exams', 'Digital X-Rays', 'Fluoride Treatments']
    },
    {
      icon: Sparkles,
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with our advanced cosmetic procedures designed to enhance your natural beauty.',
      features: ['Teeth Whitening', 'Veneers', 'Bonding', 'Smile Makeovers']
    },
    {
      icon: Shield,
      title: 'Restorative Care',
      description: 'Expert restoration services to repair damaged teeth and restore full function and appearance.',
      features: ['Crowns & Bridges', 'Dental Implants', 'Fillings', 'Root Canals']
    },
    {
      icon: Users,
      title: 'Family Dentistry',
      description: 'Comprehensive care for patients of all ages, from children to seniors, in a comfortable environment.',
      features: ['Pediatric Care', 'Senior Dental Care', 'Family Packages', 'Preventive Education']
    },
    {
      icon: Heart,
      title: 'Emergency Care',
      description: 'Same-day appointments available for dental emergencies. We\'re here when you need us most.',
      features: ['Immediate Relief', 'Same-Day Visits', 'Pain Management', 'Urgent Repairs']
    },
    {
      icon: Calendar,
      title: 'Orthodontics',
      description: 'Modern orthodontic solutions including clear aligners to straighten teeth discreetly and effectively.',
      features: ['Clear Aligners', 'Traditional Braces', 'Retainers', 'Smile Assessment']
    }
  ]

  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl sm:text-6xl font-light text-slate-900 mb-6">
            Comprehensive dental care
            <span className="block font-normal text-primary-500 mt-2">
              for every smile
            </span>
          </h2>
          <p className="text-xl text-slate-600 font-light leading-relaxed">
            From routine cleanings to advanced cosmetic procedures, our experienced team provides personalized care using the latest dental technology in a comfortable, welcoming environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-slate-700">
                    <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-3" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-12 sm:p-16 text-center">
          <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
            Not sure which service you need?
          </h3>
          <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto font-light">
            Our friendly team is here to help guide you to the right treatment. Schedule a consultation and we'll create a personalized care plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-primary-600 rounded-xl font-medium hover:shadow-xl hover:scale-105 transition-all duration-200">
              Schedule Consultation
            </button>
            <button className="px-8 py-4 bg-primary-600 text-white rounded-xl font-medium border-2 border-white hover:bg-primary-700 transition-colors duration-200">
              Call (281) 555-CARE
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}