import useFetchEpi from "../../hooks/useFetchEpi"
import Episode from "../episode/Episode"
import "./EpisodesPage.scss"

const EpisodesPage = () => {
  const data=useFetchEpi(`https://rickandmortyapi.com/api/episode/`)
  
  return (
    <table className="episodes-container">
      <h1 className="page-intro">List Of All the Episodes:</h1>
      <thead className="table-info">
      <tr className="table-thing">
        <th>ID:</th>
        <th>NAME:</th>
        <th>EPISODES:</th>
      </tr>
      </thead>
{data?.results?.map((epi)=>{
  return <Episode id={epi.id}
  name={epi.name}
  episode={epi.episode}
  key={epi.id}/>
})}
    </table>
  )
}

export default EpisodesPage