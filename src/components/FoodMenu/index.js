import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import { appetizerData } from './data';
import {
  FoodMenuContainer,
  FoodHeading,
  FoodWrapper,
  MenuItemCard,
  ItemInfo,
  ItemTitle,
  ItemDescription,
  ItemPrice,
  ItemButton,
  ItemImage,
} from './FoodMenuElements';

const FoodMenu = () => {
  const data = appetizerData;

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <FoodMenuContainer>
      <Navbar toggle={toggle} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <FoodHeading>Tasty eats!</FoodHeading>
      <FoodWrapper>
        {data.map((item, index) => {
          return (
            <MenuItemCard key={index}>
              <ItemImage src={item.image} alt={item.alt} />
              <ItemInfo>
                <ItemTitle>{item.name}</ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
                <ItemPrice>{item.price}</ItemPrice>
                <ItemButton>{item.button}</ItemButton>
              </ItemInfo>
            </MenuItemCard>
          );
        })}
      </FoodWrapper>
    </FoodMenuContainer>
  );
};

export default FoodMenu;
