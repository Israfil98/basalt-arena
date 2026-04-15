import Schedule from '../../../assets/icons/schedule.svg?react'
import Specs from '../../../assets/icons/specs.svg?react'
import styles from './SprintInfo.module.scss'

interface ISprintInfoProps {
  onOpenBrief: () => void
}

const techTags = ['HTML', 'Tailwind CSS']

const SprintInfo = ({ onOpenBrief }: ISprintInfoProps) => {
  return (
    <section className={styles.card}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.title}>#2 Basalt Arena (frontend)</h2>
          <div className={styles.meta}>
            {techTags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
            <span className={styles.deadline}>
              <Schedule className={styles.deadlineIcon} />
              Завершён 14 мая
            </span>
          </div>
        </div>

        <button className={styles.button} onClick={onOpenBrief}>
          <Specs className={styles.buttonIcon} />
          Открыть бриф
        </button>
      </div>
    </section>
  )
}

export default SprintInfo
