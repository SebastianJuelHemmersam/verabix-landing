import Header from '@/components/Header'
import Footer from '@/components/Footer'

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="8" fill="#EEEDFE"/>
      <path d="M4.5 8L7 10.5L11.5 5.5" stroke="#534AB7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>

        {/* ── Hero ── */}
        <section className="hero">
          <div className="blob"></div>
          <div className="wrap">
            <div className="herotop">
              <span className="eyebrow">Marketing analytics, unified</span>
              <h1>See what&apos;s actually driving results.</h1>
              <p className="lead">Verabix connects Meta Ads, Google Ads and Google Analytics into one dashboard — and Vera, your AI analyst, explains the numbers so you don&apos;t have to.</p>
              <div className="chantabs">
                <span className="chantab active"><span className="sw" style={{background:'#0866FF'}}></span>Meta Ads</span>
                <span className="chantab"><img className="pico" src="/icons/adwords.png" alt=""/>Google Ads</span>
                <span className="chantab"><span className="sw" style={{background:'#F9AB00'}}></span>Google Analytics</span>
              </div>
              <div className="ctarow">
                <a className="btn btn-primary" href="https://app.verabix.com">Start free →</a>
                <a className="btn btn-ghost" href="/book-demo">Book a demo</a>
              </div>
              <div className="trustline">
                <div className="stack">
                  <div className="av">A</div>
                  <div className="av">B</div>
                  <div className="av">C</div>
                </div>
                Marketing teams and agencies across the Nordics run on Verabix
              </div>
            </div>
            <div className="shot shotwide">
              <div className="chromebar">
                <div className="dots"><span></span><span></span><span></span></div>
                <div className="url">app.verabix.com/campaigns</div>
                <div style={{width:36}}></div>
              </div>
              <img src="/shots/campaigns.png" alt="Verabix campaigns view — every Meta Ads and Google Ads campaign in one table with spend, CTR, CPC and impressions"/>
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
                    <span className="step-num" style={{background:'var(--purple-bg)',color:'var(--purple)'}}>1</span>
                    <div className="step-body"><div className="st">Paste your URL</div><div className="sd">Vera reads your page and understands the offer.</div></div>
                  </div>
                  <div className="step-item">
                    <span className="step-num" style={{background:'var(--purple-bg)',color:'var(--purple)'}}>2</span>
                    <div className="step-body"><div className="st">Pick a goal</div><div className="sd">Sales, traffic, leads or awareness.</div></div>
                  </div>
                  <div className="step-item">
                    <span className="step-num" style={{background:'var(--purple-bg)',color:'var(--purple)'}}>3</span>
                    <div className="step-body"><div className="st">Add creatives</div><div className="sd">Upload images or video, or let Vera suggest visuals.</div></div>
                  </div>
                  <div className="step-item">
                    <span className="step-num" style={{background:'var(--purple)',color:'#fff'}}>4</span>
                    <div className="step-body active"><div className="st">Review &amp; launch</div><div className="sd">See the complete brief. Launch to Meta, Google, or both.</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── How it works ── */}
        <section className="sec sec-tint">
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
            <div className="ctarow">
              <a className="btn btn-white" href="https://app.verabix.com">Sign up free →</a>
              <a className="btn btn-onnavy" href="/book-demo">Book a demo</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
