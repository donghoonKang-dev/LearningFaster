import React, { createContext, useContext, useState } from 'react';

const NavPropStateContext = createContext();
const NavPropDispatchContext = createContext();

const initialState = {
  goToLogin: () => { },
  selectedId: null,
  selectedIsUpdated: null,
}

export default function NavigationProvider({ children }) {
  const [navProp, setNavProp] = useState(initialState);

  return (
    <NavPropStateContext.Provider value={navProp}>
      <NavPropDispatchContext value={setNavProp}>
        {children}
      </NavPropDispatchContext>
    </NavPropStateContext.Provider>
  )
}

export const useNavPropState = () => {
  const context = useContext(NavPropStateContext);
  if (!context) throw new Error('cannot find state');
  return context;
}
export const useSetNavProp = () => {
  const context = useContext(NavPropDispatchContext);
  if (!context) throw new Error('connot find setStateAction');
  return context;
}