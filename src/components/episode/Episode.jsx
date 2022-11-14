import "./Episode.scss"

const Episode = ({id,name,episode}) => {
  return (
    <div className="episodes-table">
    <table className="tr-table">
      <tbody>
      <tr className="td-table">
        <td>{id}</td>
        <td>{name}</td>
        <td>{episode}</td>
      </tr>
      </tbody>
    </table>
    </div>
  )
}

export default Episode