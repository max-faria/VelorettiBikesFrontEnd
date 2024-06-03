import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/route";
import { useAppSelector } from "./App/hooks";
import { useEffect } from "react";

const App:React.FC = () => {
  const theme = useAppSelector(state => state.theme.theme)

  useEffect(() => {
    if(theme == 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })
  return (
    <div className="content-wrapper dark:bg-black dark:text-white">
    <RouterProvider router={router} />
  </div>
  )
}

export default App;
