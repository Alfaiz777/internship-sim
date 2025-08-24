import React from 'react'
import { useState } from "react";
import { useForm } from 'react-hook-form';


const Loginpage = () => {


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm();

    const onsubmit = (data) => {
        console.log(data);
    }
    //-------------------------------------------------------------
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [error, setError] = useState("");

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (!email || !password) {
    //         setError("Both fields are required.");
    //         return;
    //     }
    //     setError("");
    //     console.log("Login submitted:", { email, password });
    // };
    //-------------------------------------------------------------

    return (

        
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <form
                     onSubmit={handleSubmit(onsubmit)}
                    className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
                >
                    <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

                    {/* {error && (
                        <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
                    )} */}

                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            // value={email}
                             onChange={(e) => setEmail(e.target.value)}
                            {...register('email', { required: 'Email is required' })}
                            className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            //  value={password}
                             onChange={(e) => setPassword(e.target.value)}
                            {...register('password', { required: 'Password is required' })}
                            className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                             required
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 cursor-pointer"
                    >
                        {isSubmitting ? 'Logging in...' : 'Login'}
                    </button>
                </form>
            </div>
        

        

        

        //-------------------------------------------------------------------------------------------
        // <div className="flex items-center justify-center min-h-screen bg-gray-100">
        //     <form
        //         onSubmit={handleSubmit}
        //         className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
        //     >
        //         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        //         {error && (
        //             <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        //         )}

        //         <div className="mb-4">
        //             <label className="block text-gray-700">Email</label>
        //             <input
        //                 type="email"
        //                 value={email}
        //                 onChange={(e) => setEmail(e.target.value)}
        //                 className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        //                 required
        //             />
        //         </div>

        //         <div className="mb-6">
        //             <label className="block text-gray-700">Password</label>
        //             <input
        //                 type="password"
        //                 value={password}
        //                 onChange={(e) => setPassword(e.target.value)}
        //                 className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        //                 required
        //             />
        //         </div>

        //         <button
        //             type="submit"
        //             className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        //         >
        //             Login
        //         </button>
        //     </form>
        // </div>
        //------------------------------------------------------------------------------------------


    )
}

export default Loginpage
