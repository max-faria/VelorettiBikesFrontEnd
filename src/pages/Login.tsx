import axios from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface InterfaceLoginInput {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InterfaceLoginInput>();
  const [errorMessage, setErrorMessage] = useState<string | null>("");

  const onSubmit: SubmitHandler<InterfaceLoginInput> = async (data) => {
    console.log(data);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}`,
        data
      );
      console.log(response.data);
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        setErrorMessage(err.response.data.message || "Login Failed");
      } else {
        setErrorMessage("There was a problem with the request");
      }
      console.error("There was a problem with the request", err);
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="max-w-sm w-full bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-white focus:outline-none focus:shadow-outline hover:border-zinc-500 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
              })}
            />
             {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className={`bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-1 focus:outline-none focus:shadow-outline hover:border-zinc-500 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              type="password"
              id="password"
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>
          {errorMessage && (
            <div className="mb-4 text-red-500 text-sm">{errorMessage}</div>
          )}
          <div className="flex items-center justify-center mb-2">
            <button
              className="bg-zinc-900 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Login
            </button>
          </div>
          <div className="flex flex-col items-center">
            <a
              className=" font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
            <p className="text-sm">
              Not have an account?{" "}
              <a
                href="/singup"
                className="font-bold text-sm text-blue-500 hover:text-blue-800"
              >
                Sign in
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
