import tshirtImg from './images/tshirt.jpg'
import socksImg from './images/socks.jpg'
import shortsImg from './images/shorts.jpg'
import jacketImg from './images/jacket.jpg'
import pulloverImg from './images/pullover.jpg'
import pantsImg from './images/pants.jpg'
import winterPulloverImg from './images/winterPullover.jpg'

let tshirt = {
  color: 'red with orange dotts',
  price: 25,
  currency: 'euro',
  size: 'xl',
  material: 'cotton',
  url: tshirtImg,
  descrShort: 'T-Shirt',
  descrLong: 'A nice cotton T-Shirt', 
  season: 'summer', 
  id: '01',
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
  season: 'winter',   
  id: '02',

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

let pullover = {
  color: 'black',
  price: 50,
  currency: 'euro',
  size: 'xl',
  material: 'cotton',
  url: pulloverImg,
  descrShort: 'Pullover',
  descrLong: 'A modern piece of fashion', 
  season: 'spring', 
  id: '04',
}

let jacket = {
  color: 'brown',
  price: 70,
  currency: 'euro',
  size: 'l',
  material: 'polyester',
  url: jacketImg,
  descrShort: 'Jacket',
  descrLong: 'A cool and sporty jacket', 
  season: 'fall', 
  id: '05',
}



let pants = {
  color: 'dark red',
  price: 80,
  currency: 'euro',
  size: 'xl',
  material: 'cord',
  url: pantsImg,
  descrShort: 'Pants',
  descrLong: 'Cord pants for the fall', 
  season: 'fall', 
  id: '06',
}


let winterPullover = {
  color: 'brown',
  price: 30,
  currency: 'euro',
  size: 'xl',
  material: 'woll',
  url: winterPulloverImg,
  descrShort: 'Winter pullover',
  descrLong: 'A cosy piece of fashion', 
  season: 'winter', 
  id: '07',
}
export { tshirt, socks, shorts, pullover, jacket, pants, winterPullover }