import logo from "../images/logo.png";
import congrats from "../images/congrats.png";

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="img-fluid" alt="logo" width={200} />
      <div className="congratulations">
        Congratulations <img src={congrats} alt="congrats" width={26} />
      </div>
    </header>
  );
};

export default Header;
