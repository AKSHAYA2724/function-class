import React,{useState} from 'react'

function Aksh() {
  const[counts1,setCounts1]=useState(0);
  function myfunc()
  {
    setCounts1(counts1+1)
  }
  function myfunc1()
  {
    setCounts1(counts1-1)
  }
  const[counts2,setCounts2]=useState(0);
  function myfunc2()
  {
    setCounts2(counts2+1)
  }
  return (
    <>
    <button onClick={myfunc}>INCREASES</button><br></br>
    <span>{counts1}</span><br></br>
    <button onClick={myfunc1}>DECREASES</button><br></br><hr></hr>
    <button onMouseOver={myfunc2}>OVER</button><br></br>
    
    <span>{counts2}</span><br></br>
    
    
    </>
  )
}

export default Aksh