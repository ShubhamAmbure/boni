// export default function ImageBlock({
//   src = "/default.jpg",
//   alt = "Default image",
// }) {
//   return (
//     <div className="w-full rounded-lg overflow-hidden shadow">
//       <img src={src} alt={alt} className="w-full h-auto object-cover" />
//     </div>
//   );
// }


import 'bootstrap/dist/css/bootstrap.min.css';

export default function ImageBlock({
  src = "/default.jpg",
  alt = "Default image",
}) {
  return (
    <div className="card shadow-sm border-0 overflow-hidden">
      <img src={src} alt={alt} className="card-img-top img-fluid rounded" />
    </div>
  );
}
