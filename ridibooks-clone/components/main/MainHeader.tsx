import React from 'react';
import MainHeaderBottom from './MainHeaderBottom';
import MainHeaderMid from './MainHeaderMid';
import MainHeaderTop from './MainHeaderTop';
import { MainHeaderContainer } from './styles';

export default function MainHeader(): JSX.Element {
  return (
    <MainHeaderContainer>
      <MainHeaderTop />
      <MainHeaderMid />
      <MainHeaderBottom />
    </MainHeaderContainer>
  );
}
