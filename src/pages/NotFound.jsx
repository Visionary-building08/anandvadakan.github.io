import React from 'react'
import { Link } from 'react-router-dom'
import FaultyTerminal from '../components/FaultyTerminal'
import './NotFound.css'

export default function NotFound() {
  return (
    <main className="nf">
      <div className="nf__bg">
        <FaultyTerminal
          scale={1.4}
          gridMul={[2, 1]}
          digitSize={1.4}
          timeScale={0.3}
          scanlineIntensity={0.6}
          glitchAmount={1.3}
          flickerAmount={1}
          noiseAmp={0.8}
          chromaticAberration={0.8}
          curvature={0.08}
          tint="#7aa3c8"
          mouseReact={true}
          mouseStrength={0.4}
          pageLoadAnimation={true}
          brightness={0.9}
        />
      </div>

      <div className="nf__overlay" />

      <div className="nf__content">
        <p className="nf__code">404</p>
        <h1 className="nf__title">Page not found</h1>
        <p className="nf__desc">
          The page you're looking for doesn't exist or may have been moved.
        </p>
        <Link to="/" className="nf__home">
          Go back home
        </Link>
      </div>
    </main>
  )
}
