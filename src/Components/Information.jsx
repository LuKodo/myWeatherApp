import mapboxgl from 'mapbox-gl/dist/mapbox-gl'
import { useEffect, useRef, useState } from 'preact/hooks';

export default function Main({ weather }) {
    mapboxgl.accessToken = `${import.meta.env.VITE_MAP_API}`;

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(0);
    const [lat, setLat] = useState(0);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return;
        setLat(weather?.location.lat)
        setLng(weather?.location.lon)

        console.log(lat);
        console.log(lng);

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });
    });

    return (
        <div>
            <div>{weather?.location.name}</div>
            <div>{weather?.location.country}</div>
            <div>
                <div>
                    <img
                        src={`http:${weather?.current.condition.icon}`}
                        alt={weather?.current.condition.text}
                        width={50}
                    />
                </div>
                <div>
                    <div>{weather?.current.condition.text}</div>
                    <div>{weather?.current.temp_c}°</div>
                </div>

                <div style={{ height: 400, width: 200 }} ref={mapContainer} className="map-container" />
            </div>
        </div>
    )
}