import { useContext, useEffect, useRef, useState } from 'react';
import { FaFacebookF, FaGoogle, FaGithub } from 'react-icons/fa';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../Provider/AuthContext';
import Swal from 'sweetalert2';


const Login = () => {
    const captchaRef = useRef(null);
    const [disabled , setDisabled] = useState(true);
    const {signIn} = useContext(AuthContext);


    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])


    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then((result) => {
            const user = result.user;
            console.log(user); 
            Swal.fire({
                title: "Login Successful",
                width: 600,
                padding: "3em",
                color: "#716add",
                background: "#fff url(/images/trees.png)",
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("/images/nyan-cat.gif")
                  left top
                  no-repeat
                `
              });
            
           
          })
        

    };

    const handleCaptcha = e => {
        const value = captchaRef.current.value;
        if (validateCaptcha(value)) {
            setDisabled(false);
            alert('Captcha Verified!');
          } 
         

    }

    return (
        <>
         <Helmet>
                <title>Bistro | Login</title>
               
               
              </Helmet>
            

        
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
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
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                                required
                            />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input
                                type="text"                            // <- Should be text, not password
                                placeholder="Enter Captcha"
                                className="input input-bordered"
                                ref={captchaRef}                       // <- Make sure this is here
                                required
                            />
                            <button
                                type="button"
                                onClick={handleCaptcha}
                                className="btn btn-outline btn-xs mt-2"
                            >
                                Validate
                            </button>
                        </div>
                        <div className="form-control mt-6">
                            <input  disabled ={disabled}
                                className="w-full btn btn-primary bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-semibold py-2 rounded-lg shadow-md transition-all"
                                type="submit"
                                value="Login"
                            />
                        </div>
                       
                        <div className="divider text-sm">Or sign in with</div>
                        <div className="flex justify-center space-x-4">
                            <button
                                type="button"
                                className="btn btn-circle bg-yellow-500 text-white hover:bg-gray-900"
                            >
                                <FaFacebookF />
                            </button>
                            <button
                                type="button"
                                className="btn btn-circle bg-yellow-500 text-white hover:bg-gray-900"
                            >
                                <FaGoogle />
                            </button>
                            <button
                                type="button"
                                className="btn btn-circle bg-yellow-500 text-white hover:bg-gray-900"
                            >
                                <FaGithub />
                            </button>
                        </div>
                    </form>
                    <p className="text-center text-sm p-4">
                            New here?  
                            <a className='underline'
                               
                            ><Link to= '/signup'>
                              Create a New Account</Link>
                            </a>
                        </p>
                    
                </div>
            </div>
        </div>
        </>
    );
};

export default Login;
