import {useState, useContext, useEffect, useRef} from "react";
import {playingContext,selectedContext} from "./App.js";
import ReactPlayer from 'react-player';

import {Nav, Form, Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

function BottomNav(props){
    const[playing,setPlaying]=useContext(playingContext);
    const[selected,setSelected]=useContext(selectedContext);

    const[rerender,setRerender]=useState(0);
    const[volumeChange, setVolumeChange]=useState(1);
    const rendertracker = useRef(0);
    const iconchanger = useRef(faPlay);
    const volumetracker = useRef(0);

    let albumlink=props.stateAlbums[selected].link;
    let currentplay = "Nothing";

    for(let i=0; i<props.stateAlbums.length; i++){
        if(props.stateAlbums[i].link==albumlink){

            currentplay=props.stateAlbums[i].name;
        }
    }

    let templink="https://www.youtube.com/watch?v=g4mHPeMGTJM&ab_channel=Trollmann";
    
    function restart(){
        if(rendertracker.current==0){
            rendertracker.current=1;
            setRerender(prev=>prev+1);
        }
        else{
            rendertracker.current=0;
        }
    }

    function VolumeSet(){
        let temp = document.getElementById("volume").value;
        setVolumeChange(temp);
        volumetracker.current=1;
    }

    
    if(albumlink.includes("/playlist") && (rendertracker.current==0 || (rendertracker.current==2 && playing==true)) && volumetracker.current!=1){
        albumlink=templink;
    }

    if(volumetracker.current==1){volumetracker.current=0}
    
    document.onkeydown = function(e){
        if(e.key==32 || e.key==' ' || e.key=="space"){playpause();}
    }
    
    function playpause(){
        if(playing==false){setPlaying(true); rendertracker.current=3; iconchanger.current=faPause}else{setPlaying(false); rendertracker.current=2; iconchanger.current=faPlay};
    }
    
    if(playing==true && iconchanger.current==faPlay){iconchanger.current=faPause}
    
    return(
        <Nav className='bottomnav justify-content-center'>
            <Nav.Item style={{width: "33%"}}>
                <h3>Playing: {currentplay}</h3>
            </Nav.Item>
            
            <Nav.Item style={{width: "33%",textAlign: "center"}}>
                <FontAwesomeIcon icon={iconchanger.current} className="arrows" onClick={playpause} style={{color: "white"}}></FontAwesomeIcon>
            </Nav.Item>

            <Nav.Item style={{width: "33%"}}>
                <Container className="container-fluid" style={{textAlign: "right"}}>
                    <h5>Volume</h5>
                    <Form.Range id="volume" min={0} max={1} step={0.1} onChange={VolumeSet}/>
                </Container>
            </Nav.Item>
            <ReactPlayer url={albumlink} volume={volumeChange} playing={playing} className="player" onPlay={restart}></ReactPlayer>
        </Nav>
    )
}

export default BottomNav;