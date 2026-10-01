'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

const ROWS_INIT: string[][] = [
  ['Autumn Sale — Copenhagen', 'nordicrun.dk/cph', 'DKK 400', '3', 'yes'],
  ['Autumn Sale — Aarhus',     'nordicrun.dk/aar', 'DKK 300', '2', 'yes'],
  ['Autumn Sale — Odense',     'nordicrun.dk/ode', 'DKK 250', '3', 'no'],
]
const NEW_ROW: string[] = ['Autumn Sale — Aalborg', 'nordicrun.dk/aal', 'DKK 250', '2', 'no']

const TRIGGER_COPY = [
  {
    title: 'One-time upload',
    tabSub: 'Create everything in the sheet, once',
    desc: 'Runs once, right now. Every row in the sheet becomes a campaign.',
  },
  {
    title: 'Scheduled check · every 30 min',
    tabSub: 'Checks for new rows every X minutes',
    desc: 'Checks the sheet for new rows every 30 minutes and creates a campaign for each one.',
  },
  {
    title: 'Variable trigger · Launch = yes',
    tabSub: 'Watches a column for a value',
    desc: 'Watches the Launch column. When a row says yes, Vera creates that campaign.',
  },
]

type RowStatus = '' | 'ok' | 'go' | 'w' | 'sk'
type RowState = { d: string[]; s: RowStatus; nw: boolean; fl: boolean }
type LogEntry = { time: string; msg: string; hit: boolean; id: number }
type Campaign = { name: string; creatives: string; id: number }

