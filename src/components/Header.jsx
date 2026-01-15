import logoImage from "../assets/logo.png"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 p-4 border-b w-full bg-white flex justify-center z-50">
      <img
        src={logoImage}
        alt="header-logo-cinegpt"
        className="h-15 w-auto "
      />
    </header>
  );
};

export default Header;
