import { Link, useRouteError } from "react-router-dom";
import PageNotFound from '../assets/2456051.jpg'

interface RouteError {
  statusText?: string;
  message?: string;
  status?: number;
}

export default function ErrorPage() {
  const error = useRouteError() as RouteError;
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex flex-col py-16 items-center bg-white h-screen gap-2"
    >
      <div className="flex flex-col items-center gap-1">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
      <div className="p-10">
        <img
        className="rounded-md" 
        src={PageNotFound} alt="" />
      </div>
      <div>
        <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
          <Link to={"/"}>Back Home</Link>
        </button>
      </div>
    </div>
  );
}
