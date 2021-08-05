import React from 'react';
import { MainHeaderMidContainer } from './styles';
import { AiFillHome, AiOutlineNotification, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';

export default function MainHeaderMid(): JSX.Element {
  return (
    <MainHeaderMidContainer>
      <button className="home_button">
        <AiFillHome color="white" size="1.25rem" />
        <span>홈</span>
      </button>
      <button className="noti_button">
        <AiOutlineNotification color="white" size="1.25rem" />
        <span>알림</span>
      </button>
      <button className="shopping_button">
        <AiOutlineShoppingCart color="white" size="1.25rem" />
        <span>카트</span>
      </button>
      <button className="my_button">
        <AiOutlineUser color="white" size="1.25rem" />
        <span>마이리디</span>
      </button>
    </MainHeaderMidContainer>
  )
}
