import { Link } from "react-router-dom"

export const Navbar = ()=>{
    return(
        <nav className=" w-[20%] py-3">
            <ul className="flex justify-around">
                <li>
                    <Link to="/">Home Page</Link>
                </li>
                <li>
                    <Link to="/postpage">Post Page</Link>
                </li>
            </ul>
        </nav>
    )
}