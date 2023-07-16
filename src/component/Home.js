import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
const Home = () => {
  const [city, setCity] = useState("")
  console.log(city, "city ")

  const [weather, setWeather] = useState({
    loading: false,
    data: {},
    error: false,
  });
  const toDate = () => {
    // let date = new Date();
    // const today = date.toDateString();
    // return today;
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'Nocvember',
      'December',
    ];
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const currentDate = new Date();
    const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]
      }`;
    return date;
  };

  function toSentenceCase(str) {
    let spliceStr = str.split(" ")
    let returnStr = ""
    spliceStr.forEach(element => {
      returnStr += element[0].toUpperCase() + element.substring(1) + " "
    });

    return returnStr

  }
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
  }

  const search = async (event) => {
    setWeather({ ...weather, loading: true });
    const url = 'https://api.openweathermap.org/data/2.5/weather';
    const appid = '9ecf1de8d3811cf6b6c1cbca32c5dccb';
    await axios
      .get(url, {
        params: {
          q: city,
          units: 'metric',
          appid: appid,
        },
      })
      .then((res) => {
        console.log('res', res.data);
        setWeather({ data: res.data, loading: false, error: false });
        setCity("")
      })
      .catch((error) => {
        setWeather({ ...weather, data: {}, error: true });
        console.log('error', error);
      });

  };


  return (
    < div className="my-auto " >
      <div className="flex items-center justify-center min-h-screen bg-[url('https://img.freepik.com/free-vector/horizontal-seamless-pattern-with-clouds_1284-52895.jpg?w=740&t=st=1689441036~exp=1689441636~hmac=6b7c432b9b080d1294f58e6f9d92edaf8321b524c88f9da1586a4332f2afb09b')] bg-no-repeat bg-cover bg-fixed " >
        <div className="w-full max-w-lg px-10 py-8 mx-auto  backdrop-blur-md backdrop-filter:blur(12px) rounded-lg shadow-2xl shadow-black">
          <div className="max-w-md mx-auto space-y-6">
            <div className="text-xl text-center leading-7">
              <p className="text-2xl font-bold font-serif text-black">Get Weather</p>
            </div>
            <div>
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input type="search" id="default-search" className="block w-full p-4 pl-10 text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter City....." required
                  defaultValue={city} onChange={(event) => setCity(event.target.value)} />
                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-500 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-serif" onClick={search}  >Search</button>
              </div>
            </div>
            {weather.error && (
              <>
                <br />
                <br />
                <span className="error-message">
                  <FontAwesomeIcon icon={faFrown} />
                  <span style={{ 'font-size': '20px' }}> Sorry!!!
                    City not found... </span>
                </span>
              </>
            )}
            {weather && weather.data && weather.data.main && (<div>
              <h1 className='text-center text-2xl font-bold p-2 font-serif'> {weather.data.name} {weather.data.sys.country}</h1>
              <div >
                <h2 className='text-center text-black font-bold font-serif'>{toDate()}</h2>
              </div>
              <div className="flex justify-center py-3 font-bold">
                <h1 className='text-7xl font-mono text-zinc-800'>{Math.round(weather.data.main.temp)}<sup className="font-bold">&deg;C</sup></h1>
              </div>
              <div className="des-wind">
                <h1 className='text-center font-bold text-md font-serif'>{toSentenceCase(weather.data.weather[0].description)}</h1>
              </div>
              <div className="flex flex-wrap -m-3 p-6">

                <div className="xl:w-1/3 md:w-1/2 p-2">
                  <div className="border border-black p-6 rounded-lg">
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                      Humidity %
                    </h2>
                    <p className="leading-relaxed text-base">
                      {weather?.data?.wind?.speed}
                    </p>
                  </div>
                </div>

                <div className="xl:w-1/3 md:w-1/2 p-2">
                  <div className="border border-black p-6 rounded-lg">
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                      Min Temp
                    </h2>
                    <p className="leading-relaxed text-base">
                      {weather?.data?.main?.temp_max}
                    </p>
                  </div>
                </div>
                <div className="xl:w-1/3 md:w-1/2 p-2">
                  <div className="border border-black p-6 rounded-lg">
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2 ">
                      Max Temp
                    </h2>
                    <p className="leading-relaxed text-base">
                      {weather?.data?.main?.temp_min}
                    </p>
                  </div>
                </div>
              </div>
            </div>)}
          </div>
        </div>
      </div>
    </ div>
  )
}

export default Home;