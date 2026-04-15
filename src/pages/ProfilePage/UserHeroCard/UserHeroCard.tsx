import { identicon } from '@dicebear/collection'
import { createAvatar } from '@dicebear/core'
import Pencil from '../../../assets/icons/pencil.svg?react'
import UrlBrackets from '../../../assets/icons/url-brackets.svg?react'
import styles from './UserHeroCard.module.scss'

const avatar = createAvatar(identicon, {
  seed: 'dev_architect',
  size: 128,
})

const avatarUri = avatar.toDataUri()

const UserHeroCard = () => {
  return (
    <section className={styles.card}>
      <div className={styles.glowOrb} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.avatarWrapper}>
          <img
            src={avatarUri}
            alt="dev_architect аватар"
            className={styles.avatar}
          />
        </div>

        <div className={styles.content}>
          <h1 className={styles.username}>@dev_architect</h1>

          <div className={styles.bioWrapper}>
            <p className={styles.bio}>
              Разработчик. Учусь, делаю проекты, участвую в спринтах Basalt
              Arena.
            </p>
          </div>

          <div className={styles.techStack}>
            <div className={styles.tagChip}>
              <UrlBrackets className={styles.tagIcon} />
              <input
                type="text"
                className={styles.tagInput}
                defaultValue="Python, Go, Rust"
                aria-label="Технологии"
              />
              <Pencil className={styles.tagEditIcon} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserHeroCard
