import axios from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface InterfaceRecoverPassword {
  email: string;
}

export const RecoverPassword: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>("");
  const [responseMessage, setResponseMessage] = useState<string | null>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InterfaceRecoverPassword>();

  const onSubmit: SubmitHandler<InterfaceRecoverPassword> = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/recover-password`,
        data
      );
      setResponseMessage(response.data);
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        console.error(err.response.data.message || "Recover password failed");
      } else {
        setErrorMessage("There was a problem with the request");
      }
    }
    reset();
  };
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="max-w-sm w-full bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Recover your password
        </h2>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2">
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
              {...register("email", { required: "Email is required" })}
              type="email"
              name="email"
            />
          </div>
          <div className="flex justify-center mb-2">
            {responseMessage && (
              <span className="text-green-500 text-sm">{responseMessage}</span>
            )}
            {errorMessage && (
              <span className="text-red-500 text-sm">{errorMessage}</span>
            )}
          </div>
          <div className="flex justify-end">
            <button
              className="bg-zinc-900 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-30"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecoverPassword;
