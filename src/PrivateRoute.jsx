import React, { useContext } from 'react';

import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const PrivateRouter = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const navigate = useNavigate();
  
if(loading){
    return <div>Loading...</div>
}
    if(user){
        return children;
    } 
    else return <Navigate to="/login"></Navigate>
};

export default PrivateRouter;