import React from 'react';
import MainLogo from './icons/MainLogo';
import SearchIcon from './icons/SearchIcon';
import { MainHeaderTopContainer } from './styles';
import SubLogo from './icons/SubLogo';

export default function MainHeaderTop(): JSX.Element {
  return (
    <MainHeaderTopContainer>
        <ul className="logo_wrapper">
          <li><MainLogo /></li>
          <li><SubLogo /></li>
        </ul>
        <div className="search_box_wrapper">
          <button><SearchIcon /></button>
          <input type="text" placeholder="제목, 저자, 출판사 검색"></input>
        </div>
        <div className="user_button_wrapper">
          <button className="signup_button">회원가입</button>
          <button className="signin_button">로그인</button>
        </div>
    </MainHeaderTopContainer>
  )
}
