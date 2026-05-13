import { Link } from 'react-router-dom'

export default function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryText,
  secondaryLink,
  compact = false,
}) {
  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-br from-primary-50 to-white ${
        compact ? 'py-12 md:py-16' : 'py-16 md:py-24'
      }`}
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary-100 opacity-40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-primary-100 opacity-40 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1
            className={`font-display font-bold text-dark animate-fade-in-up ${
              compact
                ? 'text-3xl sm:text-4xl md:text-5xl'
                : 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl'
            }`}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 md:mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
          {(ctaText && ctaLink) || (secondaryText && secondaryLink) ? (
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              {ctaText && ctaLink && (
                <Link
                  to={ctaLink}
                  className="inline-flex w-full sm:w-auto items-center justify-center bg-primary-500 hover:bg-primary-600 text-white font-medium px-6 py-3 rounded-xl transition-colors duration-200"
                >
                  {ctaText}
                </Link>
              )}
              {secondaryText && secondaryLink && (
                <Link
                  to={secondaryLink}
                  className="inline-flex w-full sm:w-auto items-center justify-center border-2 border-primary-500 text-primary-500 hover:bg-primary-50 font-medium px-6 py-3 rounded-xl transition-colors duration-200"
                >
                  {secondaryText}
                </Link>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
