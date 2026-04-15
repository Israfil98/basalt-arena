import { useEffect } from 'react'
import { Link } from 'react-router'
import CancelIcon from '../../../assets/icons/cancel-icon.svg?react'
import Categories from '../../../assets/icons/categories.svg?react'
import ChatIcon from '../../../assets/icons/chat-icon.svg?react'
import CompleteIcon from '../../../assets/icons/complete-icon.svg?react'
import ImageIcon from '../../../assets/icons/image-icon.svg?react'
import Rocket from '../../../assets/icons/rocket.svg?react'
import Schedule from '../../../assets/icons/schedule.svg?react'
import Specs from '../../../assets/icons/specs.svg?react'
import UrlBrackets from '../../../assets/icons/url-brackets.svg?react'
import styles from './SprintBriefModal.module.scss'

interface ISprintBriefModalProps {
  isOpen: boolean
  onClose: () => void
}

const techTags = ['HTML', 'Tailwind CSS']

const criteria = [
  {
    text: 'Главное — ',
    highlight: 'соответствие макету',
    rest: '. Чем точнее, тем выше оценка наставника.',
  },
  {
    text: 'Весь независимый от бэка JS-функционал должен ',
    highlight: 'работать',
    rest: ': модалки, таймер, табы, формы и т.д.',
  },
  {
    text: 'Все запросы к серверу — через ',
    highlight: 'мок-API',
    rest: ' (заглушки). На основе победившего мок-API в следующем спринте будем проектировать настоящий бэкенд.',
  },
]

const usefulLinks = [
  { icon: ImageIcon, label: 'Figma-макет' },
  { icon: UrlBrackets, label: 'Гайд по мок-API' },
  { icon: ChatIcon, label: 'Чат участников' },
]

const SprintBriefModal = ({ isOpen, onClose }: ISprintBriefModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div
      className={styles.backdrop}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label="Бриф спринта"
    >
      <div className={styles.card}>
        <div className={styles.glowOrb} aria-hidden="true" />

        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.iconBadge}>
              <Specs className={styles.iconBadgeIcon} />
            </div>
            <div className={styles.headerText}>
              <span className={styles.headerLabel}>Бриф спринта</span>
              <h2 className={styles.headerTitle}>#2 Basalt Arena (frontend)</h2>
            </div>
          </div>

          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Закрыть"
          >
            <CancelIcon className={styles.closeIcon} />
          </button>
        </div>

        {/* Content */}
        <div className={styles.content}>
          <div className={styles.tagsRow}>
            {techTags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
            <span className={styles.dateTag}>
              <Schedule className={styles.dateIcon} />
              Завершён 14 мая 2026
            </span>
          </div>

          <blockquote className={styles.blockquote}>
            «Перед вами — макет той самой платформы, на которой вы сейчас
            находитесь. Ваша задача — сверстать его. Да, это рекурсия.»
          </blockquote>

          <p className={styles.bodyText}>
            Реализуйте все три страницы по макету:{' '}
            <span className={styles.highlight}>index.html</span> (активный
            спринт), <span className={styles.highlight}>hall.html</span> (зал
            славы) и <span className={styles.highlight}>profile.html</span>{' '}
            (профиль). Стек — любой: чистый HTML/CSS, React, Vue, Svelte,
            Tailwind, Bootstrap, генерация через ИИ — что угодно.
          </p>

          <div className={styles.criteriaSection}>
            <h4 className={styles.criteriaHeading}>
              <Categories className={styles.criteriaIcon} />
              <span>Критерии приёмки</span>
            </h4>

            <ul className={styles.criteriaList}>
              {criteria.map(({ text, highlight, rest }) => (
                <li key={highlight} className={styles.criteriaItem}>
                  <CompleteIcon className={styles.checkIcon} />
                  <span className={styles.criteriaText}>
                    {text}
                    <span className={styles.criteriaHighlight}>
                      {highlight}
                    </span>
                    {rest}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linksSection}>
            <h4 className={styles.linksLabel}>Полезные ссылки</h4>
            <div className={styles.linksRow}>
              {usefulLinks.map(({ icon: Icon, label }) => (
                <Link key={label} to="#" className={styles.linkChip}>
                  <Icon className={styles.linkChipIcon} />
                  <span className={styles.linkChipText}>{label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <button className={styles.backLink} onClick={onClose}>
            ← Назад в зал славы
          </button>
          <Link to="/" className={styles.sprintButton} onClick={onClose}>
            <Rocket className={styles.sprintButtonIcon} />
            <span>Перейти к спринту</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SprintBriefModal
