import "./style.css";
import { motion } from "framer-motion";
import { useState } from "react";
import CountryDetail from "../CountryDetail.jsx/CountryDetail";


const innerVariants ={
  initial: {
    height: 0,
    opacity: 0,
  },
  final: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.75,
    },
  },
}

const Country = ({ country }) => {
  const [click, setClick] = useState(false);
  const handleClick =()=>{
    setClick(!click);
  }
  return (
    <div className="country">
      <div className="flex">
        <p>{country.name.common}</p>
        <button onClick={handleClick}>{click ? "hide" : "show"}</button>
      </div>
      <motion.div className="inner-country"
      variants={innerVariants}
      initial = "initial"
      animate = {click ? "final" : ""}
      exit = "exit"
      >
        <CountryDetail country={country} />
        </motion.div>
    </div>
  );
};

export default Country;
