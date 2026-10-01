import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TabCollapseMock from './TabCollapseMock'

export const metadata: Metadata = {
  title: 'Ad Agencies — More clients. Not more tabs.',
  description:
    'Every client gets their own workspace with Meta Ads, Google Ads and GA4 connected. Vera watches all of them, rules guard their budgets, and each client gets a live dashboard link instead of a PDF.',
}

function VeraIconGlow() {
  return (
    <svg viewBox="0 0 64 64" width="40" height="40" aria-hidden="true">
      <rect x="3" y="3" width="58" height="58" rx="16" fill="#000" />
      <path d="M19 23L32 45L45 23" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="49" cy="15" r="4.5" fill="#8FA6F0" />
    </svg>
  )
}

export default function AgenciesPage() {
  return (
    <>
      <Header />
      <main>

        {/* 01 Hero */}
        <section className="agh">
          <div className="wrap">
            <div className="dht">
              <div>
                <span className="mono ink kk">Solutions &middot; Agencies</span>
                <h1>More clients.<br />Not more tabs.</h1>
              </div>
              <div>
                <p className="lead">
                  Every client gets their own workspace with Meta Ads, Google Ads and
                  GA4 connected. Vera watches all of them, rules guard their budgets,
                  and each client gets a live dashboard link instead of a PDF.
                </p>
                <div className="ctas">
                  <a className="btn" href="mailto:admin@verabix.com?subject=Book%20a%20demo">
                    Book a demo &#8599;
                  </a>
                  <a className="btn gh" href="https://app.verabix.com">
                    Start free
                  </a>
                </div>
              </div>
            </div>
            <TabCollapseMock />
          </div>
        </section>

        {/* 02 Stats */}
        <section className="works">
          <div className="wrap stats">
            <div><b>&infin;</b><span>client workspaces on the Agency plan</span></div>
            <div><b>2 min</b><span>between budget-rule checks</span></div>
            <div><b>1 link</b><span>per client dashboard &mdash; no login</span></div>
            <div><b>@Vera</b><span>answering about every client in Slack</span></div>
          </div>
        </section>

        {/* 03 The agency week */}
        <section className="sec">
          <div className="wrap">
            <div className="shead row">
              <div>
                <span className="mono ink">The agency week</span>
                <h2>Where the hours go.<br />And where they come back.</h2>
              </div>
              <p>Same clients, same work. Without the copy-paste between them.</p>
            </div>
            <div className="agwk">
              <div className="agwr h">
                <span></span>
                <span className="mono">Without Verabix</span>
                <span className="mono ink">With Verabix</span>
              </div>
              <div className="agwr">
                <div className="agd"><b>Monday</b><span className="mono">Reporting</span></div>
                <p className="agbf">Export Meta, Google and GA4 for every client. Paste it all into slides.</p>
                <div className="agaf">
                  <p>Open the live dashboard you already shared &mdash; or ask Vera for each client&apos;s week.</p>
                  <Link className="lnk" href="/product/cross-channel-dashboard">Dashboards &rarr;</Link>
                </div>
              </div>
              <div className="agwr">
                <div className="agd"><b>Tuesday</b><span className="mono">Client questions</span></div>
                <p className="agbf">&ldquo;Why was last week down?&rdquo; Log into three platforms to find out.</p>
                <div className="agaf">
                  <p>Tag @Vera in the client channel. She answers with the numbers, in the thread.</p>
                  <Link className="lnk" href="/product/vera-ai">Vera AI &rarr;</Link>
                </div>
              </div>
              <div className="agwr">
                <div className="agd"><b>Wednesday</b><span className="mono">Launches</span></div>
                <p className="agbf">Build twenty local campaigns by hand in Ads Manager.</p>
                <div className="agaf">
                  <p>Roll them out from one Google Sheet &mdash; or paste a URL and let Vera draft it.</p>
                  <Link className="lnk" href="/product/campaigns">Campaigns &rarr;</Link>
                </div>
              </div>
              <div className="agwr">
                <div className="agd"><b>Thursday</b><span className="mono">Firefighting</span></div>
                <p className="agbf">Find out on Friday that a campaign burned budget all night.</p>
                <div className="agaf">
                  <p>Rules check every two minutes, pause the campaign and ping the account lead.</p>
                  <Link className="lnk" href="/product/automations">Automations &rarr;</Link>
                </div>
              </div>
              <div className="agwr">
                <div className="agd"><b>Friday</b><span className="mono">Optimisation</span></div>
                <p className="agbf">Optimise the clients who shout the loudest.</p>
                <div className="agaf">
                  <p>Work through Vera&apos;s recommendations for every client. Turn the best into rules.</p>
                  <Link className="lnk" href="/product/vera-ai">Vera AI &rarr;</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04 Client reporting */}
        <section className="sec alt">
          <div className="wrap split">
            <div className="copy">
              <span className="mono ink">Client reporting</span>
              <h2>Send a link.<br />Not a PDF.</h2>
              <p>
                Ask Vera for a client dashboard, tweak it in plain words, then publish
                it. The client gets a link with live numbers &mdash; no login, no
                export, no Monday-morning deck.
              </p>
              <ul className="chk">
                <li>Built from a prompt, edited by asking</li>
                <li>Publish to a link &mdash; no login needed</li>
                <li>Put it on the client&apos;s office screen</li>
                <li>Unpublish any time and the link stops working</li>
              </ul>
              <Link className="lnk" href="/product/cross-channel-dashboard">See Dashboards &rarr;</Link>
            </div>
            <figure className="shot agds">
              <div className="bar">
                <i></i><i></i><i></i>
                <span>verabix.com/share/k7x2m9</span>
              </div>
              <div className="agdb">
                <div className="agdh">
                  <div>
                    <b>Bloom Studio &mdash; Performance</b>
                    <span className="mono">Last 14 days &middot; EUR</span>
                  </div>
                  <span className="pill"><i className="vd g"></i>&nbsp;Live</span>
                </div>
                <div className="mwk">
                  <div><span className="mono">Spend</span><b>&euro;12,480</b></div>
                  <div><span className="mono">Revenue</span><b>&euro;64,900</b></div>
                  <div><span className="mono">ROAS</span><b>5.2&times;</b></div>
                </div>
                <div className="agbar">
                  <span className="mono">Revenue &middot; daily</span>
                  <div>
                    {[42, 48, 45, 53, 50, 61, 58, 55, 63, 60, 68, 72, 66, 75].map((h, i) => (
                      <i key={i} style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
                <div className="agtb">
                  <div className="agtr h"><span>Channel</span><span>Spend</span><span>ROAS</span></div>
                  <div className="agtr"><span>Meta Ads</span><span>&euro;8,210</span><span>5.6&times;</span></div>
                  <div className="agtr"><span>Google Ads</span><span>&euro;4,270</span><span>4.4&times;</span></div>
                </div>
              </div>
            </figure>
          </div>
        </section>

        {/* 05 Workspaces & Slack */}
        <section className="sec dark">
          <div className="wrap split rev">
            <div className="copy">
              <span className="mono glow">Workspaces &amp; Slack</span>
              <h2>Every client in its own room.<br />Vera in all of them.</h2>
              <p>
                One isolated workspace per client &mdash; their accounts, their rules,
                their dashboards. Put Verabix alerts in each client&apos;s Slack
                channel, and ask Vera about any of them right there.
              </p>
              <ul className="chk">
                <li>One workspace per client, nothing shared</li>
                <li>Copy data sources when you onboard a similar client</li>
                <li>Automation alerts to the client&apos;s channel</li>
                <li>@Vera answers about any client you&apos;ve given her</li>
              </ul>
              <Link className="lnk" href="/product/multi-workspace">See Multi-workspace &amp; Slack &rarr;</Link>
            </div>

            <div className="sm agsl">
              <div className="agsg">
                <aside className="agss">
                  <span className="mono">Channels</span>
                  <span># general</span>
                  <span># client-bloom</span>
                  <span className="on"># client-fjord-coffee</span>
                  <span># client-nordic-run</span>
                  <span># client-halo</span>
                </aside>
                <div>
                  <div className="smh"><span># client-fjord-coffee</span></div>
                  <div className="msg">
                    <span className="av"><VeraIconGlow /></span>
                    <div>
                      <b>Verabix</b> <span className="app">APP</span> <em>07:12</em>
                      <p><b>Budget guard</b> fired on <b>Google &middot; Brand Search</b>.</p>
                      <div className="att">
                        <span className="mono">Automation triggered</span>
                        <b>Spend DKK 10,240 &mdash; above DKK 10,000</b>
                        <span>Action taken: campaign paused &middot; email sent</span>
                      </div>
                    </div>
                  </div>
                  <div className="msg">
                    <span className="av u">L</span>
                    <div>
                      <b>Line</b> <em>08:03</em>
                      <p><span className="at">@Vera</span> what happened overnight with Brand Search?</p>
                    </div>
                  </div>
                  <div className="msg">
                    <span className="av"><VeraIconGlow /></span>
                    <div>
                      <b>Vera</b> <span className="app">APP</span> <em>08:03</em>
                      <p>
                        CPC jumped from DKK 4.10 to DKK 9.80 after 01:00 &mdash; a
                        competitor started bidding on &ldquo;fjord coffee&rdquo;.
                        I&apos;d restart with a CPC cap of DKK 6.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 06 Agency plan */}
        <section className="sec">
          <div className="wrap split">
            <div className="copy">
              <span className="mono ink">Agency plan</span>
              <h2>One price.<br />Every client.</h2>
              <p>No per-client fees. Add your tenth client &mdash; or your fortieth &mdash; for the same monthly price.</p>
            </div>
            <div className="mwpc on agpl">
              <div className="mwph">
                <b>Agency</b>
                <span className="pill">7-day free trial</span>
              </div>
              <div className="mwpp">
                <span>&euro;229</span>
                <em>/ month</em>
              </div>
              <ul>
                <li>Unlimited client workspaces</li>
                <li>Vera in Verabix and in Slack</li>
                <li>Dashboards with public links</li>
                <li>Automations on Meta Ads and Google Ads</li>
                <li>Instant, wizard and Google Sheet campaigns</li>
              </ul>
              <div className="ctas">
                <a className="btn" href="https://app.verabix.com">Start free trial</a>
                <a className="btn gh" href="mailto:admin@verabix.com?subject=Book%20a%20demo">Book a demo</a>
              </div>
            </div>
          </div>
        </section>

        {/* 07 FAQ */}
        <section className="sec alt">
          <div className="wrap split top">
            <div className="copy">
              <span className="mono ink">FAQ</span>
              <h2>Straight answers.</h2>
            </div>
            <div className="faq">
              <details open>
                <summary>Do clients need a Verabix login to see their numbers?</summary>
                <p>No. Publish a dashboard and share the link. Anyone with it sees the live dashboard, without logging in. Unpublish any time and the link stops working.</p>
              </details>
              <details>
                <summary>Is each client&apos;s data kept separate?</summary>
                <p>Yes. Every client gets an isolated workspace with its own data sources, dashboards, automations, campaigns and Vera recommendations.</p>
              </details>
              <details>
                <summary>Several clients share one ad account. Does that work?</summary>
                <p>Yes. Give each workspace a campaign filter, and it only sees campaigns whose name contains that text.</p>
              </details>
              <details>
                <summary>How many clients can I add?</summary>
                <p>As many as you like on the Agency plan. Pro includes 3 workspaces, Starter 1.</p>
              </details>
              <details>
                <summary>Can Vera answer about a specific client in Slack?</summary>
                <p>Yes. Name the client in your question. Vera knows which ad accounts belong to which workspace and answers from those.</p>
              </details>
              <details>
                <summary>Can I try it before committing?</summary>
                <p>Yes. Every plan starts with a 7-day free trial.</p>
              </details>
            </div>
          </div>
        </section>

        {/* 08 Keep exploring */}
        <section className="sec">
          <div className="wrap">
            <div className="shead">
              <span className="mono ink">Keep exploring</span>
            </div>
            <div className="grid4">
              <Link className="mod" href="/product/multi-workspace">
                <h3>Multi-workspace &amp; Slack</h3>
                <p>One workspace per client. Vera in your Slack.</p>
                <span className="arr">&rarr;</span>
              </Link>
              <Link className="mod" href="/product/cross-channel-dashboard">
                <h3>Dashboards</h3>
                <p>A live dashboard link for every client.</p>
                <span className="arr">&rarr;</span>
              </Link>
              <Link className="mod" href="/product/automations">
                <h3>Automations</h3>
                <p>Guardrails on every client budget, around the clock.</p>
                <span className="arr">&rarr;</span>
              </Link>
              <Link className="mod" href="/product/vera-ai">
                <h3>Vera AI</h3>
                <p>The analyst who knows every account.</p>
                <span className="arr">&rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          <div className="wrap ctaw">
            <div>
              <h2>More clients.<br />Not more hours.</h2>
              <p>Unlimited client workspaces on the Agency plan. Try it free for 7 days.</p>
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
