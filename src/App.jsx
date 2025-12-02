import React , {useState , useEffect} from 'react';
import Hi from './Hi';
import Timer from './Timer';


const App = ()=>{
  const [title , setTitle] = useState("باید کلیک شود");
  const [isLight , setIslight] = useState(false);
  const [timeArr , setTimeArr] = useState(["00 : 05 : 32"]);

  useEffect(()=>{
    console.log("useEffect")
  },[isLight])

  const handleSetIslight = () =>{
    setIslight(!isLight)
  }

  return(
    <div className={isLight ? "light" : "dark"}>
    <Hi  title={title} />
    <Timer 
    timeArr = {timeArr}
    setTimeArr = {setTimeArr}
    isLight= {isLight} 
    handleSetIslight={handleSetIslight}
    />
  </div>
  )
}


export default App;
