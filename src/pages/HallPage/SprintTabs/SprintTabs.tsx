import { useState } from 'react'
import LiveCircle from '../../../assets/icons/live-circle.svg?react'
import styles from './SprintTabs.module.scss'

const tabs = [
  { id: 2, label: '#2 Basalt Arena (frontend)', active: true },
  { id: 1, label: '#1 Listea', active: false },
  { id: 0, label: '#0 (спринт которого не было)', active: false },
]

const SprintTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id)

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={
              activeTab === tab.id ? styles.tabActive : styles.tabInactive
            }
            onClick={() => setActiveTab(tab.id)}
          >
            {activeTab === tab.id && <LiveCircle className={styles.icon} />}
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SprintTabs
