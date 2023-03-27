import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from "react";


const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  var prezdescription: string = "";

  const [vannaOnTop, setVannaOnTop] = useState(false);
  const [caylaOnTop, setCaylaOnTop] = useState(false);

  const handleClick = (id: string) => {
    if (id === 'vanna') {
      setVannaOnTop(true);
      setCaylaOnTop(false);
    } else if (id === 'cayla') {
      setCaylaOnTop(true);
      setVannaOnTop(false);
    }
  };
  
  return (
    <>
      <div id="freshmancaucus">
        <h3 id="classof">'2026</h3>
        <h1>Freshman Caucus</h1>
      </div>
      <div id="logo">
        <p>logo</p>
      </div>
      <h1 id="meetthepresidents">Meet the Presidents</h1>
      <div id="presidents">
        <div
          className={`box ${vannaOnTop ? 'on-top' : ''}`}
          id="vanna"
          onClick={() => handleClick('vanna')}
        >Vanna picture</div>
        <div
          className={`box ${caylaOnTop ? 'on-top' : ''}`}
          id="cayla"
          onClick={() => handleClick('cayla')}
        >Cayla picture</div> 
        <div id="presidentdescription">
          {vannaOnTop ? (
              <div id="vanadescription">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget purus eu orci condimentum molestie. Duis maximus lacinia nibh, nec placerat quam laoreet sit amet. Pellentesque nec tincidunt nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus tempus malesuada scelerisque. Curabitur varius lectus mauris, vel ornare mi molestie eu. Aenean vel felis porttitor, fermentum ipsum nec, tristique urna. Nam vehicula arcu mi, in ullamcorper eros sodales at. Vivamus dignissim elementum nulla, vel fringilla dui dignissim sit amet. Proin non sem lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In eget lorem leo. Praesent ultrices condimentum ligula mattis feugiat. Curabitur quam eros, commodo sodales tincidunt in, cursus ut purus. Curabitur scelerisque nulla eget urna pulvinar sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec massa lectus, tristique eu lectus id, ullamcorper volutpat mi. Ut ligula turpis, posuere sed nulla eu, mollis tincidunt felis. Nulla mattis mi nisi, eu posuere nibh luctus non. Vivamus eget ex at ligula molestie scelerisque. Mauris et risus vitae ipsum egestas viverra. Nam fermentum convallis ex, eu malesuada lorem venenatis sed. Donec blandit lorem non fermentum sagittis. Mauris libero nulla, commodo efficitur nibh in, gravida dapibus massa. Sed ut ante augue. Sed vehicula vestibulum risus sed consequat.</p>
              </div>
            ) : caylaOnTop ? (
              <div id="cayladescription">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget purus eu orci condimentum molestie. Duis maximus lacinia nibh, nec placerat quam laoreet sit amet. Pellentesque nec tincidunt nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus tempus malesuada scelerisque. Curabitur varius lectus mauris, vel ornare mi molestie eu. Aenean vel felis porttitor, fermentum ipsum nec, tristique urna. Nam vehicula arcu mi, in ullamcorper eros sodales at. Vivamus dignissim elementum nulla, vel fringilla dui dignissim sit amet. Proin non sem lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In eget lorem leo. Praesent ultrices condimentum ligula mattis feugiat. Curabitur quam eros, commodo sodales tincidunt in, cursus ut purus. Curabitur scelerisque nulla eget urna pulvinar sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec massa lectus, tristique eu lectus id, ullamcorper volutpat mi. Ut ligula turpis, posuere sed nulla eu, mollis tincidunt felis. Nulla mattis mi nisi, eu posuere nibh luctus non. Vivamus eget ex at ligula molestie scelerisque. Mauris et risus vitae ipsum egestas viverra. Nam fermentum convallis ex, eu malesuada lorem venenatis sed. Donec blandit lorem non fermentum sagittis. Mauris libero nulla, commodo efficitur nibh in, gravida dapibus massa. Sed ut ante augue. Sed vehicula vestibulum risus sed consequat.</p>
              </div>
            ) : null}
        </div>
      </div>
      <div id ="transitiondiv"></div>
      <div id="FaQ">
        <h2 id="FaQh2">FaQ</h2>
      </div>
    </>
  )
}
