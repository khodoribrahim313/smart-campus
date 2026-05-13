export default function EventCard({ title, date, time, location, category, description }) {
  return (
    <article className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className="bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {date} · {time}
        </span>
        {category && (
          <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">{category}</span>
        )}
      </div>
      <h3 className="text-xl font-display font-semibold text-dark mb-2">{title}</h3>
      <p className="text-sm text-slate-500 mb-3">{location}</p>
      <p className="text-base text-slate-600 leading-relaxed flex-1">{description}</p>
    </article>
  )
}
