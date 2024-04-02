import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";

const Register = () => {

    const handleForm = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email , password);

        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error =>{
            console.error(error.massage);
        })

    }


    return (
        <div className="">
            <div className="mx-auto w-1/2">
            <h3 className="text-3xl">Register Now</h3>
            <form onSubmit={handleForm}>
                <input className="mb-3 w-3/4 py-2 px-4" type="text" name="email" placeholder="enter your email" required/><br />

                <input className="mb-2 w-3/4 py-2 px-4"  type="password" name="password" id="" placeholder="enter your password"/>
                <br />

                <input className="btn btn-secondary w-3/4 " type="submit" value="Register" />
            </form>
            </div>
        </div>
    );
};

export default Register;