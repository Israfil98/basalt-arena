import { useState } from 'react'
import DemoEye from '../../../assets/icons/demo-eye.svg?react'
import EnterIcon from '../../../assets/icons/enter-icon.svg?react'
import KeyIcon from '../../../assets/icons/key-icon.svg?react'
import LockIcon from '../../../assets/icons/lock-icon.svg?react'
import Profile from '../../../assets/icons/profile.svg?react'
import SendMessage from '../../../assets/icons/send-message.svg?react'
import UrlBrackets from '../../../assets/icons/url-brackets.svg?react'
import styles from './AuthForm.module.scss'

const AuthForm = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login')
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className={styles.card}>
      <div className={styles.glowOrb} aria-hidden="true" />

      <div className={styles.inner}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerText}>
            <span className={styles.headerLabel}>// auth.access()</span>
            <h2 className={styles.headerTitle}>Авторизация</h2>
          </div>
          <div className={styles.lockBadge}>
            <LockIcon className={styles.lockIcon} />
          </div>
        </div>

        {/* Tabs */}
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === 'login' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('login')}
          >
            Вход
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'register' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('register')}
          >
            Регистрация
          </button>
        </div>

        {/* Form */}
        <form className={styles.form}>
          {/* Login Input */}
          <div className={styles.field}>
            <label htmlFor="login" className={styles.label}>
              Логин или Email
            </label>
            <div className={styles.inputWrapper}>
              <span className={styles.inputIconLeft} aria-hidden="true">
                <Profile className={styles.inputIcon} />
              </span>
              <input
                id="login"
                type="text"
                className={styles.input}
                placeholder="dev_architect"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className={styles.field}>
            <div className={styles.labelRow}>
              <label htmlFor="password" className={styles.label}>
                Пароль
              </label>
              <button type="button" className={styles.forgotLink}>
                Забыл?
              </button>
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputIconLeft} aria-hidden="true">
                <KeyIcon className={styles.inputIcon} />
              </span>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                className={styles.input}
                placeholder="••••••••"
              />
              <button
                type="button"
                className={styles.eyeButton}
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
              >
                <DemoEye className={styles.eyeIcon} />
              </button>
            </div>
          </div>

          {/* Checkbox */}
          <label className={styles.checkboxRow}>
            <input type="checkbox" className={styles.checkbox} />
            <span className={styles.checkboxLabel}>
              Запомнить сессию на 30 дней
            </span>
          </label>

          {/* Submit */}
          <div className={styles.submitWrapper}>
            <button type="submit" className={styles.submitButton}>
              <EnterIcon className={styles.submitIcon} />
              <span>Войти в арену</span>
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className={styles.divider}>
          <span className={styles.dividerLine} />
          <span className={styles.dividerText}>или через</span>
          <span className={styles.dividerLine} />
        </div>

        {/* OAuth */}
        <div className={styles.oauthGrid}>
          <button className={styles.oauthButton}>
            <UrlBrackets className={styles.oauthIcon} />
            <span className={styles.oauthText}>GitHub</span>
          </button>
          <button className={styles.oauthButton}>
            <SendMessage className={styles.oauthIcon} />
            <span className={styles.oauthText}>Telegram</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AuthForm
