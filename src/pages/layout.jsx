import { Link, Outlet } from "react-router-dom";

export function Layout(){

    return (
        <>
        <div>
            <Link to="/page1">Page 1</Link>
            <Link to="/page2">Page 2</Link>
        </div>


        <div>
            <Outlet/>
        </div>
        </>
    )
}