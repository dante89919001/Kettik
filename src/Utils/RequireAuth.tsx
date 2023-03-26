import { Navigate, useLocation } from "react-router-dom"
import { useUserContext } from "../providers/UserContext";

type Props = {
    children:any;
}

export const RequireAuth:React.FC<Props> =({children}) =>{
    const { username } = useUserContext();
    const location = useLocation();
    console.log(username);

    if(!username) {
        return <Navigate to={'/auth'} state={{from:location}} />
    }

    return children;
}