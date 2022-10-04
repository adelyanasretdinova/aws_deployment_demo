import { useState, useEffect } from 'react'
import Wardrobe from "./Wardrobe"
import Outfit from './Outfit'
import Weather from './Weather'
import SeasonButtons from './SeasonButtons'

const Container = () => {
  const [wardrobe, setWardrobe] = useState([])
  const [outfit, setOutfit] = useState([])
  const [seasonWardrobe, setSeasonWardrobe] = useState([])
  const [weather, setWeather] = useState({})
  const SEASONS = ['summer', 'fall', 'winter', 'spring']

  useEffect(() => {
    const fetchWardrobe = async () => {
      try{
      // fetch
      let path = 'http://localhost:8000/wardrobe'
      let response = await fetch(path, { mode: 'cors' })
      // inspect the data
      let fetchedWardrobeData = await response.json()
      // console.log(fetchedWardrobeData.data)
      // each item: Change url of image to `http://localhost:8000/images/tshirt.jpg`
        let dataToStore = fetchedWardrobeData.data.map(item => {
          return {...item, url: `http://localhost:8000${item.url}` }
        })
      // save data to state
        setWardrobe(dataToStore)

      } catch(error) {
        console.log('Something went wrong fetching data', error);
      }
      
    }
    fetchWardrobe()

    const fetchData = async () => {
      try {
        let path = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Berlin?unitGroup=metric&key=${process.env.REACT_APP_VISUAL_KEY}&contentType=json`
        let response = await fetch(path, { mode: 'cors' })
        let data = await response.json()

        let city = data.address;
        let temperature = data.currentConditions.temp;
        let conditions = data.currentConditions.conditions
        conditions = conditions.split(' ').map(word => word.toLowerCase()).join(' ')

        let myWeatherData = { city, conditions, temperature }
        setWeather(myWeatherData)
      }
      catch (error) {
        console.log("There was an error when fetching data", error);
      }
    }
    
    fetchData()
    // fetch data from the backend and pass to state!

    let outfitJson = localStorage.getItem('outfitLS')
    let outfitParsed = JSON.parse(outfitJson)
    if (outfitParsed) {
      setOutfit(outfitParsed)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('outfitLS', JSON.stringify(outfit))
  }, [outfit])

  const addToOutfit = (event) => {
    let id = event.target.id
    console.log("ID of item", id);
    let clickedItem = wardrobe.find(item => item.id === id)
    setOutfit([...outfit, clickedItem])
  }
  const removeFromOutfit = (event) => {
    let updatedOutfit = outfit.filter(item =>item.id !== event.target.id)
    setOutfit(updatedOutfit)
  }

  const displaySeason = (event) => {
    let seasonWardrobe = wardrobe.filter(item => item.season === event.target.id)
    setSeasonWardrobe(seasonWardrobe)
  }

  const resetSeason = () => {
    setSeasonWardrobe([])
  }

  return (
    <div className='Container'>
      <Weather weatherData={weather} />
      <SeasonButtons seasons={SEASONS} displaySeason={displaySeason} resetSeason={resetSeason} />
      <Wardrobe wardrobeData={seasonWardrobe.length > 0 ? seasonWardrobe : wardrobe} addToOutfit={addToOutfit} />
      <Outfit outfitData={outfit} removeFromOutfit={removeFromOutfit} />
    </div>)
}

export default Container