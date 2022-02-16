import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const [payNow, setPayNow] = useState("Pay now");

  const handleClick = () => {
    setPayNow("Ordering");
    setTimeout(() => {
      toast.success("Congrats! You've bought your items!");
      setPayNow("Pay now");
    }, 3000);
  };
  return (
    <>
      <p className="details">Payment Details</p>
      <p className="cardName">Cardholder name </p>
      <input type="text" className="textInput" />

      <p className="date">Expiry Date</p>
      <input type="text" className="textInput" />

      <p className="CVC">CVC</p>
      <input type="text" className="textInput" />
      <ToastContainer />
      <button onClick={handleClick} className="payNow">
        {payNow}
      </button>
    </>
  );
};

export default Checkout;
