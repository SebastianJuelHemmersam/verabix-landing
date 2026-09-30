import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import RuleBuilder from './RuleBuilder'

export const metadata: Metadata = {
  title: 'Automations — Rules that never sleep',
  description:
    'Set rules that pause campaigns, adjust budgets, or send Slack alerts when ROAS or CPA hits a threshold — across Meta Ads and Google Ads, checked every two minutes.',
}

function VeraIcon() {
  return (
    <svg viewBox="0 0 64 64" width="40" height="40" aria-hidden="true">
      <rect x="3" y="3" width="58" height="58" rx="16" fill="#000" />
      <path d="M19 23L32 45L45 23" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="49" cy="15" r="4.5" fill="#1B3A8C" />
    </svg>
  )
}

export default function AutomationsPage() {
  return (
    <>
      <Header />
      <main>

        {/* ── 01 Hero ── */}
        <section className="ah">
          <div className="wrap">
            <div className="dht">
              <div>
                <span className="mono glow kk">Product · Automations</span>
                <h1>Rules that<br />never sleep.</h1>
              </div>
              <div className="dhr">
                <p className="lead">
                  Tell Verabix what good and bad look like. It checks Meta Ads and
                  Google Ads every two minutes — and pauses, scales or alerts the
                  moment a rule is hit. Day and night.
                </p>
                <div className="ctas">
                  <a className="btn wht" href="mailto:admin@verabix.com?subject=Book%20a%20demo">Book a demo ↗</a>
                  <a className="btn ghw" href="https://app.verabix.com">Create an automation</a>
                </div>
              </div>
            </div>
            <RuleBuilder />
          </div>
        </section>

        {/* ── 02 Stats ── */}
        <section className="works">
          <div className="wrap stats">
            <div><b>2 min</b><span>between checks, 24/7</span></div>
            <div><b>5</b><span>actions: budget up, budget down, pause, email, Slack</span></div>
            <div><b>2</b><span>ad platforms: Meta Ads and Google Ads</span></div>
            <div><b>0</b><span>nights spent watching dashboards</span></div>
          </div>
        </section>

        {/* ── 03 Anatomy of a rule ── */}
        <section className="sec">
          <div className="wrap">
            <div className="shead row">
              <div>
                <span className="mono ink">Anatomy of a rule</span>
                <h2>One sentence.<br />Five decisions.</h2>
              </div>
              <p>Every automation reads like a sentence. If you can say it, you can automate it.</p>
            </div>
            <div className="anat">
              <div className="an">
                <span className="at">When</span>
                <h3>The metric</h3>
                <p>ROAS, CPA, CPC, CTR, spend, conversions, cost per result — or frequency on Meta.</p>
              </div>
              <div className="an">
                <span className="at">Where</span>
                <h3>The scope</h3>
                <p>Meta Ads or Google Ads. All campaigns, names containing a word, or specific campaigns.</p>
              </div>
              <div className="an">
                <span className="at">If</span>
                <h3>The condition</h3>
                <p>Above or below a fixed value — or a % change against a locked or rolling baseline.</p>
              </div>
              <div className="an">
                <span className="at">Then</span>
                <h3>The action</h3>
                <p>Increase or decrease budget by a %, pause the campaign, send an email or a Slack message.</p>
              </div>
              <div className="an">
                <span className="at">How often</span>
                <h3>The schedule</h3>
                <p>Daily, weekly or monthly. Fire once, or every time the condition is met.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 04 Recipes ── */}
        <section className="sec alt">
          <div className="wrap">
            <div className="shead">
              <span className="mono ink">Rules teams actually run</span>
              <h2>Start with these.<br />Tune them to your numbers.</h2>
            </div>
            <div className="rcg">
              <div className="rc">
                <div className="rch"><h3>Stop the bleed</h3><span className="pill">Meta</span></div>
                <div className="rcf"><span className="mono">If</span><b>CPA above DKK 400</b></div>
                <div className="rcf"><span className="mono ink">Then</span><b className="ink">Pause campaign + Slack</b></div>
              </div>
              <div className="rc">
                <div className="rch"><h3>Scale the winners</h3><span className="pill">Google</span></div>
                <div className="rcf"><span className="mono">If</span><b>ROAS above 4.0&times;</b></div>
                <div className="rcf"><span className="mono ink">Then</span><b className="ink">Budget +15%</b></div>
              </div>
              <div className="rc">
                <div className="rch"><h3>Frequency cap</h3><span className="pill">Meta</span></div>
                <div className="rcf"><span className="mono">If</span><b>Frequency above 3.0</b></div>
                <div className="rcf"><span className="mono ink">Then</span><b className="ink">Email me</b></div>
              </div>
              <div className="rc">
                <div className="rch"><h3>Budget guard</h3><span className="pill">Both</span></div>
                <div className="rcf"><span className="mono">If</span><b>Spend above DKK 10,000</b></div>
                <div className="rcf"><span className="mono ink">Then</span><b className="ink">Pause + email</b></div>
              </div>
              <div className="rc">
                <div className="rch"><h3>Creative fatigue</h3><span className="pill">Meta</span></div>
                <div className="rcf"><span className="mono">If</span><b>CTR &minus;30% vs. baseline</b></div>
                <div className="rcf"><span className="mono ink">Then</span><b className="ink">Slack #creative</b></div>
              </div>
              <div className="rc">
                <div className="rch"><h3>Cheap clicks</h3><span className="pill">Google</span></div>
                <div className="rcf"><span className="mono">If</span><b>CPC below DKK 2.00</b></div>
                <div className="rcf"><span className="mono ink">Then</span><b className="ink">Budget +10%</b></div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 05 Alerts ── */}
        <section className="sec">
          <div className="wrap split">
            <div className="copy">
              <span className="mono ink kk">Alerts</span>
              <h2>Know the moment it happens.</h2>
              <p>
                Every automation can post to Slack or send an email — with the number
                that triggered it and what Verabix did about it. No more finding out
                on Monday.
              </p>
              <ul className="chk">
                <li>Post to any Slack channel</li>
                <li>Email one or more people</li>
                <li>Includes the metric, the threshold and the action taken</li>
              </ul>
            </div>
            <div className="sm">
              <div className="smh"><span># marketing</span></div>
              <div className="msg">
                <span className="av"><VeraIcon /></span>
                <div>
                  <b>Verabix</b> <span className="app">APP</span> <em>02:14</em>
                  <p>
                    <strong>Stop the bleed</strong> fired on{' '}
                    <strong>Meta &middot; Prospecting &mdash; Broad</strong>.
                  </p>
                  <div className="att">
                    <span className="mono">Automation triggered</span>
                    <b>CPA DKK 437 &mdash; above DKK 400</b>
                    <span>Action taken: campaign paused &middot; Checked 02:14</span>
                  </div>
                </div>
              </div>
              <div className="msg">
                <span className="av"><VeraIcon /></span>
                <div>
                  <b>Verabix</b> <span className="app">APP</span> <em>06:40</em>
                  <p>
                    <strong>Scale the winners</strong> fired on{' '}
                    <strong>Google &middot; Spring Sale &mdash; PMax</strong>.
                  </p>
                  <div className="att">
                    <span className="mono">Automation triggered</span>
                    <b>ROAS 5.8&times; &mdash; above 4.0&times;</b>
                    <span>Action taken: budget +15% (DKK 1,800 &rarr; 2,070 / day)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 06 Sheet automations ── */}
        <section className="sec alt">
          <div className="wrap split rev">
            <div className="copy">
              <span className="mono ink kk">Sheet automations</span>
              <h2>Add a row.<br />Launch a campaign.</h2>
              <p>
                Plan campaigns in Google Sheets like you always have. Connect the sheet,
                map the columns — and every new row becomes a live campaign. No
                copy-pasting into Ads Manager.
              </p>
              <ul className="chk">
                <li>Name, URL, headline, text, budget and dates from your columns</li>
                <li>Images and video from Google Drive links</li>
                <li>Checked every 15 minutes or on a column value</li>
              </ul>
            </div>
            <div className="sh">
              <div className="shh">
                <span className="shi" />
                <b>Campaign plan — Q4</b>
                <span className="mono">Google Sheets</span>
              </div>
              <div>
                <div className="shr h">
                  <span>Campaign name</span>
                  <span>Landing URL</span>
                  <span>Budget</span>
                  <span>Status</span>
                </div>
                <div className="shr">
                  <span>Autumn Sale — DK</span>
                  <span className="u">autumn-sale.dk/dk</span>
                  <span>DKK 500</span>
                  <span className="st ok">Launched</span>
                </div>
                <div className="shr">
                  <span>Autumn Sale — SE</span>
                  <span className="u">autumn-sale.dk/se</span>
                  <span>SEK 600</span>
                  <span className="st ok">Launched</span>
                </div>
                <div className="shr">
                  <span>New Arrivals — Reels</span>
                  <span className="u">shop.dk/new</span>
                  <span>DKK 350</span>
                  <span className="st go">Launching&hellip;</span>
                </div>
                <div className="shr">
                  <span>Black Friday — Teaser</span>
                  <span className="u">shop.dk/bf</span>
                  <span>DKK 800</span>
                  <span className="st q">Queued</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 07 Control ── */}
        <section className="sec">
          <div className="wrap">
            <div className="shead">
              <span className="mono ink">Control</span>
              <h2>Automated. Not out of control.</h2>
            </div>
            <div className="how">
              <div className="hw">
                <span className="hn">01</span>
                <h3>Preview before you save</h3>
                <p>See the campaign&apos;s current value for the metric before the rule goes live — so you set thresholds on real numbers.</p>
              </div>
              <div className="hw">
                <span className="hn">02</span>
                <h3>Once or every time</h3>
                <p>Fire a rule once and stop, or every time the condition returns. Daily, weekly or monthly.</p>
              </div>
              <div className="hw">
                <span className="hn">03</span>
                <h3>Stay in control</h3>
                <p>See how many times a rule has fired today and this week — and switch any automation off in one click.</p>
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
                <summary>How often are rules checked?</summary>
                <p>Every two minutes, around the clock. When a condition is met, the action runs straight away.</p>
              </details>
              <details>
                <summary>Which actions can an automation take?</summary>
                <p>Increase or decrease a campaign&apos;s budget by a percentage, pause a campaign, send an email or post a Slack message. Combine several in one rule.</p>
              </details>
              <details>
                <summary>What&apos;s the difference between locked and rolling baselines?</summary>
                <p>A locked baseline compares against the value when you created the rule. A rolling baseline moves with recent performance — so &ldquo;CTR drops 30%&rdquo; always means 30% below normal.</p>
              </details>
              <details>
                <summary>Can a rule fire more than once?</summary>
                <p>You choose. &ldquo;One-time&rdquo; fires once and stops. &ldquo;Every time&rdquo; fires whenever the condition is met again.</p>
              </details>
              <details>
                <summary>Can I pause an automation?</summary>
                <p>Yes. Turn any automation off and on in one click.</p>
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
              <a className="mod" href="/product/vera-ai">
                <h3>Vera AI</h3>
                <p>The analyst whose recommendations become your rules.</p>
                <span className="arr">&rarr;</span>
              </a>
              <a className="mod" href="/product/cross-channel-dashboard">
                <h3>Dashboards</h3>
                <p>Ask for a dashboard. Watch your rules work.</p>
                <span className="arr">&rarr;</span>
              </a>
              <a className="mod" href="/product/multi-workspace">
                <h3>Multi-workspace &amp; Slack</h3>
                <p>Separate rules per client. Alerts in their Slack.</p>
                <span className="arr">&rarr;</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="cta">
          <div className="wrap ctaw">
            <div>
              <h2>Set the rule once.<br />Sleep through the night.</h2>
              <p>Connect Meta Ads and Google Ads. Your first automation takes two minutes.</p>
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
