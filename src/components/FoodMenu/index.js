import React from 'react';
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
  return (
    <FoodMenuContainer>
      <FoodHeading></FoodHeading>
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
