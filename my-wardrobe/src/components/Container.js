import { useState } from 'react'
import Wardrobe from "./Wardrobe"
import { tshirt, socks, shorts } from '../mockData'
import Outfit from './Outfit'

const Container = () => {
  const [ wardrobe, setWardrobe ] = useState([ tshirt, shorts, socks ])
  const [outfit, setOutfit ] = useState([])


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
  return(
  <div className='Container'>
    <Wardrobe wardrobeData={wardrobe} addToOutfit={addToOutfit}/>
    <Outfit outfitData={outfit} removeFromOutfit={removeFromOutfit}></Outfit>
  </div>)
}

export default Container