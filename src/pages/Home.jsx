import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import ServiceCard from '../components/ServiceCard'
import EventCard from '../components/EventCard'
import FAQItem from '../components/FAQItem'
import { services } from '../data/services'
import { events } from '../data/events'
import { faqs } from '../data/faqs'

const previewServices = services.slice(0, 4)
const previewEvents = events.slice(0, 3)
const previewFaqs = faqs.slice(0, 4)

export default function Home() {
  return (
    <>
      <HeroSection
        title="Your Campus, Smarter."
        subtitle="Find study spots, services, events, and contacts — all in one place."
        ctaText="Explore Services"
        ctaLink="/services"
        secondaryText="Find Study Spots"
        secondaryLink="/study-spots"
      />

      <section className="bg-primary-500 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold">12+</p>
              <p className="mt-1 text-primary-100 font-medium">Study Spots</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold">20+</p>
              <p className="mt-1 text-primary-100 font-medium">Campus Services</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold">Weekly</p>
              <p className="mt-1 text-primary-100 font-medium">Events</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-dark text-center mb-10 md:mb-12">
            What Can We Help With?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {previewServices.map((s) => (
              <ServiceCard key={s.id} icon={s.icon} title={s.title} description={s.description} tag={s.tag} />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              to="/services"
              className="inline-flex w-full sm:w-auto items-center justify-center border-2 border-primary-500 text-primary-500 hover:bg-primary-50 font-medium px-6 py-3 rounded-xl transition-colors duration-200"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-dark text-center mb-10 md:mb-12">
            Upcoming Campus Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewEvents.map((ev) => (
              <EventCard key={ev.id} {...ev} />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              to="/services#events"
              className="inline-flex w-full sm:w-auto items-center justify-center bg-primary-500 hover:bg-primary-600 text-white font-medium px-6 py-3 rounded-xl transition-colors duration-200"
            >
              See All Events
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-dark text-center mb-8">
            Common Questions
          </h2>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 px-4 sm:px-6">
            {previewFaqs.map((f) => (
              <FAQItem key={f.id} question={f.question} answer={f.answer} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-primary-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">Need Help Navigating Campus?</h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            Reach out anytime — we&apos;re here to point you in the right direction.
          </p>
          <Link
            to="/contact"
            className="inline-flex w-full sm:w-auto items-center justify-center bg-white text-primary-600 hover:bg-primary-50 font-medium px-6 py-3 rounded-xl transition-colors duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
