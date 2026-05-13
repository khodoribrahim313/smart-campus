export default function SearchBar({ placeholder, value, onChange }) {
  return (
    <div className="relative w-full">
      <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-slate-400">
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </span>
      <input
        type="search"
        className="w-full rounded-full border border-slate-200 pl-12 pr-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary-300 transition-shadow duration-200 bg-white text-slate-800 placeholder:text-slate-400"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={placeholder || 'Search'}
      />
    </div>
  )
}
