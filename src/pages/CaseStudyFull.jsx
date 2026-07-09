import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { caseStudyContent } from '../data/caseStudyContent'
import './CaseStudyFull.css'

function renderBlock(block, i) {
  switch (block.type) {
    case 'heading':
      return <h2 key={i} className="csf__heading">{block.text}</h2>
    case 'subheading':
      return <h3 key={i} className="csf__subheading">{block.text}</h3>
    case 'text':
      return <p key={i} className="csf__text">{block.text}</p>
    case 'image':
      return (
        <figure key={i} className="csf__figure">
          <img src={block.src} alt={block.alt} className="csf__img" loading="lazy" />
        </figure>
      )
    case 'divider':
      return <hr key={i} className="csf__divider" />
    case 'closing':
      return <p key={i} className="csf__closing">{block.text}</p>
    default:
      return null
  }
}

export default function CaseStudyFull() {
  const { slug } = useParams()
  const cs = caseStudyContent.find(c => c.slug === slug)

  if (!cs) {
    return (
      <main className="csf csf--notfound">
        <p>Case study not found.</p>
        <Link to="/">- Back to home</Link>
      </main>
    )
  }

  return (
    <main className="csf">
      <div className="csf__back">
        <Link to={`/case-studies/${slug}`} className="csf__back-link">← Back to overview</Link>
      </div>

      <header className="csf__header">
        <span
          className="csf__tag"
          style={{ background: cs.tagColor, color: cs.accentColor }}
        >
          {cs.tag}
        </span>
      </header>

      <article className="csf__article">
        {cs.fullForm.map((block, i) => renderBlock(block, i))}
      </article>

      <div className="csf__footer-cta">
        <div className="csf__execution-card">
          <p className="csf__execution-label">Want to see how this gets built?</p>
          <Link
            to={`/execution/${slug}`}
            className="csf__execution-link"
            style={{ color: cs.accentColor }}
          >
            See the requirements & test design for this idea →
          </Link>
        </div>
      </div>
    </main>
  )
}
