import ArrowDown from '../../../assets/icons/arrow-down.svg?react'
import MoreArrows from '../../../assets/icons/more-arrows.svg?react'
import LeaderboardCard from './LeaderboardCard/LeaderboardCard'
import styles from './LeaderboardSection.module.scss'

const leaderboardData = [
  {
    rank: 1,
    name: 'Nakir',
    date: '14 мая 2026',
    score: 100,
    username: 'nakir',
    likes: 9,
  },
  {
    rank: 2,
    name: 'Ilgiz',
    date: '13 мая 2026',
    score: 92,
    username: 'ilgiz',
    likes: 8,
  },
  {
    rank: 3,
    name: 'Radik',
    date: '13 мая 2026',
    score: 88,
    username: 'radik',
    likes: 7,
  },
  {
    rank: 4,
    name: 'Масжид',
    date: '12 мая 2026',
    score: 84,
    username: 'masjid',
    likes: 6,
  },
  {
    rank: 5,
    name: 'Be yourself.',
    date: '12 мая 2026',
    score: 80,
    username: 'beyourself',
    likes: 5,
  },
  {
    rank: 6,
    name: 'Yusuf Adilson',
    date: '11 мая 2026',
    score: 76,
    username: 'yusuf_adilson',
    likes: 4,
  },
  {
    rank: 7,
    name: 'Usman',
    date: '11 мая 2026',
    score: 72,
    username: 'usman',
    likes: 3,
  },
  {
    rank: 8,
    name: 'Ибрахим',
    date: '10 мая 2026',
    score: 68,
    username: 'ibrahim',
    likes: 2,
  },
  {
    rank: 9,
    name: 'khabbin',
    date: '10 мая 2026',
    score: 64,
    username: 'khabbin',
    likes: 2,
  },
  {
    rank: 10,
    name: 'Israfil',
    date: '9 мая 2026',
    score: 60,
    username: 'israfil',
    likes: 1,
  },
]

const LeaderboardSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.heading}>
        <h3 className={styles.title}>Лучшие решения</h3>
        <div className={styles.sort}>
          <span className={styles.sortLabel}>Сортировка:</span>
          <button className={styles.sortButton}>
            <span className={styles.sortValue}>Эффективность</span>
            <ArrowDown className={styles.sortIcon} />
          </button>
        </div>
      </div>

      <div className={styles.cards}>
        {leaderboardData.map((user) => (
          <LeaderboardCard key={user.rank} {...user} />
        ))}
      </div>

      <button className={styles.loadMore}>
        Загрузить ещё 48 решений
        <MoreArrows className={styles.loadMoreIcon} />
      </button>
    </div>
  )
}

export default LeaderboardSection