export default function SheetSimulator() {
  const [mode, setMode] = useState(0)
  const [toggle, setToggle] = useState(true)
  const [rows, setRows] = useState<RowState[]>([])
  const [logEntries, setLogEntries] = useState<LogEntry[]>([])
  const [campaigns, setCampaigns] = useState<Campaign[]>([])
  const [veraStatus, setVeraStatus] = useState('Ready')

  const modeRef = useRef(0)
  const toggleRef = useRef(true)
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])
  const logIdRef = useRef(0)
  const campIdRef = useRef(0)
  const startedRef = useRef(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const run = useCallback(() => {
    timers.current.forEach(clearTimeout)
    timers.current = []
    logIdRef.current = 0
    campIdRef.current = 0

    setRows(ROWS_INIT.map(d => ({ d: [...d], s: '' as RowStatus, nw: false, fl: false })))
    setLogEntries([])
    setCampaigns([])
    setVeraStatus('Ready')

    const m = modeRef.current
    const up = m === 0 || toggleRef.current

    function at(ms: number, f: () => void) {
      timers.current.push(setTimeout(f, ms))
    }
    function addLog(time: string, msg: string, hit = false) {
      const id = logIdRef.current++
      setLogEntries(prev => [...prev, { time, msg, hit, id }].slice(-6))
    }
    function create(idx: number, name: string, creatives: string, t0: number, time: string) {
      at(t0, () => setRows(prev => {
        const next = [...prev]
        if (next[idx]) next[idx] = { ...next[idx], s: 'go' }
        return next
      }))
      at(t0 + 650, () => {
        setRows(prev => {
          const next = [...prev]
          if (next[idx]) next[idx] = { ...next[idx], s: 'ok', nw: false, fl: false }
          return next
        })
        const campId = campIdRef.current++
        setCampaigns(prev => [{ name, creatives, id: campId }, ...prev])
        addLog(time, 'Created ' + name.replace('Autumn Sale — ', ''), true)
      })
    }

    let t = 500

    if (m === 0) {
      at(t, () => { setVeraStatus('Uploading'); addLog('09:00', 'Reading sheet · 3 rows found') })
      t += 600
      for (let i = 0; i < 3; i++) {
        create(i, ROWS_INIT[i][0], ROWS_INIT[i][3], t, '09:00')
        t += 750
      }
      at(t + 200, () => { setVeraStatus('Done'); addLog('09:01', 'Done · 3 campaigns created', true) })
      return
    }

    if (m === 1) {
      if (up) {
        at(t, () => { setVeraStatus('Uploading'); addLog('09:00', 'Uploading 3 existing rows') })
        t += 600
        for (let i = 0; i < 3; i++) {
          create(i, ROWS_INIT[i][0], ROWS_INIT[i][3], t, '09:00')
          t += 750
        }
      } else {
        at(t, () => {
          setRows(prev => prev.map(r => ({ ...r, s: 'sk' as RowStatus })))
          addLog('09:00', 'Watching from now · 3 existing rows skipped')
        })
        t += 700
      }
      at(t, () => { setVeraStatus('Watching'); addLog('09:30', 'Checked · no new rows') })
      t += 1300
      at(t, () => {
        setRows(prev => [...prev, { d: [...NEW_ROW], s: 'w', nw: true, fl: false }])
        addLog('09:48', 'New row added to the sheet')
      })
      t += 1300
      at(t, () => addLog('10:00', 'Checked · 1 new row found', true))
      t += 500
      create(3, NEW_ROW[0], NEW_ROW[3], t, '10:00')
      t += 800
      at(t, () => addLog('10:00', 'Next check 10:30'))
      return
    }

    if (m === 2) {
      if (up) {
        at(t, () => { setVeraStatus('Uploading'); addLog('09:00', 'Existing rows · 2 with Launch = yes') })
        t += 600
        for (let i = 0; i < 2; i++) {
          create(i, ROWS_INIT[i][0], ROWS_INIT[i][3], t, '09:00')
          t += 750
        }
        at(t, () => setRows(prev => {
          const next = [...prev]
          if (next[2]) next[2] = { ...next[2], s: 'w' }
          return next
        }))
        t += 200
      } else {
        at(t, () => {
          setRows(prev => prev.map((r, i) => ({ ...r, s: (i < 2 ? 'sk' : 'w') as RowStatus })))
          addLog('09:00', 'Watching from now · existing rows skipped')
        })
        t += 700
      }
      at(t, () => { setVeraStatus('Watching'); addLog('09:15', 'Checked · no rows match') })
      t += 1300
      at(t, () => {
        setRows(prev => {
          const next = [...prev]
          if (next[2]) next[2] = { ...next[2], d: [...next[2].d.slice(0, 4), 'yes'], fl: true }
          return next
        })
        addLog('09:22', 'Odense · Launch changed to yes')
      })
      t += 1300
      at(t, () => addLog('09:30', 'Checked · Launch = yes on Odense', true))
      t += 500
      create(2, ROWS_INIT[2][0], ROWS_INIT[2][3], t, '09:30')
      t += 800
      at(t, () => addLog('09:30', 'Next check 09:45'))
    }
  }, [])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true
          const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
          if (!reduced) run()
        }
      },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [run])

  function handleMode(m: number) {
    modeRef.current = m
    setMode(m)
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!reduced) run()
  }

  function handleToggle(checked: boolean) {
    toggleRef.current = checked
    setToggle(checked)
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!reduced) run()
  }

  function handleReplay() {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!reduced) run()
  }

  return (
    <div className="sx" data-mode={mode} ref={sectionRef}>
      <div className="sxt">
        <div className="sxm" role="tablist">
          {TRIGGER_COPY.map((tc, i) => (
            <button
              key={i}
              className={mode === i ? 'on' : ''}
              role="tab"
              aria-selected={mode === i}
              onClick={() => handleMode(i)}
            >
              <b>{tc.title}</b>
              <em>{tc.tabSub}</em>
            </button>
          ))}
        </div>
        <label className={`sxo${mode === 0 ? ' disabled' : ''}`}>
          <input
            type="checkbox"
            checked={toggle}
            onChange={e => handleToggle(e.target.checked)}
          />
          <span className="sw" />
          Upload existing rows now, then keep watching
        </label>
      </div>

      <div className="sxg">
        {/* Sheet card */}
        <div className="sxc">
          <div className="sxh">
            <span className="sxi" />
            <b>Campaign plan &mdash; Autumn</b>
            <span className="mono">Google Sheets</span>
          </div>
          <div className="sxs">
            <div className="sxr0 h">
              <span>Campaign name</span>
              <span>Landing URL</span>
              <span>Budget</span>
              <span>{mode === 2 ? 'Launch' : 'Ads'}</span>
              <span>Status</span>
            </div>
            {rows.map((row, i) => (
              <div key={i} className={`sxr0${row.nw ? ' new' : ''}`}>
                <span>{row.d[0]}</span>
                <span className="u">{row.d[1]}</span>
                <span>{row.d[2]}</span>
                <span className={mode === 2 && row.fl ? 'lc flip' : mode === 2 ? 'lc' : ''}>
                  {mode === 2 ? row.d[4] : row.d[3]}
                </span>
                <span className={row.s ? `sxstt ${row.s === 'ok' ? 'ok' : row.s === 'go' ? 'go' : 'w'}` : ''}>
                  {row.s === 'ok' ? 'Created' : row.s === 'go' ? 'Creating…' : row.s === 'w' ? 'Waiting' : row.s === 'sk' ? 'Not uploaded' : '—'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <div className="sxa"><span /></div>

        {/* Vera card */}
        <div className="sxc">
          <div className="sxh">
            <svg className="sxv" viewBox="0 0 64 64" aria-hidden="true">
              <rect x="3" y="3" width="58" height="58" rx="16" fill="#000" />
              <path d="M19 23L32 45L45 23" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="49" cy="15" r="4.5" fill="#1B3A8C" />
            </svg>
            <b>Vera</b>
            <span className="mono glow">{veraStatus}</span>
          </div>
          <div className="sxtb">
            <span className="mono">Trigger</span>
            <b>{TRIGGER_COPY[mode].title}</b>
            <p>{TRIGGER_COPY[mode].desc}</p>
          </div>
          <ol className="sxl">
            {logEntries.map(entry => (
              <li key={entry.id} className={entry.hit ? 'hit' : ''}>
                <span className="tm">{entry.time}</span>
                <span>{entry.msg}</span>
              </li>
            ))}
          </ol>
          <button className="sxrp" onClick={handleReplay}>&#8635; Replay</button>
        </div>

        {/* Arrow */}
        <div className="sxa"><span /></div>

        {/* Campaigns card */}
        <div className="sxc">
          <div className="sxh">
            <b>Campaigns in Verabix</b>
            <span className="mono">Meta Ads</span>
          </div>
          <div className="sxcl">
            {campaigns.length === 0 && <p className="sxe0">No campaigns yet</p>}
            {campaigns.map(c => (
              <div key={c.id} className="sxcc">
                <b>{c.name}</b>
                <span><i />Created &middot; 1 ad set &middot; {c.creatives} creatives</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="sxd">
        <div className="sxcols">
          <span className="mono glow">Sheet columns</span>
          <div>
            <span className="chip dk">Campaign name <i>*</i></span>
            <span className="chip dk">Landing URL <i>*</i></span>
            <span className="chip dk">Headline <i>*</i></span>
            <span className="chip dk">Primary text</span>
            <span className="chip dk">Daily budget</span>
            <span className="chip dk">Start date</span>
            <span className="chip dk">End date</span>
            <span className="chip dk">Creative links (Google Drive)</span>
          </div>
          <p>* required</p>
        </div>
        <div className="sxlim">
          <span className="mono glow">Current scope</span>
          <ul>
            <li><b>Meta Ads only</b></li>
            <li><b>Campaign level</b> — each row is one campaign</li>
            <li><b>Multiple creatives</b> per campaign</li>
            <li><b>One ad set</b> per campaign</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
