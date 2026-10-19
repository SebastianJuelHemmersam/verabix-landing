import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AskPlatformsMock from './AskPlatformsMock'
import AskVeraPanel from './AskVeraPanel'

export const metadata: Metadata = {
  title: 'In-house Marketing â€” One set of numbers. The whole team.',
  description:
    'Meta, Google and GA4 each tell a different story. Verabix puts them side by side, shows where they overlap, and lets Vera explain the gap â€” so the Monday meeting starts with answers, not an argument.',
}

export default function MarketingTeamsPage() {
  return (
    <>
      <Header />
      <main>

        {/* 01 Hero */}
        <section className="mth">
          <div className="wrap">
            <div className="dht">
              <div>
                <span className="mono ink kk">Solutions &middot; In-house marketing</span>
                <h1>One set of numbers.<br />The whole team.</h1>
              </div>
              <div>
                <p className="lead">
                  Meta, Google and GA4 each tell a different story. Verabix puts
                  them side by side, shows where they overlap, and lets Vera
                  explain the gap &mdash; so the Monday meeting starts with
                  answers, not an argument.
                </p>
                <div className="ctas">
                  <a className="btn" href="https://meetings-eu1.hubspot.com/sebastian-juel-hemmersam" target="_blank" rel="noopener noreferrer">
                    Book a demo &#8599;
                  </a>
                  <a className="btn gh" href="https://app.verabix.com">
                    Start free
                  </a>
                </div>
              </div>
            </div>
            <AskPlatformsMock />
          </div>
        </section>

        {/* 02 Stats */}
        <section className="works">
          <div className="wrap stats">
            <div><b>3 &rarr; 1</b><span>tools your team has to open</span></div>
            <div><b>1</b><span>set of numbers everyone reads</span></div>
            <div><b>0</b><span>analysts you need to hire</span></div>
            <div><b>2 min</b><span>between budget-rule checks</span></div>
          </div>
        </section>

        {/* 03 Ask Vera */}
        <section className="sec">
          <div className="wrap">
            <div className="shead row">
              <div>
                <span className="mono ink">Vera AI</span>
                <h2>The analyst your team<br />didn&apos;t have to hire.</h2>
              </div>
              <p>
                Anyone on the team can ask. Vera has already read every number
                in Meta Ads, Google Ads and GA4 &mdash; and answers in plain
                words, with the figures behind it.
              </p>
            </div>
            <AskVeraPanel />
            <Link className="lnk" href="/product/vera-ai" style={{ marginTop: 20, display: 'inline-flex' }}>
              Meet Vera &rarr;
            </Link>
          </div>
        </section>

        {/* 04 Attribution */}
        <section className="sec alt">
          <div className="wrap split">
            <div className="copy">
              <span className="mono ink">Attribution</span>
              <h2>See where the numbers disagree.<br />And why.</h2>
              <p>
                Every platform takes credit for the same customer. Verabix lines
                up what Meta and Google claim against what GA4 recorded, channel
                by channel &mdash; and flags the overlap.
              </p>
              <ul className="chk">
                <li>Platform-reported vs. GA4 last-click, side by side</li>
                <li>Overlap and attribution gap, calculated for you</li>
                <li>Organic and Direct shown next to paid</li>
                <li>Vera&apos;s read on what the gap means</li>
              </ul>
            </div>
            <div className="mtat">
              <div className="mtath">
                <b>Channel overlap</b>
                <span className="mono">Last 30 days</span>
              </div>
              <div className="mttb">
                <div className="mttr h">
                  <span>Channel</span><span>Meta Ads</span><span>Google Ads</span><span>GA4</span>
                </div>
                <div className="mttr">
                  <span>Meta Ads</span><span>412</span><span className="nil">&mdash;</span><span className="ga">251</span>
                </div>
                <div className="mttr">
                  <span>Google Paid Search</span><span className="nil">&mdash;</span><span>288</span><span className="ga">224</span>
                </div>
                <div className="mttr">
                  <span>Google Organic</span><span className="nil">&mdash;</span><span className="nil">&mdash;</span><span className="ga">38</span>
                </div>
                <div className="mttr">
                  <span>Direct</span><span className="nil">&mdash;</span><span className="nil">&mdash;</span><span className="ga">21</span>
                </div>
                <div className="mttr">
                  <span>Other</span><span className="nil">&mdash;</span><span className="nil">&mdash;</span><span className="ga">6</span>
                </div>
                <div className="mttr t">
                  <span>Total</span><span>412</span><span>288</span><span className="ga">540</span>
                </div>
              </div>
              <div className="mtatn">
                <b>~23% overlap detected.</b> Roughly 160 of the 700 conversions
                claimed by Meta and Google appear to be the same customers
                counted twice.
              </div>
            </div>
          </div>
        </section>

        {/* 05 Automations */}
        <section className="sec">
          <div className="wrap split rev">
            <div className="copy">
              <span className="mono ink">Automations</span>
              <h2>Guardrails between<br />weekly reviews.</h2>
              <p>
                Your team meets once a week. Budgets don&apos;t wait that long.
                Set the rule once and Verabix checks every two minutes &mdash;
                pausing, scaling or alerting the moment it&apos;s hit.
              </p>
              <ul className="chk">
                <li>Pause, scale budget, email or Slack</li>
                <li>Meta Ads and Google Ads</li>
                <li>Every trigger logged</li>
              </ul>
              <Link className="lnk" href="/product/automations">See Automations &rarr;</Link>
            </div>
            <div className="mtrl">
              <div className="mtrr">
                <span className="mono">Rule &middot; Active</span>
                <p>
                  <em>When</em> <span className="tk">spend</span> <em>on</em>{' '}
                  <span className="tk">Meta &middot; all campaigns</span> <em>goes</em>{' '}
                  <span className="tk">above DKK 50,000 / month</span> <em>then</em>{' '}
                  <span className="tk f">pause campaign</span> <em>and</em>{' '}
                  <span className="tk f">email the CMO</span>
                </p>
              </div>
              <div className="mtrr">
                <span className="mono">Rule &middot; Active</span>
                <p>
                  <em>When</em> <span className="tk">ROAS</span> <em>on</em>{' '}
                  <span className="tk">Google &middot; Shopping</span> <em>goes</em>{' '}
                  <span className="tk">above 5.0&times;</span> <em>then</em>{' '}
                  <span className="tk f">increase budget 10%</span> <em>and</em>{' '}
                  <span className="tk f">post in #marketing</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 06 Dashboards (black) */}
        <section className="sec dark">
          <div className="wrap split">
            <div className="copy">
              <span className="mono glow">Dashboards</span>
              <h2>The numbers on the wall. Not in someone&apos;s inbox.</h2>
              <p>
                Ask Vera for the dashboard the team needs, then publish it. Put
                the link on the office screen, in the board deck, or in Slack
                &mdash; everyone sees the same live numbers, without a login.
              </p>
              <ul className="chk">
                <li>Built from a prompt, edited by asking</li>
                <li>Publish to a link &mdash; no login needed</li>
                <li>Unpublish any time</li>
              </ul>
              <Link className="lnk" href="/product/cross-channel-dashboard">See Dashboards &rarr;</Link>
            </div>
            <div className="mttv">
              <div className="mttvs">
                <div className="mttvh">
                  <b>Marketing &mdash; This month</b>
                  <span><i />Live</span>
                </div>
                <div className="mttvk">
                  <div><span>Spend</span><b>DKK 186k</b></div>
                  <div><span>Revenue</span><b>DKK 1.02m</b></div>
                  <div><span>Blended ROAS</span><b>5.5&times;</b></div>
                  <div><span>Conversions</span><b>540</b></div>
                </div>
                <div className="mttvc">
                  {[38, 42, 40, 48, 46, 52, 50, 57, 55, 61, 58, 66, 64, 70, 68, 74].map((h, i) => (
                    <i key={i} style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
              <div className="mttvst" />
            </div>
          </div>
        </section>

        {/* 07 For the whole team */}
        <section className="sec">
          <div className="wrap">
            <div className="shead">
              <span className="mono ink">For the whole team</span>
              <h2>Same numbers.<br />Different questions.</h2>
            </div>
            <div className="how">
              <div className="hw">
                <span className="hn">01</span>
                <h3>Head of marketing</h3>
                <p>
                  &ldquo;Are we on track this month?&rdquo; Open the shared
                  dashboard, or ask Vera for a three-line summary before the
                  leadership meeting.
                </p>
              </div>
              <div className="hw">
                <span className="hn">02</span>
                <h3>Performance marketer</h3>
                <p>
                  &ldquo;What should I change today?&rdquo; Vera&apos;s
                  recommendations, ranked by impact &mdash; turn the good ones
                  into rules.
                </p>
              </div>
              <div className="hw">
                <span className="hn">03</span>
                <h3>Content &amp; brand</h3>
                <p>
                  &ldquo;Which creative is working?&rdquo; Ask Vera. No Ads
                  Manager login, no export, no waiting for someone else.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 08 FAQ */}
        <section className="sec alt">
          <div className="wrap split top">
            <div className="copy">
              <span className="mono ink">FAQ</span>
              <h2>Straight answers.</h2>
            </div>
            <div className="faq">
              <details open>
                <summary>Which number is right &mdash; Meta, Google or GA4?</summary>
                <p>None of them is wrong; they count differently. Meta and Google each claim conversions in their own ecosystem, so they overlap. GA4 records each converting session once. Verabix shows all three side by side and calculates the overlap.</p>
              </details>
              <details>
                <summary>Do we need GA4 connected?</summary>
                <p>No, but it unlocks the attribution comparison. Without it you still get Meta and Google side by side, Vera, dashboards and automations.</p>
              </details>
              <details>
                <summary>Can the whole team use it?</summary>
                <p>Yes. Anyone on the team can ask Vera questions, and published dashboards can be opened by anyone with the link &mdash; no login.</p>
              </details>
              <details>
                <summary>Does Vera change anything on her own?</summary>
                <p>No. Vera recommends; you decide. Only automations you set up yourself act on campaigns.</p>
              </details>
              <details>
                <summary>How long does setup take?</summary>
                <p>Connect Meta Ads, Google Ads and GA4 and you see your numbers straight away.</p>
              </details>
            </div>
          </div>
        </section>

        {/* 09 Keep exploring */}
        <section className="sec">
          <div className="wrap">
            <div className="shead">
              <span className="mono ink">Keep exploring</span>
            </div>
            <div className="grid4">
              <Link className="mod" href="/product/vera-ai">
                <h3>Vera AI</h3>
                <p>The analyst who has already read every number.</p>
                <span className="arr">&rarr;</span>
              </Link>
              <Link className="mod" href="/product/cross-channel-dashboard">
                <h3>Dashboards</h3>
                <p>One view your whole team reads the same way.</p>
                <span className="arr">&rarr;</span>
              </Link>
              <Link className="mod" href="/product/automations">
                <h3>Automations</h3>
                <p>Rules that protect your budget between reviews.</p>
                <span className="arr">&rarr;</span>
              </Link>
              <Link className="mod" href="/product/campaigns">
                <h3>Campaigns</h3>
                <p>Launch from a URL, a wizard or a sheet.</p>
                <span className="arr">&rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          <div className="wrap ctaw">
            <div>
              <h2>Gut feeling is not a strategy.<br />Neither is three spreadsheets.</h2>
              <p>Connect Meta Ads, Google Ads and GA4. Your team has one set of numbers by lunch.</p>
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
