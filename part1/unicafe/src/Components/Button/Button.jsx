

const Button = ({type,feedback,setFeedback, setIsFeedback}) => {
    const handleClick =()=>{
        setIsFeedback(true);
        const newFeedback = feedback.map((ele)=>{
            if(ele.type === type){
                return {
                    ...ele,
                    number : ele.number + 1,
                }
            }else{
                return ele;
            }
        });
        setFeedback(newFeedback);
    }

    return ( 
        <button type="submit" onClick={handleClick}>{type}</button>
     );
}
 
export default Button;