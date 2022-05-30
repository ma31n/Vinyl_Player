import {Container,Row,Col,Image, Navbar,Popover, OverlayTrigger} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import {playingContext,selectedContext} from "../App.js";

import {useContext, useState} from "react";


function Rock(props) {

        const[playing,setPlaying]=useContext(playingContext);
        const[selected,setSelected]=useContext(selectedContext);
        const[hovering, setHovering]=useState(0);
        
        function clicke(e){
          setSelected(e.target.getAttribute("data-index"));
          setPlaying(true);
        }

        function hovere(e){
          setHovering(e.target.getAttribute("data-index"));
        }

      let albumrow = 0;
      let clickorder = -1;

      const popover = (
        <Popover id="popover-basic">
          <Popover.Body>
            Songs: {props.stateAlbums[hovering].songs}<br/>
            Length: {props.stateAlbums[hovering].length}
          </Popover.Body>
        </Popover>
      );

      return (
        <div className="Rock">

            <Navbar className="navbar-rock">
            <Container>
                <Navbar.Text><Link to="/"><FontAwesomeIcon icon={faAngleLeft} className="arrows"/></Link></Navbar.Text>
                <Navbar.Text className="headtext" style={{color: "black"}}>ROCK</Navbar.Text>
                <Navbar.Text className="justify-content-end"><Link to="/Metal"><FontAwesomeIcon icon={faAngleRight} className="arrows"/></Link></Navbar.Text>
            </Container>
            </Navbar>

            <Container className="container-fluid albumcontainer">
              <Row>
              {props.stateAlbums.map((album)=>{
                if(album.genre=="rock" && albumrow<5){
                  albumrow++;
                  clickorder++;
                  
                  return (
                    <Col className="albumcontainers">
                      <OverlayTrigger trigger={"hover"} placement="bottom" overlay={popover}>
                      <Image src={album.image} className="img-fluid albumcovers" data-index={clickorder} onClick={clicke} onMouseEnter={hovere}></Image>
                      </OverlayTrigger>
                      <div className="desc">
                        <h3>{album.name}</h3>
                        <h5>{album.artist}</h5>
                      </div>
                    </Col>
                  )
                }
              })} 
              </Row>
              <br/><br/>
              <Row>
              {props.stateAlbums.map((album)=>{
                  albumrow++;
                  if(album.genre=="rock" && albumrow>10){
                    clickorder++;
                    
                    return (
                      <Col className="albumcontainers">
                        <OverlayTrigger trigger={"hover"} placement="bottom" overlay={popover}>
                        <Image src={album.image} className="img-fluid albumcovers" data-index={clickorder} onClick={clicke} onMouseEnter={hovere}></Image>
                        </OverlayTrigger>
                        <div className="desc">
                          <h3>{album.name}</h3>
                          <h5>{album.artist}</h5>
                        </div>
                      </Col>
                    )
                  }
               })}  
              </Row>
            </Container>
        </div>
      );
    }
    
    export default Rock;