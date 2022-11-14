import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import "./CardDetails.scss"

const CardDetails = () => {

const {charId}=useParams()
const navigate=useNavigate()
const data=useFetch(`https://rickandmortyapi.com/api/character/`,`${charId}`)

const goBack=()=>{
    navigate(-1)
}

  return (
    <div className="card-details">
<img className="char-img" src={data?.image} alt="img"/>
<h2>{data?.name}</h2>
<p>Gender: {data?.gender}</p>
<p>Origin: {data?.origin?.name}</p>
<p>{data?.name} appers in {data?.episode?.length}{data?.episode?.length === 1 ? " episode" : " episodes"}</p>
<button onClick={goBack} className="back-btn">Go Back</button>
    </div>
  )
}

export default CardDetails