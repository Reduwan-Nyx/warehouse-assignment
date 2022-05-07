import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    let errorElement ;
  if(loading){
    return <Loading></Loading>
  }

    if (error) {
    errorElement =  
          <p className='text-danger'>Error: {error.message}</p>
    }

    if(user){
         navigate(from, { replace: true });
    }

    return (
      <div>
        <div className="d-flex align-items-center ">
          <div style={{ height: "1px" }} className="bg-primary w-50"></div>
          <p className="mt-3 px-3">OR</p>
          <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        </div>
        {errorElement}
        <div>
            <button onClick={()=> signInWithGoogle()} className='btn btn-primary w-50 d-block mx-auto '>Google Sign in</button>
        </div>
      </div>
    );
};

export default SocialLogin;