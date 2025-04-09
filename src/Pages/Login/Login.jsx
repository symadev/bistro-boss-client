import { FaFacebookF, FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  return (
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
            <div className="form-control mt-6">
              <input
                className="w-full btn btn-primary bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-semibold py-2 rounded-lg shadow-md transition-all"
                type="submit"
                value="Sign In"
              />
            </div>
            <p className="text-center text-sm">
              New here?{' '}
              <a
                href="#"
                className="text-orange-600 font-semibold hover:underline"
              >
                Create a New Account
              </a>
            </p>
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
        </div>
      </div>
    </div>
  );
};

export default Login;
