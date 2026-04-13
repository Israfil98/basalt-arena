import NinetyNine from '../../../assets/icons/99.svg?react'
import ArrowRight from '../../../assets/icons/arrow-right.svg?react'
import CompleteIcon from '../../../assets/icons/complete-icon.svg?react'
import IconTrendUp from '../../../assets/icons/icon-trend-up.svg?react'
import Window from '../../../assets/icons/window.svg?react'
import styles from './MetricsSidebar.module.scss'

const pastWinners = [
  { rank: '#1', name: 'Listea', username: '@nakir' },
  { rank: '#0', name: '(спринт которого не было)', username: '@abu_js' },
]

const MetricsSidebar = () => {
  return (
    <aside className={styles.sidebar}>
      {/* Metrics Section */}
      <div className={styles.section}>
        <h3 className={styles.sectionLabel}>Метрики спринта</h3>

        <div className={styles.cardsGroup}>
          {/* Total Submissions */}
          <div className={styles.metricCard}>
            <div className={styles.metricHeader}>
              <span className={styles.metricLabel}>Всего отправок</span>
              <Window className={styles.metricIcon} />
            </div>
            <div className={styles.metricValueWrapper}>
              <span className={styles.metricValue}>1 429</span>
            </div>
            <div className={styles.progressTrack}>
              <div className={styles.progressFill} style={{ width: '85%' }} />
            </div>
            <p className={styles.metricTrend}>
              <IconTrendUp className={styles.trendIcon} />
              +12% к прошлому спринту
            </p>
          </div>

          {/* Success Rate */}
          <div className={styles.metricCard}>
            <div className={styles.metricHeader}>
              <span className={styles.metricLabel}>Доля успешных</span>
              <CompleteIcon className={styles.metricIcon} />
            </div>
            <div className={styles.metricValueWrapper}>
              <span className={styles.metricValue}>42,8%</span>
            </div>
            <div className={styles.statusBadge}>
              <span className={styles.statusDot} />
              <span className={styles.statusText}>612 проверенных решений</span>
            </div>
          </div>
        </div>
      </div>

      {/* Past Winners Section */}
      <div className={styles.section}>
        <h3 className={styles.sectionLabel}>Победители прошлых спринтов</h3>

        <div className={styles.winnersCard}>
          {pastWinners.map((winner) => (
            <div key={winner.rank} className={styles.winnerRow}>
              <div className={styles.winnerBadge}>
                <span className={styles.winnerRank}>{winner.rank}</span>
              </div>
              <div className={styles.winnerInfo}>
                <span className={styles.winnerName}>{winner.name}</span>
                <span className={styles.winnerUsername}>{winner.username}</span>
              </div>
              <ArrowRight className={styles.winnerArrow} />
            </div>
          ))}
        </div>
      </div>

      {/* Quote */}
      <div className={styles.quoteCard}>
        <NinetyNine className={styles.quoteWatermark} aria-hidden="true" />
        <p className={styles.quoteText}>
          «Хороший код — сам по себе награда, но золотая рамка тоже не
          помешает.»
        </p>
        <div className={styles.quoteAttribution}>
          <span className={styles.quoteAvatar} />
          <span className={styles.quoteAuthor}>— Администрация арены</span>
        </div>
      </div>
    </aside>
  )
}

export default MetricsSidebar
