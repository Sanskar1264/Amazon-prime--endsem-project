import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = (props)=>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [appType, setAppType] = useState("ott");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate()
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("projectID", "tsd77ltb68ta");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email,
      password,
      appType,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/user/login",
        requestOptions
      );
      const data = await response.json();
      console.log(data.status);
      if (data.status == "success"){
        navigate("/home")
        props.setLoginStatus(true)
      } else{
        setErrorMessage("Wrong Credentials!")
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
      }
    } catch (error) {
      console.error(error);
    }
  };
    return (
        <div className="flex flex-col pt-0.5 items-center justify-center min-h-screen bg-white-100 dark:bg-white-900">
          <div className="bg-white dark:bg-white-800 p-6 rounded-lg shadow-md w-full max-w-md">
            <div className="flex justify-center mb-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png" alt="logo" className="h-10"/>
            </div>
            <h2 className="text-2xl font-semibold mb-6 text-center">Create account</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Email</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm" placeholder=""/>
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Password</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"/>
              </div>
              <div>
                <button type="submit" onClick={handleSubmit} className="w-full py-2 px-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">SiginIn</button>
              </div>
            </form>
            <div className="mt-1">
              <span className="font-bold text-lg text-red-600">{errorMessage}</span>
            </div>
            <p className="mt-6 text-center text-sm text-zinc-600 dark:text-zinc-400">
              Don't have an account? <Link to = "/home/signup"><span className="text-xl font-bold cursor-pointer">Sign Up here.</span></Link>
            </p>
          </div>
          <footer className="mt-6 text-center text-xs text-zinc-500 dark:text-zinc-400">
            © 1996-2024, Amazon.com, Inc. or its affiliates
          </footer>
        </div>
      )
}

export default LoginPage;
