import { Children, createContext, useContext, useEffect, useState } from "react";
import { getData, removeData, SetData } from "../Helper/LocalStorageHelper";

//1.Create Context
const AuthContext = createContext()


//2.Creation of Provider

export const AuthProvider =({ children })=>{
const [token,setToken] =useState(getData()?.token);
const [user,setUser] = useState(getData()?.user);

useEffect(()=>{

    if(token && user){
            SetData(user,token);
    }else{
        removeData();

    }

},[token,user]);


function login(token,user){
    setToken(token);
    setUser(user);

}

function logOut(){
    setToken(null);
    setUser(null);

}

function isLogin(){
    return token && user;
}

    return(
        <AuthContext.Provider value={{
            token :token,
            user:user,
            login:login,
            logOut :logOut,
            isLogin:isLogin,
           
        }}>
            {children}
        </AuthContext.Provider>
    )
} 





//3.Context Calling Mechanism
export const useAuth = ()=>{
    return useContext(AuthContext);
}