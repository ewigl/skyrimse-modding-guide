import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

export default function VideoElement(props) {
  const { siteConfig } = useDocusaurusContext()

  return (
    <div>
      <video width="100%" height="100%" controls>
        <source src={siteConfig.baseUrl + 'video/' + props.relativePath} type="video/mp4" />
      </video>
    </div>
  )
}
