import { SubmitHandler, useForm } from "react-hook-form";
import ContactUsImg from "../assets/contactus.png";
import axios from "axios";
interface InterfaceFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}
const ContactUs: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InterfaceFormInput>();

  const onSubmit: SubmitHandler<InterfaceFormInput> = async (data) => {
    console.log(data);

    try {
      const response = await axios.post("http://localhost:5287/api/contact", data)
      console.log(response.data)

    } catch (err) {
      console.error("There was a problem with the request", err)
    }
  };

  return (
    <div className="antialiased">
      <div className="flex flex-col sm:flex-row w-full sm:justify-center">
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
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
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
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
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
                className="w-1/3 bg-gray-700 text-white py-2 rounded-md hover:bg-gray-600 transition duration-300"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="hidden sm:basis-1/2 sm:flex sm:justify-center sm:my-20">
          <img className="ali" src={ContactUsImg} alt="Man smiling in a bike" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
