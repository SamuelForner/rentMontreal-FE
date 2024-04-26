import React from 'react';
import {
  FiHome,
  FiLogOut,
  FiMenu,
  FiPlusCircle,
  FiSettings,
} from 'react-icons/fi';

import { sideBar } from '@/interfaces/global';
import { ActiveComponent } from '@/interfaces/property';
import {
  Avatar,
  Divider,
  Heading,
  HStack,
  IconButton,
  Text,
  VStack,
} from '@chakra-ui/react';

import SidebarItems from './sidebarItems';

interface ActiveComponentsState {
  showOwnerProperty: boolean;
  addOwnerProperty: boolean;
  showOwnerSetting: boolean;
}
interface SideBarProps {
  handleLogOut: () => void;
  activeComponents: ActiveComponentsState;
  setActiveComponents: React.Dispatch<
    React.SetStateAction<ActiveComponentsState>
  >;
}

export default function Sidebar({
  handleLogOut,
  activeComponents,
  setActiveComponents,
}: SideBarProps) {
  const [navSize, changeNavSize] = React.useState<sideBar>('large');

  const onClick = (e: string) => {
    setActiveComponents((prevActiveComponents) => ({
      ...prevActiveComponents,
      showOwnerProperty: e === ActiveComponent.showOwnerProperty,
      addOwnerProperty: e === ActiveComponent.addOwnerProperty,
      showOwnerSetting: e === ActiveComponent.showOwnerSetting,
    }));
  };

  return (
    <VStack
      boxShadow='0 4px 12px 0 rgba(0, 0, 0, 0.05)'
      borderRadius={navSize == 'small' ? '15px' : '30px'}
      w={navSize == 'small' ? '75px' : '200px'}
      justifyContent='space-between'
      borderWidth={1}
      borderColor='black'
    >
      <VStack
        p='5%'
        w='100%'
        alignItems={navSize == 'small' ? 'center' : 'flex-start'}
        as='nav'
        borderWidth={1}
        borderColor='black'
      >
        <IconButton
          aria-label={''}
          background='none'
          mt={5}
          _hover={{ background: 'none' }}
          icon={<FiMenu />}
          onClick={() => {
            if (navSize === 'small') {
              changeNavSize('large');
            } else {
              changeNavSize('small');
            }
          }}
        />
        <SidebarItems
          navSize={navSize}
          title={navSize === 'large' ? 'Mes propriétés' : ''}
          icon={FiHome}
          activeComponent={ActiveComponent.showOwnerProperty}
          onClick={onClick}
          active={activeComponents.showOwnerProperty}
        />
        <SidebarItems
          navSize={navSize}
          title={navSize === 'large' ? 'Ajouter une propriété' : ''}
          icon={FiPlusCircle}
          activeComponent={ActiveComponent.addOwnerProperty}
          onClick={onClick}
          active={activeComponents.addOwnerProperty}
        />
        <SidebarItems
          navSize={navSize}
          title={navSize === 'large' ? 'Setting' : ''}
          icon={FiSettings}
          activeComponent={ActiveComponent.showOwnerSetting}
          onClick={onClick}
          active={activeComponents.showOwnerSetting}
        />
      </VStack>
      <VStack
        borderWidth={1}
        borderColor='black'
        p='5%'
        w='100%'
        alignItems={navSize == 'small' ? 'center' : 'flex-start'}
        mb={4}
      >
        <IconButton
          aria-label={''}
          icon={<FiLogOut />}
          onClick={handleLogOut}
        />
        <Divider display={navSize === 'small' ? 'none' : 'flex'} />
        <HStack mt={4} align='center'>
          <Avatar size='sm' />
          <VStack ml={4} display={navSize == 'small' ? 'none' : 'flex'}>
            <Heading as='h3' size='sm'>
              Username
            </Heading>
            <Text color='gray'>propriétaire</Text>
          </VStack>
        </HStack>
      </VStack>
    </VStack>
  );
}
