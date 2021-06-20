import React from "react";
import styles from "./css/creditcard.module.css";
import GetCreditCardLogo from "./GetCreditCardLogo";

function formatMonthAndYear(month, year) {
  if (month === "" && year === "") return null;
  else if (month !== "" && year === "") return month + "/";
  else if (month === "" && year !== "") return "/" + (year % 100);
  else return month + "/" + (year % 100);
}

function CreditCard(props) {
  const { creditCardNumber, expiryMonth, expiryYear, nameOnCreditCard, cvv } =
    props.data;
  console.log(cvv);
  if (cvv === "") {
    return (
      <div className={styles.creditCardHolder}>
        <div style={{ position: "relative", zIndex: "-3" }}>
          <img
            src={require("./assets/credit_card_image.jpeg").default}
            alt="credit_card"
            className={styles.imageSize}
          />
          <input
            className={styles.card_number_on_card}
            value={creditCardNumber}
          />
          <img
            className={styles.chip_on_card}
            src={require("./assets/chip.png").default}
            alt="chip"
          ></img>
          <GetCreditCardLogo
            cardnumber={{ cardNo: creditCardNumber, side: "front" }}
          />
          <div className={styles.cardHolderHeading_on_card}>Card Holder </div>
          <div className={styles.cardHolderName_on_card}>
            {nameOnCreditCard.substring(0, 15)}
          </div>
          <div className={styles.expiryDateHeading_on_card}>Expires</div>
          <div className={styles.expiryDateDate_on_card}>
            {formatMonthAndYear(expiryMonth, expiryYear)}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.creditCardHolder}>
        <div style={{ position: "relative", zIndex: "-3" }}>
          <img
            src={require("./assets/credit_card_image.jpeg").default}
            alt="credit_card"
            className={styles.cardRotate}
          />

          <input className={styles.cvv_on_card} value={cvv} type="password" />
          <div className={styles.blackStripOnCC}></div>

          <GetCreditCardLogo
            cardnumber={{ cardNo: creditCardNumber, side: "back" }}
          />

          <div className={styles.cvvtext_on_card}>CVV</div>
        </div>
      </div>
    );
  }
}

export default CreditCard;
