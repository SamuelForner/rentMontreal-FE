import { useRouter } from 'next/router';
import React from 'react';

import Sidebar from '@/components/global/sidebar';
import OwnerContext from '@/context/OwnerContext';
import { getOwnerIdFromLocalStorage } from '@/utils/localstorage';
import {
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import AddProperty from './property/AddProperty';
import OwnerProperties from './property/OwnerProperties';

export default function Dashboard() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const ownerId = getOwnerIdFromLocalStorage();

  const { setOwnerToken } = React.useContext(OwnerContext);

  const [activeComponents, setActiveComponents] = React.useState({
    showOwnerProperty: false,
    addOwnerProperty: false,
    showOwnerSetting: false,
  });

  const handleLogOut = () => {
    onOpen();
  };
  const onLogOut = async () => {
    try {
      setOwnerToken(null);
      localStorage.removeItem('auth-token');
      localStorage.removeItem('owner-id');
      router.push('/');
    } catch (error) {
      console.error('erreur', error);
    }
  };

  return (
    <HStack borderWidth={1} borderColor='red' alignItems='flex-start'>
      <Sidebar
        handleLogOut={handleLogOut}
        activeComponents={activeComponents}
        setActiveComponents={setActiveComponents}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Déconnection</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Etes vous sur de vouloir vous déconnecter ?</ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Annuler
            </Button>
            <Button variant='ghost' onClick={onLogOut}>
              Se déconnecter
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {activeComponents.addOwnerProperty && <AddProperty />}
      {activeComponents.showOwnerProperty && (
        <OwnerProperties ownerId={ownerId} />
      )}
      {activeComponents.showOwnerSetting && <Text>Voir mes paramètres</Text>}
    </HStack>
  );
}
