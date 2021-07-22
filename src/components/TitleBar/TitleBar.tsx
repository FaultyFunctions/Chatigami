/** @format */
import MenuBar from './MenuBar';
import ControlButtonCluster from './ControlButtonCluster';
import { Flex, Center, FlexProps, IconProps } from '@chakra-ui/react';
import { CrochetIcon } from 'icons';

export default function TitleBar(): JSX.Element {
	return (
		<Flex {...titleBarMenuContainerProps}>
			<Center>
				<CrochetIcon {...crochetIconProps} />
				<MenuBar />
			</Center>
			<Center flexGrow={1}>FileNameHere - FolderNameHere</Center>
			<ControlButtonCluster />
		</Flex>
	);
}

const titleBarMenuContainerProps: FlexProps = {
	id: 'title-bar-menu-container',
	w: '100%',
	h: '30px',
	bg: 'gray.500',
	sx: {
		align: 'center',
		WebkitAppRegion: 'drag'
	}
};

const crochetIconProps: IconProps = {
	m: '10px 10px',
	w: '16px',
	h: '16px'
};
