import axios from 'axios';

const API_KEY = '32ae77987554b0a48c64114ecebbe3e2';



export default class WeatherProvider {
    async nowByCoords(lat, lon) {
        return await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    }
}
