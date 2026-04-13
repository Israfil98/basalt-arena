import { identicon } from '@dicebear/collection'
import { createAvatar } from '@dicebear/core'
import Heart from '../../../../assets/icons/heart.svg?react'
import Rocket from '../../../../assets/icons/rocket.svg?react'
import SendMessage from '../../../../assets/icons/send-message.svg?react'
import StarBadge from '../../../../assets/icons/star-badge.svg?react'
import UrlBrackets from '../../../../assets/icons/url-brackets.svg?react'
import styles from './LeaderboardCard.module.scss'

interface ILeaderboardCardProps {
  rank: number
  name: string
  date: string
  score: number
  username: string
  likes: number
}

const getRankStyle = (rank: number) => {
  switch (rank) {
    case 1:
      return { bg: '#EAB308', color: '#101F22' }
    case 2:
      return { bg: '#475569', color: '#FFFFFF' }
    case 3:
      return { bg: '#9A3412', color: '#FFEDD5' }
    default:
      return { bg: '#334155', color: '#CBD5E1' }
  }
}

const LeaderboardCard = ({
  rank,
  name,
  date,
  score,
  username,
  likes,
}: ILeaderboardCardProps) => {
  const isFirst = rank === 1
  const rankStyle = getRankStyle(rank)

  const avatar = createAvatar(identicon, {
    seed: username,
    size: 64,
  })
  const avatarUri = avatar.toDataUri()

  return (
    <div className={`${styles.card} ${isFirst ? styles.cardFirst : ''}`}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.avatarWrapper}>
            <img
              src={avatarUri}
              alt={`${name} avatar`}
              className={`${styles.avatar} ${isFirst ? styles.avatarFirst : ''}`}
            />
            <span
              className={styles.rankBadge}
              style={{ backgroundColor: rankStyle.bg, color: rankStyle.color }}
            >
              {rank}
            </span>
          </div>

          <div className={styles.userInfo}>
            <div className={styles.nameRow}>
              <span className={styles.name}>{name}</span>
              {isFirst && <StarBadge className={styles.starBadge} />}
            </div>

            <div className={styles.dateRow}>
              <span className={styles.date}>{date}</span>
              <span className={styles.dot} />
              <span className={styles.score}>Оценка наставника: {score}</span>
            </div>

            <div className={styles.usernameRow}>
              <SendMessage className={styles.usernameIcon} />
              <span className={styles.username}>@{username}</span>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.actionsWrapper}>
            <div className={styles.actionButtons}>
              {isFirst ? (
                <>
                  <button className={styles.actionButton}>
                    <UrlBrackets className={styles.actionIcon} />
                    <span className={styles.actionText}>Код</span>
                  </button>
                  <span className={styles.actionDivider} />
                  <button className={styles.actionButton}>
                    <Rocket className={styles.actionIcon} />
                    <span className={styles.actionText}>Демо</span>
                  </button>
                </>
              ) : (
                <>
                  <button className={styles.actionButtonIcon}>
                    <UrlBrackets className={styles.actionIcon} />
                  </button>
                  <span className={styles.actionDivider} />
                  <button className={styles.actionButtonIcon}>
                    <Rocket className={styles.actionIcon} />
                  </button>
                </>
              )}
            </div>
          </div>

          <button
            className={`${styles.heartButton} ${isFirst ? styles.heartFirst : ''}`}
          >
            <Heart className={styles.heartIcon} />
            <span className={styles.heartCount}>{likes}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default LeaderboardCard
