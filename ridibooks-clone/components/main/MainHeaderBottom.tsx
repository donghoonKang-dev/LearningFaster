import React from 'react';
import { MainHeaderBottomContainer } from './styles';
import { BsFilter } from 'react-icons/bs';

export default function MainHeaderBottom(): JSX.Element {
  return (
    <MainHeaderBottomContainer className="header_bottom">
      <button>
        <BsFilter size="1.75rem" color="#50575c" />
      </button>
      <button>일반</button>
      <button>로맨스</button>
      <button>판타지</button>
      <button>만화</button>
      <button>BL</button>
    </MainHeaderBottomContainer>
  );
}
