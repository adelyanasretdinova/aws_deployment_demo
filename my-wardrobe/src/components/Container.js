import { useState } from 'react'
import Wardrobe from "./Wardrobe"
import { tshirt, socks, shorts } from '../mockData'
import Outfit from './Outfit'

const Container = () => {
  // Here we will add state! We use the useState Hook
  // the data, and a function to change the data:
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

  return(
  <div className='Container'>
    <Wardrobe wardrobeData={wardrobe} addToOutfit={addToOutfit}/>
    <Outfit outfitData={outfit}></Outfit>
  </div>)
}

export default Container