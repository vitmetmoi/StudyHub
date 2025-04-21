"use client"

import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import HomeBanner from './ui/home/HomeBanner';
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react';
import '@/app/ui/home/Home.scss';
import _ from 'lodash'
import LazyLoad from 'react-lazyload';
import Section1 from './ui/home/section/Section1';
import Section2 from './ui/home/section/Section2';

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
        <LazyLoad offset={-200} >
          <Section2></Section2>
        </LazyLoad>
      </div>


    </>
  );
}
