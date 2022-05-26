
import React from "react";
import Demo from './Demo';
import FirstChild from './FirstChild';
import SecondChild from './SecondChild';
import {Button} from 'reactstrap';
import { useState } from 'react';

export default function Parent() {
  const [data, setData] = useState('Michale Jackson');
  
  const parentToChild = () => {
    setData("Sucheta Saha");
  }

    return (
      <div>
         <Demo parentToChild={data}/>
      
      <div>
        <Button onClick={() => parentToChild()}>Click Parent</Button>
      </div>
        <FirstChild/>
        <SecondChild/>
      </div>
    );
  }