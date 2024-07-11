import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import CardPopup from "./CartPopuP"

const DefaultLayout = () => {
    return(
        <>
            <Header/>
            <main>
                <Outlet/>
                <CardPopup/>
            </main>
            <Footer/>
        </>
    )
}

export default DefaultLayout