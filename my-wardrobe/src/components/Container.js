import { useState } from 'react'
import Wardrobe from "./Wardrobe"
import { tshirt, socks, shorts,  pullover, jacket, pants, winterPullover } from '../mockData'
import Outfit from './Outfit'

const Container = () => {
  const [ wardrobe, setWardrobe ] = useState([ tshirt, shorts, socks,  pullover, jacket, pants, winterPullover ])
  const [outfit, setOutfit ] = useState([])
  const [ seasonWardrobe, setSeasonWardrobe] = useState([])
  const SEASONS = ['summer', 'fall', 'winter', 'spring']

  // functions for buttons: 
  const addToOutfit = (event) => {
    let id = event.target.id
    console.log("ID of item", id);
    // find the item in the wardrobe array
    let clickedItem = wardrobe.find(item => item.id === id)
    // add to outfit array
    // update state
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
      // only return items with the season we clicked on!
      return item.season === event.target.id
    })
    setSeasonWardrobe(seasonWardrobe)
  }
  
  return(
  <div className='Container'>
          <div className="Pills">
        {SEASONS.map(element => <button
          className="btn btn-warning m-2 "
          onClick={(event) => {displaySeason(event)}}
          id={element}
          key={element}>
          {element}
        </button>)}
      </div>
    <Wardrobe wardrobeData={wardrobe} addToOutfit={addToOutfit}/>
    {/* Add a property to outfit, and check array outfit which text to display */}
    <Outfit outfitData={outfit} removeFromOutfit={removeFromOutfit} header={ outfit.length > 0 ? "This is your styling for today" : "Select an outfit!"  } />
  </div>)
}

export default Container