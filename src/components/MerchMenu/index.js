import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
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
	ItemButton,
	ItemImage,
} from './MerchMenuElements';

const MerchMenu = () => {
	const data = merchData;

	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<MerchMenuContainer>
			<Navbar toggle={toggle} />
			<Sidebar toggle={toggle} isOpen={isOpen} />
			<MerchHeading>Tasty eats!</MerchHeading>
			<MerchWrapper>
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
			</MerchWrapper>
		</MerchMenuContainer>
	);
};

export default MerchMenu;
