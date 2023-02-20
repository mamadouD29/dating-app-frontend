import axios from 'axios'
const instance = axios.create({
baseURL: "https://date-app-backend.netlify.app"
})
export default instance
