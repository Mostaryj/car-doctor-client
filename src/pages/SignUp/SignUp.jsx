import { Link } from "react-router-dom";
import login from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const SignUp = () => {

    const {createUser} = useContext(AuthContext);

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
          })
          .catch((error) => {
            console.log(error.message);
          });

         }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="mr-12  w-1/2">
          
            <img src={login} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

          <h1 className="text-3xl text-center font-poet font-bold">Sign Up</h1>

            <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
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
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn bg-orange-600 text-white" type="submit" value='Sign Up'/>
              </div>
            </form>
            <p className="p-4 text-center">Have an account? <Link className="text-orange-600 font-bold" to='/login'>Login</Link></p>
          </div>
        </div>
      </div>
        </div>
    );
};

export default SignUp;