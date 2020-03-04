import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export const Header = () => {
	return (
		<>
			<Navbar bg="#07142f" variant="dark">
				<Navbar.Brand href="/">Navbar</Navbar.Brand>
				<Nav className="mr-auto"></Nav>
			</Navbar>
		</>
	);
};
