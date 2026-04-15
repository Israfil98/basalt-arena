import CommunityIcon from '../../../assets/icons/community-icon.svg?react'
import Earnings from '../../../assets/icons/earnings.svg?react'
import Thunder from '../../../assets/icons/thunder.svg?react'
import styles from './HeroSection.module.scss'

type ValueColor = 'white' | 'cyan' | 'green'

interface IStat {
  value: string
  label: string
  color: ValueColor
}

interface IFeature {
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
}

const stats: IStat[] = [
  { value: '142', label: 'Бойцов', color: 'white' },
  { value: '07', label: 'Спринтов', color: 'cyan' },
  { value: '280K', label: 'Призовых ₽', color: 'green' },
]

const features: IFeature[] = [
  {
    icon: Thunder,
    title: 'Реальные задачи',
    description:
      'Никаких leetcode-головоломок. Только то, что встретишь в проде.',
  },
  {
    icon: CommunityIcon,
    title: 'Открытое сообщество',
    description: 'Решения публикуются — учись у тех, кто впереди тебя.',
  },
  {
    icon: Earnings,
    title: 'Решение в проде',
    description:
      'Один победитель спринта — его код уезжает в прод, а он получает деньги.',
  },
]

const valueColors: Record<ValueColor, string> = {
  white: styles.valueWhite,
  cyan: styles.valueCyan,
  green: styles.valueGreen,
}

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.intro}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          <span className={styles.badgeText}>Спринт #07 в эфире</span>
        </div>

        <div className={styles.headingWrapper}>
          <h1 className={styles.heading}>
            Войди в <span className={styles.headingAccent}>арену</span>.
            <br />
            Покажи код.
          </h1>
        </div>

        <div className={styles.descriptionWrapper}>
          <p className={styles.description}>
            Basalt Arena — площадка для разработчиков, где каждый спринт
            превращается в честное соревнование за баллы, ранг и реальные
            деньги.
          </p>
        </div>
      </div>

      <div className={styles.statsGrid}>
        {stats.map(({ value, label, color }) => (
          <div key={label} className={styles.statCard}>
            <span className={`${styles.statValue} ${valueColors[color]}`}>
              {value}
            </span>
            <span className={styles.statLabel}>{label}</span>
          </div>
        ))}
      </div>

      <div className={styles.featuresList}>
        {features.map(({ icon: Icon, title, description }) => (
          <div key={title} className={styles.featureItem}>
            <Icon className={styles.featureIcon} />
            <div className={styles.featureText}>
              <h3 className={styles.featureTitle}>{title}</h3>
              <p className={styles.featureDescription}>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HeroSection
