import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthProvider.jsx";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [authUser, setAuthUser] = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    axios
      .post("/api/users/login", userInfo) //go to vite.config.js
      .then((res) => {
        if (res.data) {
          toast.success(res.data.message);
        }
        localStorage.setItem("chatApp", JSON.stringify(res.data));
        setAuthUser(res.data);
        navigate("/", { replace: true });
      })
      .catch((err) => {
        toast.error("login failed");
      });
  };
  return (
    <>
      <div className="h-screen flex items-center justify-center ">
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="border border-white p-8 rounded-xl space-y-3 w-96"
        >
          <h1 className="text-center text-3xl font-extrabold text-white">
            <span className="text-green-700 ">Text </span>App
          </h1>
          <h2 className="text-2xl font-bold text-white py-2">Login</h2>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Email"
              {...register("email", { required: true })}
            />
          </label>
          {errors.email && (
            <span className="text-red-500">This field is required</span>
          )}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow"
              placeholder="Password"
              {...register("password", { required: true })}
            />
          </label>
          {errors.password && (
            <span className="text-red-500">This field is required</span>
          )}
          <div className="flex justify-between">
            <p className="font-semibold ">
              New User?{" "}
              <span className="text-blue-600 underline cursor-pointer">
                <Link to="/signup">signup</Link>
              </span>
            </p>
            <input
              type="submit"
              value="Login"
              className="bg-green-600 px-2 py-1 rounded-xl font-medium text-white cursor-pointer "
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
