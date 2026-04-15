import ArrowUp from '../../../assets/icons/arrow-up.svg?react'
import CompleteIcon from '../../../assets/icons/complete-icon.svg?react'
import Earnings from '../../../assets/icons/earnings.svg?react'
import IconTrendUp from '../../../assets/icons/icon-trend-up.svg?react'
import Ranks from '../../../assets/icons/ranks.svg?react'
import Star from '../../../assets/icons/star.svg?react'
import Thunder from '../../../assets/icons/thunder.svg?react'
import styles from './StatsRow.module.scss'

type BadgeVariant = 'green' | 'cyan' | 'accentGreen'

interface IStatCard {
  label: string
  value: string
  decorativeIcon: React.FC<React.SVGProps<SVGSVGElement>>
  decorativeColor: string
  trendIcon: React.FC<React.SVGProps<SVGSVGElement>>
  trendText: string
  badge: BadgeVariant
}

const statCards: IStatCard[] = [
  {
    label: 'Баллы',
    value: '90',
    decorativeIcon: Star,
    decorativeColor: 'cyan',
    trendIcon: IconTrendUp,
    trendText: '+12% за месяц',
    badge: 'green',
  },
  {
    label: 'Глобальный ранг',
    value: '#3',
    decorativeIcon: Ranks,
    decorativeColor: 'cyan',
    trendIcon: ArrowUp,
    trendText: '+2 позиции',
    badge: 'green',
  },
  {
    label: 'Спринтов пройдено',
    value: '1',
    decorativeIcon: Thunder,
    decorativeColor: 'cyan',
    trendIcon: CompleteIcon,
    trendText: '100% участия',
    badge: 'cyan',
  },
  {
    label: 'Заработано денег',
    value: '20 000 ₽',
    decorativeIcon: Earnings,
    decorativeColor: 'accentGreen',
    trendIcon: IconTrendUp,
    trendText: '+20 000 ₽',
    badge: 'accentGreen',
  },
]

const badgeStyles: Record<BadgeVariant, string> = {
  green: styles.badgeGreen,
  cyan: styles.badgeCyan,
  accentGreen: styles.badgeAccentGreen,
}

const decorativeStyles: Record<string, string> = {
  cyan: styles.decorativeCyan,
  accentGreen: styles.decorativeAccentGreen,
}

const StatsRow = () => {
  return (
    <div className={styles.grid}>
      {statCards.map(
        ({
          label,
          value,
          decorativeIcon: DecorativeIcon,
          decorativeColor,
          trendIcon: TrendIcon,
          trendText,
          badge,
        }) => (
          <div key={label} className={styles.card}>
            <div
              className={`${styles.decorativeWrapper} ${decorativeStyles[decorativeColor]}`}
              aria-hidden="true"
            >
              <DecorativeIcon className={styles.decorativeIcon} />
            </div>

            <div className={styles.content}>
              <p className={styles.label}>{label}</p>
              <p className={styles.value}>{value}</p>
              <div className={`${styles.badge} ${badgeStyles[badge]}`}>
                <span className={styles.trendIconWrapper}>
                  <TrendIcon className={styles.trendIcon} />
                </span>
                <span className={styles.trendText}>{trendText}</span>
              </div>
            </div>
          </div>
        ),
      )}
    </div>
  )
}

export default StatsRow
