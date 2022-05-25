import React, { useState } from "react";
import {Button} from 'reactstrap';

const Promo = () =>{
    let newTime = new Date().toLocaleTimeString();
    const [curtime, setCtime] = useState(newTime);

    const UpdateTime = () => {
        newTime = new Date().toLocaleTimeString();
        setCtime(newTime);
    }
    return(
        <div>
            <h1>{newTime}</h1>
            <Button onClick={UpdateTime}>Get Time</Button>
        </div>
    )
};
export default Promo;