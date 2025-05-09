"use client"

import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import HomeBanner from './ui/home/HomeBanner';
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react';
import '@/app/ui/home/Home.scss';
import _ from 'lodash';
import LazyLoad from 'react-lazyload';
import Section1 from './ui/home/section/Section1';
import Section2 from './ui/home/section/Section2';
import Section3 from './ui/home/section/Section3';
import Section4 from './ui/home/section/Section4';
import Section5 from './ui/home/section/Section5';
export default function Page() {


  return (
    <>
      <HomeBanner></HomeBanner>


      <div className='home-section-container' >
        <LazyLoad offset={-200} >
          <Section1></Section1>
        </LazyLoad>
      </div>

      <div className='home-section-container section2'>
        <LazyLoad offset={-400} >
          <Section2></Section2>
        </LazyLoad>
      </div>

      <div className='home-section-container section3'>
        <LazyLoad offset={-300} >
          <Section3></Section3>
        </LazyLoad>
      </div>

      <div className='home-section-container section4'>
        <LazyLoad offset={-300} >
          <Section4></Section4>
        </LazyLoad>
      </div>

      <Section5></Section5>
    </>
  );
}
