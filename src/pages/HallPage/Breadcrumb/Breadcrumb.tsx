import ArrowRight from '../../../assets/icons/arrow-right.svg?react'
import styles from './Breadcrumb.module.scss'

const breadcrumbs = [
  { label: 'Архив', active: false },
  { label: 'Сезон_04', active: false },
  { label: 'Зал_славы', active: true },
]

const Breadcrumb = () => {
  return (
    <nav className={styles.breadcrumb} aria-label="Навигация">
      {breadcrumbs.map((item, index) => (
        <span key={item.label} className={styles.item}>
          <span className={item.active ? styles.active : styles.inactive}>
            {item.label}
          </span>
          {index < breadcrumbs.length - 1 && (
            <ArrowRight className={styles.separator} />
          )}
        </span>
      ))}
    </nav>
  )
}

export default Breadcrumb
