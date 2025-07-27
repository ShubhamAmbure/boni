



const CustomButton = ({ onClick, button, className = "" }) => (
  <button
    onClick={onClick}
    className={`formal-btn ${className}`.trim()}
    type="button"
  >
    {button}
  </button>
);

export default CustomButton;
