import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAddTask }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAddTask ? "red" : "green"}
        text={showAddTask ? "Close" : "Add"}
        onClick={() => onAdd()}
      />
    </header>
  );
};

// defining default props
Header.defaultProps = {
  title: "Default Title",
};

// defining prop types
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// use this for custom style
// const headingStyle = {
// 	color: 'red',
// 	backgroundColor: 'black'
// }

export default Header;
