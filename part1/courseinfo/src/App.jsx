import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Total from "./Components/Total/Total";

function App() {
  const [course, setCourse] = useState({
    name : 'Half Stack application development',
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  });


  return (
    <div className="app">
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts}  />
    </div>
  );
}

export default App;
