const SeasonButtons = (props) => {
  return ( 
  <div className="SeasonButtons">
  {props.seasons.map(element => <button
    className="btn btn-warning m-2 "
    onClick={(event) => { props.displaySeason(event) }}
    id={element}
    key={element}>
    {element}
  </button>)}
  <button
    className="btn btn-secondary m-2 "
    onClick={() => { props.resetSeason() }}
    id='reset'
  >  Reset
  </button>
  </div>)
}

export default SeasonButtons