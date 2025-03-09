
import { useState } from "react";
import React from "react";
import { useContext } from "react";
import { myContext } from "../App";
export const Developer =()=>{
  const {developer,handleSetDeveloperskills} = useContext(myContext)
  const [inputdata,setInputdata] = useState(undefined);
  const onChangeHandler = (e)=>{
      setInputdata(e.target.value)
  }
  const addSkillBtn = ()=>{
   handleSetDeveloperskills(inputdata)
  }
    return(
      <div>
       <button onClick={addSkillBtn}>Add skills</button>
       <input type="text" onChange={onChangeHandler}/>
       <p>{developer.name}</p>
       <p>{developer.age}</p>
       <p>{developer.skills.toString()}</p>
      </div>
    )
}



