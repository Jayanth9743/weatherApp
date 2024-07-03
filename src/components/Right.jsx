import { useContext } from "react"
import { WeatherContext } from "./WeatherApi"
import { LiaTemperatureHighSolid } from "react-icons/lia";
import { MdOutlineWaterDrop } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";
import { PiWindmill } from "react-icons/pi";
import { FaWind } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";


const getUVDetails = (UVIndex)=>{
    if(UVIndex < 3) return "Low";
    if(UVIndex < 6) return "Moderate";
    if(UVIndex < 8) return "High";
    if(UVIndex < 11) return "Very High";
    else return "dead"
}

const Right = () => {
    const {weatherData} = useContext(WeatherContext)
  return (
    <div className="flex flex-col items-center w-10/12 justify-evenly smd:w-3/5">
       {weatherData ? (
        <div className="flex flex-wrap items-center justify-between w-full gap-2 py-2f rounded-xl ">
            <div className="flex flex-col items-center justify-center h-32 bg-black w-36 rounded-xl bg-opacity-40 ">
                <div className="flex flex-col items-center justify-center font-medium text-white">
                    <div className="flex items-center justify-center gap-1"> <LiaTemperatureHighSolid className="text-lg"/><p>FEELS LIKE</p></div>
                    <p>{weatherData.current.feelslike_c}°c</p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center h-32 bg-black w-36 rounded-xl bg-opacity-40 ">
                <div className="flex flex-col items-center justify-center font-medium text-white">
                <div className="flex items-center justify-center gap-1"> <MdOutlineWaterDrop className="text-lg"/> <p>PRECIPITAION</p></div>
                    <p>{weatherData.current.precip_in} {`"`}</p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center h-32 bg-black w-36 rounded-xl bg-opacity-40 ">
                <div className="flex flex-col items-center justify-center font-medium text-white">
                <div className="flex items-center justify-center gap-1"> <WiHumidity className="text-lg"/> <p>HUMIDITY</p></div>
                    <p>{weatherData.current.humidity}%</p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center h-32 bg-black w-36 rounded-xl bg-opacity-40 ">
                <div className="flex flex-col items-center justify-center font-medium text-white">
                <div className="flex items-center justify-center gap-1"> <MdOutlineWbSunny className="text-lg"/> <p>UV INDEX</p></div>
                    <p>{weatherData.current.uv}</p>
                    <p>{getUVDetails(weatherData.current.uv)}</p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center h-32 bg-black w-36 rounded-xl bg-opacity-40 ">
                <div className="flex flex-col items-center justify-center font-medium text-white">
                <div className="flex items-center justify-center gap-1"> <PiWindmill className="text-lg"/> <p>WIND SPEED</p></div>
                    <p>{weatherData.current.wind_kph} kph</p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center h-32 bg-black w-36 rounded-xl bg-opacity-40 ">
                <div className="flex flex-col items-center justify-center font-medium text-white">
                <div className="flex items-center justify-center gap-1"> <FaWind className="text-lg"/>  <p>DIRECTION</p></div>
                    <p>{weatherData.current.wind_dir}</p>
                </div>
            </div>
            
        </div>
       ):(
        ""
       )}
    </div>
  )
}

export default Right
