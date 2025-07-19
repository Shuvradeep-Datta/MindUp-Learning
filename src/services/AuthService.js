import { publicAxios } from "../components/config/AxiosConfig";

//Register User 
export const createUser =async (userObject)=>{
   const result = await publicAxios.post("/users",userObject)
   return result.data;
}

//Login User

export const loginUser =async (userLogin)=>{
    const result = await publicAxios.post("/auth/login",userLogin);
    return result.data;
}

