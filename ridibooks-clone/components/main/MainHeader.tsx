import React from 'react';
import MainHeaderMid from './MainHeaderMid';
import MainHeaderTop from './MainHeaderTop';
import { MainHeaderContainer } from './styles';

export default function MainHeader():JSX.Element {
  return (
    <MainHeaderContainer>
      <MainHeaderTop />
      <MainHeaderMid />
      <div className="header_bottom">
        <div>
          카테고리아이콘
        </div>
        <div>
          일반
        </div>
        <div>
          로맨스
        </div>
        <div>
          판타지
        </div>
        <div>
          BL
        </div>
      </div>
    </MainHeaderContainer>
  )
}
