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
      <div className='columns p-2'>
        <div className="column is-4 is-offset-4">
          <form onSubmit={handleSubmit}>
            <input className='input' placeholder='Buscar ciudad' type="text" onChange={(e) => onChange(e.target?.value)} />
          </form>
        </div>
      </div>
    </>
  )
}

export default Form