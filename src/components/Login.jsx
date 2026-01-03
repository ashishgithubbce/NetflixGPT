import React from "react";
import Header from "./Header";
import {useState} from  "react"

const Login = () => {
  const [isSignUp, setSignUp] = useState(false);
  return (
    <div className="h-screen w-screen relative">
      <Header />
      <div className="">
        <img
          className=" h-full w-full object-cover absolute"
          // src="https://occ-0-3215-3662.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbzpFwViKBf2koQik2TgvmXhM-nuQ7Kxu8KLD5C2PrIbdX6JM2kOGj45ZxtQtUWWD7_Dp4RTlnOP6usSJHcACAfT0N-hYcW8DlF9.webp?r=7a1"
          // alt="background"
          //  src="https://occ-0-3215-3662.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABdRqKiXHyqqjFMqNjaS7GKzraC2JkmvZi8Mdxik0cbe8FjA78wDxvwquIbD-Ug4156MGkFEE-LzUn2P4z1in1_yM4GSDhAf2U8g2.webp?r=623"
          src="https://occ-0-3215-3662.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABTwGlS1EXgzsHCHIwb670aZGbIN8d9IMfB9PQLbw4SKZTefztKRvSGUlrBy1h0sOWgopxuBB4vQOHgKNUsBDCidndFHB0eF7OeWo.webp?r=1a0"
        />
        
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-50 ">
        <form className="bg-black/60 p-14 pb-25 pt-20 rounded-md w-100 text-white ">
          <h1 className="text-3xl font-bold mb-6">{isSignUp?"Sign Up": "Sign In"}</h1>
          {isSignUp && <input
            type="text"
            placeholder="Name"
            className="w-full p-3 mb-4 bg-gray-700 rounded"
          />}
          <input
            type="text"
            placeholder="Email or Phone Number"
            className="w-full p-3 mb-4 bg-gray-700 rounded"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 bg-gray-700 rounded"
          />

          <button
            type="submit"
            className="w-full bg-red-600 p-3  mb-2 rounded font-semibold"
          >
            {isSignUp?"Sign Up":"Sign In"}
          </button>
          {/* <div className="flex justify-between">
            <label>
                <input type="checkbox"/> Remember me
            </label>
            <a>Need help?</a>
          </div> */}
          <div className="flex justify-between items-center text-sm text-gray-400">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-red-600" />
              Remember me
            </label>

            <a href="#" className="hover:underline">
              Need help?
            </a>
          </div>
          <div className="mt-8">
            <span>
              <a className="text-gray-100 hover:cursor-pointer" onClick={()=>setSignUp(!isSignUp)}>{isSignUp?"Already registered? Sign In":"New to Netflix? Sign up now"}</a>
            </span>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
