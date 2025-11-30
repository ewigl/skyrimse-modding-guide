import clsx from 'clsx'
import Heading from '@theme/Heading'
import styles from './styles.module.css'

const FeatureList = [
  {
    title: '教程',
    description: <>分步教程，从零开始到成功安装 Mod 的流程。</>,
  },
  {
    title: '参考',
    description: <>各种 Mod 相关网站、工具的参考说明。</>,
  },
  {
    title: '模组',
    description: <>Mod 相关知识。包括 Mod 分类、Mod 类型、Mod 推荐等。</>,
  },
  {
    title: '更新中...',
    description: (
      <a href="https://github.com/ewigl/skyrimse-modding-guide/commits/main/" target="_blank">
        更新历史记录
      </a>
    ),
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
