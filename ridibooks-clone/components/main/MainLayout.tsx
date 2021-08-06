import React from 'react';
import MainHeader from './MainHeader';
import { MainLayoutContainer } from './styles';

export default function MainLayout(): JSX.Element {
  return (
    <MainLayoutContainer>
      <div className="mainHeaderBg"> </div>
      <div className="mainHeaderBorder"> </div>
      <MainHeader />
    </MainLayoutContainer>
  );
}
