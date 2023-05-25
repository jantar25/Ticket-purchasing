import React, { useState } from "react";
import { MdDone } from "react-icons/md";
import { BsCreditCard2Front } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

import PaymentForm from "../PaymentForm/PaymentForm";
import CreditCards from "../CreditCards/CreditCards";
import pay1Img from "../../Assets/pay1.png";
import pay4Img from "../../Assets/pay4.png";
import pay5Img from "../../Assets/pay5.png";
import "./payment.css";

const Payment = () => {
  const [toggleForm, setToggleForm] = useState(false);
  const [toggleCodeForm, setToggleCodeForm] = useState(false);
  const [code, setCode] = useState("");

  const handleToggleForm = () => {
    setToggleForm(!toggleForm);
  };

  const submitCode = (e) => {
    e.preventDefault();
    console.log(code);
    setCode("");
  };

  return (
    <div className="wrap-left">
      <div className="delivery-container">
        <div className="title">
          <h3>Delivery</h3>
          <div className="icon">
            <MdDone />
          </div>
        </div>
        <h5>Mobile - Free</h5>
        <p>
          Your phone's your ticket. Locate your tickets in your account - or in
          your app. When you go mobile, your tickets will not be emailed to you
          or available for print.
        </p>
      </div>
      <div className="payment-container">
        <div className="title-container">
          <div className="left">
            <h3>Payment</h3>
            <div className="icon">
              <MdDone />
            </div>
          </div>
          <img src={pay1Img} alt="card-img" />
        </div>
        <div className="payment-methode">
          {!toggleForm ? (
            <div>
              <div className="first-methode">
                <h4>Use Credit/Debit Card</h4>
                <CreditCards />
                <div
                  className="first-methode-container"
                  onClick={handleToggleForm}
                >
                  <AiOutlinePlus />
                  <div className="icon">
                    <BsCreditCard2Front />
                  </div>
                  <h4>Add New Card</h4>
                </div>
              </div>
              <hr />
              <div className="second-methode">
                <h4>Or pay with</h4>
                <p>
                  By using a digital wallet and continuing past this page, you
                  have read and are accepting the <span>Terms of Use</span>.
                </p>
                <div className="images-container">
                  <img src={pay4Img} alt="Paypal-img" />
                  <img src={pay5Img} alt="klarna-img" />
                </div>
              </div>
            </div>
          ) : (
            <PaymentForm handleToggleForm={handleToggleForm} />
          )}
          <hr />
          <div>
            {!toggleCodeForm ? (
              <div
                className="third-methode"
                onClick={() => setToggleCodeForm(!toggleCodeForm)}
              >
                <AiOutlinePlus />
                <h4>Add Credits/ Promo Code/ Gift Card </h4>
              </div>
            ) : (
              <div className="codeForm-container">
                <h4>Add Credits / Promo Codes / Gift Cards</h4>
                <p>
                  Combine up to 5 promo codes and 5 gift cards. (Hang on to your
                  gift cards in case of a refund.)
                </p>
                <form onSubmit={submitCode}>
                  <p>Credit / Promo Code / Gift Card Number</p>
                  <div className="codeInput-container">
                    <input
                      type="text"
                      value={code}
                      placeholder="Enter Code or Number"
                      onChange={(e) => setCode(e.target.value)}
                    />
                    <button type="submit">Apply</button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
