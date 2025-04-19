"use client"

import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import HomeBanner from './ui/home/HomeBanner';
import Section1 from './ui/home/section/Section1';


export default function Page() {
  return (
    <>
      <HomeBanner></HomeBanner>
      <Section1></Section1>
    </>
  );
}
