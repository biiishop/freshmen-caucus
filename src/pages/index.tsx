import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from "react";


const inter = Inter({ subsets: ['latin'] })


function Home() {
  const [news1ontop, setnews1ontop] = useState(false);
  const [news2ontop, setnews2ontop] = useState(false);
  const [news3ontop, setnews3ontop] = useState(false);
  const [mag1ontop, setmag1ontop] = useState(false);
  const [mag2ontop, setmag2ontop] = useState(false);
  const [faq1, setfaq1] = useState(1)
  const [faq2, setfaq2] = useState(2)
  const [faq3, setfaq3] = useState(3)
  const [faq4, setfaq4] = useState(3)
  const [faq5, setfaq5] = useState(3)
  const [faq6, setfaq6] = useState(3)
  const [faq7, setfaq7] = useState(3)
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

  function switchstack1(j) {
    switch (j) {
      case 'faq4':
        setfaq4(2);
        break;
      case 'faq5':
        setfaq5(1);
        break;
      case 'faq6':
        setfaq6(2);
        break;
      case 'faq7':
        setfaq7(1);
        break;
      default:
        break;
    }
  }

  function switchstack2(j) {
    switch (j) {
      case 'faq4':
        setfaq4(3);
        break;
      case 'faq5':
        setfaq5(3);
        break;
      case 'faq6':
        setfaq6(3);
        break;
      case 'faq7':
        setfaq7(3);
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
          <div className={`${faq1==1 ? 'stack1' : faq1==2 ? 'stack2' : faq1==3 ? 'stack3' : ''} faq faq1`}>faq1</div>
          <div className={`${faq2==1 ? 'stack1' : faq2==2 ? 'stack2' : faq2==3 ? 'stack3' : ''} faq faq2`}>faq2</div>
          <div className={`${faq3==1 ? 'stack1' : faq3==2 ? 'stack2' : faq3==3 ? 'stack3' : ''} faq faq3`} >faq3</div>
          <div className={`${faq4==1 ? 'stack1' : faq4==2 ? 'stack2' : faq4==3 ? 'stack3' : ''} faq faq4`} onClick={faq4==3 ? () => {switchstack1('faq4')} : () => {switchstack2("faq4")}}>faq4</div>
          <div className={`${faq5==1 ? 'stack1' : faq5==2 ? 'stack2' : faq5==3 ? 'stack3' : ''} faq faq5`} onClick={faq5==3 ? () => {switchstack1('faq5')} : () => {switchstack2("faq5")}}>faq5</div>
          <div className={`${faq6==1 ? 'stack1' : faq6==2 ? 'stack2' : faq6==3 ? 'stack3' : ''} faq faq6`} onClick={faq6==3 ? () => {switchstack1('faq6')} : () => {switchstack2("faq6")}}>faq6</div>
          <div className={`${faq7==1 ? 'stack1' : faq7==2 ? 'stack2' : faq7==3 ? 'stack3' : ''} faq faq7`} onClick={faq7==3 ? () => {switchstack1('faq7')} : () => {switchstack2("faq7")}}>faq7</div>
        </div>
      </div>
    </>
  );
}

export default Home;
