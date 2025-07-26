// export default function CustomLabel({ htmlFor, children }) {
//   return (
//     <label htmlFor={htmlFor} className="block mb-1 font-medium text-gray-700">
//       {children}
//     </label>
//   );
// }



import 'bootstrap/dist/css/bootstrap.min.css';

export default function CustomLabel({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="form-label fw-medium text-dark mb-1">
      {children}
    </label>
  );
}
