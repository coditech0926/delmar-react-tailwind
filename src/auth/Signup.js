import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from "../assets/icon/logo.svg";
import email from "../assets/icon/email.svg";
import password from "../assets/icon/password.svg";
import eye from "../assets/icon/eye.svg";
import eyeLock from "../assets/icon/eye-lock.svg";

const Signup = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prev => !prev);
    }

    const toggleConfirmPasswordVisibility = () => {
        setIsConfirmPasswordVisible(prev => !prev);
    }

    return (
        <div className='grid grid-cols-1 h-screen w-full'>
            <div className='flex flex-col justify-center items-center'>
                <img src={logo} alt="" width="400" height="200" />
                <form className='max-w-[600px] w-full mt-8 mx-auto border-radius-1 bg-white p-16 text-center'>
                    <h2 className='text-3xl dark:text-black font-bold text-center my-8'>Sign Up</h2>
                    <div className='flex flex-row text-red-400 py-2 pt-0 items-center'>
                        <div className='flex items-center pr-4'>
                            <img src={email} width="25" height="25" alt="" />
                        </div>
                        <input
                            className='w-full rounded-full bg-slate-100 mt-2 p-4 pl-8 focus:outline-none shadow-xl shadow-red-100 placeholder-red-300'
                            type="email"
                            placeholder='E-mail'
                        />
                    </div>
                    <div className='relative flex flex-row text-red-400 mt-3 py-2 pt-0 items-center'>
                        <div className='flex items-center password-icon'>
                            <img src={password} width="40" height="40" alt="" />
                        </div>
                        <input
                            className='w-full rounded-full bg-slate-100 mt-2 p-4 pl-8 focus:outline-none shadow-xl shadow-red-100 placeholder-red-300'
                            type="password"
                            placeholder='Password'
                        />
                        <div
                            className='absolute inset-y-0 right-0 flex items-center px-4'
                            onClick={togglePasswordVisibility}
                        >
                            {isPasswordVisible ? (
                                <img src={eyeLock} width="25" height="25" alt="" />
                            ) : (
                                <img src={eye} width="25" height="25" alt="" />
                            )}
                        </div>
                    </div>
                    <div className='relative flex flex-row text-red-400 mt-3 py-2 pt-0 items-center'>
                        <div className='flex items-center password-icon'>
                            <img src={password} width="40" height="40" alt="" />
                        </div>
                        <input
                            className='w-full rounded-full bg-slate-100 mt-2 p-4 pl-8 focus:outline-none shadow-xl shadow-red-100 placeholder-red-300'
                            type="password"
                            placeholder='Re-Password'
                        />
                        <div
                            className='absolute inset-y-0 right-0 flex items-center px-4'
                            onClick={toggleConfirmPasswordVisibility}
                        >
                            {isConfirmPasswordVisible ? (
                                <img src={eyeLock} width="25" height="25" alt="" />
                            ) : (
                                <img src={eye} width="25" height="25" alt="" />
                            )}
                        </div>
                    </div>
                    <button className='my-5 px-16 py-2 bg-red-600 text-white font-semibold rounded-full'>SIGN UP</button>
                    <div className="mb-5 flex justify-center items-center">
                        <p className='text-red-300'>Already have an account?</p>&nbsp;
                        <Link to="/" class="hover:underline text-red-500">Sign In</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;