const Header = ({ name }) => {
  return (
    <header>
      <h1>Hello {name}</h1>
    </header>
  );
};

Header.defaultProps = {
  name: "Task Tracker",
};

export default Header;
