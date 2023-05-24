import { useEffect, useState } from 'preact/hooks'
import Form from './Form';
import Main from './Information';

export default function App() {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    loadInfo()
  }, [])

  useEffect(()=>{
    document.title = `Weather | ${weather?.location.name ?? ''}`
  },[weather])

  const loadInfo = async (city = 'Cartagena') => {
    try {
      const request = await fetch(`${import.meta.env.VITE_WEATHER_API_URL}&key=${import.meta.env.VITE_WEATHER_KEY}&q=${city}`)
      const json = await request.json()
      setWeather(json)
    } catch (error) {
      console.log(error)
    }
  }

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  return (
    <>
      <Form onChangeCity={handleChangeCity} />
      <Main weather={weather} />
    </>
  )
}