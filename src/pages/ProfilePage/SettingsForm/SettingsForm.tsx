import IconAt from '../../../assets/icons/icon-at.svg?react'
import Mail from '../../../assets/icons/mail.svg?react'
import ProfileSettings from '../../../assets/icons/profile-settings.svg?react'
import SaveIcon from '../../../assets/icons/save-icon.svg?react'
import SendMessage from '../../../assets/icons/send-message.svg?react'
import FormInput from '../../../components/ui/FormInput'
import FormTextarea from '../../../components/ui/FormTextarea'
import styles from './SettingsForm.module.scss'

const SettingsForm = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <ProfileSettings className={styles.headerIcon} />
        <h2 className={styles.headerText}>Настройки профиля</h2>
      </div>

      <form className={styles.form}>
        <div className={styles.inputField}>
          <FormInput
            label="Имя пользователя"
            icon={IconAt}
            defaultValue="dev_architect"
          />
        </div>

        <div className={styles.inputField}>
          <FormInput
            label="Электронная почта"
            icon={Mail}
            type="email"
            defaultValue="ahmad@basalt-arena.io"
          />
        </div>

        <div className={styles.inputField}>
          <FormInput
            label="Telegram"
            icon={SendMessage}
            defaultValue="@dev_arch"
          />
        </div>

        <div className={styles.textareaField}>
          <FormTextarea
            label="О себе"
            defaultValue="Разработчик. Учусь, делаю проекты, участвую в спринтах Basalt Arena."
          />
        </div>

        <div className={styles.buttonsWrapper}>
          <div className={styles.buttonsInner}>
            <button type="button" className={styles.cancelButton}>
              Отмена
            </button>
            <button type="submit" className={styles.saveButton}>
              <SaveIcon className={styles.saveIcon} />
              <span>Сохранить</span>
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default SettingsForm
