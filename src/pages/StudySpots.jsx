import { useMemo, useState } from 'react'
import HeroSection from '../components/HeroSection'
import StudySpotCard from '../components/StudySpotCard'
import { studySpots } from '../data/studySpots'

const tabs = ['All', 'Library', 'Café', 'Outdoor', 'Lab']

const tips = [
  { icon: '📅', title: 'Book ahead', text: 'Book a room in advance when exam season hits.' },
  { icon: '🕐', title: 'Check hours online', text: 'Check lab hours online before you head across campus.' },
  { icon: '🪪', title: 'Bring your ID', text: 'Bring your student ID for after-hours library access.' },
]

export default function StudySpots() {
  const [tab, setTab] = useState('All')

  const filtered = useMemo(() => {
    if (tab === 'All') return studySpots
    return studySpots.filter((s) => s.type === tab)
  }, [tab])

  return (
    <>
      <HeroSection
        compact
        title="Find Your Perfect Study Spot"
        subtitle="Browse quiet zones, collaborative spaces, and 24/7 libraries."
      />

      <section className="py-12 md:py-16 bg-surface border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  tab === t
                    ? 'bg-primary-500 text-white'
                    : 'border-2 border-primary-500 text-primary-500 hover:bg-primary-50'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((spot) => (
              <StudySpotCard key={spot.id} {...spot} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-dark text-center mb-10">
            Study Better on Campus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tips.map((tip) => (
              <div
                key={tip.title}
                className="bg-primary-50 border border-primary-100 rounded-2xl p-5 hover:shadow-sm transition-shadow duration-300"
              >
                <span className="text-2xl" aria-hidden>
                  {tip.icon}
                </span>
                <h3 className="mt-3 font-display font-semibold text-dark">{tip.title}</h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
