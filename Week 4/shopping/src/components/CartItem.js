import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import {
  CartItemContainer,
  CountBtn,
  CountContainer,
  Details,
  DetailsContainer,
  ItemImage,
  Price
} from "./CartItem.styled";

function CartItem({
  item,
  totalCount,
  setTotalCount,
  counts,
  setCounts,
  index
}) {
  //const [count, setCount] = React.useState(1);

  const decrementCount = () => {
    const oldCounts = counts;
    oldCounts[index] -= 1;
    setCounts(oldCounts);
    setTotalCount(totalCount - 1);
    // TODO: If count will go to zero, remove item from cart
  };

  const incrementCount = () => {
    // TODO: Display error toast if max quantity (attribute is maxQty)
    // has been reached instead of incrementing
    if (counts[index] >= item.maxQty) {
      toast.error("You can't order anymore!");
    } else {
      const oldCounts = counts;
      oldCounts[index] += 1;
      setCounts(oldCounts);
      setTotalCount(totalCount + 1);
    }
  };

  const imgSrc = `${process.env.PUBLIC_URL}/images/${item.image}.png`;

  return (
    <CartItemContainer>
      <ToastContainer />
      <ItemImage>
        <img src={imgSrc} width="140px" alt="thumbnail of item" />
      </ItemImage>
      <DetailsContainer>
        <Details>
          <div>{item.name}</div>
          <Price>${item.price}</Price>
        </Details>
        <CountContainer>
          <CountBtn>
            <AiOutlineMinusCircle size="30px" onClick={decrementCount} />
          </CountBtn>
          <div>{counts[index]}</div>
          <CountBtn>
            <AiOutlinePlusCircle size="30px" onClick={incrementCount} />
          </CountBtn>
        </CountContainer>
      </DetailsContainer>
    </CartItemContainer>
  );
}

export default CartItem;
