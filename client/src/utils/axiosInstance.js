import axios from 'axios'

// const axiosInstance = axios("http://localhost:3000/api", {withCredentials: true})
const axiosInstance = axios.create({
    baseURL: "https://expenseiq-backend.onrender.com",
    withCredentials: true
})

export default axiosInstance;
