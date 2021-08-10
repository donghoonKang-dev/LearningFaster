import styled from 'styled-components';

export const MainLayoutContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #ffffff;
  position: relative;
  .mainHeaderBg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 7rem;
    background-color: #2b8ce6;
    z-index: 0;
  }
  .mainHeaderBorder {
    position: absolute;
    top: 7rem;
    left: 0;
    width: 100%;
    height: 3rem;
    background-color: transparent;
    border-bottom: 0.05rem solid #e6e8eb;
    z-index: 0;
  }
`;

export const MainHeaderContainer = styled.div`
  width: 100%;
  max-width: 62.5rem;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
`;

export const MainHeaderTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 1rem 1.5rem 1.25rem;
  .logo_wrapper {
    width: 15rem;
    height: 2.25rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style-type: none;
    margin: 0rem;
    padding: 0rem;
    li {
      div {
        height: 1rem;
        width: 0.05rem;
        background-color: #ffffff;
        opacity: 0.3;
        margin: 0 0.35rem;
      }
    }
  }
  .search_box_wrapper {
    flex: 1;
    height: 2.25rem;
    display: flex;
    flex-direction: row;
    margin-left: 1.25rem;
    position: relative;
    button {
      height: 100%;
      width: 2.125rem;
      border: none;
      border-radius: 3px 0px 0px 3px;
      background-color: #ffffff;
    }
    input {
      width: 19.125rem;
      height: 100%;
      border: none;
      border-radius: 0px 3px 3px 0px;
      outline: none;
      font-size: 1rem;
    }
    .resent_search_container {
      position: absolute;
      top: 2.4rem;
      left: 0;
      width: 23.75rem;
      height: 15.125rem;
      z-index: 3;
      background-color: #ffffff;
      color: #000000;
      box-shadow: 0.1rem 0.2rem 0.5rem #50575c;
      border-radius: 3px;
      .resent_search_top {
        width: 100%;
        height: 17%;
        color: #808991;
        padding: 12px 0px 12px 16px;
        font-size: 0.875rem;
      }
      .resent_search_mid {
        width: 100%;
        height: 66%;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
          height: 1rem;
          color: #9ea7ad;
          font-size: 0.875rem;
        }
      }
      .resent_search_bottom {
        width: 100%;
        height: 17%;
        background-color: #f2f4f5;
        color: #808991;
        border-radius: 0 0 3px 3px;
        font-size: 0.875rem;
        padding: 12px 16px;
      }
    }
  }
  .user_button_wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    .signup_button {
      width: 4.8rem;
      height: 1.875rem;
      background-color: #2b8ce6;
      color: #ffffff;
      border-color: #ffffff;
      border-style: solid;
      border-radius: 3px;
      border-width: 0.1rem;
      outline: none;
      cursor: pointer;
    }
    .signin_button {
      width: 4.8rem;
      height: 1.875rem;
      background-color: #ffffff;
      color: #2b8ce6;
      border-color: #ffffff;
      border-style: solid;
      border-radius: 3px;
      border-width: 0.1rem;
      outline: none;
      cursor: pointer;
      margin-left: 0.5rem;
    }
  }
`;

export const MainHeaderMidContainer = styled.ul`
  position: absolute;
  top: 5.1rem;
  display: flex;
  flex-direction: row;
  align-items: end;
  margin: 0;
  padding: 0;
  .home_button {
    width: 6.125rem;
    height: 2rem;
    background-color: transparent;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    .home_button_wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-bottom: 0.4rem;
      align-items: center;
      span {
        color: #ffffff;
        font-size: 1rem;
        height: 1rem;
        margin-left: 0.625rem;
      }
    }
    .home_button_indicator {
      width: 58%;
      height: 0.188rem;
      background-color: #99d1ff;
    }
  }
  .noti_button {
    width: 6.125rem;
    height: 2rem;
    background-color: transparent;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    .noti_button_wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-bottom: 0.4rem;
      align-items: center;
      span {
        color: #ffffff;
        font-size: 1rem;
        height: 1rem;
        margin-left: 0.625rem;
      }
    }
    .noti_button_indicator {
      width: 64%;
      height: 0.188rem;
      background-color: transparent;
    }
    :hover > .noti_button_wrapper span {
      color: #99d1ff;
    }
    :hover > .noti_button_indicator {
      background-color: #99d1ff;
    }
  }
  .shopping_button {
    width: 6.125rem;
    height: 2rem;
    background-color: transparent;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    .shopping_button_wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-bottom: 0.4rem;
      align-items: center;
      span {
        color: #ffffff;
        font-size: 1rem;
        height: 1rem;
        margin-left: 0.625rem;
      }
    }
    .shopping_button_indicator {
      width: 70%;
      height: 0.188rem;
      background-color: transparent;
    }
    :hover > .shopping_button_wrapper span {
      color: #99d1ff;
    }
    :hover > .shopping_button_indicator {
      background-color: #99d1ff;
    }
  }
  .my_button {
    width: 6.125rem;
    height: 2rem;
    background-color: transparent;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    .my_button_wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-bottom: 0.4rem;
      align-items: center;
      span {
        color: #ffffff;
        font-size: 1rem;
        height: 1rem;
        margin-left: 0.625rem;
      }
    }
    .my_button_indicator {
      width: 100%;
      height: 0.188rem;
      background-color: transparent;
    }
    :hover > .my_button_wrapper span {
      color: #99d1ff;
    }
    :hover > .my_button_indicator {
      background-color: #99d1ff;
    }
  }
`;

export const MainHeaderBottomContainer = styled.ul`
  position: absolute;
  top: 7rem;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  button {
    height: 2.95rem;
    width: 5.25rem;
    background-color: #ffffff;
    color: #50575c;
    border: none;
    font-size: 1rem;
    :hover {
      color: #40474d;
      opacity: 0.5;
    }
  }
`;
export const MainLogoSVG = styled.svg`
  width: 7.5rem;
  height: 1.125rem;
  fill: #ffffff;
  cursor: pointer;
`;

export const SubLogoSVG = styled.svg`
  width: 7.5rem;
  height: 1.125rem;
  fill: #ffffff;
  fill-opacity: 0.7;
  cursor: pointer;
  ::before {
    width: 0.5rem;
    height: 1rem;
    background-color: #ffffff;
  }
`;

export const SearchIconSVG = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;
