import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import { appetizerData, entreeData } from '../MenuData/foodData';
import {
  FoodMenuContainer,
  FoodHeading,
  FoodWrapper,
  MenuItemCard,
  ItemInfo,
  ItemTitle,
  ItemDescription,
  ItemPrice,
  ItemImage,
} from './FoodMenuElements';

const FoodMenu = () => {
  const data1 = appetizerData;
  const data2 = entreeData;

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <FoodMenuContainer>
      <Navbar toggle={toggle} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <FoodHeading>Apps to Satisfy</FoodHeading>
      <FoodWrapper>
        {data1.map((item, index) => {
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
      </FoodWrapper>
      <FoodHeading>Entrees</FoodHeading>
      <FoodWrapper>
        {data2.map((item, index) => {
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
      </FoodWrapper>
    </FoodMenuContainer>
  );
};

export default FoodMenu;
