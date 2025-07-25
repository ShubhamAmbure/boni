export default function ImageBlock({
  src = "/default.jpg",
  alt = "Default image",
}) {
  return (
    <div className="w-full rounded-lg overflow-hidden shadow">
      <img src={src} alt={alt} className="w-full h-auto object-cover" />
    </div>
  );
}
