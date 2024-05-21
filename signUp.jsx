import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUpPage = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupStatus, setSignupStatus] = useState(""); // State to track signup status
  const [errorMessage, setErrorMessage] = useState(""); // State to track signup status
  const navigate = useNavigate(); // Hook to manage navigation

  const handleSubmit = async (e) => {
    e.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("projectID", "tsd77ltb68ta");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "name": name,
      "email": email,
      "password": password,
      "appType": "ott"
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/user/signup",
        requestOptions
      );
      const data = await response.json();
      console.log(data);
      setSignupStatus(data.status); // Update signup status state
      // Redirect to login page if signup is successful
      if (data.status === "success") {
        navigate("/home/signin");
      }else{
        setErrorMessage(data.message)
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex pt-0.5 flex-col items-center justify-center min-h-screen bg-white-100 dark:bg-white-900">
      <div className="bg-white dark:bg-white-800 p-6 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-center mb-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png" alt="logo" className="h-10"/>
        </div>
        <h2 className="text-2xl font-semibold mb-6 text-center">Create account</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Your name</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm" placeholder="First and last name"/>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm" placeholder=""/>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm" placeholder="At least 6 characters"/>
          </div>
          <div>
            <label htmlFor="repassword" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Re-enter password</label>
            <input type="password" id="repassword" className="mt-1 block w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm" placeholder=""/>
          </div>
          <div>
            <button type="submit" onClick={handleSubmit} className="w-full py-2 px-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">Create your Amazon account</button>
          </div>
        </form>
        <div className="mt-1">
          <span className="font-bold text-lg text-red-600">{errorMessage}</span>
        </div>
        <p className="mt-6 text-center text-sm text-zinc-600 dark:text-zinc-400">
          Already have an account? <Link to="/home/signin" className="text-blue-600 hover:text-blue-500">Sign in</Link>
        </p>
      </div>
      <footer className="mt-6 text-center text-xs text-zinc-500 dark:text-zinc-400">
        © 1996-2024, Amazon.com, Inc. or its affiliates
      </footer>
    </div>
)
}

export default SignUpPage;
