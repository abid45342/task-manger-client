import axios from "axios";



const axiosPublic = axios.create({
    baseURL: 'https://task-manager-server-kappa-sable.vercel.app/',
    headers: {
        'Content-Type': 'application/json',
    },
})
export default axiosPublic;