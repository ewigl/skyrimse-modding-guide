import styles from './styles.module.css'

export default function WikipediaLink(props) {
  return (
    <a href={'https://zh.wikipedia.org/wiki/' + props.path} target="_blank" rel="noreferrer" className={styles.wikipediaLink}>
      {props.children}
    </a>
  )
}
