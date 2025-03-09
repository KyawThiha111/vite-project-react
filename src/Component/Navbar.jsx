import { Link } from "react-router-dom"

export const Navbar = ()=>{
    return(
        <nav>
            <ul>
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