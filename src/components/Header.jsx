import styled from "styled-components";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";

const Header = () => {
  return (
    <StyledHeader className="nav-menu container">
      <div className="logo">
        <Link to="/">E-Commex</Link>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
      </ul>
      <CartIcon />
    </StyledHeader>
  );
};

const StyledHeader = styled.nav`
  padding: 1rem;
  display: flex;
  height: 70px;
  align-items: center;

  ul {
    margin: 0;
    margin-left: auto;

    li {
      margin: 0 1rem;
      display: inline-block;
    }
  }
`;

export default Header;
