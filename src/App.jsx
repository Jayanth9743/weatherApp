
import Left from "./components/Left";
import { assets } from "./assets/Photo";
import Right from "./components/Right";
import { IoSearch } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { useContext, useState } from "react";
import { WeatherContext,  } from "./components/WeatherApi";
import { ImSpinner8 } from "react-icons/im";

const App = () => {
  const {setCity, fetchWeatherDataByCoordinates, imageToggler, weatherData, city} = useContext(WeatherContext)
  const [input, setInput]  = useState('')

  const handleChange=()=>{
    if(input.trim() !== "")
      setCity(input)
    if(!city) return alert("type correct city name")
  }

  const handleEnter =(e)=>{
    if(e.key === "Enter"){
      handleChange()
    }

  }

  const fetchLocation = ()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        const {latitude, longitude } = position.coords;
        fetchWeatherDataByCoordinates(latitude, longitude)
      },(error)=>{
        alert("error getting location",error)
      });
    }
    else{
      alert("location access is not supported in your device")
    }
  }

  

  return (

      <div className="w-full h-screen ">
        {weatherData ?(
        <div className="w-full h-full bg-cover" style={{ backgroundImage: `url(${weatherData ? imageToggler(weatherData.current.condition.text):assets.n13})`, height:"106vh" }}>
          <div className="flex flex-col items-center justify-between w-full h-full">
            
            <div className="relative flex items-center justify-start mt-5 w-76">
              <input 
                type="text" 
                placeholder="Search cities" 
                className="w-full p-3 px-10 text-white bg-black rounded-md opacity-60 focus:outline-none focus:opacity-80"
                onChange={(e)=>setInput(e.target.value)}
                onKeyDown={handleEnter}
              />
              <IoSearch className="absolute ml-1 text-2xl text-white" onClick={handleChange} />
              <IoLocationOutline className="absolute right-0 mr-1 text-2xl text-white" onClick={fetchLocation}/>
            </div>

            <div className="flex flex-col items-center w-full h-full gap-4 justify-evenly smd:flex-row smd:w-10/12 lg:w-3/4 xl:w-2/3">
              <Left />
              <Right />
            </div>
            <p className="text-white">2024 © Developed By Jayanth P</p>
          </div>
        </div>
        ):(
          <div className="flex items-center justify-center w-full h-screen" >
            <ImSpinner8 className="text-5xl text-blue-500 animate-spin"/>
          </div>
        )}
    </div>
 
  );
};

export default App;
