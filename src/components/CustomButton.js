export default function CustomButton({
  isdelete = false,
  button = "Click Me",
  onClick = () => {},
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2 rounded text-white ${
        isdelete ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'
      }`}
    >
      {button}
    </button>
  );
}
