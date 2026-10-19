'use client'

import { usePlanFinder } from './PlanFinderContext'

type RowValue = boolean | string

const ROWS: { label: string; starter: RowValue; pro: RowValue; agency: RowValue }[] = [
  { label: 'Workspaces', starter: '1', pro: '3', agency: 'Unlimited' },
  { label: 'Data sources', starter: 'Unlimited', pro: 'Unlimited', agency: 'Unlimited' },
  { label: 'Vera in Verabix', starter: true, pro: true, agency: true },
  { label: 'Vera in Slack', starter: false, pro: true, agency: true },
  { label: 'Prompt-built dashboards', starter: true, pro: true, agency: true },
  { label: 'Public dashboard links', starter: true, pro: true, agency: true },
  { label: 'Automations', starter: true, pro: true, agency: true },
  { label: 'Instant, wizard & sheet campaigns', starter: true, pro: true, agency: true },
  { label: 'Attribution vs. GA4', starter: true, pro: true, agency: true },
  { label: 'Campaign filters per workspace', starter: true, pro: true, agency: true },
  { label: '7-day free trial', starter: true, pro: true, agency: true },
]

function Cell({ value }: { value: RowValue }) {
  if (typeof value === 'string') return <>{value}</>
  return value ? <span className="y">●</span> : <span className="n">—</span>
}

export default function ComparePlansTable() {
  const { plan } = usePlanFinder()

  return (
    <div className={`prt2 fit-${plan}`}>
      <div className="prtr0 h">
        <span />
        <span data-p="starter">
          <b>Starter</b>
          <em>€49 / mo</em>
        </span>
        <span data-p="pro">
          <b>Pro</b>
          <em>€139 / mo</em>
        </span>
        <span data-p="agency">
          <b>Agency</b>
          <em>€229 / mo</em>
        </span>
      </div>
      {ROWS.map(row => (
        <div className="prtr0" key={row.label}>
          <span>{row.label}</span>
          <span data-p="starter">
            <Cell value={row.starter} />
          </span>
          <span data-p="pro">
            <Cell value={row.pro} />
          </span>
          <span data-p="agency">
            <Cell value={row.agency} />
          </span>
        </div>
      ))}
      <div className="prtr0 f">
        <span />
        <span data-p="starter">
          <a className="btn sm" href="https://app.verabix.com">Start trial</a>
        </span>
        <span data-p="pro">
          <a className="btn sm" href="https://app.verabix.com">Start trial</a>
        </span>
        <span data-p="agency">
          <a className="btn sm" href="https://app.verabix.com">Start trial</a>
        </span>
      </div>
    </div>
  )
}
