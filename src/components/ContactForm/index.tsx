import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface InterfaceFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InterfaceFormInput>();

  const onSubmit: SubmitHandler<InterfaceFormInput> = async (data) => {
    setIsLoading(true);
    setIsSuccess(false);
    setErrorMessage(null);
    console.log(data);

    try {
      const response = await axios.post(
        "https://sls32yxqui.execute-api.us-east-1.amazonaws.com/Prod/api/contact",
        data
      );
      setIsSuccess(true);
      reset()
      console.log(response.data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error("There was a problem with the request", err);
        setErrorMessage(
          err.response?.data?.message ||
            "Error sending email. Please try again."
        );
      } else {
        setErrorMessage("Unexpected error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-5 my-10 sm:mx-auto max-h-screen sm:max-h-40 bg-white rounded-md sm:px-10 sm:shadow-none sm:basis-1/2 sm:my-20">
      <h2 className="text-2xl font-bold mb-4 my-10">Send us a message!</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Nome
          </label>
          <input
            id="Name"
            type="text"
            {...register("name", { required: "Name is required!" })}
            className={`mt-1 block w-full p-2 border bg-inherit  hover:border-1 hover:border-gray-700 focus:border-1 focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-500 ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded-md`}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required!",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
            })}
            className={`mt-1 block w-full p-2 border bg-inherit hover:border-1 hover:border-gray-700 focus:border-1 focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-500 ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md`}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700"
          >
            Subject
          </label>
          <input
            id="subject"
            type="text"
            {...register("subject", { required: "Subeject is Required!" })}
            className={`mt-1 block w-full p-2 border bg-inherit hover:border-1 hover:border-gray-700 focus:border-1 focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-500 ${
              errors.subject ? "border-red-500" : "border-gray-300"
            } rounded-md`}
          />
          {errors.subject && (
            <span className="text-red-500 text-sm">
              {errors.subject.message}
            </span>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            {...register("message", { required: "Message is required!" })}
            className={`mt-1 block w-full p-2 border bg-inherit hover:border-1 hover:border-gray-700 focus:border-1 focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-500 ${
              errors.message ? "border-red-500" : "border-gray-300"
            } rounded-md`}
            rows={4}
          />
          {errors.message && (
            <span className="text-red-500 text-sm">
              {errors.message.message}
            </span>
          )}
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isLoading}
            className={` text-white py-2 px-4 rounded-md transition duration-300 ${
              isLoading
                ? "bg-gray-400"
                : isSuccess
                ? "bg-green-500"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {isLoading ? (
              <>
              <FontAwesomeIcon icon={faSpinner} spin className="mr-2"/>
                Sending
              </>
            ) : isSuccess ? (
              "Message Send Successfully"
            ) : (
              "Send"
            )}
          </button>
        </div>
        {errorMessage && (
          <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
