import { useState, useEffect } from 'react'
import Wardrobe from "./Wardrobe"
import { tshirt, socks, shorts,  pullover, jacket, pants, winterPullover } from '../mockData'
import Outfit from './Outfit'
import Weather from './Weather'

const Container = () => {
  const [ wardrobe, setWardrobe ] = useState([ tshirt, shorts, socks,  pullover, jacket, pants, winterPullover ])
  const [outfit, setOutfit ] = useState([])
  const [ seasonWardrobe, setSeasonWardrobe] = useState([])
  const SEASONS = ['summer', 'fall', 'winter', 'spring']
  const [weather, setWeather] = useState({})

  useEffect(() => {
  // create a async function for fetching data:
    const fetchData = async () => {
      try {
      let path = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Berlin?unitGroup=metric&key=${process.env.REACT_APP_VISUAL_KEY}&contentType=json`
       // wait for the fetch to finish and store the result in a variable response 
      let response = await fetch(path, {mode: 'cors'})
      // parse the body of the response, which gives us the data we need. This is also asynchronus
      let data = await response.json()

      // Get the pices of data I want to put into state: 
      let city = data.address;
      let temperature = data.currentConditions.temp;
      let conditions = data.currentConditions.conditions
      // format conditions, just to remove the capital letters 
      conditions = conditions.split(' ').map(word => word.toLowerCase()).join(' ')

      // create a new object with only the data I need: 
      let myWeatherData = { city, conditions, temperature }
      // store the new object in the variable weather in state
      setWeather(myWeatherData)
    } 
  catch (error) {
      console.log("There was an error when fetching data", error);
    }}
    // calling the function:
    fetchData()
  }, [])

  // functions for buttons: 
  const addToOutfit = (event) => {
    let id = event.target.id
    console.log("ID of item", id);
    let clickedItem = wardrobe.find(item => item.id === id)
    setOutfit([...outfit, clickedItem])
  }
  const removeFromOutfit = (event) => {
    let updatedOutfit = outfit.filter(item => {
      return item.id !== event.target.id
    })
    setOutfit(updatedOutfit)
  }

  const displaySeason = (event) => {
    let seasonWardrobe = wardrobe.filter(item => {
      return item.season === event.target.id
    })
    setSeasonWardrobe(seasonWardrobe)
  }

  const resetSeason = () => {
    setSeasonWardrobe([])
   }

  return(
  <div className='Container'>
    {/* Pass the state weather as props to the component */}
          <Weather weatherData={weather} /> 
          <div className="SeasonButtons">
        {SEASONS.map(element => <button
          className="btn btn-warning m-2 "
          onClick={(event) => {displaySeason(event)}}
          id={element}
          key={element}>
          {element}
        </button>)}
        <button
          className="btn btn-secondary m-2 "
          onClick={()=> {resetSeason()}}
          id='reset'
         >  Reset
         </button>
      </div>
    <Wardrobe wardrobeData={seasonWardrobe.length > 0 ? seasonWardrobe: wardrobe} addToOutfit={addToOutfit}/>
    <Outfit outfitData={outfit} removeFromOutfit={removeFromOutfit} header={ outfit.length > 0 ? "This is your styling for today" : "Select an outfit!"  } />
  </div>)
}

export default Container