import faq1 from "../../images/01.png";
import faq2 from "../../images/02.png";
import faq3 from "../../images/03.png";

const Thankyou = () => {
  return (
    <div className="faq mt-4">
      <Faq
        title="Where will I get the gift card?"
        description="You will receive it on Whatsapp/SMS on your mobile."
        icon={faq1}
      />
      <Faq
        title="When will I receive the gift card?"
        description=" Within 48 hour, when your Man Matters order is delivered."
        icon={faq2}
      />
      <Faq
        title="What if I cancel the order?"
        description="The voucher will not delivered if you cancel the order."
        icon={faq3}
      />
    </div>
  );
};

const Faq = ({ title, description, icon }) => {
  return (
    <div className="row">
      <div className="col-2 record d-flex flex-column justify-content-center">
        <img src={icon} alt={icon} className="faq-icon" />
      </div>
      <div className="col-10 text-left">
        <p className="mb-2 font-weight-bolder">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Thankyou;
