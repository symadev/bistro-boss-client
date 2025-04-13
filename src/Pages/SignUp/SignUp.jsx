import { FaFacebookF, FaGoogle, FaGithub } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthContext';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);

        createUser(data.email, data.password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                Swal.fire({
                    title: "Register Done",
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
                  navigate('/');

            })

    };


    return (
        <>

            <Helmet>
                <title>Bistro | Sign Up</title>


            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("name", { required: true })}
                                    placeholder="name"
                                    className="input input-bordered"
                                    required

                                />
                                {/* //react-hook-form */}
                                {errors.name && <span>Name is required</span>}
                            </div>



                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    {...register("password", { required: true })}
                                    placeholder="password"
                                    className="input input-bordered"
                                    required
                                />
                                {errors.password && <span>This field is required</span>}
                            </div>




                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    {...register("email", { required: true })}
                                    placeholder="email"
                                    className="input input-bordered"
                                    required
                                />
                                {errors.email && <span>This field is required</span>}

                            </div>

                            <div className="form-control mt-6">
                                <input
                                    className="w-full btn btn-primary border-0 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-semibold py-2 rounded-lg shadow-md transition-all"
                                    type="submit"
                                    value="Register"
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
                            Already have an account?
                            <a className='underline'

                            ><Link to='/login'>
                                    now login</Link>
                            </a>
                        </p>

                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;