import React from "react";
import {Container,Row,Col,Image, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";

class Info extends React.Component {
    render() {
      return(
        <Container className="container-fluid"> 
            <Row>
                <Col>
                    <h1>Made by: Marin Boban g3p</h1>
                </Col>
                <Col>
                </Col>
                <Col>
                    <Link to="/"><h1>Back to main page</h1></Link>
                </Col>
            </Row>

            <Row>
                <Col>
                    <h1>2022</h1>
                </Col>
            </Row>

            <Row>
                <Col>
                    <h1>Theme: Album saver</h1>
                </Col>
            </Row>

        </Container> 
      );
    }
  }
   
  export default Info;