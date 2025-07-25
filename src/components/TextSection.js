export default function TextSection({ heading = 'Section', text = 'No content provided' }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{heading}</h2>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}