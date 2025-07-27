
import ImageBlock from "./ImageBlock";
import TextSection from "./TextSection";
import { FaTrash } from "react-icons/fa";

export default function Card({
  title,
  description,
  src,
  alt,
  deleteButton = () => {},
}) {
  return (
    <div className="card shadow-sm border rounded overflow-hidden position-relative" style={{ width: "18rem" }}>
      <div className="position-relative">
        <ImageBlock src={src || "/default.jpg"} alt={alt || "Image"} />
        <button
          onClick={deleteButton}
          className="btn btn-light position-absolute top-0 end-0 m-2 p-1 border rounded-circle text-danger"
          title="Delete"
        >
          <FaTrash />
        </button>
      </div>
      <div className="card-body">
        <TextSection heading={title || "No Title"} text={description || "No description provided"} />
      </div>
    </div>
  );
}
