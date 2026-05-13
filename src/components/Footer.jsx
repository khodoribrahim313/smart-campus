import { Link } from 'react-router-dom'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/study-spots', label: 'Study Spots' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-dark text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
          <div>
            <h3 className="font-display font-semibold text-white text-lg mb-3">About</h3>
            <p className="text-sm leading-relaxed">
              Smart Campus Helper helps students discover study spaces, services, events, and contacts — a
              friendly companion for everyday campus life.
            </p>
          </div>
          <div>
            <h3 className="font-display font-semibold text-white text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="hover:text-white transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display font-semibold text-white text-lg mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>hello@smartcampus.edu</li>
              <li>+1 (555) 010-2030</li>
              <li>Mon–Fri, 9:00 AM – 5:00 PM</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-slate-700 text-center text-sm">
          © {new Date().getFullYear()} Smart Campus Helper. Made for learning purposes.
        </div>
      </div>
    </footer>
  )
}
