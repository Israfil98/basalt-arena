import LogoIcon from '../../../assets/icons/logo.svg?react'
import UrlBrackets from '../../../assets/icons/url-brackets.svg?react'
import styles from './Footer.module.scss'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.bold}>© 2024 BASALT ARENA</span>
          <span className={styles.divider}>|</span>
          <span className={styles.regular}>ВРЕМЯ СЕРВЕРА: 14:02 UTC</span>
          <span className={styles.divider}>|</span>
          <span className={styles.regular}>СБОРКА: v4.2.0-STABLE</span>
        </div>

        <div className={styles.right}>
          <div className={styles.footerLinks}>
            <a href="#" className={styles.link}>
              API
            </a>
            <a href="#" className={styles.link}>
              КОНФИДЕНЦИАЛЬНОСТЬ
            </a>
            <a href="#" className={styles.link}>
              УСЛОВИЯ
            </a>
          </div>
          <div className={styles.icons}>
            <a href="#" className={styles.icon} aria-label="Source code">
              <UrlBrackets />
            </a>
            <a href="#" className={styles.icon} aria-label="Basalt Arena">
              <LogoIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
