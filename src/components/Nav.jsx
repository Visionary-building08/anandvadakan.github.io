import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import GooeyNav from './GooeyNav'
import './Nav.css'

const NAV_ITEMS = [
  { label: 'Home',    href: '/',        path: '/'        },
  { label: 'Works',   href: '/works',   path: '/works'   },
  { label: 'Contact', href: '/contact', path: '/contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const activeIndex = NAV_ITEMS.findIndex(item =>
    item.path === '/'
      ? location.pathname === '/'
      : location.pathname.startsWith(item.path)
  )

  const gooeyItems = NAV_ITEMS.map(item => ({
    label: item.label,
    href: item.href,
    onClick: () => navigate(item.href),
  }))

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <a href="/" onClick={e => { e.preventDefault(); navigate('/') }} className="nav__brand">
        Anand V
      </a>
      <GooeyNav
        items={gooeyItems}
        initialActiveIndex={activeIndex === -1 ? 0 : activeIndex}
        particleCount={12}
        particleDistances={[80, 8]}
        particleR={80}
        animationTime={500}
        timeVariance={250}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
      />
    </header>
  )
}
