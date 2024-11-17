import NexusmodsPage from '@site/src/components/NexusmodsPage'

export default function ModList(props) {
  const { modList } = props

  return (
    <ul>
      {modList.map((mod) => (
        <li>
          <NexusmodsPage nexusCode={mod.nexusCode}> {mod.name} </NexusmodsPage>
          {mod.note && <span> ( {mod.note} ) </span>}
        </li>
      ))}
    </ul>
  )
}
