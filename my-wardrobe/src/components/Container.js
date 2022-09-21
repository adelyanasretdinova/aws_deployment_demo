import { useState } from 'react'
import Wardrobe from "./Wardrobe"
import { tshirt, socks, shorts } from '../mockData'

const Container = () => {
  // Here we will add state! We use the useState Hook
  // the data, and a function to change the data:
  const [ wardrobe, setWardrobe ] = useState([ tshirt, shorts, socks ])

  return(
  <div className='Container'>
    <Wardrobe wardrobeData={wardrobe}/>
  </div>)
}

export default Container