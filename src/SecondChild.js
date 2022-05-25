import React from "react";
import { Form, FormGroup, Label, Col, Input, Button } from 'reactstrap';

export default function SecondChild(){
    return(
        <div className="form-group">
 <Form className="form">
  <FormGroup row className="top">
    <Label
      for="exampleText"
      sm={2}
    >
      Text Area
    </Label>
    <Col sm={10}>
      <Input
        id="exampleText"
        name="text"
        type="textarea"
      />
    </Col>
  </FormGroup>
 
  <FormGroup
    check
    row
  >
    <Col
      sm={{
        offset: 2,
        size: 10
      }}
    >
      <Button>
        Submit
      </Button>
    </Col>
  </FormGroup>
</Form>
        </div>
    )
    }