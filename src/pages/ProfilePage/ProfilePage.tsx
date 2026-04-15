import AchievementsGallery from './AchievementsGallery'
import styles from './ProfilePage.module.scss'
import ProfileSidebar from './ProfileSidebar'
import SettingsForm from './SettingsForm'
import StatsRow from './StatsRow'
import UserHeroCard from './UserHeroCard'

const ProfilePage = () => {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <ProfileSidebar />

          <div className={styles.main}>
            <UserHeroCard />
            <StatsRow />
            <AchievementsGallery />
            <SettingsForm />
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProfilePage
