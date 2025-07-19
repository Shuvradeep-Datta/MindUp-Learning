
import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({elements: Component}) => {

   const {login,token,user,isLogin} = useAuth()
   
  return (
    <div>


        {
            isLogin()?<Component />:<Navigate to={"/login"}/>
        }
    </div>
  )
}

export default ProtectedRoute