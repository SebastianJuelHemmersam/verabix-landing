import Header from '@/components/Header'
import Footer from '@/components/Footer'

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="8" fill="#EEF1FA"/>
      <path d="M4.5 8L7 10.5L11.5 5.5" stroke="#1B3A8C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function HeroVisual() {
  const FS = "'Mona Sans Variable','Mona Sans',system-ui,sans-serif"
  const FM = "'JetBrains Mono',ui-monospace,monospace"
  return (
    <svg viewBox="0 0 660 480" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Data flows from Meta Ads, Google Ads, GA4 and Slack into Vera, and actions flow back out">

      {/* Feedback loop — dashed with animated flow */}
      <path id="vp8" d="M555 363C555 474 70 474 70 358" fill="none" stroke="#1B3A8C" strokeWidth="1.5" strokeDasharray="3 6">
        <animate attributeName="stroke-dashoffset" from="0" to="90" dur="3s" repeatCount="indefinite"/>
      </path>

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

      {/* Feedback loop traveling dot */}
      <circle r="3.5" fill="#1B3A8C"><animateMotion dur="3.4s" repeatCount="indefinite"><mpath href="#vp8"/></animateMotion></circle>

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

      {/* Feedback loop label */}
      <rect x="171" y="436" width="248" height="26" rx="13" fill="#fff" stroke="#C9D3F2" strokeWidth="1"/>
      <text x="295" y="453" textAnchor="middle" fontFamily={FM} fontSize="10.5" letterSpacing=".5" fill="#1B3A8C">RESULTS FEED BACK · VERA LEARNS</text>
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

        {/* ── Stat band ── */}
        <section className="statband">
          <div className="wrap statgrid">
            <div><div className="num">3 → 1</div><div className="lbl">platforms in one dashboard</div></div>
            <div><div className="num">6+ hrs</div><div className="lbl">saved per client, per month</div></div>
            <div><div className="num">&lt;30s</div><div className="lbl">from raw ad data to a decision</div></div>
            <div><div className="num">24/7</div><div className="lbl">automation rules running</div></div>
          </div>
        </section>

        {/* ── Logo bar ── */}
        <section className="logobar">
          <div className="wrap">
            <div className="lbl">Trusted by agencies and in-house teams</div>
            <div className="logogrid">
              <span className="lg">NORDLY</span>
              <span className="lg">Fjord &amp; Co</span>
              <span className="lg">Lumen Retail</span>
              <span className="lg">Kaskade</span>
              <span className="lg">Practera</span>
              <span className="lg">Vantage Goods</span>
            </div>
          </div>
        </section>

        {/* ── Product grid ── */}
        <section className="sec">
          <div className="wrap">
            <div className="sechead">
              <span className="tag">The platform</span>
              <h2>Everything a performance team needs, in one product</h2>
              <p>Data, analysis and execution — no tab-switching, no exports, no arguing about which number is right.</p>
            </div>
            <div className="cardgrid c3">
              <a className="card" href="/product/cross-channel-dashboard">
                <div className="ic">◫</div>
                <h3>Cross-channel Dashboard</h3>
                <p>Meta Ads, Google Ads and GA4 in one view — same date ranges, same metrics, one source of truth.</p>
                <span className="more">Explore →</span>
              </a>
              <a className="card" href="/product/vera-ai">
                <div className="ic">V</div>
                <h3>Vera AI</h3>
                <p>Ask questions in plain English. Vera reasons across every channel and cites the exact numbers.</p>
                <span className="more">Explore →</span>
              </a>
              <a className="card" href="/product/instant-campaigns">
                <div className="ic">⚡</div>
                <h3>Instant Campaign Creation</h3>
                <p>Paste a landing page URL. Vera writes the copy, sets targeting and builds a launch-ready campaign.</p>
                <span className="more">Explore →</span>
              </a>
              <a className="card" href="/product/advanced-wizard">
                <div className="ic">⚙</div>
                <h3>Advanced Campaign Wizard</h3>
                <p>Six guided steps with full manual control over audience, budget, creative and platform.</p>
                <span className="more">Explore →</span>
              </a>
              <a className="card" href="/product/automations">
                <div className="ic">↻</div>
                <h3>Automations</h3>
                <p>Rules that pause campaigns, scale budgets and ping Slack — across Meta and Google at once.</p>
                <span className="more">Explore →</span>
              </a>
              <a className="card" href="/product/multi-workspace">
                <div className="ic">⊞</div>
                <h3>Multi-workspace &amp; Slack</h3>
                <p>Isolated workspace per client or market, and Vera answering questions right inside Slack.</p>
                <span className="more">Explore →</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── Feature: Dashboard ── */}
        <section className="sec">
          <div className="wrap split">
            <div className="scopy">
              <span className="tag">Unified data</span>
              <h2>One view for spend, ROAS and what actually matters.</h2>
              <p className="body">Stop toggling between Ads Manager, Google Ads and GA4. Verabix pulls all three into a single dashboard your whole team reads the same way.</p>
              <div className="checks">
                <div><CheckIcon /><span>KPI chips for spend, ROAS, CPA and conversions across Meta and Google simultaneously.</span></div>
                <div><CheckIcon /><span>Source breakdown showing which channel really drives traffic and revenue.</span></div>
                <div><CheckIcon /><span>Build any custom view in 90 seconds by asking Vera — no drag-and-drop required.</span></div>
              </div>
              <a className="btn btn-outline" href="/product/cross-channel-dashboard">See the dashboard →</a>
            </div>
            <div className="smock">
              <div className="shotpan" style={{'--w':'121.8%','--x':'-16.9%','--ar':'1.75'} as React.CSSProperties}>
                <img src="/shots/overview-performance.jpg" alt="Verabix overview — connected data sources and paid-channel performance KPIs across Meta Ads, Google Ads and GA4"/>
              </div>
            </div>
          </div>
        </section>

        {/* ── Feature: Vera AI ── */}
        <section className="sec">
          <div className="wrap split rev">
            <div className="scopy">
              <span className="tag">Vera AI</span>
              <h2>The marketing analyst who already read all your data.</h2>
              <p className="body">Vera connects to every source you&apos;ve linked and answers in plain English — citing exact numbers so you can double-check every claim. In the app, and in Slack.</p>
              <div className="checks">
                <div><CheckIcon /><span>Cross-channel reasoning — Meta, Google Ads and GA4 seen simultaneously.</span></div>
                <div><CheckIcon /><span>Proactive alerts when spend spikes or ROAS drops unexpectedly.</span></div>
                <div><CheckIcon /><span>Tag @Vera from any Slack channel and get an answer without opening a tab.</span></div>
              </div>
              <a className="btn btn-outline" href="/product/vera-ai">Meet Vera →</a>
            </div>
            <div className="smock">
              <div className="shotpan" style={{'--w':'120.3%','--x':'-15.9%','--ar':'1.77'} as React.CSSProperties}>
                <img src="/shots/vera-chat.jpg" alt="Vera answering which campaign to scale, citing spend, conversions and ROAS from the connected accounts"/>
              </div>
            </div>
          </div>
        </section>

        {/* ── Feature: Campaigns ── */}
        <section className="sec">
          <div className="wrap split">
            <div className="scopy">
              <span className="tag">Campaign creation</span>
              <h2>From landing page URL to live campaign in minutes.</h2>
              <p className="body">Paste your URL, pick a goal, and Vera builds a complete campaign — AI-generated headlines, ad copy and targeting — ready to push to Meta Ads and Google Ads without leaving Verabix.</p>
              <div className="checks">
                <div><CheckIcon /><span>Meta (image + video) and Google Ads (Search + PMax) launched simultaneously.</span></div>
                <div><CheckIcon /><span>Need full control? The Advanced Wizard exposes every audience and budget setting.</span></div>
                <div><CheckIcon /><span>Review every line of copy before launch — you stay in control.</span></div>
              </div>
              <a className="btn btn-outline" href="/product/instant-campaigns">See campaign creation →</a>
            </div>
            <div className="smock">
              <div className="mock">
                <div className="mocklabel">New campaign · step 4 of 4</div>
                <div style={{display:'flex',flexDirection:'column',gap:10}}>
                  <div className="step-item">
                    <span className="step-num" style={{background:'var(--blue-50)',color:'var(--ink)'}}>1</span>
                    <div className="step-body"><div className="st">Paste your URL</div><div className="sd">Vera reads your page and understands the offer.</div></div>
                  </div>
                  <div className="step-item">
                    <span className="step-num" style={{background:'var(--blue-50)',color:'var(--ink)'}}>2</span>
                    <div className="step-body"><div className="st">Pick a goal</div><div className="sd">Sales, traffic, leads or awareness.</div></div>
                  </div>
                  <div className="step-item">
                    <span className="step-num" style={{background:'var(--blue-50)',color:'var(--ink)'}}>3</span>
                    <div className="step-body"><div className="st">Add creatives</div><div className="sd">Upload images or video, or let Vera suggest visuals.</div></div>
                  </div>
                  <div className="step-item">
                    <span className="step-num" style={{background:'#000',color:'#fff'}}>4</span>
                    <div className="step-body active"><div className="st">Review &amp; launch</div><div className="sd">See the complete brief. Launch to Meta, Google, or both.</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── How it works ── */}
        <section id="how-it-works" className="sec sec-tint">
          <div className="wrap">
            <div className="sechead">
              <span className="tag">How it works</span>
              <h2>Connected in five minutes. Answers on day one.</h2>
            </div>
            <div className="steprow">
              <div className="step">
                <div className="n">STEP 01</div>
                <h4>Connect your accounts</h4>
                <p>Link Meta Ads, Google Ads and Google Analytics with OAuth. Pick which accounts and properties belong to each workspace.</p>
              </div>
              <div className="step">
                <div className="n">STEP 02</div>
                <h4>Vera reads everything</h4>
                <p>Campaigns, ad sets, creatives, sessions and conversions are unified under one set of metrics and date ranges.</p>
              </div>
              <div className="step">
                <div className="n">STEP 03</div>
                <h4>Ask, act, automate</h4>
                <p>Ask Vera what changed, launch the next campaign, and set rules that act on your behalf while you sleep.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Solutions ── */}
        <section className="sec">
          <div className="wrap">
            <div className="sechead">
              <span className="tag">Solutions</span>
              <h2>Built for the way your team works</h2>
            </div>
            <div className="cardgrid c3">
              <a className="card" href="/solutions/agencies">
                <div className="ic">◇</div>
                <h3>Ad Agencies</h3>
                <p>One isolated workspace per client, unified Meta + Google reporting, and @Vera in Slack for instant client answers.</p>
                <span className="more">For agencies →</span>
              </a>
              <a className="card" href="/solutions/marketing-teams">
                <div className="ic">△</div>
                <h3>In-house Marketing</h3>
                <p>Own your data without hiring an analyst. Daily Slack briefs and honest attribution before your Monday meeting.</p>
                <span className="more">For in-house teams →</span>
              </a>
              <a className="card" href="/solutions/ecommerce">
                <div className="ic">○</div>
                <h3>E-commerce Brands</h3>
                <p>Per-market ROAS, creative fatigue detection and platform-vs-GA4 attribution across every country you sell in.</p>
                <span className="more">For e-commerce →</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="sec">
          <div className="wrap">
            <div className="sechead">
              <h2>Teams that stopped exporting spreadsheets</h2>
            </div>
            <div className="tgrid">
              <div className="tcard">
                <div className="tavatar">MH</div>
                <blockquote>&ldquo;Verabix cut our weekly client reporting from half a day to fifteen minutes. Vera writes the brief, not us.&rdquo;</blockquote>
                <div className="who"><b>Mette Holm</b>Head of Growth, Fjord &amp; Co</div>
              </div>
              <div className="tcard">
                <div className="tavatar">JB</div>
                <blockquote>&ldquo;Vera caught a €4,000/month budget leak in a retargeting set our old dashboard never flagged.&rdquo;</blockquote>
                <div className="who"><b>Jonas Berg</b>CMO, Lumen Retail</div>
              </div>
              <div className="tcard">
                <div className="tavatar">AL</div>
                <blockquote>&ldquo;The attribution comparison ended a six-month argument about whether Meta was lying to us. It was.&rdquo;</blockquote>
                <div className="who"><b>Anna Lindqvist</b>Performance Lead, Kaskade</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA band ── */}
        <section className="ctaband">
          <div className="wrap">
            <h2>See the truth about your marketing.</h2>
            <p>Connect your ad accounts and get your first answer in minutes. Free to start, no credit card required.</p>
            <div className="ctarow" style={{display:'flex',gap:12,justifyContent:'center'}}>
              <a className="btn btn-white" href="https://app.verabix.com">Sign up free →</a>
              <a className="btn btn-onnavy" href="mailto:admin@verabix.com?subject=Book%20a%20demo">Book a demo ↗</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
