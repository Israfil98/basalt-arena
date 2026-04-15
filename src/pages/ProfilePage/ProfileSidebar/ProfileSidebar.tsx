import Mail from '../../../assets/icons/mail.svg?react'
import Pencil from '../../../assets/icons/pencil.svg?react'
import Profile from '../../../assets/icons/profile.svg?react'
import Rollback from '../../../assets/icons/rollback.svg?react'
import SendMessage from '../../../assets/icons/send-message.svg?react'
import Settings from '../../../assets/icons/settings.svg?react'
import StarBadge from '../../../assets/icons/star-badge.svg?react'
import Stats from '../../../assets/icons/stats.svg?react'
import UrlBrackets from '../../../assets/icons/url-brackets.svg?react'
import styles from './ProfileSidebar.module.scss'

const navItems = [
  { icon: Profile, label: 'Обзор', id: 'overview' },
  { icon: StarBadge, label: 'Бейджи и достижения', id: 'achievements' },
  { icon: Stats, label: 'Статистика', id: 'stats' },
  { icon: Rollback, label: 'История спринтов', id: 'history' },
  { icon: Settings, label: 'Настройки', id: 'settings' },
]

const contacts = [
  { icon: SendMessage, label: 'Telegram', value: '@dev_arch' },
  { icon: Mail, label: 'Email', value: 'ahmad@basalt-arena.io' },
  { icon: UrlBrackets, label: 'GitHub', value: '/dev_architect' },
]

const ProfileSidebar = () => {
  const activeId = 'overview'

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        {navItems.map(({ icon: Icon, label, id }) => (
          <button
            key={id}
            className={`${styles.navItem} ${id === activeId ? styles.navItemActive : ''}`}
          >
            <Icon className={styles.navIcon} />
            <span className={styles.navText}>{label}</span>
          </button>
        ))}
      </nav>

      <div className={styles.contactsCard}>
        <div className={styles.contactsHeader}>
          <h3 className={styles.contactsTitle}>Контакты</h3>
          <button
            className={styles.editButton}
            aria-label="Редактировать контакты"
          >
            <Pencil className={styles.editIcon} />
          </button>
        </div>

        <div className={styles.contactsList}>
          {contacts.map(({ icon: Icon, label, value }) => (
            <div key={label} className={styles.contactRow}>
              <div className={styles.contactLabel}>
                <Icon className={styles.contactIcon} />
                <span className={styles.contactLabelText}>{label}</span>
              </div>
              <span className={styles.contactValue}>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default ProfileSidebar
