import Info from '../../../assets/icons/info.svg?react'
import styles from './SprintHeader.module.scss'

const SprintHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.titleGroup}>
        <Info className={styles.icon} />
        <h1 className={styles.title}>#2 Basalt Arena (Frontend)</h1>
      </div>

      <div className={styles.statusBadge}>
        <span className={styles.statusDot} />
        <span className={styles.statusText}>Система активна</span>
      </div>
    </div>
  )
}

export default SprintHeader
