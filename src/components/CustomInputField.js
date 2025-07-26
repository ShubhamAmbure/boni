// export default function CustomInputField({
//   id,
//   value,
//   onChange,
//   placeholder = "",
//   error = false,
// }) {
//   return (
//     <input
//       id={id}
//       type="text"
//       value={value}
//       onChange={onChange}
//       placeholder={placeholder}
//       className={`border p-2 w-full rounded ${
//         error ? "border-red-500" : "border-gray-300"
//       }`}
//     />
//   );
// }


import 'bootstrap/dist/css/bootstrap.min.css';

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
      className={`form-control ${error ? "is-invalid" : ""}`}
    />
  );
}
