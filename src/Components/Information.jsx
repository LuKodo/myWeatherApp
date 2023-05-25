export default function Main({ weather }) {
    return (
        <>
            <div className='columns p-2 is-mobile'>
                <div className="column is-12">
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title">
                                <figure class="image is-64x64">
                                    <img
                                        src={`http:${weather?.current.condition.icon}`}
                                        alt={weather?.current.condition.text}
                                    />
                                </figure>

                                <div className="is-size-5 m-0 p-0">&nbsp;{weather?.location.name}, {weather?.location.country}</div>
                            </p>
                        </header>
                        <div class="card-content">
                            <p className="is-size-1 has-text-weight-bold m-0 p-0">
                                {weather?.current.temp_c}°
                            </p>

                            <p className="is-size-6 has-text-weight-semibold m-0 p-0">
                                {weather?.current.condition.text}
                            </p>
                        </div>
                    </div>
<br />
                    <div className="card">
                        <iframe
                            width="100%"
                            height="350"
                            frameborder="0"
                            scrolling="no"
                            marginheight="0"
                            marginwidth="0"
                            src={`https://www.openstreetmap.org/export/embed.html?bbox=${weather?.location.lon - 1}%2C${weather?.location.lat - 1}%2C${weather?.location.lon + 1}%2C${weather?.location.lat + 1}&amp;layer=transportmap&amp;marker=10.396%2C-75.50999999999999`}
                            style="border: 1px solid black"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}