import { useState, useEffect } from 'react'
import Wardrobe from "./Wardrobe"
import { tshirt, socks, shorts,  pullover, jacket, pants, winterPullover } from '../mockData'
import Outfit from './Outfit'

const Container = () => {
  const [ wardrobe, setWardrobe ] = useState([ tshirt, shorts, socks,  pullover, jacket, pants, winterPullover ])
  const [outfit, setOutfit ] = useState([])
  const [ seasonWardrobe, setSeasonWardrobe] = useState([])
  const SEASONS = ['summer', 'fall', 'winter', 'spring']

  useEffect(() => {
    // do something
    // fetch data
    let path = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Berlin?unitGroup=metric&key=${process.env.REACT_APP_VISUAL_KEY}&contentType=json`
    // add mode cors to avoid blocking of request
    fetch(path, { mode: 'cors' })
    // format data (create a new object)
    // add to state (as an object)
    // don't forget to catch errors!
    console.log('page loaded');
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
         >     Reset
         </button>
      </div>
    <Wardrobe wardrobeData={seasonWardrobe.length > 0 ? seasonWardrobe: wardrobe} addToOutfit={addToOutfit}/>
    <Outfit outfitData={outfit} removeFromOutfit={removeFromOutfit} header={ outfit.length > 0 ? "This is your styling for today" : "Select an outfit!"  } />
  </div>)
}

export default Container