
const CustomButton = ({ onClick, button, className }) => (
  <button
    onClick={onClick}
    className={`text-base font-medium rounded ${className}`}
  >
    {button}
  </button>
);

export default CustomButton;
