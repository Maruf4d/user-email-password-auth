import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import { useState } from "react";
import { FaEye , FaEyeSlash  } from "react-icons/fa";
import { Link } from "react-router-dom";


const Register = () => {

    const [registerSuccess , setRegisterSuccess] = useState('');
    const [registerError , setRegisterError] = useState('');
    const [showPassword , setShowPassword] = useState(false);

    const handleForm = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email , password);

        // rest error
        setRegisterError('');
        setRegisterSuccess('');

        if(password.length < 6){
            setRegisterError('Password should be at least 6 characters or Longer');
            return;
        }

        else if(!/[A-Z]/.test(password)){
            setRegisterError('your password should be must one Uppercase');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user);
            setRegisterSuccess("Register Successfully")
        })
        .catch(error =>{
            console.error(error);
            setRegisterError(error.message)
        })

    }


    return (
        <div className="">
            <div className="mx-auto w-1/2">
            <h3 className="text-3xl">Register Now</h3>
            <form onSubmit={handleForm}>
                <input className="mb-3 mt-4 w-3/4 py-3 px-4 rounded-2xl" type="text" name="email" placeholder="enter your email" required/><br />

                <input className="mb-2 w-3/4 py-3 px-4 rounded-2xl"  type={showPassword ?'text': "password"}name="password" id="" placeholder="enter your password" required/>
                <span className="absolute" onClick={()=>{setShowPassword(!showPassword)}}>

                    {
                        showPassword ? <FaEyeSlash/> : <FaEye/>
                    }

                </span>
                <br />

                <input className="btn btn-secondary w-3/4 " type="submit" value="Register" />
            </form>
            {
                registerError && <b className="text-red-500">{registerError}</b>
            }
            {
                registerSuccess && <strong className="text-green-500">{registerSuccess}</strong>
            }
            <p>Already have account ? please <Link className="underline" to={"/login"}>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;