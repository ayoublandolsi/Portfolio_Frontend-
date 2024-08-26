import Axios from 'axios'

const axios = Axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,



/*const axiosClient = axios.create({
 baseURL : `${import.meta.env.VITE_API_BASE_URL}/api`
})
axiosClient.interceptors.request.use((config) =>{
    const token = '1234';//TODO
    config.headers.Authorization=`Bearer ${token}`
})
axiosC1ient.interceptors.response.use( response=>{
    return response;
}, error => {
    if (error.response && error.response.status === 401){
    router.navigate( '/login' )
    return error;
    }
    throw error;
})

export default axiosClient;*/  })
export default axios

