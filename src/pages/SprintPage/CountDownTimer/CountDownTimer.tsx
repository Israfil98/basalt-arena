import styles from './CountDownTimer.module.scss'

const CountdownTimer = () => {
  return (
    <section className={styles.card}>
      <div className={styles.content}>
        <p className={styles.heading}>До завершения спринта</p>

        <div className={styles.timeRow}>
          <div className={styles.timeUnit}>
            <span className={styles.number}>02</span>
            <span className={styles.label}>Часов</span>
          </div>

          <span className={styles.separator}>:</span>

          <div className={styles.timeUnit}>
            <span className={styles.number}>45</span>
            <span className={styles.label}>Минут</span>
          </div>

          <span className={styles.separator}>:</span>

          <div className={styles.timeUnit}>
            <span className={`${styles.number} ${styles.green}`}>12</span>
            <span className={`${styles.label} ${styles.green}`}>Секунд</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CountdownTimer
