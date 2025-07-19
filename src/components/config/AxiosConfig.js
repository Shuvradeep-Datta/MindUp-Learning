import axios from "axios";
import { getData } from "../../Helper/LocalStorageHelper";
import { toast } from "react-toastify";

const baseUrl =import.meta.env.VITE_BASE_URL

export const publicAxios=axios.create({
    baseURL: baseUrl,
    timeout:5000,
});

export const privateAxios=axios.create({
    baseURL: baseUrl,
    timeout:5000,
});

privateAxios.interceptors.response.use(
    (response)=>{


      
        return response;
        
    },
    (error)=>{
        toast.error ("response came")
        return Promise.reject(error);
    }
);
privateAxios.interceptors.request.use(
    (config)=>{
      const token = getData().token;
        // If token exists, add it to the Authorization header
      if(token){
        config.headers['Authorization'] = `Bearer ${token}`;
      } 
      return config;
    },
    (error)=>{
        return Promise.reject(error);
    }
);

