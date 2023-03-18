import { useEffect, useState } from "react";


const Total = ({parts}) => {
    const [courseTotal, setCourseTotal] = useState(0);
    let total = 0;
    parts.forEach((part)=>{
        total += part.exercises;
    })
    useEffect(()=>{
        setCourseTotal(total);
    },[])
    return ( 
        <div className="total">
            <p>Total course work: {courseTotal} </p>
        </div>
     );
}
 
export default Total;