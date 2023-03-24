import { Outlet } from "react-router-dom"
import { UserContextProvider } from "../../../providers/UserContext"
import { Banner } from "../banners/Banner"
import { Footer } from "../footer/Footer"
import { Header } from "../header/Header"


export const Layout:React.FC = () =>{
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}