import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../Loading/Loading';
const Register = () => {
  const [agree, setAgree] = useState(false)
const [createUserWithEmailAndPassword, user, loading, error] =
  useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
const [updateProfile, updating] = useUpdateProfile(auth);

  const navigate = useNavigate()

  const navigateLogin = () =>{
    navigate('/login')
  }

   if (loading || updating) {
     return <Loading></Loading>;
   }

  const handleRegister = async (event) =>{
    event.preventDefault()
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const agree = event.target.terms.checked;
   
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name});
      console.log("Updated profile");
      navigate("/home");
  }

    return (
      <div className="register-form">
        <h2 className="text-center m-3 text-primary">Pelase Register</h2>
        <form onSubmit={handleRegister}>
          <input type="text" name="name" id="" placeholder="Your Name" />
          <br />

          <input
            type="email"
            name="email"
            id=""
            placeholder="Your Email"
            required
          />
          <br />

          <input
            type="password"
            name="password"
            id=""
            placeholder="Your Password"
            required
          />
          <input onClick={()=> setAgree(!agree)} type="checkbox" name="terms" id="terms" />
          <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Terms And Confition</label>
          <input disabled={!agree} className='w-50 mx-auto btn btn-primary mt-2' type="submit" value="Register" />
        </form>
        <p>
          Already Have An Account?{" "}
          <Link
            to="/login"
            className="text-danger pe-auto text-decoration-none"
            onClick={navigateLogin}
          >
            Please Login
          </Link>
        </p>
        <SocialLogin></SocialLogin>
      </div>
    );
};

export default Register;