import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AskVera from './AskVera'

export const metadata: Metadata = {
  title: 'Vera AI — Ask anything about your Meta Ads, Google Ads and GA4',
  description:
    'Vera is your AI marketing analyst. Ask questions in plain English — she answers with the numbers behind them, in Verabix or in Slack.',
}

export default function VeraAIPage() {
  return (
    <>
      <Header />
      <main>

        {/* ── 01 Hero ── */}
        <section className="vh">
          <div className="wrap vhw">
            <span className="mono ink">Product · Vera AI</span>
            <h1>Your analyst doesn&apos;t guess.<br />Neither does Vera.</h1>
            <p className="lead">
              Ask anything about your Meta Ads, Google Ads and GA4. Vera answers with the
              numbers — in Verabix or in Slack.
            </p>
            <AskVera />
            <div className="ctas cen">
              <a className="btn btn-primary" href="mailto:admin@verabix.com?subject=Book%20a%20demo">
                Book a demo ↗
              </a>
              <a className="btn btn-outline" href="https://app.verabix.com">
                Try Vera free
              </a>
            </div>
          </div>
        </section>

        {/* ── 01b Product shot ── */}
        <section className="vshot">
          <div className="wrap">
            <figure className="shot">
              <div className="bar"><i /><i /><i /><span>app.verabix.com/vera</span></div>
              <img
                src="/shots/vera-chat-demo.gif"
                alt="Vera answering questions about campaigns in Verabix"
              />
            </figure>
          </div>
        </section>

        {/* ── 02 Stats ── */}
        <section className="works">
          <div className="wrap stats">
            <div>
              <b>&lt;30s</b>
              <span>from question to answer with numbers</span>
            </div>
            <div>
              <b>3</b>
              <span>sources reasoned across at once</span>
            </div>
            <div>
              <b>@Vera</b>
              <span>in any Slack channel</span>
            </div>
            <div>
              <b>24/7</b>
              <span>reading your data, even while you sleep</span>
            </div>
          </div>
        </section>

        {/* ── 03 What people ask her ── */}
        <section className="sec">
          <div className="wrap">
            <div className="shead row">
              <div>
                <span className="mono ink">What people ask her</span>
                <h2>Questions that used to take an afternoon.</h2>
              </div>
              <p>Every answer comes with the numbers behind it. No vibes. No &ldquo;it depends&rdquo;.</p>
            </div>
            <div className="qa">

              <div className="qr">
                <div className="q">
                  <span className="mono">You ask</span>
                  <h3>&ldquo;Why is CPA up this week?&rdquo;</h3>
                </div>
                <div className="a">
                  <span className="mono ink"><i className="vd" />Vera answers</span>
                  <p>CPA rose 22% — all of it from Meta Prospecting. CPM is flat, CTR dropped from 1.4% to 0.9% after Tuesday&apos;s creative swap. The old creative is still the better performer.</p>
                  <span className="src">Meta Ads · 7 days</span>
                </div>
              </div>

              <div className="qr">
                <div className="q">
                  <span className="mono">You ask</span>
                  <h3>&ldquo;Where should the next DKK 40,000 go?&rdquo;</h3>
                </div>
                <div className="a">
                  <span className="mono ink"><i className="vd" />Vera answers</span>
                  <p>Google PMax has the most headroom: 4.1× ROAS and only 62% impression share. Move DKK 25,000 there, DKK 15,000 to Meta Retargeting. Expected blended ROAS: 3.4× → 3.9×.</p>
                  <span className="src">Meta + Google · 30 days</span>
                </div>
              </div>

              <div className="qr">
                <div className="q">
                  <span className="mono">You ask</span>
                  <h3>&ldquo;Is Meta overcounting conversions?&rdquo;</h3>
                </div>
                <div className="a">
                  <span className="mono ink"><i className="vd" />Vera answers</span>
                  <p>Yes. Meta reports 1,284 purchases. GA4 observed 1,041 from Meta traffic. The gap is mostly 1-day view-through. Use GA4 for budget decisions.</p>
                  <span className="src">Meta vs. GA4 · September</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 04 Capabilities ── */}
        <section className="sec alt">
          <div className="wrap">
            <div className="shead">
              <span className="mono ink">What Vera does</span>
              <h2>Not a chatbot.<br />An analyst who does the work.</h2>
            </div>
            <div className="grid3">
              <div className="mod">
                <span className="mono">01</span>
                <h3>Answers with the numbers</h3>
                <p>Ask in plain English. Vera reasons across Meta, Google Ads and GA4 at once and cites the exact figures, so every claim can be checked.</p>
              </div>
              <div className="mod">
                <span className="mono">02</span>
                <h3>Finds what you didn&apos;t ask about</h3>
                <p>Proactive recommendations when spend spikes, ROAS drops or a campaign runs out of headroom.</p>
              </div>
              <div className="mod">
                <span className="mono">03</span>
                <h3>Builds dashboards</h3>
                <p>&ldquo;Show me ROAS by market this quarter.&rdquo; Vera builds the chart and pins it to your dashboard.</p>
              </div>
              <div className="mod">
                <span className="mono">04</span>
                <h3>Drafts campaigns</h3>
                <p>Give her a URL and a goal. She drafts the campaign for Meta and Google, ready for you to review.</p>
              </div>
              <div className="mod">
                <span className="mono">05</span>
                <h3>Creates automations</h3>
                <p>Turn any recommendation into a rule that pauses, scales or alerts on its own.</p>
              </div>
              <div className="mod">
                <span className="mono">06</span>
                <h3>Remembers context</h3>
                <p>Your brands, goals and past decisions carry across conversations. And she learns from your feedback.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 05 How she works ── */}
        <section className="sec">
          <div className="wrap split">
            <div className="copy">
              <span className="mono ink">How she works</span>
              <h2>Reads. Reasons.<br />Acts. Learns.</h2>
              <p>
                Vera runs the same loop every day: pull fresh data, find what changed, propose
                what to do — and learn from what happened next.
              </p>
            </div>
            <ol className="loop">
              <li>
                <span className="hn">01</span>
                <div>
                  <h3>Reads</h3>
                  <p>Fresh data from Meta Ads, Google Ads and GA4 — every campaign, ad set and conversion.</p>
                </div>
              </li>
              <li>
                <span className="hn">02</span>
                <div>
                  <h3>Reasons</h3>
                  <p>Compares channels on the same definitions and isolates what actually moved.</p>
                </div>
              </li>
              <li>
                <span className="hn">03</span>
                <div>
                  <h3>Acts</h3>
                  <p>Recommends, drafts campaigns, builds dashboards and sets up automations.</p>
                </div>
              </li>
              <li>
                <span className="hn">04</span>
                <div>
                  <h3>Learns</h3>
                  <p>Results and your feedback shape the next recommendation.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* ── 06 Vera in Slack ── */}
        <section className="sec dark">
          <div
            className="wrap slack"
            style={{ marginTop: 0, paddingTop: 0, borderTop: 'none' }}
          >
            <div className="scopy">
              <span className="mono glow">Vera in Slack</span>
              <h3>Ask her in Slack.<br />She gets it done in Verabix.</h3>
              <p>
                No new tab. Mention @Vera in any channel and she pulls the numbers, builds
                the report or drafts the campaign — inside Verabix.
              </p>
              <ul className="chk">
                <li>Questions answered in the thread</li>
                <li>Tasks carried out in Verabix</li>
                <li>Alerts when something needs your attention</li>
              </ul>
            </div>
            <div className="sm">
              <div className="smh"><span># marketing</span></div>
              <div className="msg">
                <span className="av u">S</span>
                <div>
                  <b>Sara</b> <em>09:12</em>
                  <p>
                    <span className="at">@Vera</span> how did Meta do last week vs. Google?
                    Make a quick report for the team.
                  </p>
                </div>
              </div>
              <div className="msg">
                <span className="av">
                  <svg viewBox="0 0 64 64" width="40" height="40" aria-hidden="true">
                    <rect x="3" y="3" width="58" height="58" rx="16" fill="#000" />
                    <path
                      d="M19 23L32 45L45 23"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="49" cy="15" r="4.5" fill="#1B3A8C" />
                  </svg>
                </span>
                <div>
                  <b>Vera</b> <span className="app">APP</span> <em>09:12</em>
                  <p>
                    Google won the week: <strong>4.1× ROAS</strong> vs. Meta&apos;s{' '}
                    <strong>2.8×</strong>. Meta&apos;s CPA rose 22% after Tuesday&apos;s
                    creative change.
                  </p>
                  <div className="att">
                    <span className="mono">Report · Week 38</span>
                    <b>Meta vs. Google — weekly performance</b>
                    <span>Created in Verabix · 3 charts · shared with #marketing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 07 Trust ── */}
        <section className="sec">
          <div className="wrap">
            <div className="shead">
              <span className="mono ink">Trust</span>
              <h2>Every answer shows its work.</h2>
            </div>
            <div className="how">
              <div className="hw">
                <span className="hn">01</span>
                <h3>Numbers, not opinions</h3>
                <p>
                  Vera cites the exact metric, date range and source — so you can check
                  every claim in seconds.
                </p>
              </div>
              <div className="hw">
                <span className="hn">02</span>
                <h3>You stay in control</h3>
                <p>
                  She recommends and drafts. Nothing goes live until you decide it
                  should — except automations you&apos;ve explicitly set up yourself,
                  which run on the rules you define.
                </p>
              </div>
              <div className="hw">
                <span className="hn">03</span>
                <h3>Your data stays yours</h3>
                <p>Each workspace is isolated. Vera only sees the accounts connected to it.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 08 FAQ ── */}
        <section className="sec alt">
          <div className="wrap split top">
            <div className="copy">
              <span className="mono ink">FAQ</span>
              <h2>Straight answers.</h2>
            </div>
            <div className="faq">
              <details open>
                <summary>Which data can Vera see?</summary>
                <p>
                  Everything you&apos;ve connected in Verabix: Meta Ads, Google Ads and
                  Google Analytics 4. Each workspace is isolated — Vera never mixes data
                  between clients.
                </p>
              </details>
              <details>
                <summary>Does Vera change my campaigns on her own?</summary>
                <p>
                  Not on her own, no. She recommends, drafts and builds — you decide what
                  goes live. The one exception is automations: once you set up a rule
                  (e.g. pause underperforming ads), it runs on its own until you turn it
                  off.
                </p>
              </details>
              <details>
                <summary>How do I use Vera in Slack?</summary>
                <p>
                  Connect Slack in Verabix, then mention @Vera in any channel. Ask a
                  question or give her a task — she does the work in Verabix and replies
                  in the thread.
                </p>
              </details>
              <details>
                <summary>Is Vera included in every plan?</summary>
                <p>
                  Vera in Verabix is included on every plan. Vera in Slack is available
                  on our two higher-tier plans.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* ── 09 Keep exploring ── */}
        <section className="sec">
          <div className="wrap">
            <div className="shead">
              <span className="mono ink">Keep exploring</span>
            </div>
            <div className="grid3">
              <a className="mod" href="/product/cross-channel-dashboard">
                <h3>Cross-channel Dashboard</h3>
                <p>The unified data Vera reasons across.</p>
                <span className="arr">→</span>
              </a>
              <a className="mod" href="/product/automations">
                <h3>Automations</h3>
                <p>Turn a Vera recommendation into a rule that runs on its own.</p>
                <span className="arr">→</span>
              </a>
              <a className="mod" href="/product/multi-workspace">
                <h3>Multi-workspace &amp; Slack</h3>
                <p>One workspace per client. Vera on call in Slack.</p>
                <span className="arr">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="cta">
          <div className="wrap ctaw">
            <div>
              <h2>Ask Vera<br />your first question.</h2>
              <p>
                Connect Meta Ads, Google Ads and GA4. She&apos;ll have read everything
                before you finish your coffee.
              </p>
            </div>
            <div className="ctas">
              <a className="btn wht" href="mailto:admin@verabix.com?subject=Book%20a%20demo">
                Book a demo ↗
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
