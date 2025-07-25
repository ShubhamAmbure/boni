export default function CustomLabel({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="block mb-1 font-medium text-gray-700">
      {children}
    </label>
  );
}
