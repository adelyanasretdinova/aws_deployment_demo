import tshirtImg from './images/tshirt.jpg'
import socksImg from './images/socks.jpg'
import shortsImg from './images/shorts.jpg'

let tshirt = {
  color: 'red with orange dotts',
  price: 25,
  currency: 'euro',
  size: 'xl',
  material: 'cotton',
  url: tshirtImg,
  descrShort: 'T-Shirt',
  descrLong: 'A nice cotton T-Shirt', 
  season: 'all', 
  id: '01'
}

let socks = {
  color: 'blue',
  price: 5,
  currency: 'euro',
  size: '39',
  material: 'nylon',
  url: socksImg,
  descrShort: 'Socks',
  descrLong: 'Socks for every day',
  season: 'all', 
  id: '02'
}

let shorts = {
  color: 'green',
  length: 'short',
  price: 50,
  currency: 'euro',
  availabeSizes: ['s', 'm', 'l', 'xl'],
  material: 'jersey',
  url: shortsImg,
  descrShort: 'Shorts',
  descrLong: 'A pair of demin shorts', 
  season: 'summer', 
  id: '03'
}

export { tshirt, socks, shorts }