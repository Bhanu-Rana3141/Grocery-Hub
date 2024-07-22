import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Categories from './Categories';

export default function Home() {
  return (
    <>
      <video src="Videos/HomePageVideo.mp4" width="100%" controls autoPlay loop muted></video>
      <Categories/>
    </>
  );
}
