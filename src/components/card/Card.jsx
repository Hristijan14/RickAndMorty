import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ image, name, status, location, species, charId }) => {
  return (
    <div className="card-container">
      <img className="mainCharImg" src={image} alt={name} />
      <div className="card-info">
        <Link to={`${charId}`} className="links">
          <h2 className="mainCharName">{name}</h2>
        </Link>
        <div className="status">
          <div
            style={{
              width: "10px",
              height: "10px",
              marginRight: "5px",
              borderRadius: "50%",
              backgroundColor:
                status === "Alive"
                  ? "green"
                  : status === "Dead"
                  ? "red"
                  : status === "unknown"
                  ? "grey"
                  : "white",
            }}
          ></div>
          {status} - {species}
        </div>
        <p>Last known location: ({location})</p>
      </div>
    </div>
  );
};

export default Card;
