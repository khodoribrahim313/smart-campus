export default function ServiceCard({ icon, title, description, tag }) {
  return (
    <article className="group bg-white rounded-2xl shadow-sm border border-slate-100 p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-start justify-between gap-3 mb-4">
        <span className="text-3xl" aria-hidden>
          {icon}
        </span>
        {tag && <span className="bg-primary-50 text-primary-600 text-xs font-semibold px-3 py-1 rounded-full shrink-0">{tag}</span>}
      </div>
      <h3 className="text-xl font-display font-semibold text-dark mb-2">{title}</h3>
      <p className="text-base text-slate-600 leading-relaxed">{description}</p>
    </article>
  )
}
