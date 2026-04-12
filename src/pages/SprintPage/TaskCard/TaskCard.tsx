import CurrentTask from '../../../assets/icons/current-task.svg?react'
import LogoIcon from '../../../assets/icons/logo.svg?react'
import Repo from '../../../assets/icons/repo.svg?react'
import Specs from '../../../assets/icons/specs.svg?react'
import styles from './TaskCard.module.scss'

const usefulLinks = [
  { icon: LogoIcon, label: 'Платформенный SDK v2.1' },
  { icon: Specs, label: 'Спецификация Quantum' },
  { icon: Repo, label: 'Репозиторий тестов' },
]

const TaskCard = () => {
  return (
    <section className={styles.card}>
      <div className={styles.heading}>
        <CurrentTask className={styles.headingIcon} />
        <h2 className={styles.headingText}>
          Текущая задача: Basalt Arena (Frontend)
        </h2>
      </div>

      <div className={styles.content}>
        <blockquote className={styles.blockquote}>
          «Перед вами — макет той самой платформы, на которой вы сейчас
          находитесь. Ваша задача — сверстать его. Да, это рекурсия.»
        </blockquote>

        <p className={styles.body}>
          Реализуйте все три страницы по макету: index.html (активный спринт),
          hall.html (зал славы) и profile.html (профиль). Стек — любой: чистый
          HTML/CSS, React, Vue, Svelte, Tailwind, Bootstrap, генерация через ИИ
          — что угодно.
        </p>

        <h4 className={styles.criteriaHeading}>Критерии приёмки:</h4>

        <ul className={styles.criteriaList}>
          <li>
            Главное —{' '}
            <span className={styles.highlight}>соответствие макету</span>. Чем
            точнее, тем выше оценка наставника.
          </li>
          <li>
            Весь независимый от бэка JS-функционал должен{' '}
            <span className={styles.highlight}>работать</span>: модалки, таймер,
            табы, формы и т.д.
          </li>
          <li>
            Все запросы к серверу — через{' '}
            <span className={styles.highlight}>мок-API</span> (заглушки). На
            основе победившего мок-API в следующем спринте будем проектировать
            настоящий бэкенд.
          </li>
        </ul>
      </div>

      <div className={styles.linksSection}>
        <h4 className={styles.linksLabel}>Полезные ссылки</h4>
        <div className={styles.linksRow}>
          {usefulLinks.map(({ icon: Icon, label }) => (
            <a key={label} href="#" className={styles.chip}>
              <Icon className={styles.chipIcon} />
              <span className={styles.chipText}>{label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TaskCard
