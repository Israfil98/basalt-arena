import AchievementArrow from '../../../assets/icons/achievement-arrow.svg?react'
import Achievement from '../../../assets/icons/achievement.svg?react'
import Circinus from '../../../assets/icons/circinus.svg?react'
import FirstIcon from '../../../assets/icons/first-icon.svg?react'
import Invisible from '../../../assets/icons/invisible.svg?react'
import SprintsDoneIcon from '../../../assets/icons/sprints-done-icon.svg?react'
import styles from './AchievementsGallery.module.scss'

interface IAchievement {
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
  locked?: boolean
}

const achievements: IAchievement[] = [
  {
    icon: SprintsDoneIcon,
    title: 'Газующий',
    description: 'Не пропустил ни одного спринта',
  },
  {
    icon: Circinus,
    title: 'Архитектор',
    description: 'Создатель Basalt Arena',
  },
  {
    icon: FirstIcon,
    title: 'Первый',
    description: 'Выложил решение первым',
  },
  {
    icon: Invisible,
    title: 'Невидимка',
    description: 'Ни разу не участвовал',
    locked: true,
  },
]

const AchievementsGallery = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.heading}>
          <Achievement className={styles.headingIcon} />
          <span>Галерея достижений</span>
        </h2>

        <button className={styles.viewAllLink}>
          <span className={styles.viewAllText}>Все достижения</span>
          <AchievementArrow className={styles.viewAllIcon} />
        </button>
      </div>

      <div className={styles.grid}>
        {achievements.map(({ icon: Icon, title, description, locked }) => (
          <div
            key={title}
            className={`${styles.card} ${locked ? styles.cardLocked : ''}`}
          >
            <div
              className={`${styles.iconCircle} ${locked ? styles.iconCircleLocked : ''}`}
            >
              <Icon
                className={`${styles.icon} ${locked ? styles.iconLocked : ''}`}
              />
            </div>

            <div className={styles.textBlock}>
              <h3
                className={`${styles.title} ${locked ? styles.titleLocked : ''}`}
              >
                {title}
              </h3>
              <p className={styles.description}>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AchievementsGallery
