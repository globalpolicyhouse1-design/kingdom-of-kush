import React from 'react'
import { services } from '../data/data'

export default function Egov(){
  return (
    <main>
      {/* Header */}
      <section className="py-4xl md:py-5xl px-container bg-gradient-to-b from-primary/10 to-offwhite">
        <div className="max-w-container mx-auto space-y-md">
          <h1 className="text-headline text-primary">E-Government Services</h1>
          <p className="text-body-lg text-primary/70 max-w-3xl">
            Secure digital portals connecting visitors and residents to essential services. Access visas, authentication, documents, and civil services across the Sudan–Egypt corridor.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-section px-container">
        <div className="max-w-container mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2xl mb-3xl">
            {services.map((s, idx) => (
              <div 
                key={s.id}
                className="p-2xl rounded-minimal border border-gold/20 bg-offwhite rounded-card hover:border-gold/50 hover:shadow-luxury transition-all duration-300 space-y-lg animate-fade-in-up text-center"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="text-6xl">{s.icon}</div>
                <h3 className="text-body-lg font-semibold text-primary">{s.name}</h3>
                <p className="text-body-md text-primary/70">{s.desc}</p>
                <a 
                  href="#" 
                  className="inline-block text-gold text-body-sm font-semibold hover:text-gold/80 transition-colors"
                >
                  Open Portal →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-section px-container bg-primary/5 border-y border-gold/10">
        <div className="max-w-container mx-auto">
          <h2 className="text-subheading mb-3xl text-primary">Why Use Our Platform?</h2>
          <div className="grid md:grid-cols-2 gap-3xl">
            <div className="space-y-lg animate-slide-in-left">
              <h3 className="text-body-lg font-semibold text-primary">🔒 Security First</h3>
              <p className="text-body-md text-primary/70">
                Bank-level encryption and two-factor authentication protect your personal documents and information.
              </p>
            </div>
            <div className="space-y-lg animate-slide-in-right">
              <h3 className="text-body-lg font-semibold text-primary">⚡ Instant Processing</h3>
              <p className="text-body-md text-primary/70">
                Most documents are processed and issued within 24–48 hours for standard applications.
              </p>
            </div>
            <div className="space-y-lg animate-slide-in-left" style={{ animationDelay: '100ms' }}>
              <h3 className="text-body-lg font-semibold text-primary">🌍 Cross-Border Support</h3>
              <p className="text-body-md text-primary/70">
                Seamless services across Sudan and Egypt with unified documentation standards.
              </p>
            </div>
            <div className="space-y-lg animate-slide-in-right" style={{ animationDelay: '100ms' }}>
              <h3 className="text-body-lg font-semibold text-primary">📱 24/7 Access</h3>
              <p className="text-body-md text-primary/70">
                Apply anytime, anywhere. Track your application status in real-time from any device.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-section px-container">
        <div className="max-w-container mx-auto max-w-2xl">
          <h2 className="text-subheading mb-3xl text-primary">Service Details</h2>
          <div className="space-y-2xl">
            {[
              {
                title: 'Visa & Entry Services',
                desc: 'Cultural tourism visas, business travel permits, and entry documentation.',
                docs: ['Passport', 'Proof of residency', 'Invitation letter']
              },
              {
                title: 'Document Authentication',
                desc: 'Notarize and authenticate documents for legal recognition across borders.',
                docs: ['Original document', 'Identification', 'Application form']
              },
              {
                title: 'Civil Services',
                desc: 'Birth certificates, marriage licenses, identity documents, and registrations.',
                docs: ['Primary ID', 'Supporting documents', 'Completed forms']
              }
            ].map((service, idx) => (
              <div key={service.title} className="p-2xl rounded-minimal border border-gold/20 bg-offwhite rounded-card space-y-lg animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                  <h3 className="text-body-lg font-semibold text-primary">{service.title}</h3>
                  <p className="text-body-md text-primary/70">{service.desc}</p>
                  <div>
                    <p className="text-label font-semibold text-primary mb-md">Required Documents:</p>
                    <ul className="space-y-sm text-body-sm text-primary/70">
                      {service.docs.map(doc => (
                        <li key={doc} className="flex gap-md">
                          <span className="text-gold">✓</span>
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section px-container bg-primary text-offwhite">
        <div className="max-w-container mx-auto text-center space-y-lg">
          <h2 className="text-headline text-offwhite">Get Started Today</h2>
          <p className="text-body-lg max-w-2xl mx-auto">
            Access our secure portal and apply for services instantly.
          </p>
          <button className="btn-primary mx-auto">
            Access E-Government Portal
          </button>
        </div>
      </section>
    </main>
  )
}
