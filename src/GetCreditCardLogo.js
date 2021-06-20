import React from "react";
import styles from "./css/creditcard.module.css";
import { getCardType } from "./cardTypes";
import images from "./images";

function GetCreditCardLogo(props) {
  var card = String(props.cardnumber.cardNo.replace(/\s/g, ""));

  const getCoorectLogo = () => {
    var CardType = getCardType(card);
    if (typeof CardType == "undefined" || CardType === "") {
      return images.get("VISA");
    } else {
      return images.get(CardType);
    }
  };
  

  if (props.cardnumber.side === "front") {
    return (
      <div>
        <img
          src={require(`${getCoorectLogo()}`).default}
          alt="Card"
          className={styles.typeOfCreditCardLogo}
        />
      </div>
    );
  } else {
    return (
      <div>
        <img
          src={require(`${getCoorectLogo()}`).default}
          alt="Card"
          className={styles.typeOfCreditCardLogoBack}
        />
      </div>
    );
  }
}

export default GetCreditCardLogo;
