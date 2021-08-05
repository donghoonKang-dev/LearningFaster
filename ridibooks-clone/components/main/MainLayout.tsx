import React from 'react';
import MainHeader from './MainHeader';
import { MainLayoutContainer } from './styles';

export default function MainLayout(): JSX.Element {
  return (
    <MainLayoutContainer>
      <div className="mainHeaderBg">
        <MainHeader />
      </div>
    </MainLayoutContainer>
  )
}
