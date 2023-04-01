import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from "react";


const inter = Inter({ subsets: ['latin'] })



function Home() {
  return (
    <>
      <div id="hometitle">
        <div id="logo"></div>
        <h1 id="freshmancaucus">Freshman Causus</h1>
      </div>
      <div id="upcoming">
        <div id="news1">News</div>
        <div id="news2">News</div>
        <div id="news3">News</div>
        <div id="mag1">Mag</div>
        <div id="mag2">Mag</div>
        <div id="mag3">Mag</div>
        <div id="mag4">Mag</div>
      </div>
    </>
  );
}

export default Home;
