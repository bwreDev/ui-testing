import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
	HeroContainer,
	HeroContent,
	HeroItems,
	HeroH1,
	HeroP,
	HeroBtn,
} from './HeroElements';

const Hero = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<HeroContainer>
			<Navbar toggle={toggle} />
			<Sidebar toggle={toggle} isOpen={isOpen} />
			<HeroContent>
				<HeroItems>
					<HeroP>Life's too short.</HeroP>
					<HeroH1>Have a blast!</HeroH1>
					<HeroBtn to='/food'>Menu</HeroBtn>
				</HeroItems>
			</HeroContent>
		</HeroContainer>
	);
};

export default Hero;
