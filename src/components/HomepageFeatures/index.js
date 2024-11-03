import clsx from 'clsx'
import Heading from '@theme/Heading'
import styles from './styles.module.css'

const FeatureList = [
  // {
  //   title: '全面',
  //   description: <>覆盖 Mod 过程中可能会遇到的各种问题</>,
  // },
  // {
  //   title: '准确',
  //   description: <>不断更新修正</>,
  // },
  // {
  //   title: '实用',
  //   description: <>通过示例理解 Mod 原理</>,
  // },
  {
    title: '更新中',
    description: <></>,
  },
]

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
