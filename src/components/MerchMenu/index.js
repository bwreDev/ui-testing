import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { merchData } from '../MenuData/merchData';
import {
  MerchMenuContainer,
  MerchHeading,
  MerchWrapper,
  MenuItemCard,
  ItemInfo,
  ItemTitle,
  ItemDescription,
  ItemPrice,
  ItemImage,
} from './MerchMenuElements';

const MerchMenu = () => {
  const data = merchData;

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MerchMenuContainer>
        <Navbar toggle={toggle} />
        <Sidebar toggle={toggle} isOpen={isOpen} />
        <MerchHeading>Wear the 825°!</MerchHeading>
        <MerchWrapper>
          {data.map((item, index) => {
            return (
              <MenuItemCard key={index}>
                <ItemImage src={item.image} alt={item.alt} />
                <ItemInfo>
                  <ItemTitle>{item.name}</ItemTitle>
                  <ItemDescription>
                    {item.description}
                  </ItemDescription>
                  <ItemPrice>{item.price}</ItemPrice>
                </ItemInfo>
              </MenuItemCard>
            );
          })}
        </MerchWrapper>
      </MerchMenuContainer>
      <Footer />
    </>
  );
};

export default MerchMenu;
