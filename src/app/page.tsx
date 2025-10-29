import styles from "./page.module.css";
import {
  audienceProfiles,
  brandSnapshot,
  campaignPhases,
  channelMix,
  contentPillars,
  weeklyPlan,
} from "@/data/content-plan";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <main className={styles.container}>
        <section className={styles.hero}>
          <div>
            <p className={styles.eyebrow}>Strategic Content Roadmap</p>
            <h1>Sherohomefoods · 90-Day Content Plan</h1>
            <p className={styles.subtitle}>
              A phased storytelling and performance blueprint to drive
              awareness, consideration, and repeat purchase for{" "}
              <span className={styles.highlight}>{brandSnapshot.name}</span>.
            </p>
          </div>
          <div className={styles.heroSummary}>
            <div>
              <h3>Positioning</h3>
              <p>{brandSnapshot.positioning}</p>
            </div>
            <div>
              <h3>Value Proposition</h3>
              <p>{brandSnapshot.valueProposition}</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Key Differentiators</h2>
          <ul className={styles.list}>
            {brandSnapshot.differentiation.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Audience Snapshot</h2>
          <div className={styles.cardGrid}>
            {audienceProfiles.map((audience) => (
              <article key={audience.name} className={styles.card}>
                <h3>{audience.name}</h3>
                <div className={styles.cardBody}>
                  <p className={styles.cardOverline}>Needs</p>
                  <ul>
                    {audience.needs.map((need) => (
                      <li key={need}>{need}</li>
                    ))}
                  </ul>
                  <p className={styles.cardOverline}>Message Angle</p>
                  <p>{audience.keyMessaging}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>Content Pillars</h2>
          <div className={styles.cardGrid}>
            {contentPillars.map((pillar) => (
              <article key={pillar.title} className={styles.card}>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>Channel Mix & Cadence</h2>
          <div className={styles.channelGrid}>
            {channelMix.map((channel) => (
              <article key={channel.channel} className={styles.channelCard}>
                <header>
                  <h3>{channel.channel}</h3>
                  <p>{channel.cadence}</p>
                </header>
                <p>{channel.role}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>Phase Roadmap</h2>
          <div className={styles.cardGrid}>
            {campaignPhases.map((phase) => (
              <article key={phase.phase} className={styles.card}>
                <h3>{phase.phase}</h3>
                <p>{phase.focus}</p>
                <p className={styles.cardOverline}>Primary KPIs</p>
                <ul>
                  {phase.kpis.map((kpi) => (
                    <li key={kpi}>{kpi}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Weekly Execution Plan</h2>
            <p>
              Each week ladders into the overarching phase objective with a hero
              content asset, supporting pieces, and engagement mechanics to
              sustain momentum.
            </p>
          </div>
          <div className={styles.weekGrid}>
            {weeklyPlan.map((week) => (
              <article key={week.week} className={styles.weekCard}>
                <header>
                  <p className={styles.cardOverline}>{week.timeframe}</p>
                  <h3>
                    Week {week.week}: {week.theme}
                  </h3>
                  <p className={styles.weekObjective}>{week.objective}</p>
                </header>
                <div className={styles.weekSection}>
                  <p className={styles.cardOverline}>Hero Content</p>
                  <div className={styles.weekHighlight}>
                    <span>{week.heroContent.channel}</span>
                    <h4>{week.heroContent.idea}</h4>
                    <p>{week.heroContent.details}</p>
                  </div>
                </div>
                <div className={styles.weekSection}>
                  <p className={styles.cardOverline}>Supporting Plays</p>
                  <ul>
                    {week.supportingContent.map((item) => (
                      <li key={`${week.week}-${item.channel}-${item.idea}`}>
                        <strong>{item.channel}:</strong> {item.idea} —{" "}
                        {item.details}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.weekSection}>
                  <p className={styles.cardOverline}>Engagement Boosters</p>
                  <ul>
                    {week.engagementBoosters.map((booster) => (
                      <li key={booster}>{booster}</li>
                    ))}
                  </ul>
                </div>
                <footer className={styles.weekFooter}>
                  <p>
                    <span className={styles.cardOverline}>Metric Focus: </span>
                    {week.metricsFocus}
                  </p>
                </footer>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
