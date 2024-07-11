import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

interface InterfaceSingupInput {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

const Singup: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<InterfaceSingupInput>();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [errorMessage, setErrorMessage] = useState<string | null>("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const password = watch("password");
  //   const validatePassword = (value: string) => {
  //     const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  //     return regex.test(value) || "Password must have at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character";
  //   }

  const onSubmit: SubmitHandler<InterfaceSingupInput> = async (data) => {
    setIsLoading(true);
    setIsSuccess(false);
    setErrorMessage(null);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...submissionData } = data;
    console.log(submissionData);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/signup`,
        submissionData,
        {
          withCredentials: true,
        }
      );
      setIsSuccess(true);
      console.log(response.data);
      reset();
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setErrorMessage(error.response.data.message || "Sign-up Failed");
        console.log(error.response.data.message);
      } else {
        setErrorMessage("There was a problem with the request");
      }
      // console.error("There was a problem with the request teste", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center h-screen px-8">
        <div className="max-w-sm w-full bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Sign up
          </h2>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-white focus:outline-none focus:shadow-outline hover:border-zinc-500 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                {...register("name", { required: "Name is required" })}
                type="text"
                name="name"
              />
              {errors.name && (
                <span className="text-red-500 text-xs italic">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-white focus:outline-none focus:shadow-outline hover:border-zinc-500 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500
                ${errors.email ? "border-red-500" : "border-gray-300"}`}
                {...register("email", { required: "Email is required" })}
                type="email"
                name="email"
                id="email"
              />
              {errors.email && (
                <span className="text-red-500 text-xs italic">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor=""
              >
                Password
              </label>
              <input
                className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-white focus:outline-none focus:shadow-outline hover:border-zinc-500 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters",
                    // validate: validadePassword,
                  },
                })}
                type="password"
                name="password"
                id="password"
              />
              {errors.password && (
                <p className="text-red-500 text-xs italic">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="mb-8">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor=""
              >
                Confirm your password
              </label>
              <input
                className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-white focus:outline-none focus:shadow-outline hover:border-zinc-500 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                }`}
                {...register("confirmPassword", {
                  required: "You must confirm your password",
                  validate: (value) =>
                    value === password || "The passwords must match",
                })}
                type="password"
              />
              {errors.confirmPassword && (
                <span className="text-red-500 text-xs italic">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>
            <div className="flex items-center justify-center mb-2">
              {isLoading ? (
                <>
                  <FontAwesomeIcon icon={faSpinner} spin className="mr-2" />
                  Sending
                </>
              ) : isSuccess ? (
                <h2>Success</h2>
              ) : (
                <button
                  className="bg-zinc-900 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                  type="submit"
                >
                  Sign up
                </button>
              )}
            </div>
            {errorMessage && (
              <span>
                <p className="text-red-500 text-sm">{errorMessage}</p>
              </span>
            )}
          </form>
          <div>
            <p className="text-sm text-center">
              Already have an account?{"  "}
              <Link
                to="/login"
                className="font-bold text-sm text-blue-500 hover:text-blue-800"
              >
                Log in
              </Link>
              
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Singup;
