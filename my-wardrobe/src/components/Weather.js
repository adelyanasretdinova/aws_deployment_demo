// here I extract only the weatherData from the props: 

const Weather = ({ weatherData }) => {
  return(
    <div className='Weather'>
      <p>   </p>
      <p>Today it will be {weatherData.conditions} in {weatherData.city}, with a temparature of {weatherData.temperature} <span>&#8451;</span> </p>
      </div>

  )
}
export default Weather