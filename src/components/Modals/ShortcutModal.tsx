/** @format */

import {
	Modal,
	ModalOverlay,
	ModalHeader,
	ModalContent,
	ModalBody,
	ModalProps,
	Center,
	Kbd,
	Box,
	Divider,
	SimpleGrid,
	Text
} from '@chakra-ui/react';

export default function ShortcutModal(
	{ isOpen, onClose }: { isOpen: boolean; onClose: () => void },
	...props: ModalProps[]
): JSX.Element {
	return (
		<Modal isOpen={isOpen} onClose={onClose} size={'5xl'} {...props}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>
					<Center>Chatigami Shortcuts Guide</Center>
				</ModalHeader>
				<ModalBody>
					<SimpleGrid columns={3} spacing={10}>
						<Box textAlign='right'>
							<Text>Save</Text>
							<Text>Save All</Text>
						</Box>
						<Center>
							<Divider orientation='vertical' />
						</Center>
						<Box textAlign='left'>
							<Text>
								<Kbd>ctrl</Kbd> + <Kbd>S</Kbd>
							</Text>
							<Text>
								<Kbd>ctrl</Kbd> + <Kbd>shift</Kbd> + <Kbd>S</Kbd>
							</Text>
						</Box>
					</SimpleGrid>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
}
