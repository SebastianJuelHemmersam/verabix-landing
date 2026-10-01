import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WizardStepper from './WizardStepper'
import SheetSimulator from './SheetSimulator'

export const metadata: Metadata = {
  title: 'Campaigns — Three ways to build, in one place',
  description:
    'Paste a URL for an instant campaign, step through the full wizard for manual control, or link a Google Sheet to launch in bulk. All three in Verabix.',
}

function VeraIcon() {
  return (
    <svg viewBox="0 0 64 64" width="28" height="28" aria-hidden="true">
      <rect x="3" y="3" width="58" height="58" rx="16" fill="#1B3A8C" />
      <path d="M19 23L32 45L45 23" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="49" cy="15" r="4.5" fill="#8FA6F0" />
    </svg>
  )
}

export default function CampaignsPage() {
  return (
    <>
      <Header />
      <main>

        {/* ── 01 Hero ── */}
        <section className="cphero">
          <div className="wrap">
            <div className="shead">
              <span className="mono ink kk">Product &middot; Campaigns</span>
              <h1>Three ways to build<br />a campaign.</h1>
              <p className="lead" style={{ maxWidth: 560 }}>
                Paste a URL for an instant campaign, step through the full wizard for
                manual control, or link a Google Sheet to launch in bulk.
              </p>
            </div>
            <div className="ways">
              <a href="#instant" className="way">
                <div className="wh">
                  <span className="pill">01</span>
                  <div className="lv">
                    <i className="on" /><i className="on" /><i /><i /><i />
                  </div>
                </div>
                <h3>Instant</h3>
                <span className="wtg">Paste a URL. Done in two minutes.</span>
                <p className="wd">
                  Vera reads your landing page, pre-fills the headline, copy and goal,
                  and builds a ready-to-launch campaign across Meta and Google Ads.
                </p>
                <div className="wm">
                  <div><span>Time to launch</span><b>2 min</b></div>
                  <div><span>Input required</span><b>URL only</b></div>
                  <div><span>Best for</span><b>Fast tests</b></div>
                </div>
                <div className="wb">
                  <p>No ad copy writing. No manual field-filling. Vera does the work.</p>
                </div>
                <span className="lnk">See how it works &rarr;</span>
              </a>

              <a href="#wizard" className="way">
                <div className="wh">
                  <span className="pill">02</span>
                  <div className="lv">
                    <i className="on" /><i className="on" /><i className="on" /><i className="on" /><i />
                  </div>
                </div>
                <h3>Advanced</h3>
                <span className="wtg">Six steps. Full control.</span>
                <p className="wd">
                  Set platform, goal, audience, budget, creative and review — step by
                  step. Every option exposed, every field yours to set.
                </p>
                <div className="wm">
                  <div><span>Steps</span><b>6</b></div>
                  <div><span>Platforms</span><b>Meta + Google</b></div>
                  <div><span>Best for</span><b>Precise campaigns</b></div>
                </div>
                <div className="wb">
                  <p>When you know exactly what you want and need every dial.</p>
                </div>
                <span className="lnk">See the wizard &rarr;</span>
              </a>

              <a href="#sheet" className="way">
                <div className="wh">
                  <span className="pill">03</span>
                  <div className="lv">
                    <i className="on" /><i className="on" /><i className="on" /><i className="on" /><i className="on" />
                  </div>
                </div>
                <h3>Bulk from sheet</h3>
                <span className="wtg">Link a Google Sheet. Launch at scale.</span>
                <p className="wd">
                  Plan campaigns in Google Sheets — one row per campaign. Vera reads
                  the sheet and creates every campaign automatically.
                </p>
                <div className="wm">
                  <div><span>Campaigns at once</span><b>Unlimited</b></div>
                  <div><span>Manual steps</span><b>0</b></div>
                  <div><span>Best for</span><b>Agencies &amp; scale</b></div>
                </div>
                <div className="wb">
                  <p>Upload once, schedule it, or watch a column — your choice.</p>
                </div>
                <span className="lnk">See how it works &rarr;</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── 02 Stats ── */}
        <section className="works">
          <div className="wrap stats">
            <div><b>3</b><span>ways to build a campaign</span></div>
            <div><b>2 min</b><span>from URL to live campaign</span></div>
            <div><b>0</b><span>copy-pasting into Ads Manager</span></div>
            <div><b>Meta + Google</b><span>from a single interface</span></div>
          </div>
        </section>

        {/* ── 03 Instant campaigns ── */}
        <section className="sec" id="instant">
          <div className="wrap split">
            <div className="copy">
              <span className="mono ink kk">01 &middot; Instant</span>
              <h2>From URL to campaign<br />in two minutes.</h2>
              <p>
                Paste the landing page URL. Vera reads the page — headline, copy,
                product images, goal — and builds the campaign for you. Review,
                adjust if needed, and launch.
              </p>
              <ul className="chk">
                <li>Headline and primary text generated from your page</li>
                <li>Goal and bid strategy pre-filled from your page structure</li>
                <li>Images pulled from your landing page automatically</li>
                <li>Works across Meta Ads and Google Ads</li>
              </ul>
              <div className="ctas" style={{ marginTop: 8 }}>
                <a className="btn btn-primary" href="https://app.verabix.com">
                  Try it now &rarr;
                </a>
              </div>
            </div>

            <div className="ins">
              {/* URL input card */}
              <div className="isr">
                <div className="iurl">
                  <span>nordicrun.dk/autumn-collection</span>
                  <button className="btn btn-primary btn-xs">Go</button>
                </div>
                <div className="igoal">
                  <span className="mono">GOAL</span>
                  <span className="chip on">Sales</span>
                  <span className="chip">Traffic</span>
                  <span className="chip">Leads</span>
                  <span className="mono" style={{ marginLeft: 'auto' }}>PLATFORM</span>
                  <span className="chip">Meta</span>
                  <span className="chip">Google</span>
                  <span className="chip on">Both</span>
                </div>
                <div className="iread">
                  <VeraIcon />
                  <div>
                    <b>Vera read your landing page.</b><br />
                    Headline, copy, goal and images pulled automatically.
                  </div>
                </div>
              </div>

              {/* Draft card */}
              <div className="idr">
                <div className="idh">
                  <b>Autumn Sale &mdash; Nordic Run</b>
                  <span className="pill sm">DRAFT</span>
                </div>
                <div className="idg">
                  <div className="ip">
                    <i className="im0" />
                    <i className="im1" />
                    <i className="im2" />
                  </div>
                  <div className="itx">
                    <div>
                      <span className="mono">HEADLINE</span>
                      <b>Autumn running gear. Free shipping.</b>
                    </div>
                    <div>
                      <span className="mono">PRIMARY TEXT</span>
                      <p>Waterproof layers built for Nordic weather. Shop the autumn collection now.</p>
                    </div>
                    <div className="itg">
                      <span className="mono">PLATFORMS</span>
                      <span className="chip on">Meta Ads</span>
                      <span className="chip on">Google Ads</span>
                    </div>
                  </div>
                </div>
                <div className="ida">
                  <button className="btn btn-primary btn-xs">Review &amp; launch</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 04 Advanced wizard ── */}
        <section className="sec alt" id="wizard">
          <div className="wrap">
            <div className="shead row">
              <div>
                <span className="mono ink kk">02 &middot; Advanced</span>
                <h2>Every option.<br />Six steps.</h2>
              </div>
              <p>
                When you need full control over platform, bidding, audience and
                creative — the wizard walks you through every decision, step by step.
              </p>
            </div>
            <WizardStepper />
          </div>
        </section>

        {/* ── 05 Bulk from sheet ── */}
        <section className="sec dark" id="sheet">
          <div className="wrap">
            <div className="shead row">
              <div>
                <span className="mono glow kk">03 &middot; Bulk from sheet</span>
                <h2>Plan in a sheet.<br />Launch at scale.</h2>
              </div>
              <p style={{ color: '#B5B5B5' }}>
                One row per campaign. Vera reads the sheet — once, on a schedule,
                or when a column value changes — and creates every campaign.
                No copy-pasting.
              </p>
            </div>
            <SheetSimulator />
          </div>
        </section>

        {/* ── 06 Every campaign ── */}
        <section className="sec">
          <div className="wrap split">
            <div className="copy">
              <span className="mono ink kk">All campaigns, one place</span>
              <h2>Every campaign<br />in one table.</h2>
              <p>
                Instant campaigns, wizard campaigns and sheet campaigns all land
                in the same table. Filter, sort, edit budgets and pause &mdash;
                across Meta and Google Ads, without switching tabs.
              </p>
              <ul className="chk">
                <li>All creation methods in one view</li>
                <li>Meta Ads and Google Ads side by side</li>
                <li>Edit budgets and status without leaving Verabix</li>
              </ul>
              <a className="lnk" href="https://app.verabix.com">
                See your campaigns &rarr;
              </a>
            </div>
            <figure className="shot">
              <div className="bar"><i /><i /><i /><span>app.verabix.com/campaigns</span></div>
              <img
                src="/shots/campaigns.png"
                alt="Campaigns table in Verabix showing instant, wizard and sheet campaigns side by side"
              />
            </figure>
          </div>
        </section>

        {/* ── 07 FAQ ── */}
        <section className="sec alt">
          <div className="wrap split top">
            <div className="copy">
              <span className="mono ink">FAQ</span>
              <h2>Straight answers.</h2>
            </div>
            <div className="faq">
              <details open>
                <summary>How does Vera generate the campaign from a URL?</summary>
                <p>
                  Vera reads your landing page — headline, body copy, images and page
                  structure — and uses that to pre-fill the campaign name, headline,
                  primary text, goal and creatives. You review everything before it goes
                  live.
                </p>
              </details>
              <details>
                <summary>Can I edit the campaign after Vera builds it?</summary>
                <p>
                  Yes. The instant campaign creates a draft you review before launching.
                  Change any field — headline, budget, audience, platforms — before you
                  hit launch.
                </p>
              </details>
              <details>
                <summary>What does the advanced wizard let me control?</summary>
                <p>
                  Platform (Meta, Google or both), objective, bid strategy, conversion
                  event, audience (location, age, gender, placements), budget type and
                  amount, schedule, and creative (headline, primary text, media).
                </p>
              </details>
              <details>
                <summary>How does the Google Sheet trigger work?</summary>
                <p>
                  You choose from three trigger types: upload once (runs immediately),
                  scheduled check (every 15–60 minutes), or variable trigger (watches a
                  column — when the value matches, the campaign launches). All three are
                  configurable from the same interface.
                </p>
              </details>
              <details>
                <summary>Which ad platforms does Campaigns support?</summary>
                <p>
                  Meta Ads and Google Ads. Instant and advanced wizard support both at
                  once. Sheet campaigns currently support Meta Ads.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* ── 08 Keep exploring ── */}
        <section className="sec">
          <div className="wrap">
            <div className="shead">
              <span className="mono ink">Keep exploring</span>
            </div>
            <div className="grid4">
              <a className="mod" href="/product/automations">
                <h3>Automations</h3>
                <p>Set rules that pause, scale or alert — checked every two minutes.</p>
                <span className="arr">&rarr;</span>
              </a>
              <a className="mod" href="/product/cross-channel-dashboard">
                <h3>Dashboards</h3>
                <p>Build any marketing dashboard from one prompt.</p>
                <span className="arr">&rarr;</span>
              </a>
              <a className="mod" href="/product/vera-ai">
                <h3>Vera AI</h3>
                <p>Ask questions about your campaigns and dashboards in plain English.</p>
                <span className="arr">&rarr;</span>
              </a>
              <a className="mod" href="/product/multi-workspace">
                <h3>Multi-workspace</h3>
                <p>Separate workspaces per client. Alerts in their Slack.</p>
                <span className="arr">&rarr;</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="cta">
          <div className="wrap ctaw">
            <div>
              <h2>Build your first<br />campaign today.</h2>
              <p>Paste a URL. Connect Meta Ads or Google Ads. Launch in two minutes.</p>
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
