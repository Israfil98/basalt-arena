import Breadcrumb from '../Breadcrumb/Breadcrumb'
import styles from './HallHeader.module.scss'

const HallHeader = () => {
  return (
    <div className={styles.header}>
      <Breadcrumb />
      <h1 className={styles.title}>Зал славы</h1>
      <p className={styles.description}>
        Чествуем архитекторов арены. Просматривайте решения прошлых спринтов,
        изучайте исходный код победителей и отдавайте дань уважения лучшим
        участникам.
      </p>
    </div>
  )
}

export default HallHeader
