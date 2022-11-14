import "./Search.scss"

const Search = ({handleChange,handleSubmit,inputRef,query}) => {
  return (
        <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            onChange={handleChange}
            ref={inputRef}
            value={query}
          />
          <input type="submit" value="Search" />
        </form>
      </div>
  )
}

export default Search