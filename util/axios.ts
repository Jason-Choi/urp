import axios from "axios"

const axiosInstance = axios.create({ baseURL: process.env.HOST_API_KEY || "" })

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject((error.response && error.response.data) || "Axios Error")
)

export default axiosInstance
