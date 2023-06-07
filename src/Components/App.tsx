import { useEffect, useState } from 'preact/hooks'
import Form from './Form';
import Main from './Information';
import { Weather } from '../Types/Weather';
import config from '../config/env';

export default function App() {
  const [weather, setWeather] = useState<Weather>(null)

  useEffect(() => {
    loadInfo()
  }, [])

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ''}`
  }, [weather])

  const loadInfo = async (city = 'Cartagena') => {
    try {
      const request = await fetch(`${config.VITE_WEATHER_API_URL}&key=${config.VITE_WEATHER_KEY}&q=${city}&lang=es`)
      const json = await request.json()
      setWeather(json)
    } catch (error) {
      console.log(error)
    }
  }

  function handleChangeCity(city: string) {
    setWeather(null);
    loadInfo(city);
  }

  return (
    <>
      {weather?.current.is_day ? (
        <div className='container-fluid p-4'>
          <Form onChangeCity={handleChangeCity} />
          <Main weather={weather} />
        </div>
      ) : (
        <div className='container-fluid bg-dark p-4'>
          <Form onChangeCity={handleChangeCity} />
          <Main weather={weather} />
        </div>
      )}

    </>
  )
}