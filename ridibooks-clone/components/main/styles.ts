import styled from 'styled-components';

export const MainLayoutContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #ffffff;
  .mainHeaderBg {
    width: 100%;
    height: 7rem;
    background-color: #2b8ce6;
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
  }
  .search_box_wrapper {
    flex:1;
    height: 2.25rem;
    display: flex;
    flex-direction: row;
    margin-left: 1.25rem;
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
  }
  .user_button_wrapper{
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
  display: flex;
  flex-direction: row;
  align-items: end;
  margin: 0 0 0.25rem 0;
  padding: 0;
  button {
    width: 6.125rem;
    height: 2rem;
    background-color: transparent;
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    span {
      color: #ffffff;
      font-size: 1rem;
      margin-left: 0.625rem;
    }
  }
`;

export const MainLogoSVG = styled.svg`
  width: 7.5rem;
  height: 1.125rem;
  fill: #ffffff;
`;

export const SubLogoSVG = styled.svg`
  width: 7.5rem;
  height: 1.125rem;
  fill: #ffffff;
  fill-opacity: 0.7;
`;

export const SearchIconSVG = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;