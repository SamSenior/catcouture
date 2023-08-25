import styled from "styled-components";
import { NavLink } from "react-router-dom";
import LoginButton from "./LoginButton";

const StyledNav = styled.nav`
  font-size: 0.9rem;
  background-color: #8fa094;
  display: flex;
  justify-content: space-between;
  .nav-button {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  .menu {
    display: flex;
  }
  .right-links {
    display: flex;
    li {
      list-style-type: none;
    }
  }
`;

const StyledLink = styled(NavLink)`
  &.nav-item {
    font-size: 0.6rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  color: black;
  &.active {
    color: #f1ebd4;
  }
  @media only screen and (min-width: 18.5rem) {
    &.nav-item {
      font-size: 0.9rem;
    }
  }
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  background-color: #e0ae4c;
  margin: 0;
  .logo {
    font-family: Snell Roundhand, cursive, Geneva, Verdana, sans-serif;
    font-size: 2rem;
    font-weight: 800;
    margin: 1rem 0rem;
    color: #29343f;
  }

  @media only screen and (min-width: 21.8rem) {
    .logo {
      font-size: 4rem;
    }
  }
`;

const Header = () => {
  return (
    <>
      <header>
        <StyledNav className="page-padding">
          <div className="menu">
            <img src="./img/menu_black_24dp.svg" alt="menu" />
          </div>
          <ul className="right-links">
            <li>
              <StyledLink to="/" className="nav-item">
                Products
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/dashboard" className="nav-item">
                Dashboard
              </StyledLink>
            </li>
            <li className="nav-button">
              <LoginButton />
            </li>
          </ul>
        </StyledNav>
      </header>
      <StyledHeader className="main-layout section-padding">
        <h1 className="logo">Cat Couture</h1>
      </StyledHeader>
    </>
  );
};

export default Header;
