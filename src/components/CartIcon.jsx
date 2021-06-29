import styled from "styled-components";
import shoppingBag from "../assets/shopping-bag.png";

const CartIcon = () => {
  return (
    <StyledCartIcon>
      <img src={shoppingBag} alt="Shopping Cart Icon" />
      <span>10</span>
    </StyledCartIcon>
  );
};

const StyledCartIcon = styled.div`
  margin-left: auto;
  cursor: pointer;

  img {
    width: 30px;
  }

  span {
    margin-left: -10px;
    background-color: black;
    color: white;
    height: 2px;
    width: 2px;
    padding: 2px 4px;
    border-radius: 50%;
    font-size: 12px;
    font-weight: bold;
  }
`;

export default CartIcon;
