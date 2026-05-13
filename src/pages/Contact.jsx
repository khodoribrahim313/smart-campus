import HeroSection from '../components/HeroSection'
import ContactForm from '../components/ContactForm'

const importantContacts = [
  {
    dept: 'Student Affairs',
    phone: '+1 (555) 010-1001',
    email: 'studentaffairs@university.edu',
    hours: 'Mon–Fri, 9:00 AM – 5:00 PM',
  },
  {
    dept: 'IT Help Desk',
    phone: '+1 (555) 010-1002',
    email: 'ithelp@university.edu',
    hours: 'Mon–Fri, 9:00 AM – 5:00 PM',
  },
  {
    dept: 'Health Center',
    phone: '+1 (555) 010-1003',
    email: 'healthcenter@university.edu',
    hours: 'Mon–Sat, 8:00 AM – 6:00 PM',
  },
  {
    dept: 'Library Services',
    phone: '+1 (555) 010-1004',
    email: 'library@university.edu',
    hours: 'Daily, 7:00 AM – 12:00 AM',
  },
  {
    dept: 'Campus Security',
    phone: 'Ext. 1234 / +1 (555) 010-9110',
    email: 'security@university.edu',
    hours: '24/7',
  },
  {
    dept: 'Career Services',
    phone: '+1 (555) 010-1006',
    email: 'careers@university.edu',
    hours: 'Mon–Fri, 10:00 AM – 4:00 PM',
  },
]

export default function Contact() {
  return (
    <>
      <HeroSection
        compact
        title="Contact & About"
        subtitle="Get help, report an issue, or just learn more about Smart Campus Helper."
      />

      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-dark mb-4">About this project</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Smart Campus Helper is a frontend-only demo built for a university web development course. It brings
                together study spots, services, events, and FAQs in one responsive experience — no backend required.
              </p>
              <p className="text-slate-600 leading-relaxed">
                It is designed for students who want a quick, trustworthy overview of campus resources before they head
                out the door.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
              <h3 className="font-display font-semibold text-dark text-lg mb-4">Built with</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {['React', 'Vite', 'Tailwind CSS', 'React Router'].map((tech) => (
                  <span key={tech} className="bg-primary-50 text-primary-600 text-xs font-semibold px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-sm text-slate-600 mb-3">Source code (placeholder):</p>
              <a
                href="https://github.com/khodoribrahim313/smart-campus.git"
                className="text-primary-600 font-medium hover:text-primary-700 underline-offset-2 hover:underline transition-colors duration-200"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/khodoribrahim313/smart-campus.git
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24 bg-surface">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
            <h2 className="text-2xl font-display font-semibold text-dark mb-6 text-center">Send us a message</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-dark text-center mb-10">
            Important Campus Contacts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {importantContacts.map((c) => (
              <article
                key={c.dept}
                className="bg-surface rounded-2xl border border-slate-100 p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <h3 className="font-display font-semibold text-dark text-lg mb-3">{c.dept}</h3>
                <p className="text-sm text-slate-600 mb-1">
                  <span className="font-medium text-slate-800">Phone:</span> {c.phone}
                </p>
                <p className="text-sm text-slate-600 mb-1">
                  <span className="font-medium text-slate-800">Email:</span>{' '}
                  <a href={`mailto:${c.email}`} className="text-primary-600 hover:underline">
                    {c.email}
                  </a>
                </p>
                <p className="text-sm text-slate-600">
                  <span className="font-medium text-slate-800">Hours:</span> {c.hours}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-100 rounded-2xl flex items-center justify-center h-64 text-slate-500 text-center px-6">
            <p className="text-lg font-medium">🗺️ Campus Map Coming Soon</p>
          </div>
        </div>
      </section>
    </>
  )
}
