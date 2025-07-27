



export default function TextSection({ heading = 'Section', text = 'No content provided' }) {
  return (
    <div className="text-center">
      <h2 className="card-title h4 text-primary fw-bold mb-3">{heading}</h2>
      <p className="card-text text-secondary">{text}</p>
    </div>
  );
}

