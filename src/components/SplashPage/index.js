import React from 'react';
import Hero from '../Hero';
import Feature from '../Feature';
import SpecialMenu from '../SpecialMenu';
import Footer from '../Footer';

import { SocialContainer } from '../SplashPage/SplashPageElements';

function SplashPage() {
  return (
    <>
      <Hero />
      <Feature />
      <SpecialMenu />
      <SocialContainer>
        <div
          class='fb-page'
          data-href='https://www.facebook.com/Blast825Brewery'
          data-tabs='timeline'
          data-width='325'
          data-height='700'
          data-small-header='false'
          data-adapt-container-width='true'
          data-hide-cover='false'
          data-show-facepile='true'
        >
          <blockquote
            cite='https://www.facebook.com/Blast825Brewery'
            class='fb-xfbml-parse-ignore'
          >
            <a href='https://www.facebook.com/Blast825Brewery'>
              Blast 825 Brewery
            </a>
          </blockquote>
        </div>
      </SocialContainer>
      <Footer />
    </>
  );
}

export default SplashPage;
