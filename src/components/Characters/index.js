import './index.css'

const Characters = props => {
  const {details} = props
  const {name, count} = details

  return (
    <li className="list">
      <p className="count-character">
        {name}: {count}
      </p>
    </li>
  )
}

export default Characters
