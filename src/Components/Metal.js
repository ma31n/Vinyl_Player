import {Container,Row,Col,Image, Navbar, Popover, OverlayTrigger} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import {playingContext,selectedContext} from "../App.js";

import {useContext, useState} from "react";

function Metal(props) {

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
        
        let numofalbums=0;
        for(let i=0; i<props.stateAlbums.length; i++){
            if(props.stateAlbums[i].genre=="metal"){
                numofalbums++;
            }
        }


        let albumrow = 0;
        let clickorder = 9-1;

        const popover = (
          <Popover id="popover-basic">
            <Popover.Body>
              Songs: {props.stateAlbums[hovering].songs}<br/>
              Length: {props.stateAlbums[hovering].length}
            </Popover.Body>
          </Popover>
        );
      return (
        <div className="Metal">

            <Navbar className="navbar-metal">
            <Container>
                <Navbar.Text><Link to="/Rock"><FontAwesomeIcon icon={faAngleLeft} className="arrows"/></Link></Navbar.Text>
                <Navbar.Text className="headtext" style={{color: "black"}}>METAL</Navbar.Text>
                <Navbar.Text className="justify-content-end"><Link to="/OST"><FontAwesomeIcon icon={faAngleRight} className="arrows"/></Link></Navbar.Text>
            </Container>
            </Navbar>

            <Container className="container-fluid">
              <Row>
              {props.stateAlbums.map((album)=>{
                if(album.genre=="metal" && albumrow<(numofalbums/2)){
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
                  if(album.genre=="metal"){albumrow++;}
                  if(album.genre=="metal" && albumrow>numofalbums){
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
    
    export default Metal;