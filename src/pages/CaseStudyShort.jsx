import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { caseStudyContent } from '../data/caseStudyContent'
import './CaseStudyShort.css'

export default function CaseStudyShort() {
  const { slug } = useParams()
  const cs = caseStudyContent.find(c => c.slug === slug)

  if (!cs) {
    return (
      <main className="cs-short cs-short--notfound">
        <p>Case study not found.</p>
        <Link to="/">- Back to home</Link>
      </main>
    )
  }

  return (
    <main className="cs-short">
      <div className="cs-short__back">
        <Link to="/" className="cs-short__back-link">← Home</Link>
      </div>

      <header className="cs-short__header">
        <span
          className="cs-short__tag"
          style={{ background: cs.tagColor, color: cs.accentColor }}
        >
          {cs.tag}
        </span>
        <h1 className="cs-short__title">{cs.title}</h1>
        <p className="cs-short__hook">{cs.hook}</p>
      </header>

      <div className="cs-short__body">
        {cs.shortForm.split('\n\n').map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <div className="cs-short__actions">
        <Link
          to={`/case-studies/${slug}/full`}
          className="cs-short__cta-primary"
          style={{ borderColor: cs.accentColor, color: cs.accentColor }}
        >
          Read the full breakdown →
        </Link>
      </div>

      <div className="cs-short__execution-cta">
        <div className="cs-short__execution-card">
          <p className="cs-short__execution-label">Want to see how this gets built?</p>
          <Link
            to={`/execution/${slug}`}
            className="cs-short__execution-link"
            style={{ color: cs.accentColor }}
          >
            See the requirements & test design for this idea →
          </Link>
        </div>
      </div>
    </main>
  )
}
