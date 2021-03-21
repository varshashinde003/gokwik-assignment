import { useState, useEffect } from "react";
import "./gift-card.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import GiftCardForm from "./gift-card-form";
import Card from "./card";
import Thankyou from "./thank-you";

function GiftCard() {
  const [mobile, setstate] = useState(localStorage.getItem("mobile"));
  const [hasError, setHasError] = useState(true);
  const [isSuccess, setIsSuccess] = useState(localStorage.getItem("isSuccess"));
  const onChangeHandler = (e) => {
    const re = /^[0-9\b]+$/;
    // if value is not blank, then test the regex
    if (e.target.value === "" || re.test(e.target.value)) {
      setstate(e.target.value);
      setHasError(true);
    }
  };
  const onGetGiftCardHandler = () => {
    localStorage.setItem("mobile", mobile);
    localStorage.setItem("isSuccess", true);
    setIsSuccess(true);
  };

  useEffect(() => {
    if (mobile && mobile.length === 10) {
      setHasError(false);
    } else {
      setHasError(true);
    }
  }, [mobile]);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row gift-card-wrapper">
          <div className="col-md-4 mx-auto">
            <Card amount={200} />
            {isSuccess ? (
              <Thankyou />
            ) : (
              <GiftCardForm
                mobile={mobile}
                onChangeHandler={onChangeHandler}
                hasError={hasError}
                onGetGiftCardHandler={onGetGiftCardHandler}
              />
            )}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GiftCard;
