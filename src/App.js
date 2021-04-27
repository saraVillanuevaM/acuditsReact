

import { useState } from "react";
import styled from "styled-components"; 
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


//logica funcion



const App = () => {
const [joke, setJoke] = useState(null);

 
function nextjoke(){ 
    fetch('https://icanhazdadjoke.com/slack') 
    .then(res => res.json()) 
    .then(res => setJoke(res.attachments[0].text)); 
 }
    
  return ( 
  <Container>

  <div>
    <Row>
           <Col><h1> An joke a day keeps the doctor away</h1></Col>
    </Row>
          <Col>  <Button  onClick = {nextjoke}>Next Joke</Button> </Col>
         

    <Row>
           <Col>   {joke}    </Col>
    </Row>

        </div>
        </Container>


)
}


export default App;



        