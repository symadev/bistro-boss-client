//we use it because not extra needed sharing for localhost

import axios from "axios";

export const axiosSecure = axios.create({
    baseURL:'http://localhost:5000'
})

const UseAxiosSecure = () => {
   return axiosSecure;
};

export default UseAxiosSecure;