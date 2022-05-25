import React, { useState } from "react";
import { Card, CardImg, CardBody, CardTitle,CardText, Button } from 'reactstrap';
import CurrentDate from './CurrentDate'

export default function FirstChild(){
  const[data, setData]=useState(0)
   function update(){
     alert("hello")
   }
   function updata(){
    setData(data+1)
   }
    return(
        <div>
  <Card className="card-box">
    <CardImg
      alt="Card image cap"
      src="https://picsum.photos/256/186"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5" className="title">
        Card title
      </CardTitle>
      <CardText className="text">
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </CardText>
      <CardText className="text">
        {data}
      </CardText>
      <CurrentDate/>
      <Button onClick={update} className="date">
       Click on
      </Button>
      <Button onClick={updata} className="update">
        Update
      </Button>
     
    </CardBody>
  </Card>
        </div>
    )
}