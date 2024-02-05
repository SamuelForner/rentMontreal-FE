import { createContext, Dispatch, SetStateAction } from 'react';

interface AppOwnerAuthInterface {
  ownerToken: null | string;
  setOwnerToken: Dispatch<SetStateAction<null | string>>;
}

const AppOwnerAuthDefaultValue = {
  ownerToken: null,
  setOwnerToken: () => {},
};

const OwnerContext = createContext<AppOwnerAuthInterface>(
  AppOwnerAuthDefaultValue
);

export default OwnerContext;
