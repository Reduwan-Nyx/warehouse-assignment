import React, { useRef } from 'react';
import { Button, Form, Toast } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {

  const emailRef = useRef('');
  const passRef = useRef('');
  const navigate = useNavigate()
  const location = useLocation()


  let from = location.state?.from?.pathname || "/";

  let errorElement;

 

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

 if (loading || sending) {
   return <Loading></Loading>;
 }

  if(user){
    navigate(from, { replace: true });
  }

   if (error) {
     errorElement = (
         <p className="text-danger">Error: {error.message}</p>
     );
   }

  const handleSubmit = event => {
    event.preventDefault();

     const email = emailRef.current.value;
     const password = passRef.current.value;
     
     signInWithEmailAndPassword(email,password)

  }

  const navigateRegister = event =>{
    navigate('/register')
  }

  const resetPassword = async() =>{
    const email = emailRef.current.value;
       if(email){
         await sendPasswordResetEmail(email);
         toast("Sent email");
       } else{
         toast('please enter your email address')
       }
  }

    return (
      <div className="login-container w-50 mx-auto m-5">
        <h2 className="text-primary text-center">Please login</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passRef}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <Button variant="primary w-50 mx-auto d-block mb-4" type="submit">
            Login
          </Button>
        </Form>
        {errorElement}
        <p className="mt-4">
          New To Halal Food?{" "}
          <Link
            to="/register"
            className="text-danger pe-auto text-decoration-none"
            onClick={navigateRegister}
          >
            Please Register
          </Link>
        </p>

        <p className="mt-4">
          forget password?{" "}
          <button
            className="btn btn-link text-danger pe-auto text-decoration-none"
            onClick={resetPassword}
          >
            Reset Password
          </button>
        </p>
        <SocialLogin></SocialLogin>
        
      </div>
    );
};

export default Login;