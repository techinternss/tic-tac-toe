import { useState } from "react";

function Counter(){

    const [count,setCount]=useState(0)
    return(
        <div>
            <h1>Our count value is {count}</h1>

            <button class="btn" onClick={()=> count<10?setCount(count+1):""}>Increment</button>
            <button class="btn" onClick={()=>setCount(0)}>Reset</button>
            <button class="btn" onClick={()=> count>0?setCount(count-1):""}>Decrement</button>

        </div>
    )
}

export default Counter;