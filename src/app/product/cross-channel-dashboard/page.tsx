import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DashBuilder from './DashBuilder'

export const metadata: Metadata = {
  title: 'Dashboards — Build any marketing dashboard from one prompt',
  description:
    'Describe what you want to see. Vera builds the dashboard from your live Meta Ads, Google Ads and GA4 data — in seconds. Edit in plain English. Share with one link.',
}

export default function DashboardsPage() {
  return (
    <>
      <Header />
      <main>

        {/* ── 01 Hero ── */}
        <section className="dh">
          <div className="wrap">
            <div className="dht">
              <div>
                <span className="mono ink kk">Product · Dashboards</span>
                <h1>Any dashboard.<br />One prompt away.</h1>
              </div>
              <div className="dhr">
                <p className="lead">
                  Describe what you want to see. Vera builds the dashboard from your live
                  Meta Ads, Google Ads and GA4 data. Edit it in plain English. Share with
                  one link.
                </p>
                <div className="ctas">
                  <a className="btn btn-primary" href="mailto:admin@verabix.com?subject=Book%20a%20demo">
                    Book a demo &#8599;
                  </a>
                  <a className="btn gh" href="https://app.verabix.com">
                    Build your first dashboard
                  </a>
                </div>
              </div>
            </div>
            <DashBuilder />
          </div>
        </section>

        {/* ── 02 Stats ── */}
        <section className="works">
          <div className="wrap stats">
            <div>
              <b>1 prompt</b>
              <span>from idea to live dashboard</span>
            </div>
            <div>
              <b>0</b>
              <span>coding or drag-and-drop required</span>
            </div>
            <div>
              <b>Seconds</b>
              <span>to build. Not hours.</span>
            </div>
            <div>
              <b>1 link</b>
              <span>to share with anyone, no login needed</span>
            </div>
          </div>
        </section>

        {/* ── 03 Old way vs Verabix ── */}
        <section className="sec">
          <div className="wrap">
            <div className="shead">
              <span className="mono ink">The old way</span>
              <h2>Five tools and a week.<br />For one dashboard.</h2>
            </div>
            <div className="ovn">
              <div className="ovo">
                <div className="ovh">
                  <span>Before &middot; Connectors + BI tool</span>
                  <span className="ovlbl">Days</span>
                </div>
                <div className="ovt">
                  <span className="on">01</span>
                  <span><b>Export</b><br />Pull data out of Meta Ads and Google Ads</span>
                </div>
                <div className="ovt">
                  <span className="on">02</span>
                  <span><b>Connect</b><br />Pay for a third-party connector to sync it</span>
                </div>
                <div className="ovt">
                  <span className="on">03</span>
                  <span><b>Model</b><br />Map fields and fix mismatched metrics</span>
                </div>
                <div className="ovt">
                  <span className="on">04</span>
                  <span><b>Build</b><br />Drag charts around in Power BI, Looker Studio or Tableau</span>
                </div>
                <div className="ovt">
                  <span className="on">05</span>
                  <span><b>Maintain</b><br />Fix it every time an API or a campaign name changes</span>
                </div>
                <div className="ovf">3 subscriptions &middot; 1 analyst &middot; breaks when anything changes</div>
              </div>
              <div className="ovv">
                <div className="ovh">
                  <span>With Verabix</span>
                  <span className="ovlbl">Seconds</span>
                </div>
                <div className="ovt">
                  <span className="on">01</span>
                  <span><b>Connect</b><br />Meta Ads and Google Ads, once. Five minutes.</span>
                </div>
                <div className="ovt">
                  <span className="on">02</span>
                  <span><b>Ask</b><br />&ldquo;Weekly ROAS, spend and CPA for Meta and Google.&rdquo;</span>
                </div>
                <div className="ovt">
                  <span className="on">03</span>
                  <span><b>Done</b><br />Vera builds it on live data. Change it by asking.</span>
                </div>
                <div className="ovf">Included in Verabix &middot; no analyst &middot; always up to date</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 04 Edit with Vera ── */}
        <section className="sec alt">
          <div className="wrap split">
            <div className="copy">
              <span className="mono ink kk">Edit with Vera</span>
              <h2>Refine any dashboard<br />in plain English.</h2>
              <p>
                No drag-and-drop. No settings panel. Tell Vera what you want to add,
                remove or change &mdash; she does it instantly.
              </p>
              <ul className="chk">
                <li>Add or remove channels, campaigns and metrics</li>
                <li>Switch date ranges, filters and breakdowns mid-conversation</li>
                <li>Ask for the chart type you prefer</li>
              </ul>
            </div>
            <div className="edl">
              <div className="edr">
                <p>&ldquo;Add CPA next to ROAS.&rdquo;</p>
                <span className="mono">+ KPI &middot; CPA &middot; All channels</span>
              </div>
              <div className="edr">
                <p>&ldquo;Only show Spring Sale and Black Friday campaigns.&rdquo;</p>
                <span className="mono">Filter applied &middot; 2 campaigns</span>
              </div>
              <div className="edr">
                <p>&ldquo;Switch the ROAS widget to Google only.&rdquo;</p>
                <span className="mono">ROAS &middot; Google Ads updated</span>
              </div>
              <div className="edr">
                <p>&ldquo;Give me a breakdown by day for the last 30 days.&rdquo;</p>
                <span className="mono">+ Line chart &middot; Daily ROAS &middot; 30 days</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 05 Publish & share ── */}
        <section className="sec dark">
          <div className="wrap split rev">
            <div className="copy">
              <span className="mono glow kk">Publish &amp; share</span>
              <h2>One link.<br />Always live.</h2>
              <p>
                Publish any dashboard to a public link &mdash; no Verabix account needed
                to view it. Put it on the office screen, pin it in Slack, send it to a
                client.
              </p>
              <ul className="chk">
                <li>No login needed to view</li>
                <li>Data refreshes automatically</li>
                <li>Revoke access any time</li>
              </ul>
            </div>
            <div className="tv">
              <div className="tvs">
                <div className="tvh">
                  <div className="lock">
                    <svg viewBox="0 0 64 64" aria-hidden="true">
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
                    <span>verabix</span>
                  </div>
                  <span className="tvt">Marketing &middot; This week</span>
                  <span className="pill"><i style={{ background: '#1F9D55' }} />&nbsp;Live</span>
                </div>
                <div className="tvk">
                  <div><span>Spend</span><b>DKK 96,420</b></div>
                  <div><span>ROAS</span><b>4.2&times;</b></div>
                  <div><span>CPA</span><b>DKK 296</b></div>
                  <div><span>Conv.</span><b>1,297</b></div>
                </div>
                <svg className="tvc" viewBox="0 0 400 100" preserveAspectRatio="none" aria-hidden="true">
                  <path
                    d="M0 88 C40 78 80 72 130 58 S200 42 250 30 S320 15 400 8 L400 100 L0 100 Z"
                    fill="rgba(27,58,140,0.07)"
                  />
                  <path
                    d="M0 88 C40 78 80 72 130 58 S200 42 250 30 S320 15 400 8"
                    fill="none"
                    stroke="#1B3A8C"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="tvb" />
              <div className="tvl">
                <span className="mono">Public link</span>
                <b>verabix.com/d/k7p2-marketing</b>
                <span className="cp">Copy</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 06 Building blocks ── */}
        <section className="sec">
          <div className="wrap">
            <div className="shead row">
              <div>
                <span className="mono ink">Building blocks</span>
                <h2>Every widget type,<br />out of the box.</h2>
              </div>
              <p>
                Add any widget by asking Vera &mdash; or combine them into templates for
                your whole team.
              </p>
            </div>
            <div className="wg">
              <div className="wgc">
                <div className="wgv kpi">
                  <span className="mono">ROAS &middot; All</span>
                  <b>4.2&times;</b>
                  <em>+0.2</em>
                </div>
                <h4>KPI card</h4>
                <p>Single metric with delta. Tracks spend, ROAS, CPA, conversions or any custom metric.</p>
              </div>
              <div className="wgc">
                <div className="wgv line">
                  <svg viewBox="0 0 160 80" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0 65 C30 55 70 48 100 36 S140 24 160 18 L160 80 L0 80 Z" fill="rgba(27,58,140,0.07)" />
                    <path d="M0 65 C30 55 70 48 100 36 S140 24 160 18" fill="none" stroke="#1B3A8C" strokeWidth="2" />
                  </svg>
                </div>
                <h4>Line chart</h4>
                <p>Trend over time &mdash; daily, weekly or monthly. Works across any channel or combined.</p>
              </div>
              <div className="wgc">
                <div className="wgv bar">
                  <i style={{ height: '60%' }} />
                  <i style={{ height: '85%' }} />
                  <i style={{ height: '100%' }} />
                  <i style={{ height: '72%' }} />
                  <i style={{ height: '45%' }} />
                </div>
                <h4>Bar chart</h4>
                <p>Compare campaigns, ad sets or channels side by side. Group or stack bars.</p>
              </div>
              <div className="wgc">
                <div className="wgv tbl">
                  <div><span>Spring Sale PMax</span><em>4.8&times;</em></div>
                  <div><span>Retargeting DK</span><em>3.9&times;</em></div>
                  <div><span>Brand Search</span><em>6.2&times;</em></div>
                </div>
                <h4>Table</h4>
                <p>Ranked list with as many columns as you need. Sortable, filterable, exportable.</p>
              </div>
            </div>
            <div className="flt">
              <span className="chip">Meta Ads</span>
              <span className="chip">Google Ads</span>
              <span className="chip">GA4 &middot; Sessions</span>
              <span className="chip">Custom metric</span>
              <span className="chip">Spend &middot; by channel</span>
              <span className="chip">ROAS &middot; by campaign</span>
            </div>
          </div>
        </section>

        {/* ── 07 Overview screenshot ── */}
        <section className="sec alt">
          <div className="wrap split">
            <div className="copy">
              <span className="mono ink kk">Overview</span>
              <h2>Everything you check every morning.<br />In one place.</h2>
              <p>
                Your default dashboard: spend, ROAS, CPA and top campaigns &mdash; across
                Meta and Google Ads, side by side, with GA4 conversion data alongside.
              </p>
              <a className="lnk" href="https://app.verabix.com">
                See your overview &rarr;
              </a>
            </div>
            <figure className="shot">
              <div className="bar"><i /><i /><i /><span>app.verabix.com</span></div>
              <img
                src="/shots/overview-performance.jpg"
                alt="Verabix overview dashboard showing spend, ROAS and top campaigns across Meta and Google Ads"
              />
            </figure>
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
                <summary>Does the dashboard update automatically?</summary>
                <p>
                  Yes. Verabix pulls fresh data from Meta, Google Ads and GA4 on a daily
                  basis &mdash; your dashboard shows yesterday&apos;s numbers by default,
                  and you can drill into any date range manually.
                </p>
              </details>
              <details>
                <summary>Can I share a dashboard with someone who doesn&apos;t have Verabix?</summary>
                <p>
                  Yes. Every published dashboard gets a public link that anyone can view
                  &mdash; no account or login needed. You can revoke the link at any time
                  from your workspace.
                </p>
              </details>
              <details>
                <summary>How is this different from Supermetrics or Funnel.io?</summary>
                <p>
                  Supermetrics and Funnel move data into Google Sheets or a BI tool &mdash;
                  you still build the dashboard yourself. Verabix builds it for you from a
                  prompt, keeps it updated and lets Vera answer questions about it in plain
                  English.
                </p>
              </details>
              <details>
                <summary>Can I build custom dashboards, or only the default one?</summary>
                <p>
                  Every dashboard in Verabix is built from a prompt &mdash; including the
                  default overview. You can build as many custom dashboards as you want and
                  edit any of them at any time.
                </p>
              </details>
              <details>
                <summary>Does it replace Power BI or Google Looker Studio?</summary>
                <p>
                  For marketing performance data from Meta and Google Ads, yes &mdash; and
                  it&apos;s faster to set up and update. If you need to connect dozens of
                  other data sources or build complex cross-department reports, Power BI or
                  Looker Studio are still the right tools.
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
            <div className="grid3">
              <a className="mod" href="/product/vera-ai">
                <h3>Vera AI</h3>
                <p>Ask questions about your dashboards in plain English.</p>
                <span className="arr">&rarr;</span>
              </a>
              <a className="mod" href="/product/automations">
                <h3>Automations</h3>
                <p>Turn a dashboard finding into a rule that acts on its own.</p>
                <span className="arr">&rarr;</span>
              </a>
              <a className="mod" href="/product/campaigns">
                <h3>Campaigns</h3>
                <p>From dashboard insight to live campaign in minutes.</p>
                <span className="arr">&rarr;</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="cta">
          <div className="wrap ctaw">
            <div>
              <h2>Build your first<br />dashboard today.</h2>
              <p>Connect Meta Ads, Google Ads and GA4. Type what you want to see.</p>
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
