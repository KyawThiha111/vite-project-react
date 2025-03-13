import { Link, NavLink } from "react-router-dom"

export const Navbar = ()=>{
    return(
        <nav className=" w-[20%] py-3">
            <ul className="flex justify-around">
                <li>
                    <NavLink className={({isActive})=>isActive&&"text-blue-500"} to="/">Home Page</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=>isActive&&"text-blue-500"} to="/postpage">Post Page</NavLink>
                </li>
            </ul>
        </nav>
    )
}