'use client'

import { useEffect, useRef, useState } from 'react'

function VeraIconGlow() {
  return (
    <svg viewBox="0 0 64 64" width="24" height="24" aria-hidden="true">
      <rect x="3" y="3" width="58" height="58" rx="16" fill="#000" />
      <path d="M19 23L32 45L45 23" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="49" cy="15" r="4.5" fill="#8FA6F0" />
    </svg>
  )
}

export default function AskPlatformsMock() {
  const [s, setS] = useState<0 | 1>(0)
  const userRef = useRef(false)
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const io = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          io.disconnect()
          setTimeout(() => {
            if (!userRef.current) setS(1)
          }, reduced ? 0 : 2200)
        }
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  function handleClick(next: 0 | 1) {
    userRef.current = true
    setS(next)
  }

  return (
    <div className="mtq" data-s={s} ref={wrapRef}>
      <div className="mtqh">
        <span className="mono">Monday &middot; 09:30 &middot; Weekly marketing review</span>
        <b>&ldquo;How many conversions did we get last month?&rdquo;</b>
      </div>

      <div className="mtqg">
        <div className="mtsrc">
          <div className="mts src-m">
            <span className="mono">Meta Ads says</span>
            <b>412</b>
          </div>
          <div className="mts src-g">
            <span className="mono">Google Ads says</span>
            <b>288</b>
          </div>
          <div className="mts src-ga">
            <span className="mono">GA4 recorded</span>
            <b>540</b>
          </div>
        </div>

        <div className="mtv">
          <div className="mtbar">
            <div className="mtbl"><span className="mono">Claimed by ad platforms</span><b>700</b></div>
            <div className="mtbt">
              <i className="seg-m" style={{ width: '58.9%' }} />
              <i className="seg-g" style={{ width: '41.1%' }} />
            </div>
          </div>
          <div className="mtbar">
            <div className="mtbl"><span className="mono">Recorded by GA4</span><b>540</b></div>
            <div className="mtbt">
              <i className="seg-ga" style={{ width: '77.1%' }} />
              <i className="ov" style={{ width: '22.9%' }}><span>160</span></i>
            </div>
          </div>
          <div className="mtvn">
            <VeraIconGlow />
            <p>
              <b>~23% overlap.</b> Roughly 160 of the 700 conversions Meta and
              Google claim are the same customers counted twice. Most of it is
              Meta view-through on people who later clicked a Google Search ad.
            </p>
          </div>
        </div>
      </div>

      <div className="mtqf">
        <div className="agtg" role="tablist">
          <button type="button" className={s === 0 ? 'on' : ''} onClick={() => handleClick(0)}>
            Ask the platforms
          </button>
          <button type="button" className={s === 1 ? 'on' : ''} onClick={() => handleClick(1)}>
            Ask Verabix
          </button>
        </div>
        <span className="mono">{s === 1 ? 'One answer — and why' : 'Three answers'}</span>
      </div>
    </div>
  )
}
