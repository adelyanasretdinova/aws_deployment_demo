import { useState } from 'react'
import Wardrobe from "./Wardrobe"
import { tshirt, socks, shorts } from '../mockData'
import Outfit from './Outfit'

const Container = () => {
  // Here we will add state! We use the useState Hook
  // the data, and a function to change the data:
  const [ wardrobe, setWardrobe ] = useState([ tshirt, shorts, socks ])
  const [outfit, setOutfit ] = useState([ tshirt ])
  return(
  <div className='Container'>
    <Wardrobe wardrobeData={wardrobe}/>
    <Outfit outfitData={outfit}></Outfit>
  </div>)
}

export default Container