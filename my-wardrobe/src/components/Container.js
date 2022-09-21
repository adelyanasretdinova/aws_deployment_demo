import Wardrobe from "./Wardrobe"

let tshirt = {
  color: 'red with orange dotts',
  price: 25,
  currency: 'euro',
  size: 'xl',
  material: 'cotton',
  // url: tshirtImg,
  descrShort: 'T-Shirt',
  descrLong: 'A nice cotton T-Shirt', 
  season: 'all'
}

let socks = {
  color: 'blue',
  price: 5,
  currency: 'euro',
  size: '39',
  material: 'nylon',
  // url: socksImg,
  descrShort: 'Socks',
  descrLong: 'Socks for every day',
  season: 'all'
}

let shorts = {
  color: 'green',
  length: 'short',
  price: 50,
  currency: 'euro',
  availabeSizes: ['s', 'm', 'l', 'xl'],
  material: 'jersey',
  // url: shortsImg,
  descrShort: 'Shorts',
  descrLong: 'A pair of demin shorts', 
  season: 'summer'
}

let wardrobe = [tshirt, shorts, socks]


const Container = () => {
  // Here we will add state!
  return(
  <div className='Container'>
    <Wardrobe wardrobeData={wardrobe}/>
  </div>)
}

export default Container