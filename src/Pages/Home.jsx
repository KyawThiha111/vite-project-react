import React from "react";
import { Link, Outlet } from "react-router-dom";
const students = ["Kyaw Thiha","Jay","Jackson"]
export const Home = ()=>{
    return(
        <div>
            <p>This is the home page.</p>
            <h3>Below are the students</h3>
            <ul>
            {students.map((student,index)=>{
                return(
                    <li className="text-green-600" key={index}>
                        <Link to={`/students/${student}`}>{student}</Link>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}