import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <Nav containerStyles="bg-red-300 py-12" />
      </div>
    </header>
  );
};

export default Header;