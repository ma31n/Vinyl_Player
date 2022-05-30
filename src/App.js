import './App.css';
import Main from "./Components/Main.js";
import Rock from "./Components/Rock.js";
import Metal from "./Components/Metal.js";
import OST from "./Components/OST.js";
import Other from "./Components/Other.js";
import AlbumCovers from "./Images/AlbumCovers.js";
import BottomNav from './BottomNav';
import Info from "./Components/Info.js";

import { BrowserRouter, Routes, Route,} from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import {createContext, useState} from "react";

export const playingContext = createContext();
export const selectedContext = createContext();
function App() {

const[playing,setPlaying]=useState(false);
const[selected,setSelected]=useState(0);
const[albums,setAlbums]=useState(
  [{
    name: "Purple Rain",
    artist: "Prince",
    release: "1984",
    length: "43:51",
    songs: "8",
    genre: "rock",
    link: "https://www.youtube.com/watch?v=81jraQDTJJk&ab_channel=Prince",
    image: AlbumCovers.prain
  },
  {
    name: "Tango in the Night",
    artist: "Fleetwood Mac",
    release: "1987",
    length: "44:28",
    songs: "12",
    genre: "rock",
    link: "https://youtube.com/playlist?list=OLAK5uy_ltA3wQe8DfNCg5SYYAl9EEBAkuSAcWtyI",
    image: AlbumCovers.tango
  },
  {
    name: "Songs for the Deaf",
    artist: "Queens of the Stone Age",
    release: "2002",
    length: "60:53",
    songs: "14",
    genre: "rock",
    link: "https://www.youtube.com/watch?v=Gr15nyJx-Ro&ab_channel=GalGodonut",
    image: AlbumCovers.deaf 
  },
  {
    name: "Villains",
    artist: "Queens of the Stone Age",
    release: "2017",
    length: "48:00",
    songs: "9",
    genre: "rock",
    link: "https://youtube.com/playlist?list=OLAK5uy_krtPW3V5MWskO4YefDgZcILsxdoMeGddg",
    image: AlbumCovers.villains
  },
  {
    name: "Era Vulgaris",
    artist: "Queens of the Stone Age",
    release: "2007",
    length: "47:53",
    songs: "11",
    genre: "rock",
    link: "https://youtube.com/playlist?list=OLAK5uy_kCCDmao716AjlsYiNv-M_GaWCc9kWO3y4",
    image: AlbumCovers.erav
  },
  {
    name: "Eat to the Beat",
    artist: "Blondie",
    release: "1979",
    length: "43:50",
    songs: "12",
    genre: "rock",
    link: "https://youtube.com/playlist?list=OLAK5uy_kOkgiQfN1H91ukvupMERBHkTbHASoGZys",
    image: AlbumCovers.eat
  },
  {
    name: "Meddle",
    artist: "Pink Floyd",
    release: "1971",
    length: "46:48",
    songs: "6",
    genre: "rock",
    link: "https://youtube.com/playlist?list=OLAK5uy_nznfbOMyruTyQ1CAOO8AON_qXVbA4fAA8",
    image: AlbumCovers.meddle
  },
  {
    name: "Them Crooked Vultures",
    artist: "Them Crooked Vultures",
    release: "2009",
    length: "66:22",
    songs: "13",
    genre: "rock",
    link: "https://youtube.com/playlist?list=OLAK5uy_mcLrSTvpu2Ya2r7vTKczHuBPb7fu0sPDs",
    image: AlbumCovers.themcrook
  },
  {
    name: "Pheromones",
    artist: "Animal Alpha",
    release: "2005",
    length: "42:14",
    songs: "10",
    genre: "rock",
    link: "https://youtube.com/playlist?list=OLAK5uy_lfWCSKkVUpKHbRuK4tt9E7Xkc-RRRE6dI",
    image: AlbumCovers.phero    
  },
  {
    name: "Mutter",
    artist: "Rammstein",
    release: "2001",
    length: "65:02",
    songs: "11",
    genre: "metal",
    link: "https://youtube.com/playlist?list=OLAK5uy_mnm80TbaBCnI61LGvZgTGiXZQbJznNU4M",
    image: AlbumCovers.mutter
  },
  {
    name: "Paranoid",
    artist: "Black Sabbath",
    release: "1970",
    length: "41:51",
    songs: "8",
    genre: "metal",
    link: "https://www.youtube.com/watch?v=fWvKvOViM3g&ab_channel=BlackSabbath",
    image: AlbumCovers.paranoid    
  },
  {
    name: "Zeit",
    artist: "Rammstein",
    release: "2022",
    length: "44:06",
    songs: "11",
    genre: "metal",
    link: "https://youtube.com/playlist?list=OLAK5uy_kEcSS0IizYOnBcB1V0EpkFWVo87eAtFFw",
    image: AlbumCovers.zeit    
  },
  {
    name: "Psalm 69",
    artist: "Ministry",
    release: "1992",
    length: "44:41",
    songs: "9",
    genre: "metal",
    link: "https://youtube.com/playlist?list=OLAK5uy_nb_KMJMjN16HISanA91iw27zgXPBqNzFE",
    image: AlbumCovers.psalm 
  },
  {
    name: "Countdown to Extinction",
    artist: "Megadeth",
    release: "1992",
    length: "47:26",
    songs: "11",
    genre: "metal",
    link: "https://www.youtube.com/watch?v=TfqVf9LGFwI&ab_channel=Kerrrang",
    image: AlbumCovers.countdown 
  },
  {
    name: "Roots",
    artist: "Sepultura",
    release: "1996",
    length: "72:08",
    songs: "16",
    genre: "metal",
    link: "https://www.youtube.com/watch?v=NXvPBe9ynsc&ab_channel=RHINO",
    image: AlbumCovers.roots 
  },
  {
    name: "Journey",
    artist: "Austin Wintory",
    release: "2012",
    length: "58:02",
    songs: "18",
    genre: "OST",
    link: "https://www.youtube.com/watch?v=M3hFN8UrBPw&ab_channel=Selena",
    image: AlbumCovers.journey 
  },
  {
    name: "The Unfinished Swan",
    artist: "Joel Corelitz",
    release: "2012",
    length: "43:38",
    songs: "15",
    genre: "OST",
    link: "https://www.youtube.com/watch?v=0jsGkbK-kL4&t=1s&ab_channel=Jepedillo",
    image: AlbumCovers.unfinished 
  },
  {
    name: "Undertale",
    artist: "Toby Fox",
    release: "2015",
    length: "130:42",
    songs: "11",
    genre: "OST",
    link: "https://www.youtube.com/watch?v=TIokr8jJPkM&t=38s&ab_channel=Avsword",
    image: AlbumCovers.undertale 
  },
  {
    name: "Doom",
    artist: "Mick Gordon",
    release: "2016",
    length: "128:13",
    songs: "31",
    genre: "OST",
    link: "https://www.youtube.com/watch?v=Jm932Sqwf5E&ab_channel=BethesdaSoftworks",
    image: AlbumCovers.doom 
  },
  {
    name: "Celeste",
    artist: "Lena Raine",
    release: "2018",
    length: "101:03",
    songs: "21",
    genre: "OST",
    link: "https://www.youtube.com/watch?v=2JsYHpiH2xs&ab_channel=JackOkami",
    image: AlbumCovers.celeste 
  },
  {
    name: "Minecraft",
    artist: "C418",
    release: "2011",
    length: "126:53",
    songs: "28",
    genre: "OST",
    link: "https://www.youtube.com/watch?v=Dg0IjOzopYU&ab_channel=Luigi",
    image: AlbumCovers.minecraft 
  },
  {
    name: "Disintegration",
    artist: "The Cure",
    release: "1089",
    length: "71:45",
    songs: "12",
    genre: "other",
    link: "https://youtube.com/playlist?list=OLAK5uy_mYrnV4E8b8hT9U839ul4MYFp7Xaz7HhtA",
    image: AlbumCovers.disint 
  },
  {
    name: "Tunguzija",
    artist: "Svemirko",
    release: "2018",
    length: "30:32",
    songs: "9",
    genre: "other",
    link: "https://www.youtube.com/watch?v=NY6hBKdCaV4&ab_channel=vi%C5%A1emanjezauvijek",
    image: AlbumCovers.tung     
  },
  {
    name: "Tranquility Base Hotel & Casino",
    artist: "Arctic Monkeys",
    release: "2018",
    length: "40:51",
    songs: "11",
    genre: "other",
    link: "https://youtube.com/playlist?list=PLQcg8VywA0W1RkIupbcWPV8h8GVXBoZYl",
    image: AlbumCovers.tranq 
  },
  {
    name: "Portamento",
    artist: "The Drums",
    release: "2011",
    length: "45:17",
    songs: "12",
    genre: "other",
    link: "https://youtube.com/playlist?list=PL9WB5za-9N5czYgIQHqeEv0qyjiToEz57",
    image: AlbumCovers.portamento 
  },
  {
    name: "Kiss of Death",
    artist: "IC3PEAK",
    release: "2022",
    length: "30:19",
    songs: "12",
    genre: "other",
    link: "https://www.youtube.com/watch?v=Rq8etQoQY1M&t=1s&ab_channel=FR13NDS",
    image: AlbumCovers.kiss 
  },
  {
    name: "Low",
    artist: "David Bowie",
    release: "1977",
    length: "38:26",
    songs: "11",
    genre: "other",
    link: "https://www.youtube.com/watch?v=VomGFs_DaIk&t=3s&ab_channel=RickKanyon",
    image: AlbumCovers.low 
  },
  {
    name: "1999",
    artist: "Prince",
    release: "1982",
    length: "70:29",
    songs: "11",
    genre: "other",
    link: "https://www.youtube.com/watch?v=4BQx0p1nVzg&ab_channel=Prince",
    image: AlbumCovers.nineteen 
  }]
);


  return (
  <div className="App">
  <HashRouter basename="/">
    <playingContext.Provider value={[playing,setPlaying]}>
      <selectedContext.Provider value={[selected,setSelected]}>  
              <Routes>
                <Route exact path="/" element={<Main/>} />
                <Route path="/Rock" element={<Rock stateAlbums={albums}/>} />
                <Route path="/Metal" element={<Metal stateAlbums={albums}/>}/>
                <Route path="/OST" element={<OST stateAlbums={albums}/>}/>
                <Route path="/Other" element={<Other stateAlbums={albums}/>}/>
                <Route path="/Info" element={<Info/>}/>
              </Routes>
        <BottomNav stateAlbums={albums}></BottomNav>
      </selectedContext.Provider>
    </playingContext.Provider>
  </HashRouter>
  </div>
  );
}

export default App;
