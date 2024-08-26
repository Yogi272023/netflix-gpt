import { useState } from "react";
import Header from "./Header";

const Login=()=>{
    const [isSignInForm, setIsSignInForm]=useState(true)
    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm)
    }
    return (
        <div>
           <Header/>
           <div>
           <img 
           className="absolute"
           src= "https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_large.jpg"
           alt="Movies Background"/>
           </div>
           <form className="bg-black absolute w-4/12 p-12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
           <h1 className="pb-4 font-bold text-3xl">
             {isSignInForm?"Sign In":"Sign Up"}
           </h1>
           { !isSignInForm && <input
            className="p-2 my-4 w-full rounded-sm bg-gray-700" 
            type="text" 
            placeholder="Full Name"
            />}
            <input
            className="p-2 my-4 w-full rounded-sm bg-gray-700" 
            type="email" 
            placeholder="Email Address"
            />
            <input 
            className="p-2 my-4 w-full rounded-sm bg-gray-700"
            type="password" 
            placeholder="Password" 
            />
            <button className="p-2 my-4 bg-red-700 w-full rounded-lg">
            {isSignInForm?"Sign In":"Sign Up"}
            </button>
            <p className="py-6 cursor-pointer" onClick={toggleSignInForm}>
             {isSignInForm
             ? "New to Netflix? Sign Up Now."
             :"Already registered? Sign In Now."}  
            </p>
           </form>
        </div>
    )
}

export default Login;