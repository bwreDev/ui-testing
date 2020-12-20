import React from 'react';
import Hero from '../Hero';
import { appetizerData } from '../SpecialMenu/data';
import SpecialMenu from '../SpecialMenu';

function SplashPage() {
  const data = appetizerData;
  return (
    <>
      <Hero />
      <SpecialMenu heading='Daily Specials!' data={data} />
    </>
  );
}

export default SplashPage;
