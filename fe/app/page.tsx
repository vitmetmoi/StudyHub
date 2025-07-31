"use client"
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
import ScrollBannner from '@/app/lib/ScrollBanner';
import Section6 from './ui/home/section/Section6';
import Section7 from './ui/home/section/Section7';
import Section8 from './ui/home/section/Section8';
import Section9 from './ui/home/section/Section9';
import Footer from './ui/home/Footer';

export default function Page() {


  return (
    <>
      <HomeBanner></HomeBanner>


      <div className='home-section-container section1' >
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

      <ScrollBannner />

      <div className='home-section-container section4'>
        <LazyLoad offset={-300} >
          <Section4></Section4>
        </LazyLoad>
      </div>

      <div className='home-section-container section5'>
        <LazyLoad offset={-300} >
          <Section5></Section5>
        </LazyLoad>
      </div>

      <div className='home-section-container section5'>
        <LazyLoad offset={-300} >
          <Section6 />
        </LazyLoad>
      </div>


      <div className='home-section-container section5'>
        <LazyLoad offset={-300} >
          <Section7 />
        </LazyLoad>
      </div>

      <div className='home-section-container section5'>
        <LazyLoad offset={-300} >
          <Section8 />
        </LazyLoad>
      </div>


      <div className='home-section-container section9'>
        <LazyLoad offset={-300} >
          <Section9 />
        </LazyLoad>
      </div>

      <Footer></Footer>

    </>
  );
}
