import { useState, useEffect, useRef } from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../card/Card";
import Error from "../error/Error";
import Footer from "../footer/Footer";
import Search from "../searchComponent/Search";
import "./CharacterPage.scss"

const CharactersPage = () => {

const [query, setQuery] = useState("");
const [click, setClick] = useState("");
const inputRef = useRef(null);
const data = useFetch(`https://rickandmortyapi.com/api/character/`,`?name=${click}`)

useEffect(() => {
    inputRef.current.focus();
  }, [click]);

const handleChange = (e) => {
    setQuery(e.target.value);
  };

const handleSubmit = (e) => {
    e.preventDefault();
    setClick(query);
    setQuery("");
  };

return (
    <>
    <Search 
    handleChange={handleChange} 
    handleSubmit={handleSubmit} 
    inputRef={inputRef}
    query={query}/>

      <div className="cards-container">
        {data?.results === undefined && <Error />}
        {data?.results?.map((character) => {
          return (
            <Card
              image={character.image}
              name={character.name}
              status={character.status}
              location={character.location.name}
              species={character.species}
              key={character.id}
              charId={character.id}
            />
          );
        })}
      </div>
      <div>
        {data?.info ===undefined?(""):(<Footer totalCharacters={data?.info?.count}
        pages={data?.info?.pages}
         />)}
      </div>
    </>
  )
}

export default CharactersPage