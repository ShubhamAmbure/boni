export default function CustomInputField({
  id,
  value,
  onChange,
  placeholder = "",
  error = false,
}) {
  return (
    <input
      id={id}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`border p-2 w-full rounded ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    />
  );
}
