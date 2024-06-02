import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (

        <div className=' flex justify-center items-center bg-gray-500 h-screen'>
            <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter Email"/>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter Password"/>
                    {/* <p className=" text-xs italic">Please choose a password.</p> */}
                </div>
                <div className="flex flex-col items-center justify-center">
                    <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Sign In
                    </button>
                </div>
                <div className='flex flex-row-reverse'>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Forgot Password?
                    </a>
                </div>
                
                <div className=' mt-6 flex justify-center items-center flex-col gap-1'>
                    <p>Don't Have Account</p>
                    <Link to='/register' className='bg-gray-400 w-full flex justify-center hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"'>Sign Up</Link>
                </div>
            </form>
            
        </div>
        </div>
    )
}

export default Login
