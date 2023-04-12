import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from "react";


const inter = Inter({ subsets: ['latin'] })



function Home() {
  const [news1ontop, setnews1ontop] = useState(false);
  const [news2ontop, setnews2ontop] = useState(false);
  const [news3ontop, setnews3ontop] = useState(false);
  const [mag1ontop, setmag1ontop] = useState(false);
  const [mag2ontop, setmag2ontop] = useState(false);
  const handleClick = (id: string) => {
    switch(id) {
      case "news1":
        setmag2ontop(false);
        setmag1ontop(false);
        setnews1ontop(true);
        setnews2ontop(false);
        setnews3ontop(false);
        break;
      case "news2":
        setmag2ontop(false);
        setmag1ontop(false);
        setnews1ontop(false);
        setnews2ontop(true);
        setnews3ontop(false);
        break;
      case "news3":
        setmag2ontop(false);
        setmag1ontop(false);
        setnews1ontop(false);
        setnews2ontop(false);
        setnews3ontop(true);
        break;
      case "mag1":
        setmag2ontop(false);
        setmag1ontop(true);
        setnews1ontop(false);
        setnews2ontop(false);
        setnews3ontop(false);
        break;
      case "mag2":
        setmag2ontop(true);
        setmag1ontop(false);
        setnews1ontop(false);
        setnews2ontop(false);
        setnews3ontop(false);
        break;
      default:
        break;
    }
  }
  return (
    <>
      <div id="hometitle">
        <div id="logo"></div>
        <h1 id="freshmancaucus">Freshman Causus</h1>
      </div>
      <div id="upcoming">
        <div  id="news1" className={`${news1ontop ? 'on-top' : ''}`} onClick={() => handleClick('news1')}>News</div>
        <div id="news2" className={`${news2ontop ? 'on-top' : ''}`} onClick={() => handleClick('news2')}>News</div>
        <div id="news3" className={`${news3ontop ? 'on-top' : ''}`} onClick={() => handleClick('news3')}>News</div>
        <div id="mag1" className={`${mag1ontop ? 'on-top' : ''}`} onClick={() => handleClick('mag1')}>Mag</div>
        <div id="mag2" className={`${mag2ontop ? 'on-top' : ''}`} onClick={() => handleClick('mag2')}>Mag</div>
        <div id="mag3" >Mag</div>
        <div id="mag4">Mag</div>
      </div>
      <div id="event">
        <h1 id="event-title">Events</h1>
        <p>an event</p>
        <p>an event</p>
        <p>an event</p>
        <p>an event</p>
        <p>an event</p>
        <p>an event</p>
        <p>an event</p>
        <p>an event</p>
        <p>an event</p>
        <p>an event</p>
        <p>an event</p>
      </div>
      <div id="FaQ">
        <div id="linebreak"></div>
        <h2 id="FaQtitle">F A Q</h2>
        <div id="faqholder">
          <div id="faq1"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
