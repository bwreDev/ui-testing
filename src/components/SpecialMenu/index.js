import React, { useState } from 'react';
import { specialData } from '../MenuData/foodData';
import {
  SpecialMenuContainer,
  SpecialHeading,
  SpecialWrapper,
  MenuItemCard,
  ItemInfo,
  ItemTitle,
  ItemDescription,
  ItemPrice,
  ItemImage,
} from './SpecialMenuElements';

const SpecialMenu = () => {
  const data = specialData;

  return (
    <SpecialMenuContainer>
      <SpecialHeading>Daily Specials</SpecialHeading>
      <SpecialWrapper>
        {data.map((item, index) => {
          return (
            <MenuItemCard key={index}>
              <ItemImage src={item.image} alt={item.alt} />
              <ItemInfo>
                <ItemTitle>{item.name}</ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
                <ItemPrice>{item.price}</ItemPrice>
              </ItemInfo>
            </MenuItemCard>
          );
        })}
      </SpecialWrapper>
    </SpecialMenuContainer>
  );
};

export default SpecialMenu;
