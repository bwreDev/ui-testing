import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import { houseCocktailData, houseBeerData } from '../MenuData/drinkData';
import {
	DrinkMenuContainer,
	DrinkHeading,
	DrinkWrapper,
	MenuItemCard,
	ItemInfo,
	ItemTitle,
	ItemDescription,
	ItemPrice,
	ItemImage,
} from './DrinkMenuElements';

const DrinkMenu = () => {
	const data1 = houseCocktailData;
	const data2 = houseBeerData;

	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<DrinkMenuContainer>
			<Navbar toggle={toggle} />
			<Sidebar toggle={toggle} isOpen={isOpen} />
			<DrinkHeading>House Cocktails</DrinkHeading>
			<DrinkWrapper>
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
			</DrinkWrapper>
			<DrinkHeading>House Beers on Tap</DrinkHeading>
			<DrinkWrapper>
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
			</DrinkWrapper>
		</DrinkMenuContainer>
	);
};

export default DrinkMenu;
