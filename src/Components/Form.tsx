import { useState } from 'preact/hooks'

const Form = (props: { onChangeCity: (city: string) => void }) => {
  const { onChangeCity } = props
  const [city, setCity] = useState('')

  const onChange = (value: string | ((prevState: string) => string)) => {
    if (value !== "") {
      setCity(value);
    }
  }

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    onChangeCity(city);
  }

  return (
    <>
      <div className='columns p-2'>
        <div className="column is-4 is-offset-4">
          <form onSubmit={handleSubmit}>
            <input className='form-control' placeholder='Buscar ciudad' type="text" onChange={(e) => onChange(e.target?.value)} />
          </form>
        </div>
      </div>
    </>
  )
}

export default Form