import Header from '@/components/Header'
import Footer from '@/components/Footer'

function HeroVisual() {
  const FS = "'Mona Sans Variable','Mona Sans',system-ui,sans-serif"
  const FM = "'JetBrains Mono',ui-monospace,monospace"
  return (
    <svg viewBox="0 0 660 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Data flows from Meta Ads, Google Ads, GA4 and Slack into Vera, and actions flow back out">

      {/* Input paths */}
      <path id="vp0" d="M142 58C179.98 58 179.98 196 219.96 196" fill="none" stroke="#E2E2E2" strokeWidth="1.5"/>
      <path id="vp2" d="M142 150C179.98 150 179.98 196 219.96 196" fill="none" stroke="#E2E2E2" strokeWidth="1.5"/>
      <path id="vp4" d="M142 242C179.98 242 179.98 196 219.96 196" fill="none" stroke="#E2E2E2" strokeWidth="1.5"/>
      <path id="vp6" d="M142 334C179.98 334 179.98 196 219.96 196" fill="none" stroke="#E2E2E2" strokeWidth="1.5"/>

      {/* Output paths */}
      <path id="vp1" d="M370.04 196C410.02 196 410.02 58 448 58" fill="none" stroke="#C9D3F2" strokeWidth="1.5"/>
      <path id="vp3" d="M370.04 196C410.02 196 410.02 150 448 150" fill="none" stroke="#C9D3F2" strokeWidth="1.5"/>
      <path id="vp5" d="M370.04 196C410.02 196 410.02 242 448 242" fill="none" stroke="#C9D3F2" strokeWidth="1.5"/>
      <path id="vp7" d="M370.04 196C410.02 196 410.02 334 448 334" fill="none" stroke="#C9D3F2" strokeWidth="1.5"/>

      {/* Traveling dots — input side (black) */}
      <circle r="3.2" fill="#000"><animateMotion dur="2.6s" begin="0s" repeatCount="indefinite"><mpath href="#vp0"/></animateMotion></circle>
      <circle r="3.2" fill="#000"><animateMotion dur="2.85s" begin="-0.5s" repeatCount="indefinite"><mpath href="#vp2"/></animateMotion></circle>
      <circle r="3.2" fill="#000"><animateMotion dur="3.1s" begin="-1.0s" repeatCount="indefinite"><mpath href="#vp4"/></animateMotion></circle>
      <circle r="3.2" fill="#000"><animateMotion dur="3.35s" begin="-1.5s" repeatCount="indefinite"><mpath href="#vp6"/></animateMotion></circle>

      {/* Traveling dots — output side (Ink Blue) */}
      <circle r="3.2" fill="#1B3A8C"><animateMotion dur="2.6s" begin="-1.3s" repeatCount="indefinite"><mpath href="#vp1"/></animateMotion></circle>
      <circle r="3.2" fill="#1B3A8C"><animateMotion dur="2.85s" begin="-1.425s" repeatCount="indefinite"><mpath href="#vp3"/></animateMotion></circle>
      <circle r="3.2" fill="#1B3A8C"><animateMotion dur="3.1s" begin="-1.55s" repeatCount="indefinite"><mpath href="#vp5"/></animateMotion></circle>
      <circle r="3.2" fill="#1B3A8C"><animateMotion dur="3.35s" begin="-1.675s" repeatCount="indefinite"><mpath href="#vp7"/></animateMotion></circle>

      {/* Input pills */}
      <rect x="0" y="38" width="140" height="40" rx="20" fill="#fff" stroke="#EBEBEB" strokeWidth="1"/>
      <circle cx="20" cy="58" r="4.5" fill="#D6D6D6"/>
      <text x="32" y="58" fontFamily={FS} fontSize="14.5" fontWeight="500" fill="#000" dominantBaseline="central">Meta Ads</text>

      <rect x="0" y="130" width="140" height="40" rx="20" fill="#fff" stroke="#EBEBEB" strokeWidth="1"/>
      <circle cx="20" cy="150" r="4.5" fill="#D6D6D6"/>
      <text x="32" y="150" fontFamily={FS} fontSize="14.5" fontWeight="500" fill="#000" dominantBaseline="central">Google Ads</text>

      <rect x="0" y="222" width="140" height="40" rx="20" fill="#fff" stroke="#EBEBEB" strokeWidth="1"/>
      <circle cx="20" cy="242" r="4.5" fill="#D6D6D6"/>
      <text x="32" y="242" fontFamily={FS} fontSize="14.5" fontWeight="500" fill="#000" dominantBaseline="central">GA4</text>

      <rect x="0" y="314" width="140" height="40" rx="20" fill="#fff" stroke="#EBEBEB" strokeWidth="1"/>
      <circle cx="20" cy="334" r="4.5" fill="#D6D6D6"/>
      <text x="32" y="334" fontFamily={FS} fontSize="14.5" fontWeight="500" fill="#000" dominantBaseline="central">Slack</text>

      {/* Output action cards */}
      <rect x="450" y="33" width="210" height="50" rx="25" fill="#fff" stroke="#C9D3F2" strokeWidth="1"/>
      <circle cx="475" cy="58" r="4.5" fill="#1B3A8C">
        <animate attributeName="opacity" values="1;.35;1" dur="2.6s" begin="0s" repeatCount="indefinite"/>
      </circle>
      <text x="488" y="54" fontFamily={FM} fontSize="10" letterSpacing=".6" fill="#666666">META ADS</text>
      <text x="488" y="71" fontFamily={FS} fontSize="14" fontWeight="600" fill="#1B3A8C">Budget +18%</text>

      <rect x="450" y="125" width="210" height="50" rx="25" fill="#fff" stroke="#C9D3F2" strokeWidth="1"/>
      <circle cx="475" cy="150" r="4.5" fill="#1B3A8C">
        <animate attributeName="opacity" values="1;.35;1" dur="2.85s" begin="-0.5s" repeatCount="indefinite"/>
      </circle>
      <text x="488" y="146" fontFamily={FM} fontSize="10" letterSpacing=".6" fill="#666666">GOOGLE ADS</text>
      <text x="488" y="163" fontFamily={FS} fontSize="13" fontWeight="600" fill="#1B3A8C">Bids −6% · 4 campaigns</text>

      <rect x="450" y="217" width="210" height="50" rx="25" fill="#fff" stroke="#C9D3F2" strokeWidth="1"/>
      <circle cx="475" cy="242" r="4.5" fill="#1B3A8C">
        <animate attributeName="opacity" values="1;.35;1" dur="3.1s" begin="-1.0s" repeatCount="indefinite"/>
      </circle>
      <text x="488" y="238" fontFamily={FM} fontSize="10" letterSpacing=".6" fill="#666666">GA4</text>
      <text x="488" y="255" fontFamily={FS} fontSize="14" fontWeight="600" fill="#1B3A8C">Conversions synced</text>

      <rect x="450" y="309" width="210" height="50" rx="25" fill="#fff" stroke="#C9D3F2" strokeWidth="1"/>
      <circle cx="475" cy="334" r="4.5" fill="#1B3A8C">
        <animate attributeName="opacity" values="1;.35;1" dur="3.35s" begin="-1.5s" repeatCount="indefinite"/>
      </circle>
      <text x="488" y="330" fontFamily={FM} fontSize="10" letterSpacing=".6" fill="#666666">SLACK</text>
      <text x="488" y="347" fontFamily={FS} fontSize="14" fontWeight="600" fill="#1B3A8C">Task done · reply sent</text>

      {/* Vera center node */}
      <circle cx="295" cy="196" r="86.4" fill="none" stroke="#F0F0F0" strokeWidth="1"/>
      <circle cx="295" cy="196" r="86.4" fill="none" stroke="#1B3A8C" strokeWidth="1.6" strokeDasharray="97.7 999" strokeLinecap="round">
        <animateTransform attributeName="transform" type="rotate" from="0 295 196" to="360 295 196" dur="6s" repeatCount="indefinite"/>
      </circle>
      <circle cx="295" cy="196" r="71.04" fill="#FAFAFA" stroke="#EBEBEB" strokeWidth="1"/>

      {/* Logo mark — 48px rendered, centered at (295, 196) */}
      <g transform="translate(271,172) scale(0.75)">
        <rect x="3" y="3" width="58" height="58" rx="16" fill="#000"/>
        <path d="M19 23L32 45L45 23" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="49" cy="15" r="4.5" fill="#1B3A8C"/>
      </g>

      <text x="295" y="304" textAnchor="middle" fontFamily={FM} fontSize="11" letterSpacing="1" fill="#666666">VERA</text>

      {/* Top labels */}
      <text x="0" y="14" fontFamily={FM} fontSize="11" letterSpacing="1" fill="#666666">SIGNALS IN</text>
      <text x="660" y="14" textAnchor="end" fontFamily={FM} fontSize="11" letterSpacing="1" fill="#1B3A8C">ACTIONS OUT</text>

    </svg>
  )
}

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>

        {/* ── Hero v2 ── */}
        <section className="hero-v2">
          <div className="hero-v2-inner">
            <div className="hero-v2-copy">
              <h1 className="hero-h1">Gut feeling is not a strategy.</h1>
              <p className="hero-body">Verabix pulls data from Meta, Google and GA4. Vera, your AI marketing analyst, decides what to change and pushes it back. Need something? Ask her in Slack — she gets it done in Verabix.</p>
              <div className="hero-ctas">
                <a className="btn btn-primary" href="mailto:admin@verabix.com?subject=Book%20a%20demo">Book a demo ↗</a>
                <a className="btn btn-ghost" href="#how-it-works">See the loop</a>
              </div>
              <div className="hero-steps">
                <div className="hero-step">
                  <div className="hero-step-lbl">01 · IN</div>
                  <div className="hero-step-title">Signals</div>
                  <div className="hero-step-desc">Spend, clicks and conversions from every channel.</div>
                </div>
                <div className="hero-step">
                  <div className="hero-step-lbl">02 · VERA</div>
                  <div className="hero-step-title">Decisions</div>
                  <div className="hero-step-desc">What to scale, cut or fix — with the numbers.</div>
                </div>
                <div className="hero-step">
                  <div className="hero-step-lbl">03 · OUT</div>
                  <div className="hero-step-title">Actions</div>
                  <div className="hero-step-desc">Pushed back to the channels. Results feed the next loop.</div>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <HeroVisual />
            </div>
          </div>
        </section>

        {/* ── 02 Works with ── */}
        <section className="works">
          <div className="wrap wrow">
            <span className="mono">Works with</span>
            <div className="wl">
              <span>Meta Ads</span>
              <span>Google Ads</span>
              <span>Google Analytics 4</span>
              <span>Slack</span>
            </div>
          </div>
        </section>

        {/* ── 03 Problem ── */}
        <section className="sec" id="loop">
          <div className="wrap">
            <div className="shead">
              <span className="mono ink">The problem</span>
              <h2>Three platforms.<br/>Three answers.<br/>Zero decisions.</h2>
            </div>
            <div className="truth">
              <div className="tc">
                <span className="mono">Meta Ads says</span>
                <b>1,284</b>
                <small>purchases</small>
              </div>
              <div className="tc">
                <span className="mono">Google Ads says</span>
                <b>912</b>
                <small>purchases</small>
              </div>
              <div className="tc">
                <span className="mono">GA4 says</span>
                <b>1,041</b>
                <small>purchases</small>
              </div>
              <div className="tc v">
                <span className="mono">Verabix shows</span>
                <b>Why.</b>
                <small>Same date range, same definitions, side by side — so you can see where they disagree and decide what to trust.</small>
              </div>
            </div>
            <p className="note">Each platform grades its own homework. Verabix puts them on the same page.</p>
          </div>
        </section>

        {/* ── 04 Dashboard ── */}
        <section className="sec alt">
          <div className="wrap split">
            <div className="copy">
              <span className="mono ink">Cross-channel dashboard</span>
              <h2>One set of numbers.<br/>Nothing to argue about.</h2>
              <p>Stop switching between Ads Manager, Google Ads and GA4. Verabix pulls all three into one dashboard your whole team reads the same way.</p>
              <ul className="chk">
                <li>Spend, ROAS, CPA and revenue across every channel</li>
                <li>Platform numbers next to GA4, on the same date range</li>
                <li>Top campaigns ranked by what they actually return</li>
              </ul>
              <a className="lnk" href="/product/cross-channel-dashboard">Explore the dashboard →</a>
            </div>
            <figure className="shot">
              <div className="bar"><i/><i/><i/><span>app.verabix.com</span></div>
              <img src="/shots/overview-performance.jpg" alt="Verabix cross-channel performance overview"/>
            </figure>
          </div>
        </section>

        {/* ── 05 Vera ── */}
        <section className="sec dark">
          <div className="wrap split rev">
            <div className="copy">
              <span className="mono glow">Vera AI</span>
              <h2>Meet Vera.<br/>She already read your data.</h2>
              <p>Vera is your AI marketing analyst. Ask her anything in plain English — she reasons across every channel and answers with the exact numbers, so you can check every claim.</p>
              <ul className="chk">
                <li>Answers with numbers and sources — never vibes</li>
                <li>Spots what changed and tells you why</li>
                <li>Does the work: reports, campaigns, budget changes</li>
              </ul>
              <a className="lnk" href="/product/vera-ai">Meet Vera →</a>
            </div>
            <figure className="shot">
              <div className="bar"><i/><i/><i/><span>app.verabix.com</span></div>
              <img src="/shots/vera-chat-demo.gif" alt="Vera answering a question in Verabix"/>
            </figure>
          </div>
          <div className="wrap slack">
            <div className="scopy">
              <span className="mono glow">Vera in Slack</span>
              <h3>Ask her in Slack.<br/>She gets it done in Verabix.</h3>
              <p>No new tab. Mention @Vera in any channel and she pulls the numbers, builds the report or drafts the campaign — inside Verabix.</p>
            </div>
            <div className="sm">
              <div className="smh"><span># marketing</span></div>
              <div className="msg">
                <span className="av u">S</span>
                <div>
                  <b>Sara</b> <em>09:12</em>
                  <p><span className="at">@Vera</span> how did Meta do last week vs. Google? Make a quick report for the team.</p>
                </div>
              </div>
              <div className="msg">
                <span className="av">
                  <svg viewBox="0 0 64 64" width="40" height="40" aria-hidden="true">
                    <rect x="3" y="3" width="58" height="58" rx="16" fill="#000"/>
                    <path d="M19 23L32 45L45 23" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="49" cy="15" r="4.5" fill="#1B3A8C"/>
                  </svg>
                </span>
                <div>
                  <b>Vera</b> <span className="app">APP</span> <em>09:12</em>
                  <p>Google won the week: <strong>4.1× ROAS</strong> vs. Meta&apos;s <strong>2.8×</strong>. Meta&apos;s CPA rose 22% after Tuesday&apos;s creative change.</p>
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

        {/* ── 06 Actions ── */}
        <section className="sec">
          <div className="wrap">
            <div className="shead">
              <span className="mono ink">From insight to action</span>
              <h2>Found it. Fixed it.<br/>Without the busywork.</h2>
            </div>
            <div className="duo">
              <div className="dcard">
                <div>
                  <span className="mono">Instant campaigns</span>
                  <h3>Paste a URL. Get a campaign.</h3>
                  <p>Pick a goal and Vera writes the headlines, ad copy and targeting — ready to push to Meta and Google without leaving Verabix.</p>
                  <a className="lnk" href="/product/instant-campaigns">See how →</a>
                </div>
                <figure className="shot">
                  <img src="/shots/campaigns.png" alt="Campaign list in Verabix"/>
                </figure>
              </div>
              <div className="dcard">
                <div>
                  <span className="mono">Automations</span>
                  <h3>Rules that never sleep.</h3>
                  <p>Pause what&apos;s bleeding, scale what&apos;s working and get an alert in Slack — across Meta and Google at once.</p>
                  <a className="lnk" href="/product/automations">See automations →</a>
                </div>
                <figure className="shot">
                  <img src="/shots/automations-active.jpg" alt="Active automations in Verabix"/>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* ── 07 Platform ── */}
        <section className="sec alt" id="platform">
          <div className="wrap">
            <div className="shead row">
              <div>
                <span className="mono ink">The platform</span>
                <h2>Everything a performance team needs.<br/>One login.</h2>
              </div>
              <p>Data, analysis and execution in one product. No exports. No tab-switching. No arguing about whose number is right.</p>
            </div>
            <div className="grid3">
              <a className="mod" href="/product/cross-channel-dashboard"><span className="mono">01</span><h3>Cross-channel Dashboard</h3><p>Meta Ads, Google Ads and GA4 in one view. Same date range. Same metrics.</p><span className="arr">→</span></a>
              <a className="mod" href="/product/vera-ai"><span className="mono">02</span><h3>Vera AI</h3><p>Your AI marketing analyst. Ask anything — she answers with the exact numbers.</p><span className="arr">→</span></a>
              <a className="mod" href="/product/instant-campaigns"><span className="mono">03</span><h3>Instant Campaigns</h3><p>Paste a landing page URL. Get a launch-ready campaign for Meta and Google.</p><span className="arr">→</span></a>
              <a className="mod" href="/product/advanced-wizard"><span className="mono">04</span><h3>Advanced Campaign Wizard</h3><p>Six guided steps. Full manual control over audience, budget and creative.</p><span className="arr">→</span></a>
              <a className="mod" href="/product/automations"><span className="mono">05</span><h3>Automations</h3><p>Rules that pause, scale and alert — across Meta and Google at once.</p><span className="arr">→</span></a>
              <a className="mod" href="/product/multi-workspace"><span className="mono">06</span><h3>Multi-workspace &amp; Slack</h3><p>One workspace per client or market. Vera on call in Slack.</p><span className="arr">→</span></a>
            </div>
          </div>
        </section>

        {/* ── 08 How it works ── */}
        <section className="sec" id="how-it-works">
          <div className="wrap">
            <div className="shead">
              <span className="mono ink">How it works</span>
              <h2>Connected in five minutes.<br/>Answers on day one.</h2>
            </div>
            <div className="how">
              <div className="hw">
                <span className="hn">01</span>
                <h3>Connect</h3>
                <p>Link Meta Ads, Google Ads and GA4 with OAuth. Add Slack if you want Vera there too.</p>
              </div>
              <div className="hw">
                <span className="hn">02</span>
                <h3>Vera reads</h3>
                <p>She maps every account, campaign and conversion — and flags what&apos;s off on day one.</p>
              </div>
              <div className="hw">
                <span className="hn">03</span>
                <h3>Decide and act</h3>
                <p>Approve Vera&apos;s suggestions, launch campaigns and set automations. Results feed the next loop.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 09 Solutions ── */}
        <section className="sec alt" id="solutions">
          <div className="wrap">
            <div className="shead">
              <span className="mono ink">Solutions</span>
              <h2>Built for the way you work.</h2>
            </div>
            <div className="grid3">
              <a className="sol" href="/solutions/agencies">
                <h3>Ad agencies</h3>
                <p>One isolated workspace per client. Unified reporting. Client questions answered in Slack before the call ends.</p>
                <span className="lnk">Learn more →</span>
              </a>
              <a className="sol" href="/solutions/marketing-teams">
                <h3>In-house marketing</h3>
                <p>Own your data without hiring an analyst. A daily brief from Vera, and attribution you can defend.</p>
                <span className="lnk">Learn more →</span>
              </a>
              <a className="sol" href="/solutions/ecommerce">
                <h3>E-commerce brands</h3>
                <p>ROAS per market, creative fatigue spotted early, and platform numbers checked against GA4.</p>
                <span className="lnk">Learn more →</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── 10 CTA ── */}
        <section className="cta">
          <div className="wrap ctaw">
            <div>
              <h2>Stop guessing.<br/>Start knowing.</h2>
              <p>Connect your accounts and get your first answer from Vera in minutes.</p>
            </div>
            <div className="ctas">
              <a className="btn wht" href="mailto:admin@verabix.com?subject=Book%20a%20demo">Book a demo ↗</a>
              <a className="btn ghw" href="https://app.verabix.com">Sign up free</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
