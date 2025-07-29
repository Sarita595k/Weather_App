// src/components/WeatherMap.jsx
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const WeatherMap = () => {
    const apiKey = "YOUR_API_KEY"; // Replace with your real key

    return (
        <MapContainer
            center={[20.5937, 78.9629]}
            zoom={5}
            scrollWheelZoom={true}
            style={{ height: "100vh", width: "100%" }}
        >
            {/* Base map (OpenStreetMap) */}
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
            />

            {/* Weather Overlay: Temperature Layer */}
            <TileLayer
                url={`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${apiKey}`}
                attribution='Weather data &copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
                opacity={0.6}
            />
        </MapContainer>
    );
};

export default WeatherMap;
