import CountDownTimer from './CountDownTimer'
import SprintHeader from './SprintHeader'
import styles from './SprintPage.module.scss'
import SubmissionTerminal from './SubmissionTerminal'
import TaskCard from './TaskCard'

const SprintPage = () => {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <SprintHeader />

        <div className={styles.contentWrapper}>
          <CountDownTimer />

          <div className={styles.columns}>
            <TaskCard />
            <SubmissionTerminal />
          </div>
        </div>
      </div>
    </main>
  )
}

export default SprintPage
