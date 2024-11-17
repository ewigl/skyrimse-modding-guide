export default function NexusmodsPage(props) {
  const SSENexusmodsPath = 'https://www.nexusmods.com/skyrimspecialedition/mods/'

  return (
    <span>
      <a href={SSENexusmodsPath + props.nexusCode} target="_blank" rel="noreferrer">
        {props.children}
      </a>
    </span>
  )
}
