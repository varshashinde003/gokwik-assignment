import paytm from "../../images/paytm.png";
import pattern from "../../images/pattern.jpg";

const Card = ({amount}) => {
    return (
        <div className="card">
              <img
                src={pattern}
                alt="card-design"
                className="corner-image-right"
              />
              <img src={paytm} width="80" alt="paytm" className="m-auto" />
              <div className="mt-2 gift-card">
                <span className="text-gift">Gift</span>
                <span className="sup-text">Card</span>
                <span className="amount">
                  <sup className="currency">&#x20B9;</sup>{amount}
                </span>
              </div>
              <img
                src={pattern}
                alt="card-design"
                className="corner-image-left"
              />
            </div>
    )
}

export default Card;