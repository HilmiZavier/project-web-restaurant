
import {useNavigate} from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();

  return (
   
    <div>
        <div className="">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="Username" className="block text-sm/6 font-medium text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="usename"
                  name="usename"
                  type="usename"
                  required
                  autoComplete="usename"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                <div className="text-sm">
                  <a href="#" className="text-secondary-content">
                    Forgot password?
                  </a>
                </div>
              </div>
            </div>

            <div>
            <button 
            onClick={() => navigate('/menu')}
            type = "submit"
            className="btn btn-primary flex w-full justify-center rounded-md px-3 py-1.5 text-sm/6 font-semibold">Sign in</button>
              
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-white-500">
            Not a member?{' '}
            
          </p>
        </div>
      </div>
          
          
            
    </div>
    
    </div>
  );
  };
  
  export default Login;