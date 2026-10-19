import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { PlanFinderProvider } from './PlanFinderContext'
import PlanFinderCards from './PlanFinderCards'
import ComparePlansTable from './ComparePlansTable'

export const metadata: Metadata = {
  title: 'Pricing — The whole platform on every plan',
  description:
    'Every plan gets Vera, dashboards, automations, campaigns and attribution. You only choose how many workspaces you need — and whether Vera joins you in Slack.',
}

function VeraIconGlow() {
  return (
    <svg viewBox="0 0 64 64" width="28" height="28" aria-hidden="true">
      <rect x="3" y="3" width="58" height="58" rx="16" fill="#000" />
      <path d="M19 23L32 45L45 23" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="49" cy="15" r="4.5" fill="#8FA6F0" />
    </svg>
  )
}

const INCLUDED = [
  { title: 'Vera AI', body: 'Your marketing analyst. Recommendations, answers and drafts from every connected number.', href: '/product/vera-ai' },
  { title: 'Dashboards', body: 'Ask for a dashboard, edit it by asking, publish it to a link.', href: '/product/cross-channel-dashboard' },
  { title: 'Automations', body: 'Rules checked every two minutes — scale, pause, email or Slack.', href: '/product/automations' },
  { title: 'Campaigns', body: 'Instant from a URL, the 6-step wizard, or bulk from a Google Sheet.', href: '/product/campaigns' },
  { title: 'Attribution', body: 'Meta, Google and GA4 side by side, with the overlap calculated.', href: '/solutions/marketing-teams' },
  { title: 'Unlimited data sources', body: 'Connect every Meta Ads, Google Ads and GA4 account you have.', href: '/' },
]

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>

        <PlanFinderProvider>
          {/* 01 Hero + plan finder + plan cards */}
          <section className="prh">
            <div className="wrap">
              <div className="prt">
                <span className="mono ink kk">Pricing</span>
                <h1>The whole platform.<br />On every plan.</h1>
                <p className="lead">
                  Every plan gets Vera, dashboards, automations, campaigns and
                  attribution. You only choose how many workspaces you need
                  &mdash; and whether Vera joins you in Slack.
                </p>
              </div>
              <PlanFinderCards />
            </div>
          </section>

          {/* 02 Every plan includes */}
          <section className="sec">
            <div className="wrap">
              <div className="shead row">
                <div>
                  <span className="mono ink">Every plan includes</span>
                  <h2>No feature tiers.<br />No add-ons.</h2>
                </div>
                <p>Starter isn&apos;t a demo. Every plan is the full Verabix &mdash; the only difference is how many workspaces you run.</p>
              </div>
              <div className="pri">
                {INCLUDED.map(item => (
                  <Link key={item.title} className="prik" href={item.href}>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                    <span className="arr">&rarr;</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* 03 Compare plans */}
          <section className="sec alt">
            <div className="wrap">
              <div className="shead">
                <span className="mono ink">Compare plans</span>
                <h2>Side by side.</h2>
              </div>
              <ComparePlansTable />
            </div>
          </section>
        </PlanFinderProvider>

        {/* 04 FAQ */}
        <section className="sec">
          <div className="wrap split top">
            <div className="copy">
              <span className="mono ink">FAQ</span>
              <h2>Straight answers.</h2>
            </div>
            <div className="faq">
              <details open>
                <summary>How does the free trial work?</summary>
                <p>Every plan starts with 7 days free. You add a card when you sign up, and you&apos;re only charged when the trial ends. Cancel before then and you pay nothing.</p>
              </details>
              <details>
                <summary>What&apos;s a workspace?</summary>
                <p>A separate Verabix for one client, brand or market &mdash; with its own data sources, dashboards, automations, campaigns and Vera. Nothing is shared between workspaces.</p>
              </details>
              <details>
                <summary>Is anything locked on Starter?</summary>
                <p>Only Vera in Slack. Everything else &mdash; Vera in Verabix, dashboards, automations, campaigns, attribution and unlimited data sources &mdash; is on every plan.</p>
              </details>
              <details>
                <summary>Can I change or cancel my plan?</summary>
                <p>Yes. Manage your subscription, payment method and invoices from your account, and upgrade when you need more workspaces.</p>
              </details>
              <details>
                <summary>Are prices with or without VAT?</summary>
                <p>Prices are in EUR and exclude VAT. Tax is calculated at checkout, and you can add your company&apos;s VAT number.</p>
              </details>
              <details>
                <summary>Do you charge per ad account or per user?</summary>
                <p>No. Data sources are unlimited on every plan. You pay per plan, not per account.</p>
              </details>
            </div>
          </div>
        </section>

        {/* 05 Not sure yet? */}
        <section className="sec alt">
          <div className="wrap split">
            <div className="copy">
              <span className="mono ink">Not sure yet?</span>
              <h2>See it on your own numbers.</h2>
              <p>Book 30 minutes. We connect your accounts and show you what Vera finds &mdash; before you pick a plan.</p>
              <a className="btn" href="https://meetings-eu1.hubspot.com/sebastian-juel-hemmersam" target="_blank" rel="noopener noreferrer">
                Book a demo &#8599;
              </a>
            </div>
            <div className="prdm">
              <div className="mwv0">
                <VeraIconGlow />
                <p>
                  Spend is up <b>18%</b> this month, revenue <b>4%</b>. Prospecting
                  CPA is the gap &mdash; and two Search ad groups spent DKK 6,400
                  with no conversions.
                </p>
              </div>
              <span className="mono">What Vera usually finds in the first 30 minutes</span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          <div className="wrap ctaw">
            <div>
              <h2>Gut feeling is not a strategy.<br />Seven days of data is.</h2>
              <p>Start a 7-day free trial on any plan. Connect Meta Ads, Google Ads and GA4 in minutes.</p>
            </div>
            <div className="ctas">
              <a className="btn wht" href="https://meetings-eu1.hubspot.com/sebastian-juel-hemmersam" target="_blank" rel="noopener noreferrer">
                Book a demo &#8599;
              </a>
              <a className="btn ghw" href="https://app.verabix.com">
                Sign up free
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
