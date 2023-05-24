import { useState } from 'preact/hooks'

const Form = ({ onChangeCity }) => {
  const [city, setCity] = useState('')

  const onChange = (value) => {
    if (value !== "") {
      setCity(value);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onChangeCity(city);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => onChange(e.target?.value)} />
      </form>
    </>
  )
}

export default Form