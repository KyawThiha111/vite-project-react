import { useParams } from "react-router-dom"

export const StudentInfo = ()=>{
    const {name} = useParams()
    return (
        <div>
            <h2>Name: <span>{name}</span></h2>
        </div>
    )
}