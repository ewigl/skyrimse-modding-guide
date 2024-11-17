import React from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

import styles from './index.module.css'

export default function About() {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout title="关于" description="关于 SMGL">
      <div className={styles.aboutContent}>
        <div>
          <p>
            <strong> SMGL: </strong>
          </p>
          <p>{siteConfig.title}</p>
        </div>
      </div>
    </Layout>
  )
}
