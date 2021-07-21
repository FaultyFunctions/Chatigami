/** @format */

import {
	Modal,
	ModalOverlay,
	ModalHeader,
	ModalContent,
	ModalBody,
	ModalProps,
	Center,
	Badge,
	Container
} from '@chakra-ui/react';

export default function AboutModal(
	{ isOpen, onClose }: { isOpen: boolean; onClose: () => void },
	...props: ModalProps[]
): JSX.Element {
	return (
		<Modal isOpen={isOpen} onClose={onClose} isCentered {...props}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>
					<Center>Crochet v1.0</Center>
				</ModalHeader>
				<ModalBody></ModalBody>
			</ModalContent>
		</Modal>
	);
}
