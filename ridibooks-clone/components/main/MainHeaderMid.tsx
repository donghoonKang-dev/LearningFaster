import React from 'react';
import { MainHeaderMidContainer } from './styles';
import {
  AiFillHome,
  AiOutlineBell,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from 'react-icons/ai';

export default function MainHeaderMid(): JSX.Element {
  return (
    <MainHeaderMidContainer>
      <button className="home_button">
        <div className="home_button_wrapper">
          <AiFillHome color="white" size="1.25rem" />
          <span>홈</span>
        </div>
        <div className="home_button_indicator"></div>
      </button>
      <button className="noti_button">
        <div className="noti_button_wrapper">
          <AiOutlineBell color="white" size="1.25rem" />
          <span>알림</span>
        </div>
        <div className="noti_button_indicator"></div>
      </button>
      <button className="shopping_button">
        <div className="shopping_button_wrapper">
          <AiOutlineShoppingCart color="white" size="1.25rem" />
          <span>카트</span>
        </div>
        <div className="shopping_button_indicator"></div>
      </button>
      <button className="my_button">
        <div className="my_button_wrapper">
          <AiOutlineUser color="white" size="1.25rem" />
          <span>마이리디</span>
        </div>
        <div className="my_button_indicator"></div>
      </button>
    </MainHeaderMidContainer>
  );
}
