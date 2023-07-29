import React, { useState, useEffect } from "react";
import homeImgOne from "../../assets/homeImgOne.jpeg";
import homeImgTwo from "../../assets/trackerImg.jpg";
import homeImgThree from "../../assets/shellStation.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
	const [isLogin, setIsLogin] = useState<boolean>(false);
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [repeatPassword, setRepeatPassword] = useState<string>("");

	const images = [
		`${homeImgOne}`,
		// `${homeImgTwo}`,
		`${homeImgThree}`,
	];

	const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 3000);

		return () => clearInterval(interval);
	}, [images.length]);

	const currentImage = images[currentImageIndex];

	const handleLogin = () => {
		// Perform login logic using the 'email' and 'password' states
		console.log("Login clicked");
	};

	const handleRegister = () => {
		// Perform registration logic using the 'email' and 'password' states
		console.log("Register clicked");
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isLogin) {
      handleLogin();
    } else {
      handleRegister();
    }
  };

	return (
    <div
      className="flex flex-col justify-center items-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${currentImage})`,
        opacity: 1
      }}
    >
      <div
        className="flex flex-col justify-center items-center h-[80%] w-[50%] bg-[#fafafa] rounded-3xl"
        style={{ boxShadow: '2px 2px 15px #ec0000' }}
      >
        <h2 className="text-[24px] font-bold">Automated Permit Tracker</h2>
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Sign {isLogin ? 'in to your account' : 'up to create an account'}
        </h1>
        <form className="w-[70%]" onSubmit={handleSubmit}>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
              <span className="text-red-500 pl-1 font-bold text-[18px] pl-1 font-bold text-[18px]">
                *
              </span>{' '}
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="password"
              name="floating_password"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
              <span className="text-red-500 pl-1 font-bold text-[18px] pl-1 font-bold text-[18px]">
                *
              </span>
            </label>
          </div>
          {!isLogin && (
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="password"
                name="repeat_password"
                id="floating_repeat_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
              />
              <label
                htmlFor="floating_repeat_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Confirm password
                <span className="text-red-500 pl-1 font-bold text-[18px] pl-1 font-bold text-[18px]">
                  *
                </span>
              </label>
            </div>
          )}
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
          <p className="text-[20px] text-gray-600 my-2">
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <button
              type="button"
              className="text-blue-700 font-bold"
              onClick={() => setIsLogin((prev) => !prev)}
            >
              {isLogin ? 'Register' : 'Login'}
            </button>
          </p>
        </form>
      </div>
      <div>Developed by Ifiok Inyang @ 2023. HSE SB-East</div>
    </div>
  );
};

export default Home;
