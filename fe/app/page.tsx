"use client"

import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import HomeBanner from './ui/home/HomeBanner';
import dynamic from 'next/dynamic'
import { useEffect } from 'react';



export default function Page() {

  // useEffect(() => {
  //   //add eventlistener to window
  //   window.addEventListener("scroll", onScroll, { passive: true });
  //   // remove event on unmount to prevent a memory leak with the cleanup
  //   return () => {
  //     window.removeEventListener("scroll", onScroll, { passive: true });
  //   }
  // }, []);

  // const onScroll = useCallback(event => {
  //   const { pageYOffset, scrollY } = window;
  //   console.log("yOffset", pageYOffset, "scrollY", scrollY);
  //   setScrollY(window.pageYOffset);
  // }, []);

  const Section1 = dynamic(() => import('./ui/home/section/Section1'), { ssr: false })


  return (
    <>
      <HomeBanner></HomeBanner>
      <Section1></Section1>
    </>
  );
}
