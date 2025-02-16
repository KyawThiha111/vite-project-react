
import { useState } from "react";
function Counter(props){
 const {number,setNumber} = props;
 const [clicks,setClicks]= useState(0);
 const [contestantGirdColumnStart,setContestantGirdColumnStart] = useState(1);
 const [contestantGirdColumnEnd,setContestantGirdColumnEnd] = useState(2);
 const [contestantGirdRowStart,setContestantGirdRowStart] = useState(1);
 const [contestantGirdRowEnd,setContestantGirdRowEnd] = useState(2);

 const [reachGoals, setReachGoal] = useState(false);
 const moveFunction =()=>{
    if(contestantGirdRowStart===3&&contestantGirdRowEnd===4&&contestantGirdColumnStart===2&&contestantGirdColumnEnd===3){
        setReachGoal(!reachGoals);
    }
    if(contestantGirdColumnEnd===4){
        setContestantGirdRowStart(contestantGirdRowStart+1);
        setContestantGirdRowEnd(contestantGirdRowEnd+1)
        setContestantGirdColumnStart(1);
        setContestantGirdColumnEnd(2);
        return
    }
    setContestantGirdColumnStart(contestantGirdColumnStart+1);
    setContestantGirdColumnEnd(contestantGirdColumnEnd+1);
 }

    return(
        <div className="relative">
            <button onClick={()=>moveFunction()} className="bg-blue-700 w-20 h-10 absolute right-0 translate-y-[-30px]">Move</button>
            <div className='grid grid-cols-3 grid-rows-5 bg-pink-500'>
            <p className="h-[100px] w-[100px] bg-red-500" style={
                     {
                        gridRowStart: contestantGirdRowStart,
                        gridRowEnd:contestantGirdRowEnd,
                        gridColumnStart: contestantGirdColumnStart,
                        gridColumnEnd:contestantGirdColumnEnd
                    }
            }>Kyaw Thiha</p>
            {
                reachGoals?(
                    <p className="bg-amber-500 text-white text-2xl col-start-2 col-end-3 row-start-3 row-end-4">Finally!</p>
                )
                :(
                    <p className="bg-amber-400 col-start-2 col-end-3 row-start-3 row-end-4">Success</p>
                )
            }
        </div>
        </div>
    )
}

 export default Counter; 
