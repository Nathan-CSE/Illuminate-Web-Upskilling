import React, { useState } from "react";
import CartItem from "../components/CartItem";
import { FiShoppingCart } from "react-icons/fi";
import { items } from "../data";
import styled from "styled-components";
import { Btn } from "../components/Btn.styled";
import { Link, Redirect } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = React.useState(items);
  const [totalCount, setTotalCount] = useState(4);
  const [counts, setCounts] = useState([1, 1, 1, 1]);

  // const handleClick = () => {
  //   setRedirect(true);
  // };

  return (
    <CartContainer>
      <h2>My Cart</h2>
      <CartWrapper>
        {cartItems.map((item, index) => {
          if (counts[index]) {
            return (
              <CartItem
                item={item}
                setTotalCount={setTotalCount}
                totalCount={totalCount}
                counts={counts}
                setCounts={setCounts}
                index={index}
              />
            );
          }
        })}
      </CartWrapper>
      <span>Total items:</span>
      <span>{totalCount}</span>
      <Link to="/checkout">
        <Btn>
          <FiShoppingCart />
          <p>Checkout</p>
        </Btn>
      </Link>
    </CartContainer>
  );
}

export default Cart;

const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CartContainer = styled.div`
  padding: 15px;
`;
