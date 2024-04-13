import React, { useState } from "react";
import allWeather from '../assets/allweather.png'
import windImg from "../assets/wind-svg-svgrepo-com.svg";
import humidityImg from "../assets/humidity-svgrepo-com.svg";
import clearImg from "../assets/clear.png";
import cloudImg from '../assets/clouds.png';
import drizzleImg from '../assets/drizzle.png';
import snowImg from '../assets/snow.png';
import rainImg from '../assets/rain.png';
import mistImg from '../assets/mist.png';
import smokeImg from '../assets/Smoke.svg'


const WeatherComp = () => {
  const [edit, setEdit] = useState("");
  const [temp, setTemp] = useState(0);
  const [tempImg, setTempImg] = useState(allWeather);
  const [wetherReport, setWetherReport] = useState('Weather Report')
  const [cityName, setCityName] = useState("City");
  const [countryName, setCountryName] = useState("Country");
  const [windSpeed, setWindSpeed] = useState(0);
  const [humidity, setHumidity] = useState(0);

  const changeHandle = (e) => {
    setEdit(e.target.value);
  };
  const firstLetterCapital = (string) => {
    const upperWord = string.charAt(0).toUpperCase() + string.slice(1);
    return upperWord;
  };

  const searchHandle = async (e) => {
    e.preventDefault();
    try {
      const API = "8cb141c2216d825a2e3eb21d88e85b7f";
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${edit}&units=metric&appid=${API}`);
      const data = await res.json();
      if (res.ok) {
        setCityName(edit);
        setTemp(data.main.temp);
        setWindSpeed(data.wind.speed);
        setHumidity(data.main.humidity);
        setCountryName(data.sys.country);
        setEdit("");
        const weatherMain = data.weather[0].main.toLowerCase();

        switch (weatherMain) {
          case "clear":
            setTempImg(clearImg);
            console.log();
            console.log("clear weather");
            setWetherReport("Clear Weather");
            break;
          case "clouds":
            setTempImg(cloudImg);
            setWetherReport("Cloudy Weather");
            break;
          case "drizzle":
            setTempImg(drizzleImg);
            setWetherReport("Drizzle Weather");
            break;
          case "snow":
            setTempImg(snowImg);
            setWetherReport("Snow Weather");
            break;
          case "rain":
            setTempImg(rainImg);
            setWetherReport("Rain Weather");
            break;
          case "mist":
            setTempImg(mistImg);
            setWetherReport("Mist Weather");
            break;
          case "smoke":
            setTempImg(smokeImg);
            setWetherReport("Smoke Weather");
            break;
          default:
            setTempImg(snowImg);
            setWetherReport("Snow Weather");
        }
      } else {
        setCityName('City Not Found')
        setCountryName('');
        setTemp('00');
        setWindSpeed('00');
        setHumidity('00');
        setWetherReport("Weather not found");
        setTempImg(allWeather);
      }
    } catch (error) {
      console.log(error);
      console.log("fetch nahi ho pa rha hai");
    }
  };
  return (
    <>
      <div>
        <form onSubmit={(e) => searchHandle(e)} className=" flex px-5">
          <input
            onChange={(e) => changeHandle(e)}
            className=" w-full outline-none text-black rounded-3xl text-[.8rem] font-roboto bg-[#dfe3f1] boxShadow2 flex flex-col items-center justify-center"
            type="text"
            name="edit"
            value={edit}
            placeholder="Enter City Name"
          />
          <span className=" cursor-pointer active:scale-95 p-2 ">
            <lord-icon
              onClick={(e) => searchHandle(e)}
              src="https://cdn.lordicon.com/kkvxgpti.json"
              trigger="hover"
              colors="primary:black"
              style={{ width: "30px", height: "30px", translate: "0px 7px" }}></lord-icon>
          </span>
        </form>
        <div className=" justify-center items-center flex mt-5">
          
          <div className=" flex flex-col justify-center items-center boxShadow2 rounded-lg text-black p-1 w-[80%] h-[200px] bg-[#dfe3f1]">
          <div className=" font-bold font-DM text-sm text-center ">{wetherReport}...</div>
            <div className=" flex items-center justify-around  w-full h-[50%]">
              <div className=" w-[3.6rem] bg-[#dfe3f1] boxShadow2 rounded-lg ">
                <img src={tempImg} alt="weatherImg" />
              </div>
              <div className=" bg-[#dfe3f1] p-[.8rem] boxShadow2 rounded-lg font-bold text-2xl text-blue-500"> {Math.ceil(temp)}&#8451;</div>
            </div>
            <div className=" flex justify-center items-center text-3xl  w-full h-[50%] ">
              <div className=" font-bold font-singleDay text-3xl text-center ">{firstLetterCapital(cityName)},{countryName}</div>
            </div>
          </div>
        </div>
        <div className=" flex justify-between p-[10%]">
          <div className=" flex flex-col justify-center items-center boxShadow2 rounded-lg text-black p-2 w-[46%] h-[150px] bg-[#dfe3f1]">
            <div className=" flex items-center justify-around  w-[50%]">
              <img src={windImg} alt="windImg" />
            </div>
            <div className=" bg-[#f2f3f7] px-2 my-3 boxShadow2 rounded-xl font-bold text-blue-500">{Math.ceil(windSpeed)}Km/h</div>
            <div className=" font-bold text-center font-DM">Wind</div>
          </div>
          <div className=" flex flex-col justify-center items-center boxShadow2 rounded-lg text-black p-2 w-[46%] h-[150px] bg-[#dfe3f1]">
            <div className=" flex items-center justify-around  w-[50%]">
              <img src={humidityImg} alt="humidityImg" />
            </div>
            <div className=" bg-[#f2f3f7] px-2 my-3 boxShadow2 rounded-xl font-bold text-blue-500"> {humidity}%</div>
            <div className=" font-bold text-center font-DM">Humidity</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherComp;
