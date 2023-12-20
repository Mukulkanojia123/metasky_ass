import React , {useState} from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../Store/userSlice';

export const Login = () => {
  let dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = ()=>{
    dispatch(login());
  }
  return (
    <div className='bg-orange-100 w-full p-10 flex justify-center'>

    <div className="bg-white p-20 md:mt-12 rounded-xl shadow-md md:w-6/12 ">
        <div>
            <h1 className="text-xl sm:text-2xl ml-30 font-semibold mb-4">Login</h1>
            <form onClick={(e) => e.preventDefault()} className="space-y-4">
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                />
                <button
                    onClick={handleSignIn}
                    type="submit"
                    className="w-1/2 md:ml-25 bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
                >
                    Login
                </button>
            </form>
        </div>
        <p className='italic mt-2 text-yellow-600'>use "xyz@123gmail.com"  & "123456" as email and password</p>
        

    </div>


</div>
  )
}
export default Login;
