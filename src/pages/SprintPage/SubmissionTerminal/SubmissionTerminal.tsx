import DemoEye from '../../../assets/icons/demo-eye.svg?react'
import SendMessage from '../../../assets/icons/send-message.svg?react'
import Terminal from '../../../assets/icons/terminal.svg?react'
import UrlBrackets from '../../../assets/icons/url-brackets.svg?react'
import styles from './SubmissionTerminal.module.scss'

const SubmissionTerminal = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.formCard}>
        <div className={styles.heading}>
          <Terminal className={styles.headingIcon} />
          <h3 className={styles.headingText}>Терминал отправки</h3>
        </div>

        <form className={styles.form}>
          <div className={styles.field}>
            <label className={styles.label}>Ссылка на репозиторий</label>
            <div className={styles.inputWrapper}>
              <UrlBrackets className={styles.inputIcon} />
              <input
                type="url"
                className={styles.input}
                placeholder="https://github.com/..."
              />
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>
              Ссылка на демо (необязательно)
            </label>
            <div className={styles.inputWrapper}>
              <DemoEye className={styles.inputIcon} />
              <input
                type="url"
                className={styles.input}
                placeholder="https://demo.basalt..."
              />
            </div>
          </div>

          <button type="submit" className={styles.submitButton}>
            Отправить решение
            <SendMessage className={styles.submitIcon} />
          </button>
        </form>
      </section>

      <div className={styles.statsBar}>
        <div className={styles.stat}>
          <span className={styles.statLabel}>Ваша позиция</span>
          <div className={styles.statValue}>
            <span className={styles.statMain}>#3</span>
            <span className={styles.statSub}>/10</span>
          </div>
        </div>

        <div className={styles.stat}>
          <span className={styles.statLabel}>Очков заработано</span>
          <span className={styles.statPoints}>90</span>
        </div>
      </div>
    </div>
  )
}

export default SubmissionTerminal
