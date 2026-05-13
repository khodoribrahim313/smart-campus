import { useMemo, useState } from 'react'
import HeroSection from '../components/HeroSection'
import SearchBar from '../components/SearchBar'
import ServiceCard from '../components/ServiceCard'
import EventCard from '../components/EventCard'
import { services } from '../data/services'
import { events } from '../data/events'

const filters = ['All', 'Academic', 'Health', 'Transport', 'Tech', 'Food']

export default function Services() {
  const [query, setQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredServices = useMemo(() => {
    const q = query.trim().toLowerCase()
    return services.filter((s) => {
      const matchesCategory = activeFilter === 'All' || s.category === activeFilter
      const matchesSearch = !q || s.title.toLowerCase().includes(q)
      return matchesCategory && matchesSearch
    })
  }, [query, activeFilter])

  return (
    <>
      <HeroSection
        compact
        title="Campus Services & Events"
        subtitle="Everything your university offers, organized for you."
      />

      <section className="py-12 md:py-16 bg-surface border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <SearchBar placeholder="Search services by name…" value={query} onChange={setQuery} />
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeFilter === f
                    ? 'bg-primary-500 text-white'
                    : 'border-2 border-primary-500 text-primary-500 hover:bg-primary-50'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-dark mb-8">All Services</h2>
          {filteredServices.length === 0 ? (
            <p className="text-slate-600">No services match your search. Try a different keyword or filter.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((s) => (
                <ServiceCard key={s.id} icon={s.icon} title={s.title} description={s.description} tag={s.tag} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="events" className="py-16 md:py-24 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-dark mb-8">Campus Events This Month</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((ev) => (
              <EventCard key={ev.id} {...ev} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
