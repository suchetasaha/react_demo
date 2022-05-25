import React, { useState } from 'react';
import {Button} from 'reactstrap';

function CurrentDate(){
  const date = null;
  const [cudate,setDate] = useState(date); 
  const handelDate = () =>{
    let date = new Date().toLocaleDateString();
    setDate(date);
  }

  return(
    <>
      <h4 className='cudate'>{cudate}</h4>
      <Button onClick={handelDate} className="current">Current date</Button>
    </>
  )
}
export default CurrentDate;