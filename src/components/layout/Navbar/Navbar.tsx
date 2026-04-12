import { NavLink } from 'react-router'
import arrowDown from '../../../assets/icons/arrow-down.svg'
import bell from '../../../assets/icons/bell.svg'
import logo from '../../../assets/icons/logo.svg'
import styles from './Navbar.module.scss'

const navLinks = [
  { to: '/', label: 'Активный спринт' },
  { to: '/hall', label: 'Зал славы' },
  { to: '/docs', label: 'Документация', disabled: true },
]

function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <a href="/" className={styles.logo}>
            <img src={logo} alt="Basalt Arena" />
            <div className={styles.logoText}>
              <span className={styles.logoTitle}>BASALT</span>
              <span className={styles.logoVersion}>АРЕНА V4.2</span>
            </div>
          </a>

          <ul className={styles.links}>
            {navLinks.map(({ to, label, disabled }) => (
              <li key={to}>
                {disabled ? (
                  <span className={styles.disabled}>{label}</span>
                ) : (
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      isActive ? styles.active : styles.inactive
                    }
                  >
                    {label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.right}>
          <button className={styles.bellButton} aria-label="Уведомления">
            <img src={bell} alt="" />
          </button>

          <div className={styles.user}>
            <div className={styles.avatar}>
              <img
                src="https://placehold.co/32x32/1A2E33/90C1CB?text=DA"
                alt="Avatar"
              />
            </div>
            <div className={styles.userInfo}>
              <span className={styles.username}>dev_architect</span>
              <span className={styles.role}>Архитектор</span>
            </div>
            <img src={arrowDown} alt="" className={styles.chevron} />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
