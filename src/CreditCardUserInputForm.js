import React, { useState, useRef } from "react";
import styles from "./css/creditcard.module.css";

// eslint-disable-next-line
import { getCardType } from "./cardTypes";

const initialState = {
  creditCardNumber: "",
  nameOnCreditCard: "",
  error: "",
  expiryMonth: "",
  expiryYear: "",
  cvv: "",
};

function CreditCardForm() {
  const inputRef = useRef(null);
  const [userDetails, setUserDetails] = useState(initialState);
  const onChangeHandler = (event) => {
    setUserDetails((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };
  const creditHandler = (e) => {
    var val = e.target.value;
    const valArray = val.split(" ").join("").split("");
    var valSpace = val.split("");

    // to work with backspace
    if (valSpace[valSpace.length - 1] === " ") {
      var valSpaceN = valSpace.slice(0, -2);
      val = valSpaceN.join("");
      setUserDetails({ ...userDetails, creditCardNumber: val });
      console.log(val);
      return;
    }

    if (isNaN(valArray.join(""))) return;
    if (valArray.length === 19) return;
    if (valArray.length % 4 === 0 && valArray.length <= 20) {
      setUserDetails({
        ...userDetails,
        creditCardNumber: e.target.value + "  ",
      });
    } else {
      setUserDetails({ ...userDetails, creditCardNumber: e.target.value });
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (userDetails.creditCardNumber === "") {
      inputRef.current.focus();
    }
    setUserDetails({
      creditCardNumber: "",
      cvv: "",
      nameOnCreditCard: "",
      expiryMonth: "",
      expiryYear: "",
    });
  };

  return (
    <div className={styles.form_div}>
      <div className={styles.card_number_text}>
        <form onSubmit={onSubmitHandler}>
          {" "}
          <label>Card Number</label>
          <input
            className={styles.card_number_box}
            name="creditCardNumber"
            ref={inputRef}
            value={userDetails.creditCardNumber}
            onChange={creditHandler}
            maxLength="22"
            type="tel"
          ></input>
          <br />
          <br />
          <label>Card Name</label>
          <input
            className={styles.card_number_box}
            type="text"
            name="nameOnCreditCard"
            value={userDetails.nameOnCreditCard}
            onChange={onChangeHandler}
          />
          <br />
          <br />
          <label>Expiration Date</label>
          <label style={{ paddingLeft: "4.5cm" }}>cvv</label>
          <br />
          <select
            className={styles.comboBox}
            name="expiryMonth"
            value={userDetails.expiryMonth}
            onChange={onChangeHandler}
          >
            <option>Month</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </select>
          <select
            className={styles.comboBox}
            style={{ marginLeft: "0.5cm" }}
            name="expiryYear"
            onChange={onChangeHandler}
            value={userDetails.expiryYear}
          >
            <option>Year</option>
            <option>2021</option>
            <option>2022</option>
            <option>2023</option>
            <option>2024</option>
            <option>2025</option>
            <option>2026</option>
          </select>
          <input
            className={styles.cvvBox}
            type="password"
            maxLength="4"
            name="cvv"
            value={userDetails.cvv}
            onChange={onChangeHandler}
          />
          <button className={styles.submit_btn} type="submit">
            {" "}
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreditCardForm;
