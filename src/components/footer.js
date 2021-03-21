import gokwikLogo from "../images/gokwik-logo.png";

const Footer = () => {
  return (
    <p className="text-muted mt-4">
      <small>
        Powered by <img src={gokwikLogo} alt="logo" />
      </small>
    </p>
  );
};

export default Footer;
