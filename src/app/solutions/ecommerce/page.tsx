import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MarketLeaderboardMock from './MarketLeaderboardMock'

export const metadata: Metadata = {
  title: 'E-commerce Brands — Every market. One read.',
  description:
    "Selling in Denmark, Sweden and Germany means three currencies, three sets of ad accounts and creative that works differently in each. Verabix gives every market its own workspace — and Vera tells you what’s working where.",
}

function VeraIconGlow() {
  return (
    <svg viewBox="0 0 64 64" width="24" height="24" aria-hidden="true">
      <rect x="3" y="3" width="58" height="58" rx="16" fill="#000" />
      <path d="M19 23L32 45L45 23" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="49" cy="15" r="4.5" fill="#8FA6F0" />
    </svg>
  )
}

export default function EcommercePage() {
  return (
    <>
      <Header />
      <main>

        {/* 01 Hero + creative leaderboard by market */}
        <section className="ech">
          <div className="wrap">
            <div className="dht">
              <div>
                <span className="mono ink kk">Solutions &middot; E-commerce</span>
                <h1>Every market.<br />One read.</h1>
              </div>
              <div>
                <p className="lead">
                  Selling in Denmark, Sweden and Germany means three currencies,
                  three sets of ad accounts and creative that works differently in
                  each. Verabix gives every market its own workspace &mdash; and
                  Vera tells you what&apos;s working where.
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
            <MarketLeaderboardMock />
          </div>
        </section>

        {/* 02 Stats */}
        <section className="works">
          <div className="wrap stats">
            <div><b>1 workspace</b><span>per market, in its own currency</span></div>
            <div><b>Every ad</b><span>ranked by CTR &mdash; image and video</span></div>
            <div><b>2 min</b><span>between rule checks, all weekend</span></div>
            <div><b>1 sheet</b><span>to launch every local variant</span></div>
          </div>
        </section>

        {/* 03 Markets */}
        <section className="sec">
          <div className="wrap">
            <div className="shead row">
              <div>
                <span className="mono ink">Markets</span>
                <h2>A workspace for every market.<br />A currency for every workspace.</h2>
              </div>
              <p>Each market gets its own workspace with its own ad accounts, dashboards, automations and Vera &mdash; reporting in the currency that market thinks in.</p>
            </div>
            <div className="how">
              <div className="hw">
                <span className="hn">01</span>
                <h3>Local currency, everywhere</h3>
                <p>Set the workspace to DKK, SEK, NOK or EUR. Budgets you enter are converted to the ad account&apos;s own currency when the campaign is created.</p>
              </div>
              <div className="hw">
                <span className="hn">02</span>
                <h3>One account, split by market</h3>
                <p>Running every country from a single ad account? A campaign filter on the workspace&apos;s data source keeps only the campaigns whose name contains &ldquo;DK&rdquo;, &ldquo;SE&rdquo; or &ldquo;DE&rdquo;.</p>
              </div>
              <div className="hw">
                <span className="hn">03</span>
                <h3>Ask about one market &mdash; or all</h3>
                <p>&ldquo;Why did ROAS drop in Sweden?&rdquo; Vera answers from that market&apos;s accounts, in that market&apos;s currency, with the numbers behind it.</p>
              </div>
            </div>
            <Link className="lnk" href="/product/multi-workspace" style={{ marginTop: 24, display: 'inline-flex' }}>
              See Multi-workspace &rarr;
            </Link>
          </div>
        </section>

        {/* 04 Peak season (black, static timeline) */}
        <section className="sec dark">
          <div className="wrap">
            <div className="shead row">
              <div>
                <span className="mono glow">Peak season</span>
                <h2>Black Friday weekend.<br />Nobody on call.</h2>
              </div>
              <p>Set the rules before the weekend. Verabix checks every two minutes &mdash; scaling what&apos;s selling, pausing what&apos;s burning, and posting to Slack when it does.</p>
            </div>
            <ol className="ecw">
              <li className="n">
                <div className="ecwt"><b>Thu</b><span className="mono">22:00</span></div>
                <span className="ecwd" />
                <div className="ecwe"><p>Black Friday campaigns go live</p></div>
              </li>
              <li className="u">
                <div className="ecwt"><b>Fri</b><span className="mono">06:40</span></div>
                <span className="ecwd" />
                <div className="ecwe">
                  <p><b>Scale the winners</b> &middot; Google &middot; Shopping DK &middot; ROAS 6.2&times;</p>
                  <span className="ecwa">Budget +15%</span>
                </div>
              </li>
              <li className="d">
                <div className="ecwt"><b>Fri</b><span className="mono">11:12</span></div>
                <span className="ecwd" />
                <div className="ecwe">
                  <p><b>Budget guard</b> &middot; Meta &middot; Prospecting SE &middot; spend above SEK 40,000</p>
                  <span className="ecwa">Paused &middot; email sent</span>
                </div>
              </li>
              <li className="d">
                <div className="ecwt"><b>Sat</b><span className="mono">02:14</span></div>
                <span className="ecwd" />
                <div className="ecwe">
                  <p><b>Stop the bleed</b> &middot; Meta &middot; Retargeting DE &middot; CPA &euro;38</p>
                  <span className="ecwa">Paused &middot; Slack #ecom</span>
                </div>
              </li>
              <li className="u">
                <div className="ecwt"><b>Sun</b><span className="mono">09:30</span></div>
                <span className="ecwd" />
                <div className="ecwe">
                  <p><b>Scale the winners</b> &middot; Meta &middot; UGC reel NO &middot; ROAS 5.4&times;</p>
                  <span className="ecwa">Budget +15%</span>
                </div>
              </li>
              <li className="n">
                <div className="ecwt"><b>Mon</b><span className="mono">08:00</span></div>
                <span className="ecwd" />
                <div className="ecwe"><p>You open Verabix. Everything&apos;s already handled.</p></div>
              </li>
            </ol>
            <Link className="lnk lnkw" href="/product/automations">See Automations &rarr;</Link>
          </div>
        </section>

        {/* 05 Local launches (sheet mock) */}
        <section className="sec alt">
          <div className="wrap split">
            <div className="copy">
              <span className="mono ink">Campaigns</span>
              <h2>One row per market.<br />Every launch at once.</h2>
              <p>Plan the season in a Google Sheet &mdash; one row per country, with its own URL, copy and budget. Verabix creates every campaign from it, and keeps watching for new rows.</p>
              <ul className="chk">
                <li>One row becomes one Meta campaign</li>
                <li>Images and video from Google Drive links</li>
                <li>Check for new rows, or launch when a column says &ldquo;yes&rdquo;</li>
                <li>Or paste a product URL and let Vera draft it</li>
              </ul>
              <Link className="lnk" href="/product/campaigns">See Campaigns &rarr;</Link>
            </div>
            <div className="ecs">
              <div className="ecsh">
                <span className="shi" />
                <b>Peak season &mdash; all markets</b>
                <span className="mono">Google Sheets</span>
              </div>
              <div>
                <div className="ecsr h"><span>Campaign name</span><span>Landing URL</span><span>Budget</span><span>Status</span></div>
                <div className="ecsr"><span>Black Friday &mdash; DK</span><span className="u">shop.dk/bf</span><span>DKK 1,500</span><span className="st ok">Created</span></div>
                <div className="ecsr"><span>Black Friday &mdash; SE</span><span className="u">shop.se/bf</span><span>SEK 1,800</span><span className="st ok">Created</span></div>
                <div className="ecsr"><span>Black Friday &mdash; DE</span><span className="u">shop.de/bf</span><span>&euro;200</span><span className="st ok">Created</span></div>
                <div className="ecsr"><span>Black Friday &mdash; NO</span><span className="u">shop.no/bf</span><span>NOK 1,700</span><span className="st go">Creating&hellip;</span></div>
                <div className="ecsr"><span>Cyber Monday &mdash; DK</span><span className="u">shop.dk/cm</span><span>DKK 1,000</span><span className="st q">Queued</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* 06 Revenue: platform vs. GA4 */}
        <section className="sec">
          <div className="wrap split rev">
            <div className="copy">
              <span className="mono ink">Attribution</span>
              <h2>Platform revenue<br />vs. what GA4 saw.</h2>
              <p>Meta and Google both take credit for the same order. Verabix puts their reported revenue next to GA4&apos;s, so you scale on the number that actually reached your checkout.</p>
              <ul className="chk">
                <li>Platform-reported vs. GA4, side by side</li>
                <li>Overlap calculated for you</li>
                <li>Vera explains where the gap comes from</li>
              </ul>
            </div>
            <div className="ecr">
              <div className="ecrh"><b>Revenue &middot; last 30 days</b><span className="mono">DKK</span></div>
              <div className="ecrr">
                <b>Meta Ads</b>
                <div className="ecrb">
                  <div><span className="mono">Platform</span><i style={{ width: '100%' }} /><em>DKK 612k</em></div>
                  <div><span className="mono">GA4</span><i className="ga" style={{ width: '63%' }} /><em>DKK 388k</em></div>
                </div>
              </div>
              <div className="ecrr">
                <b>Google Ads</b>
                <div className="ecrb">
                  <div><span className="mono">Platform</span><i style={{ width: '88%' }} /><em>DKK 540k</em></div>
                  <div><span className="mono">GA4</span><i className="ga" style={{ width: '77%' }} /><em>DKK 471k</em></div>
                </div>
              </div>
              <div className="ecrn">
                <VeraIconGlow />
                <p>
                  Meta reports <b>58% more</b> revenue than GA4 recorded. Most of the
                  gap is view-through orders &mdash; people who saw an ad, then bought
                  through Search or Direct.
                </p>
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
                <summary>Can each market report in its own currency?</summary>
                <p>Yes. Every workspace has its own currency &mdash; DKK, SEK, NOK, EUR and more. When you create a campaign, the budget is converted to the ad account&apos;s currency automatically.</p>
              </details>
              <details>
                <summary>We run every country from one ad account. Does that work?</summary>
                <p>Yes. Add a campaign filter to each workspace&apos;s data source, and it only sees campaigns whose name contains that text &mdash; &ldquo;DK&rdquo;, &ldquo;SE&rdquo;, &ldquo;DE&rdquo;.</p>
              </details>
              <details>
                <summary>How do you rank creatives?</summary>
                <p>Every Meta ad is shown with its thumbnail, spend, CTR, CPC and impressions, ranked by CTR &mdash; image and video side by side. Ask Vera what the pattern is.</p>
              </details>
              <details>
                <summary>Can automations really run over Black Friday without us?</summary>
                <p>Yes. Rules are checked every two minutes, around the clock. They can scale or cut budget, pause a campaign, and email or post in Slack when they do.</p>
              </details>
              <details>
                <summary>Do I need GA4 connected?</summary>
                <p>No, but it unlocks the platform-vs-GA4 comparison. Without it you still get Meta and Google side by side, creatives, Vera and automations.</p>
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
                <p>A separate workspace for every market you sell in.</p>
                <span className="arr">&rarr;</span>
              </Link>
              <Link className="mod" href="/product/automations">
                <h3>Automations</h3>
                <p>Rules that run your peak season, day and night.</p>
                <span className="arr">&rarr;</span>
              </Link>
              <Link className="mod" href="/product/campaigns">
                <h3>Campaigns</h3>
                <p>Launch every local variant from one sheet.</p>
                <span className="arr">&rarr;</span>
              </Link>
              <Link className="mod" href="/product/vera-ai">
                <h3>Vera AI</h3>
                <p>Ask why ROAS dipped in Sweden. Get the numbers.</p>
                <span className="arr">&rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          <div className="wrap ctaw">
            <div>
              <h2>Sell in every market.<br />Read them all in one place.</h2>
              <p>Connect Meta Ads, Google Ads and GA4. Add your next market in a minute.</p>
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
