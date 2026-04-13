import HallHeader from './HallHeader/HallHeader'
import styles from './HallPage.module.scss'
import LeaderboardSection from './LeaderboardSection'
import MetricsSidebar from './MetricsSidebar'
import SprintInfo from './SprintInfo'
import SprintTabs from './SprintTabs'

const HallPage = () => {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <HallHeader />
        <SprintTabs />
        <SprintInfo />

        <div className={styles.columns}>
          <LeaderboardSection />
          <MetricsSidebar />
        </div>
      </div>
    </main>
  )
}

export default HallPage
