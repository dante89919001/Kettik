import { Outlet } from "react-router-dom"
import { Banner } from "../banners/Banner"
import { Footer } from "../footer/Footer"
import { Header } from "../header/Header"


export const Main:React.FC = () =>{
    return(
        <>
        <Header/>
        <Banner/>
        <Outlet/>
        <Footer/>
        </>
    )
}