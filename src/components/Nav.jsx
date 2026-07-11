import React from 'react'
import { useNavigate } from 'react-router-dom'
import CardNav from './CardNav'

export default function Nav() {
  const navigate = useNavigate()

  const items = [
    {
      label: 'Home',
      bgColor: '#1c1814',
      textColor: '#f0ece6',
      links: [
        { label: 'About me', ariaLabel: 'Go to homepage', onClick: () => navigate('/') },
        { label: 'Hero', ariaLabel: 'Go to top', onClick: () => { navigate('/'); window.scrollTo(0, 0) } },
      ],
    },
    {
      label: 'Case Studies',
      bgColor: '#231e18',
      textColor: '#f0ece6',
      links: [
        { label: 'Cancellations Revenue', ariaLabel: 'FlexCancel case study', onClick: () => navigate('/case-studies/flexcancel-revenue-system') },
        { label: 'Delay Accountability', ariaLabel: 'Hotdrop case study', onClick: () => navigate('/case-studies/hotdrop-recovery') },
      ],
    },
    {
      label: 'Execution',
      bgColor: '#2a1f14',
      textColor: '#f0ece6',
      links: [
        { label: 'FlexCancel BRD/FRD', ariaLabel: 'FlexCancel execution docs', onClick: () => navigate('/execution/flexcancel-revenue-system') },
        { label: 'Delay BRD/FRD', ariaLabel: 'Delay accountability execution docs', onClick: () => navigate('/execution/hotdrop-recovery') },
      ],
    },
  ]

  return (
    <CardNav
      items={items}
      baseColor="#18160f"
      brandColor="#f0ece6"
      menuColor="#f0ece6"
      buttonBgColor="#f97316"
      buttonTextColor="#fff"
      brandLabel="Anand V"
      ctaLabel="Contact"
      onCtaClick={() => navigate('/contact')}
      ease="elastic.out(1, 0.8)"
    />
  )
}
