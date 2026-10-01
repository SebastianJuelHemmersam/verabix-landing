import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WorkspaceSwitcher from './WorkspaceSwitcher'
import CampaignFilterDiagram from './CampaignFilterDiagram'

export const metadata: Metadata = {
  title: 'Multi-workspace & Slack — Every client, their own Verabix',
  description:
    'One login, a separate workspace for every client, brand or market — each with its own ad accounts, dashboards, automations and Vera. Switch in one click. Nothing leaks between them.',
}

function VeraSymbol() {
  return (
    <svg viewBox="0 0 64 64" width="36" height="36" aria-hidden="true">
      <rect x="3" y="3" width="58" height="58" rx="16" fill="#1B3A8C" />
      <path d="M19 23L32 45L45 23" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="49" cy="15" r="4.5" fill="#8FA6F0" />
    </svg>
  )
}

function VeraIconDark() {
  return (
    <svg viewBox="0 0 64 64" width="36" height="36" aria-hidden="true">
      <rect x="3" y="3" width="58" height="58" rx="16" fill="#000" />
      <path d="M19 23L32 45L45 23" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="49" cy="15" r="4.5" fill="#1B3A8C" />
    </svg>
  )
}

export default function MultiWorkspacePage() {
  return (
    <>
      <Header />
      <main>

        {/* ── 01 Hero ── */}
        <section className="mwh">
          <div className="wrap">
            <div className="dht">
              <div>
                <span className="mono ink kk">Product &middot; Multi-workspace &amp; Slack</span>
                <h1>Every client.<br />Their own Verabix.</h1>
              </div>
              <div className="dhr">
                <p className="lead">
                  One login, a separate workspace for every client, brand or market &mdash;
                  each with its own ad accounts, dashboards, automations and Vera. Switch
                  in one click. Nothing leaks between them.
                </p>
                <div className="ctas">
                  <a className="btn btn-primary" href="mailto:admin@verabix.com?subject=Book%20a%20demo">
                    Book a demo &#8599;
                  </a>
                  <a className="btn gh" href="https://app.verabix.com">
                    Start free
                  </a>
                </div>
              </div>
            </div>
            <WorkspaceSwitcher />
          </div>
        </section>

        {/* ── 02 Stats ── */}
        <section className="works">
          <div className="wrap stats">
            <div><b>1 login</b><span>for every client, brand and market</span></div>
            <div><b>1 click</b><span>to switch workspace</span></div>
            <div><b>0</b><span>data shared between workspaces</span></div>
            <div><b>@Vera</b><span>in any Slack channel</span></div>
          </div>
        </section>

        {/* ── 03 Walls between clients ── */}
        <section className="sec">
          <div className="wrap">
            <div className="shead row">
              <div>
                <span className="mono ink">Separate by design</span>
                <h2>Walls between clients.<br />Not between tools.</h2>
              </div>
              <p>
                A workspace is a complete Verabix &mdash; data, dashboards, rules and
                Vera &mdash; scoped to one client. You see all of them. They never see
                each other.
              </p>
            </div>
            <div className="how">
              <div className="hw">
                <span className="hn">01</span>
                <h3>Own data sources</h3>
                <p>
                  Connect each client&apos;s Meta Ads, Google Ads and GA4. Setting up a
                  similar client? Copy the connected sources from an existing workspace.
                </p>
              </div>
              <div className="hw">
                <span className="hn">02</span>
                <h3>Own everything else</h3>
                <p>
                  Dashboards, automations, campaigns and Vera&apos;s recommendations live
                  inside the workspace. Nothing appears anywhere else.
                </p>
              </div>
              <div className="hw">
                <span className="hn">03</span>
                <h3>Own currency</h3>
                <p>
                  Each workspace reports in its own currency &mdash; DKK, SEK, EUR &mdash;
                  so every number reads the way the client reads it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 04 Campaign filter ── */}
        <section className="sec alt">
          <div className="wrap split">
            <div className="copy">
              <span className="mono ink kk">Campaign filter</span>
              <h2>One ad account.<br />One workspace per market.</h2>
              <p>
                Running every market from a single ad account? Add a campaign filter to
                a workspace&apos;s data source, and it only sees campaigns whose name
                contains &mdash; say &mdash; &ldquo;DK&rdquo;. Same account, clean
                separation.
              </p>
              <ul className="chk">
                <li>Filter by any text in the campaign name</li>
                <li>Works for Meta Ads and Google Ads</li>
                <li>Dashboards, rules and Vera respect the filter</li>
              </ul>
            </div>
            <CampaignFilterDiagram />
          </div>
        </section>

        {/* ── 05 Vera in Slack ── */}
        <section className="sec dark">
          <div className="wrap split rev">
            <div className="copy">
              <span className="mono glow kk">Vera in Slack</span>
              <h2>Vera, in the channel<br />you already use.</h2>
              <p>
                Connect Slack once and tag @Vera in any channel. She answers from the
                ad accounts you give her &mdash; across every workspace &mdash; and keeps
                the thread&apos;s context for follow-ups.
              </p>
              <ul className="chk">
                <li>Mention @Vera in any channel</li>
                <li>Follow-up questions in the thread</li>
                <li>Answers in the language you write in</li>
                <li>You choose which ad accounts Vera sees in Slack</li>
              </ul>
              <a className="lnk" href="/product/automations">
                Automation alerts to any channel &rarr;
              </a>
            </div>

            <div className="sm">
              <div className="smh"># client-nordic-run</div>
              <div className="msg">
                <span className="av u">M</span>
                <div>
                  <b>Mads</b> <em>08:42</em>
                  <p>
                    <span className="at">@Vera</span>{' '}
                    how did Nordic Run DK and SE do yesterday?
                  </p>
                </div>
              </div>
              <div className="msg">
                <span className="av"><VeraIconDark /></span>
                <div>
                  <b>Verabix</b> <span className="app">APP</span> <em>08:42</em>
                  <ul style={{ listStyle: 'none', margin: '6px 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <li style={{ fontSize: 14.5, lineHeight: 1.5 }}>
                      <span style={{ color: '#999' }}>&bull;</span>{' '}
                      Nordic Run DK &mdash; DKK 2,840 spend &middot; ROAS 4.9&times; (+0.3)
                    </li>
                    <li style={{ fontSize: 14.5, lineHeight: 1.5 }}>
                      <span style={{ color: '#999' }}>&bull;</span>{' '}
                      Nordic Run SE &mdash; SEK 2,110 spend &middot; ROAS 3.6&times; (&minus;0.4)
                    </li>
                    <li style={{ fontSize: 14.5, lineHeight: 1.5 }}>
                      <span style={{ color: '#999' }}>&bull;</span>{' '}
                      The SE drop is Prospecting &mdash; Broad: CPA up 22% since Friday.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mwth">
                <span className="mono">THREAD</span>
                <div className="msg">
                  <span className="av u">M</span>
                  <div>
                    <b>Mads</b> <em>08:44</em>
                    <p>
                      <span className="at">@Vera</span>{' '}
                      what would you change in SE?
                    </p>
                  </div>
                </div>
                <div className="msg">
                  <span className="av"><VeraIconDark /></span>
                  <div>
                    <b>Verabix</b> <span className="app">APP</span> <em>08:44</em>
                    <p>
                      Move 20% of the Prospecting &mdash; Broad budget to Reels &mdash;
                      Lookalike. It&apos;s returned 5.1&times; ROAS over the last 7 days
                      on SEK 9,400.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 06 Built for ── */}
        <section className="sec">
          <div className="wrap">
            <div className="shead">
              <span className="mono ink">Built for</span>
              <h2>However you split your work.</h2>
            </div>
            <div className="grid3">
              <a className="sol" href="/solutions/agencies">
                <span className="mono ink">Agencies</span>
                <h3>One workspace per client.</h3>
                <p>
                  Every client&apos;s accounts, reports and rules kept apart &mdash; and
                  Vera answering about all of them in your Slack.
                </p>
                <span className="lnk">Read more &rarr;</span>
              </a>
              <a className="sol" href="/solutions/ecommerce">
                <span className="mono ink">E-commerce</span>
                <h3>One workspace per market.</h3>
                <p>
                  DK, SE and DE side by side, each in its own currency. Split one ad
                  account with a campaign filter.
                </p>
                <span className="lnk">Read more &rarr;</span>
              </a>
              <a className="sol" href="/solutions/marketing-teams">
                <span className="mono ink">In-house teams</span>
                <h3>One workspace per brand.</h3>
                <p>
                  Separate brands, separate numbers. One login for the whole marketing
                  team.
                </p>
                <span className="lnk">Read more &rarr;</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── 07 Plans ── */}
        <section className="sec alt">
          <div className="wrap">
            <div className="shead row">
              <div>
                <span className="mono ink">Plans</span>
                <h2>Grows with your client list.</h2>
              </div>
              <p>Start with one workspace. Upgrade when the next client signs.</p>
            </div>
            <div className="mwpl">
              <div className="mwpc">
                <div className="mwph">
                  <b>Starter</b>
                </div>
                <div className="mwpp">
                  <span>&euro;49</span>
                  <em>/ month</em>
                </div>
                <ul>
                  <li>1 workspace</li>
                  <li>Vera in Verabix</li>
                </ul>
              </div>
              <div className="mwpc">
                <div className="mwph">
                  <b>Pro</b>
                </div>
                <div className="mwpp">
                  <span>&euro;149</span>
                  <em>/ month</em>
                </div>
                <ul>
                  <li>3 workspaces</li>
                  <li>Vera in Verabix</li>
                  <li>Vera in Slack</li>
                </ul>
              </div>
              <div className="mwpc on">
                <div className="mwph">
                  <b>Agency</b>
                  <span className="pill">For agencies</span>
                </div>
                <div className="mwpp">
                  <span>&euro;229</span>
                  <em>/ month</em>
                </div>
                <ul>
                  <li>Unlimited workspaces</li>
                  <li>Vera in Verabix</li>
                  <li>Vera in Slack</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── 08 FAQ ── */}
        <section className="sec">
          <div className="wrap split top">
            <div className="copy">
              <span className="mono ink">FAQ</span>
              <h2>Straight answers.</h2>
            </div>
            <div className="faq">
              <details open>
                <summary>Is the data really separate?</summary>
                <p>
                  Yes. Each workspace has its own connected ad accounts, dashboards,
                  automations, campaigns and Vera recommendations. Nothing from one
                  workspace appears in another.
                </p>
              </details>
              <details>
                <summary>Can two workspaces use the same ad account?</summary>
                <p>
                  Yes. Add a campaign filter to the data source and the workspace only
                  sees campaigns whose name contains that text &mdash; the easy way to
                  split one account into markets.
                </p>
              </details>
              <details>
                <summary>How many workspaces can I have?</summary>
                <p>
                  Starter includes 1, Pro includes 3 and Agency is unlimited.
                </p>
              </details>
              <details>
                <summary>Which plans include Vera in Slack?</summary>
                <p>Pro and Agency.</p>
              </details>
              <details>
                <summary>What can Vera see in Slack?</summary>
                <p>
                  Only the ad accounts you connect under &ldquo;Vera&apos;s data
                  access&rdquo; on your Account page. You decide, independently of your
                  workspaces.
                </p>
              </details>
              <details>
                <summary>Is setting up a new client slow?</summary>
                <p>
                  No. When you create a workspace you can copy the connected data sources
                  from one you already have.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* ── 09 Keep exploring ── */}
        <section className="sec alt">
          <div className="wrap">
            <div className="shead">
              <span className="mono ink">Keep exploring</span>
            </div>
            <div className="grid4">
              <a className="mod" href="/product/vera-ai">
                <h3>Vera AI</h3>
                <p>The analyst who answers you in Slack.</p>
                <span className="arr">&rarr;</span>
              </a>
              <a className="mod" href="/product/automations">
                <h3>Automations</h3>
                <p>Separate rules per client. Alerts in their channel.</p>
                <span className="arr">&rarr;</span>
              </a>
              <a className="mod" href="/product/cross-channel-dashboard">
                <h3>Dashboards</h3>
                <p>A shareable dashboard for every client.</p>
                <span className="arr">&rarr;</span>
              </a>
              <a className="mod" href="/product/campaigns">
                <h3>Campaigns</h3>
                <p>Launch from a URL, a wizard or a sheet.</p>
                <span className="arr">&rarr;</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="cta">
          <div className="wrap ctaw">
            <div>
              <h2>Every client.<br />One login.</h2>
              <p>Start with one workspace. Add the next client in a minute.</p>
            </div>
            <div className="ctas">
              <a className="btn wht" href="mailto:admin@verabix.com?subject=Book%20a%20demo">
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
