import { useState } from "react";
import Part from "../Part/Part";


const Content = ({parts}) => {

    return ( 
        <div className="content">
            {
                parts.map((part)=>(
                    <Part name={part.name} no={part.exercises} key={part.exercises} />
                ))
            }
        </div>
     );
}
 
export default Content;