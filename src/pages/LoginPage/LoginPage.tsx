import AuthForm from './AuthForm'
import HeroSection from './HeroSection'
import styles from './LoginPage.module.scss'

const LoginPage = () => {
  return (
    <main className={styles.page}>
      <div className={styles.gridPattern} aria-hidden="true" />
      <div className={styles.glowLeft} aria-hidden="true" />
      <div className={styles.glowRight} aria-hidden="true" />

      <div className={styles.wrapper}>
        <div className={styles.grid}>
          <HeroSection />

          <AuthForm />
        </div>
      </div>
    </main>
  )
}

export default LoginPage
