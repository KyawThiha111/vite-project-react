
const CurrentColor = ({color,ChangeBackGround})=>{
    const handleChangeBackGround = (colorChosen)=>{
        ChangeBackGround(colorChosen);
    }
    return(
       <div className="flex justify-center items-center gap-2">
         <p>Current Color:</p>
         <p onClick={()=>handleChangeBackGround(" bg-red-700")} className={`${color} inline-block w-5 h-5 rounded-4xl`}></p>
       </div>
    )
}

export default CurrentColor;