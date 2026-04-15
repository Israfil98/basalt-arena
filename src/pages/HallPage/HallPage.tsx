import { useState } from 'react'
import HallHeader from './HallHeader/HallHeader'
import styles from './HallPage.module.scss'
import LeaderboardSection from './LeaderboardSection'
import MetricsSidebar from './MetricsSidebar'
import SprintBriefModal from './SprintBriefModal'
import SprintInfo from './SprintInfo'
import SprintTabs from './SprintTabs'

const HallPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <main className={styles.page}>
        <div className={styles.container}>
          <HallHeader />
          <SprintTabs />
          <SprintInfo onOpenBrief={() => setIsModalOpen(true)} />

          <div className={styles.columns}>
            <LeaderboardSection />
            <MetricsSidebar />
          </div>
        </div>
      </main>

      <SprintBriefModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}

export default HallPage
