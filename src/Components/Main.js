import {Container,Row,Col,Image, Form} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";


import mainbutton from "../Images/mainbutton2.png";
import speaker from "../Images/speaker2.png";


function Main(props) {

    const[user,setUser]=useState("")
    if(user!=""){document.getElementById("name").innerHTML="Hi, "+user;}

    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser(document.getElementById("input").value);
    }

      return (
        <div className="Main">
            <Container className="container-fluid maincontainer">
                <Row>
                    <Col>
                        <h5 style={{textAlign: "left"}}>2022 - All Rights Reserved</h5>
                    </Col>

                    <Col>
                        <Link to="/Info" style={{textAlign: "right"}}><h3>About</h3></Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>VINYL COLLECTOR & PLAYER</h1>
                    </Col>
                </Row>

                <Row className="maincontent">  
                    <Col>
                        <Link to="/Rock"><Image src={mainbutton} className="img-fluid mainbutton"></Image></Link>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Image src={speaker} className="img-fluid speakers ripple"></Image>
                    </Col>

                    <Col>
                        <Form style={{padding:"70px"}} onSubmit={handleSubmit}>
                            <h5>Write your name!</h5><br/>
                            <input type="text" id="input"></input>
                            <input type="submit"></input>
                        </Form>
                        <h5 id="name"></h5>
                    </Col>

                    <Col>
                        <Image src={speaker} className="img-fluid speakers ripple"></Image>
                    </Col>
                </Row>

            </Container>
        </div>
      );
    }
    
    export default Main;