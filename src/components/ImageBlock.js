
import { useState } from "react";

export default function ImageBlock({
  src = "/default.jpg",
  alt = "Default image",
}) {
  const [imgError, setImgError] = useState(false);
  return (
    <div className="card shadow-sm border-0 overflow-hidden">
      {imgError ? (
        <div className="d-flex align-items-center justify-content-center bg-light" style={{height: '180px'}}>
          <span className="text-muted">Image not available</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className="card-img-top img-fluid rounded"
          onError={() => setImgError(true)}
        />
      )}
    </div>
  );
}
