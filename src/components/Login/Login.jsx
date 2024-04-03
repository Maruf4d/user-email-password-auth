import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

    const [login , setLogin] = useState('');
    const [errorLogin , setErrorLogin] = useState('');
    const emailRef = useRef(null)

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email , password)

        setLogin('');
        setErrorLogin('');

        signInWithEmailAndPassword(auth , email , password)
        .then(result =>{
            console.log(result.user);
            setLogin("Success Login")
        })
        .catch(error => {
            console.log(error);
            setErrorLogin(error.message)
        })
    };

    const handleResetPassword = () =>{
      const email = emailRef.current.value;
      if(!email){
        console.log("Please provide an email" , email);
        return;
      }
      else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        console.log("please right a valid email")
      }
      sendPasswordResetEmail(auth , email)
      .then(()=>{alert("Checked your email")})
      .catch(error =>{
        console.log(error)
      })
    }



  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse ml-36">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6 w-1/2">
          Login Message preferences enable administrators to create messages that appear to users on the Welcome page when they log in to the system.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
           <form onSubmit={handleLogin}>
           <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                ref={emailRef}
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="label">
                <a onClick={handleResetPassword}
                href="#"
                className="label-text-alt link link-hover">
                Reset password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
           </form>
           {
              login && <b className="text-2xl text-green-600">{login}</b>
           }
           {
              errorLogin && <b className="text-2xl text-rose-600">{errorLogin}</b>
           }
           <p>New to this website ? Please <Link to={"/register"}>Register</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
