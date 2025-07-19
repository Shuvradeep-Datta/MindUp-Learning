export function SetData(user,token){
    localStorage.setItem("user",JSON.stringify(user));
    localStorage.setItem("token",token);
}


export function getData(){
    const user = localStorage.getItem("user")?JSON.parse( localStorage.getItem("user")):null
    const token = localStorage.getItem("token");


    if(user && token){
        return {
            user,
            token
          };
        
    }else{
        return null;
    }
}


export function removeData(){
    localStorage.removeItem("user");
    localStorage.removeItem("token");
}