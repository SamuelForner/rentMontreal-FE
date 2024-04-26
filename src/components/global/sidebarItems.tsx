import { IconType } from 'react-icons';

import { sideBar } from '@/interfaces/global';
import { Flex, Icon, Menu, MenuButton, Text, VStack } from '@chakra-ui/react';

interface SidebarItemsProps {
  navSize: sideBar;
  title: string;
  icon: IconType;
  active?: boolean;
  activeComponent?: string;
  onClick?: (activeComponent: string) => void;
}
export default function SidebarItems({
  navSize,
  title,
  icon,
  active,
  onClick,
  activeComponent,
}: SidebarItemsProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.target as HTMLButtonElement;
    if (target && target.value) {
      onClick && onClick(target.value);
    }
  };
  return (
    <VStack
      mt={30}
      w='100%'
      alignItems={navSize === 'small' ? 'center' : 'flex-start'}
    >
      <Menu placement='right'>
        <MenuButton
          value={activeComponent}
          onClick={(e) => handleClick(e)}
          backgroundColor={active ? '#AEC8CA' : undefined}
          p={3}
          borderRadius={8}
          _hover={{ textDecor: 'none', backgroundColor: '#AEC8CA' }}
          w={navSize === 'large' ? '100%' : undefined}
        >
          <Flex>
            <Icon as={icon} />
            <Text>{title}</Text>
          </Flex>
        </MenuButton>
      </Menu>
    </VStack>
  );
}
