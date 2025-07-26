

import 'bootstrap/dist/css/bootstrap.min.css';

export default function CustomLabel({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="form-label fw-medium text-dark mb-1">
      {children}
    </label>
  );
}
