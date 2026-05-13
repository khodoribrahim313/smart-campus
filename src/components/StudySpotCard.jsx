export default function StudySpotCard({ name, location, type, hours, features, available }) {
  return (
    <article className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
        <h3 className="text-xl font-display font-semibold text-dark pr-2">{name}</h3>
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full shrink-0 ${
            available ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-600'
          }`}
        >
          {available ? 'Open Now' : 'Closed'}
        </span>
      </div>
      <p className="inline-block bg-primary-50 text-primary-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
        {location}
      </p>
      <p className="text-sm text-slate-500 mb-1">
        <span className="font-medium text-slate-700">Type:</span> {type}
      </p>
      <p className="text-sm text-slate-500 mb-4">
        <span className="font-medium text-slate-700">Hours:</span> {hours}
      </p>
      <div className="flex flex-wrap gap-2">
        {features?.map((f) => (
          <span key={f} className="text-xs font-medium text-slate-600 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-full">
            {f}
          </span>
        ))}
      </div>
    </article>
  )
}
