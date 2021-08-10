import React, { useState } from 'react';
import MainLogo from './icons/MainLogo';
import SearchIcon from './icons/SearchIcon';
import { MainHeaderTopContainer } from './styles';
import SubLogo from './icons/SubLogo';

export default function MainHeaderTop(): JSX.Element {
  const [isInputClicked, setIsInputClicked] = useState(false);
  const onClickInput = () => setIsInputClicked(true);
  return (
    <MainHeaderTopContainer>
      <ul className="logo_wrapper">
        <li>
          <MainLogo />
        </li>
        <li>
          <div className="logo_spliter"> </div>
        </li>
        <li>
          <SubLogo />
        </li>
      </ul>
      <form className="search_box_wrapper">
        <button>
          <SearchIcon />
        </button>
        <input
          type="text"
          placeholder="제목, 저자, 출판사 검색"
          onClick={onClickInput}
        ></input>
        {isInputClicked && (
          <div className="resent_search_container">
            <div className="resent_search_top">최근 검색어</div>
            <div className="resent_search_mid">
              <span>최근 검색어 내역이 없습니다.</span>
            </div>
            <div className="resent_search_bottom">검색어 저장 끄기</div>
          </div>
        )}
      </form>
      <div className="user_button_wrapper">
        <button className="signup_button">회원가입</button>
        <button className="signin_button">로그인</button>
      </div>
    </MainHeaderTopContainer>
  );
}
