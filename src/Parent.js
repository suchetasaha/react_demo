import { Button } from "bootstrap";
import React from "react";
import Demo from './Demo';
import FirstChild from './FirstChild';
import SecondChild from './SecondChild';

 export default function Parent() {
    return (
      <div>
        <Demo/>
        <FirstChild/>
        <SecondChild/>
      </div>
    );
  }