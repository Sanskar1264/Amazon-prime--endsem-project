import React from "react";
import MySVG from "../images/zee5-seeklogo.svg";
import { Link, useNavigate } from "react-router-dom";

const Navbar = (props) => {
    const navigate = useNavigate();

    function handleLoginState() {
        props.setLoginStatus(false);
    }

    return (
        <div className="navbar fixed top-0 left-0 right-0 bg-gray-900 p-4 flex justify-between items-center shadow-md z-10">
            <div className="flex items-center">
                <Link to="/home"><h1 className="text-2xl text-white font-bold">Prime Video</h1></Link>
            </div>
            <Link to={props.loginStatus ? "/home/signup" : "/home/signin"}>
                <button
                    onClick={handleLoginState}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition duration-300"
                >
                    {props.loginStatus ? "Sign out" : "Sign in"}
                </button>
            </Link>
        </div>
    );
}

export default Navbar;
