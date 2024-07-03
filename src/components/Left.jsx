import { useContext } from "react"
import { WeatherContext } from "./WeatherApi"


const Left = () => {
    const {weatherData} = useContext(WeatherContext)

    
  return (
    <div className="flex flex-col items-center justify-center w-10/12 bg-black rounded-xl bg-opacity-40 h-68 smd:w-2/5 smd:h-96 xmd:h-64">
        {weatherData ? (
            <div className="flex flex-col items-start justify-start w-full h-full gap-3 smd:gap-6 smd:justify-center lg:justify-start ">

              <div className="flex items-center justify-start w-full h-full gap-3 smd:h-1/4">
                <p className="ml-5 text-2xl font-bold text-white smd:text-3xl">{weatherData.current.temp_c}°c</p>
                <img src={weatherData.current.condition.icon} alt=""  className="object-cover w-14 h-14 smd:w-16 smd:h-16"/>
              </div>

              <p className="ml-5 text-xl font-bold text-white">{weatherData.current.condition.text}</p>
              <p className="ml-5 text-lg font-semibold text-white">{`${weatherData.location.name}, ${weatherData.location.country}`}</p>
              <p className="mb-1 ml-5 text-lg font-medium text-white">local-Time: {weatherData.location.localtime}</p>
            
            </div>
        ):(
            ''
        )}
    </div>
  )
}

export default Left
