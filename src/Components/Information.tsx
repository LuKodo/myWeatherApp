import { Weather } from "../Types/Weather";

export default function Main(props: { weather: Weather; }) {
    const { weather } = props

    return (
        <>
            <div className='row p-2'>
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <div class="card">
                        <div class="card-body">
                            <header class="card-title bg-white border-0">
                                <p class="card-header-title">
                                    {weather?.current.is_day ? (
                                        <img
                                        width="25px"
                                        src='/src/img/sun.png'
                                        alt={weather?.current.condition.text}
                                    />
                                    ) : (
                                        <img
                                        width="25px"
                                        src='/src/img/moon.png'
                                        alt={weather?.current.condition.text}
                                    />
                                    )} &nbsp;{weather?.location.name}, {weather?.location.country}
                                </p>
                            </header>
                            <div class="card-text">
                                <p className="h1">
                                    <img
                                        src={`http:${weather?.current.condition.icon}`}
                                        alt={weather?.current.condition.text}
                                        width="90px"
                                    /> {weather?.current.temp_c}°
                                </p>

                                <p className="h6 fw-semibold">
                                    {weather?.current.condition.text}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}