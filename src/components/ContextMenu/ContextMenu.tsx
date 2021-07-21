/** @format */

import { useDisclosure } from '@chakra-ui/react';
import { RefObject, useRef, useState, createContext } from 'react';

type Props = {};

type MousePosition = {
	x: number;
	y: number;
};

type ContextMenuState = {
	isOpen: boolean;
	closeMenu: Function;
	openMenu: Function;
	menuRef?: RefObject<HTMLDivElement>;
	position: MousePosition;
	setPosition: React.Dispatch<React.SetStateAction<MousePosition>>;
};

export const ContextMenuContext = createContext<ContextMenuState>({
	isOpen: false,
	closeMenu: () => {},
	openMenu: () => {},
	menuRef: undefined,
	position: { x: 0, y: 0 },
	setPosition: () => {}
});

export const ContextMenu: React.FC<Props> = ({ children }) => {
	const { isOpen, onClose: closeMenu, onOpen: openMenu } = useDisclosure();
	const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });
	const menuRef = useRef<HTMLDivElement>(null);
	return (
		<ContextMenuContext.Provider
			value={{
				isOpen,
				closeMenu,
				openMenu,
				menuRef,
				position,
				setPosition
			}}
		>
			{children}
		</ContextMenuContext.Provider>
	);
};
