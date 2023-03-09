import { Outlet } from "react-router-dom"
import { Banner } from "../banners/Banner"
import { Header } from "../header/Header"


export const Main:React.FC = () =>{
    return(
        <>
        <Header/>
        <Outlet/>
        {/* Footer */}
        </>
    )
}